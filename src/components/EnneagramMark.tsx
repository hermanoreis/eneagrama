type Props = {
  size?: number;
  active?: number;
  className?: string;
};

const POINTS: [number, number][] = [
  [50, 8],
  [78, 18],
  [92, 42],
  [86, 70],
  [64, 90],
  [36, 90],
  [14, 70],
  [8, 42],
  [22, 18],
];

// Clockwise from top: visual seats 9,1,2,3,4,5,6,7,8
const SEAT_TO_TYPE = [9, 1, 2, 3, 4, 5, 6, 7, 8];

export function EnneagramMark({ size = 280, active, className }: Props) {
  const [cx, cy, r] = [50, 50, 38];
  const pos = SEAT_TO_TYPE.map((_, i) => {
    const angle = -Math.PI / 2 + (i * 2 * Math.PI) / 9;
    return [cx + r * Math.cos(angle), cy + r * Math.sin(angle)] as const;
  });

  const idx = (t: number) => SEAT_TO_TYPE.indexOf(t);
  const pt = (t: number) => pos[idx(t)];
  const triangle = [9, 3, 6, 9].map(pt);
  const hex = [1, 4, 2, 8, 5, 7, 1].map(pt);

  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      className={className}
      role="img"
      aria-label="Símbolo do Eneagrama"
    >
      <circle cx="50" cy="50" r="38" fill="none" stroke="currentColor" strokeWidth="0.7" />
      <polyline
        points={triangle.map((p) => p.join(",")).join(" ")}
        fill="none"
        stroke="currentColor"
        strokeWidth="0.85"
      />
      <polyline
        points={hex.map((p) => p.join(",")).join(" ")}
        fill="none"
        stroke="currentColor"
        strokeWidth="0.7"
        opacity="0.85"
      />
      {pos.map(([x, y], i) => {
        const type = SEAT_TO_TYPE[i];
        const on = active === type;
        return (
          <g key={type}>
            <circle
              cx={x}
              cy={y}
              r={on ? 3.4 : 2.2}
              fill={on ? "var(--accent)" : "var(--paper)"}
              stroke="currentColor"
              strokeWidth="0.7"
            />
            <text
              x={POINTS[i][0]}
              y={POINTS[i][1]}
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize="4.2"
              fontFamily="var(--font-display)"
              fill="currentColor"
            >
              {type}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
