import { motion } from "motion/react";
import type { FC } from "react";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";

import { ClueSymbol } from "@/components/clue-symbol";
import type { ClueName } from "@/constants/content";

export type TurnDirection = 1 | -1;

/** The digit showing for a wheel turned `position` clicks from 0 (can be negative). */
export const digitAt = (position: number): number =>
  ((position % 10) + 10) % 10;

const CELL_REM = 2.25;
// Enough cells that the ones mounting and unmounting sit outside the window.
const OFFSETS = [-2, -1, 0, 1, 2] as const;
const ROLL_TRANSITION = {
  type: "spring",
  stiffness: 500,
  damping: 34,
} as const;

type CombinationWheelProps = {
  clue: ClueName;
  position: number;
  label: string;
  disabled: boolean;
  onTurn: (direction: TurnDirection) => void;
};

/**
 * One number wheel on the exit lock, turned with the chevrons above and below
 * it. Cells are keyed by absolute position so the same element rolls into
 * place; higher numbers sit above, as on a real wheel.
 */
export const CombinationWheel: FC<CombinationWheelProps> = ({
  clue,
  position,
  label,
  disabled,
  onTurn,
}) => {
  const digit = digitAt(position);

  return (
    <div className="flex flex-col items-center gap-1">
      <ClueSymbol clue={clue} className="mb-1.5 size-4 text-brass" />
      <button
        type="button"
        aria-label={`${label} is ${digit}. Turn up`}
        disabled={disabled}
        onClick={() => {
          onTurn(1);
        }}
        className="rounded-md p-1.5 text-muted transition hover:-translate-y-0.5 hover:text-brass disabled:opacity-0"
      >
        <HiChevronUp aria-hidden />
      </button>
      {/* Screen readers get the value through the button labels instead. */}
      <div
        aria-hidden
        className="relative h-24 w-14 overflow-hidden rounded-lg border border-rule bg-paper font-mono text-3xl font-semibold shadow-[inset_0_10px_12px_-10px_rgb(0_0_0/0.35),inset_0_-10px_12px_-10px_rgb(0_0_0/0.35)] mask-y-from-55% mask-y-to-100% sm:h-28 sm:w-16"
      >
        {OFFSETS.map((offset) => {
          const cell = position + offset;
          return (
            <motion.span
              key={cell}
              initial={false}
              animate={{ y: `${-offset * CELL_REM}rem` }}
              transition={ROLL_TRANSITION}
              className="absolute inset-0 flex items-center justify-center"
            >
              {digitAt(cell)}
            </motion.span>
          );
        })}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-1/2 h-11 -translate-y-1/2 border-y border-brass/40"
        />
      </div>
      <button
        type="button"
        aria-label={`${label} is ${digit}. Turn down`}
        disabled={disabled}
        onClick={() => {
          onTurn(-1);
        }}
        className="rounded-md p-1.5 text-muted transition hover:translate-y-0.5 hover:text-brass disabled:opacity-0"
      >
        <HiChevronDown aria-hidden />
      </button>
    </div>
  );
};
