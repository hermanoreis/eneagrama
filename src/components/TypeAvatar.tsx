import type { TypeId } from "../data/types";

const faces: Record<TypeId, string> = {
  1: "M28 22c0-6 5-10 12-10s12 4 12 10",
  2: "M26 24c4 6 10 8 14 8s10-2 14-8",
  3: "M24 20h32M28 28h24",
  4: "M30 18c6 8 14 8 20 0",
  5: "M32 16h16v8H32z",
  6: "M28 20c8-6 16-6 24 0",
  7: "M26 22c6 4 10 4 16 0s10 0 16 4",
  8: "M24 18h32M24 26h32",
  9: "M28 24c8 4 16 4 24 0",
};

function numberFill(color: string) {
  const hex = color.replace("#", "");
  if (hex.length !== 6) return "#1c1612";
  const r = parseInt(hex.slice(0, 2), 16) / 255;
  const g = parseInt(hex.slice(2, 4), 16) / 255;
  const b = parseInt(hex.slice(4, 6), 16) / 255;
  const lin = (c: number) => (c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4);
  const L = 0.2126 * lin(r) + 0.7152 * lin(g) + 0.0722 * lin(b);
  return L > 0.35 ? "#1c1612" : "#fff7ee";
}

export function TypeAvatar({
  id,
  color,
  size = 88,
}: {
  id: TypeId;
  color: string;
  size?: number;
}) {
  return (
    <svg viewBox="0 0 80 80" width={size} height={size} aria-hidden>
      <circle cx="40" cy="40" r="38" fill={color} />
      <circle cx="40" cy="38" r="22" fill="#fff7ee" />
      <circle cx="32" cy="36" r="3.2" fill="#1c1612" />
      <circle cx="48" cy="36" r="3.2" fill="#1c1612" />
      <path d={faces[id]} fill="none" stroke="#1c1612" strokeWidth="2.2" strokeLinecap="round" />
      <text
        x="40"
        y="72"
        textAnchor="middle"
        fontSize="11"
        fontFamily="var(--font-display)"
        fill={numberFill(color)}
      >
        {id}
      </text>
    </svg>
  );
}
