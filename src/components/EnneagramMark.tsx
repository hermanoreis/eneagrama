"use client";

import { useState } from "react";
import { arrowsByType, neighborIds } from "../data/map";
import { typeById, type TypeId } from "../data/types";

type Props = {
  size?: number;
  active?: number;
  className?: string;
  interactive?: boolean;
};

const LABEL: [number, number][] = [
  [50, 7.2],
  [79.5, 17.5],
  [94, 42],
  [87.5, 71.5],
  [64.5, 93],
  [35.5, 93],
  [12.5, 71.5],
  [6, 42],
  [20.5, 17.5],
];

const SEAT_TO_TYPE: TypeId[] = [9, 1, 2, 3, 4, 5, 6, 7, 8];

function isTypeId(n: number): n is TypeId {
  return Number.isInteger(n) && n >= 1 && n <= 9;
}

function isArrowEdge(focus: TypeId, growth: TypeId, stress: TypeId, a: number, b: number) {
  return (
    (a === focus && (b === growth || b === stress)) ||
    (b === focus && (a === growth || a === stress))
  );
}

export function EnneagramMark({
  size = 280,
  active,
  className,
  interactive = false,
}: Props) {
  const [hovered, setHovered] = useState<TypeId | null>(null);
  const focus: TypeId | null =
    hovered ?? (typeof active === "number" && isTypeId(active) ? active : null);
  const [cx, cy, r] = [50, 50, 36.5];
  const pos = SEAT_TO_TYPE.map((_, i) => {
    const angle = -Math.PI / 2 + (i * 2 * Math.PI) / 9;
    return [cx + r * Math.cos(angle), cy + r * Math.sin(angle)] as const;
  });
  const idx = (t: number) => SEAT_TO_TYPE.indexOf(t as TypeId);
  const pt = (t: number) => pos[idx(t)];
  const triangle = [9, 3, 6, 9].map(pt);
  const hex = [1, 4, 2, 8, 5, 7, 1].map(pt);

  const wings: TypeId[] = focus ? neighborIds(focus) : [];
  const arrows = focus ? arrowsByType[focus] : null;
  const profile = focus ? typeById[focus] : null;

  const edgeStyle = (a: number, b: number) => {
    if (!focus || !arrows) {
      return { stroke: "currentColor", opacity: 1, width: 0.8 };
    }
    const hit = isArrowEdge(focus, arrows.growth, arrows.stress, a, b);
    if (!hit) return { stroke: "currentColor", opacity: 0.16, width: 0.7 };
    const growth =
      (a === focus && b === arrows.growth) || (b === focus && a === arrows.growth);
    return {
      stroke: growth ? "var(--cta)" : "var(--accent)",
      opacity: 1,
      width: 1.35,
    };
  };

  const segments = (
    pts: readonly (readonly [number, number])[],
    types: readonly number[],
    key: string,
  ) =>
    pts.slice(0, -1).map((p, i) => {
      const from = types[i];
      const to = types[i + 1];
      const s = edgeStyle(from, to);
      const p2 = pts[i + 1];
      return (
        <line
          key={`${key}-${from}-${to}`}
          x1={p[0]}
          y1={p[1]}
          x2={p2[0]}
          y2={p2[1]}
          stroke={s.stroke}
          strokeWidth={s.width}
          opacity={s.opacity}
          className="transition-opacity duration-200 ease-out motion-reduce:transition-none"
        />
      );
    });

  const node = (type: TypeId, x: number, y: number, i: number) => {
    const on = focus === type;
    const wing = Boolean(focus && wings.includes(type));
    const growth = arrows?.growth === type;
    const stress = arrows?.stress === type;
    const rNode = on ? 3.8 : wing || growth || stress ? 2.85 : 2.15;
    const fill = on
      ? "var(--accent)"
      : growth
        ? "var(--cta)"
        : stress
          ? "var(--gold)"
          : "var(--paper)";
    const inner = (
      <>
        <circle cx={x} cy={y} r={8.6} fill="transparent" />
        <circle
          cx={x}
          cy={y}
          r={rNode}
          fill={fill}
          stroke="currentColor"
          strokeWidth={on ? 0.95 : 0.7}
          className={interactive ? "transition-[r] duration-200 ease-out motion-reduce:transition-none" : undefined}
        />
        <text
          x={LABEL[i][0]}
          y={LABEL[i][1]}
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize={on ? 5 : 4.1}
          fontWeight={on ? 600 : 500}
          fontFamily="var(--font-display)"
          fill="currentColor"
          opacity={!focus || on || wing || growth || stress ? 1 : 0.45}
        >
          {type}
        </text>
      </>
    );

    if (!interactive) {
      return <g key={type}>{inner}</g>;
    }

    return (
      <a
        key={type}
        href={`/tipos/${type}`}
        aria-label={`Tipo ${type}, ${typeById[type].name}. Abrir perfil.`}
        onMouseEnter={() => setHovered(type)}
        onMouseLeave={() => setHovered(null)}
        onFocus={() => setHovered(type)}
        onBlur={() => setHovered(null)}
        className="cursor-pointer outline-none"
      >
        {inner}
      </a>
    );
  };

  return (
    <figure className={className}>
      <svg
        viewBox="0 0 100 100"
        width={size}
        height={size}
        className="h-auto w-full overflow-visible"
        role={interactive ? "group" : "img"}
        aria-label={
          interactive
            ? "Símbolo do Eneagrama. Passe o mouse ou foque um número para ver asas e flechas."
            : "Símbolo do Eneagrama"
        }
      >
        <circle
          cx="50"
          cy="50"
          r="36.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.65"
          opacity={focus ? 0.32 : 1}
        />
        {segments(triangle, [9, 3, 6, 9], "t")}
        {segments(hex, [1, 4, 2, 8, 5, 7, 1], "h")}
        {pos.map(([x, y], i) => node(SEAT_TO_TYPE[i], x, y, i))}
      </svg>
      {interactive ? (
        <figcaption className="mt-4 min-h-[4.75rem] text-center" aria-live="polite">
          {profile && focus ? (
            <div>
              <p className="font-display text-2xl leading-none">
                {focus} · {profile.name}
              </p>
              <p className="mt-1 text-sm text-[color:var(--ink-soft)]">{profile.alias}</p>
              {arrows ? (
                <p className="mt-2 text-xs text-[color:var(--mute)]">
                  Asas {wings[0]} e {wings[1]} · Integração {arrows.growth} · Stress {arrows.stress}
                </p>
              ) : null}
            </div>
          ) : (
            <p className="text-sm text-[color:var(--mute)]">
              Passe o mouse em um número. Cada tipo acende asas e flechas.
            </p>
          )}
        </figcaption>
      ) : null}
    </figure>
  );
}
