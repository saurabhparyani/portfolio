import type { FC } from "react";

import type { ClueName } from "@/constants/content";

// Drawn as SVG because font glyphs (▲ ◆ ●) render at uneven sizes.
const SHAPES = {
  triangle: <path d="M6 1 11 10.5H1Z" />,
  diamond: <path d="M6 0.5 11.5 6 6 11.5 0.5 6Z" />,
  circle: <circle cx={6} cy={6} r={5} />,
} as const;

type ClueSymbolProps = {
  clue: ClueName;
  className?: string | undefined;
};

export const ClueSymbol: FC<ClueSymbolProps> = ({ clue, className }) => (
  <svg
    viewBox="0 0 12 12"
    fill="currentColor"
    className={`inline-block size-2.5 shrink-0 ${className ?? ""}`}
  >
    <title>{clue}</title>
    {SHAPES[clue]}
  </svg>
);
