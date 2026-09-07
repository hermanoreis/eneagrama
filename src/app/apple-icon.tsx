import { ImageResponse } from "next/og";
import {
  ICON_CIRCLE,
  ICON_HEX_POINTS,
  ICON_INK,
  ICON_PAPER,
  ICON_SEATS,
  ICON_TRIANGLE_POINTS,
  ICON_VIEW,
} from "../lib/enneagram-icon";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: ICON_PAPER,
        }}
      >
        <svg
          width={size.width}
          height={size.height}
          viewBox={`0 0 ${ICON_VIEW} ${ICON_VIEW}`}
        >
          <g
            fill="none"
            stroke={ICON_INK}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle
              cx={ICON_CIRCLE.cx}
              cy={ICON_CIRCLE.cy}
              r={ICON_CIRCLE.r}
              strokeWidth="1.35"
            />
            <polyline points={ICON_HEX_POINTS} strokeWidth="1.3" />
            <polyline points={ICON_TRIANGLE_POINTS} strokeWidth="1.55" />
          </g>
          <g fill={ICON_INK}>
            {ICON_SEATS.map(([cx, cy]) => (
              <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="1.45" />
            ))}
          </g>
        </svg>
      </div>
    ),
    size,
  );
}
