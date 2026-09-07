import Image from "next/image";
import type { CSSProperties } from "react";
import type { TypeId } from "../data/types";

// Coordinates refer to the final square artwork; the eyes are live paper layers.
const faces: Record<TypeId, { eyes: [number, number, number, number]; width: number; height: number }> = {
  1: { eyes: [49, 33.2, 59, 32.4], width: 2.8, height: 3.5 },
  2: { eyes: [44, 32.5, 54, 32.5], width: 2.8, height: 3.5 },
  3: { eyes: [40, 25, 50.5, 25], width: 2.8, height: 3.5 },
  4: { eyes: [46, 29.5, 57, 29.5], width: 2.8, height: 3.5 },
  5: { eyes: [55.5, 37.5, 64.5, 37.5], width: 2.8, height: 3.5 },
  6: { eyes: [43, 32.5, 54, 32.5], width: 2.8, height: 3.5 },
  7: { eyes: [41.5, 28, 53, 28], width: 2.8, height: 3.5 },
  8: { eyes: [44, 34, 55, 34], width: 2.8, height: 3.5 },
  9: { eyes: [41.5, 29, 53.5, 29], width: 2.8, height: 3.5 },
};

export function TypeAvatar({ id, size = 180, className = "", eager = false }: {
  id: TypeId;
  size?: number;
  className?: string;
  eager?: boolean;
}) {
  const face = faces[id];
  return (
    <span aria-hidden="true" data-character={id} className={`paper-character ${className}`} style={{ "--character-size": `${size}px` } as CSSProperties}>
      <Image src={`/images/characters/type-${id}.webp`} alt="" width={1024} height={1024} sizes={`${size}px`} loading={eager ? "eager" : "lazy"} className="paper-character-image" draggable={false} />
      {[0, 2].map((offset) => (
        <span key={offset} data-eye className="paper-eye-position" style={{ left: `${face.eyes[offset]}%`, top: `${face.eyes[offset + 1]}%`, width: `${face.width}%`, height: `${face.height}%` }}>
          <span className="paper-eye" />
        </span>
      ))}
    </span>
  );
}
