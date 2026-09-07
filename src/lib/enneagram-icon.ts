/** Shared geometry for the tab favicon and the Apple touch icon. */

export const ICON_PAPER = "#f7f3eb";
export const ICON_INK = "#073b33";

export const ICON_VIEW = 32;
export const ICON_CIRCLE = { cx: 16, cy: 16, r: 11.2 } as const;

/** Nine seats, type 9 at the top, then 1–8 clockwise. */
export const ICON_SEATS = [
  [16, 4.8],
  [23.199, 7.42],
  [27.03, 14.055],
  [25.699, 21.6],
  [19.831, 26.525],
  [12.169, 26.525],
  [6.301, 21.6],
  [4.97, 14.055],
  [8.801, 7.42],
] as const;

export const ICON_TRIANGLE_SEATS = [0, 3, 6] as const;
export const ICON_HEX_SEATS = [1, 4, 2, 8, 5, 7] as const;

export function pointsOf(seats: readonly number[]): string {
  return seats
    .map((i) => `${ICON_SEATS[i][0]},${ICON_SEATS[i][1]}`)
    .join(" ");
}

export const ICON_TRIANGLE_POINTS = `${pointsOf(ICON_TRIANGLE_SEATS)} ${ICON_SEATS[0][0]},${ICON_SEATS[0][1]}`;
export const ICON_HEX_POINTS = `${pointsOf(ICON_HEX_SEATS)} ${ICON_SEATS[1][0]},${ICON_SEATS[1][1]}`;
