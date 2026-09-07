"use client";

import { useEffect, useRef, type ReactNode } from "react";

/** One pointer controller per scene, with no React renders on pointer movement. */
export function PaperMotion({ children, className = "" }: { children: ReactNode; className?: string }) {
  const root = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const scene = root.current;
    if (!scene) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const pointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    let frame = 0;
    let x = 0;
    let y = 0;
    const reset = () => {
      cancelAnimationFrame(frame);
      frame = 0;
      scene.querySelectorAll<HTMLElement>("[data-character]").forEach((node) => {
        node.style.removeProperty("--look-x");
        node.style.removeProperty("--look-y");
      });
    };
    const move = (event: PointerEvent) => {
      if (reduced.matches || !pointer.matches || event.pointerType === "touch") return;
      x = event.clientX;
      y = event.clientY;
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const positions = Array.from(scene.querySelectorAll<HTMLElement>("[data-character]")).map((node) => {
          const rect = node.getBoundingClientRect();
          const gaze = node.querySelector("[data-eye]")?.getBoundingClientRect() ?? rect;
          const dx = x - gaze.x;
          const dy = y - gaze.y;
          const distance = Math.max(60, Math.hypot(dx, dy));
          const reach = Math.min(2.5, rect.width * 0.01);
          return { node, x: dx / distance * reach, y: dy / distance * reach * 0.7 };
        });
        positions.forEach(({ node, x, y }) => {
          node.style.setProperty("--look-x", `${x.toFixed(2)}px`);
          node.style.setProperty("--look-y", `${y.toFixed(2)}px`);
        });
      });
    };
    scene.addEventListener("pointermove", move, { passive: true });
    scene.addEventListener("pointerleave", reset);
    reduced.addEventListener("change", reset);
    pointer.addEventListener("change", reset);
    return () => {
      reset();
      scene.removeEventListener("pointermove", move);
      scene.removeEventListener("pointerleave", reset);
      reduced.removeEventListener("change", reset);
      pointer.removeEventListener("change", reset);
    };
  }, []);
  return <div ref={root} className={className}>{children}</div>;
}
