import { motion } from "motion/react";
import type { FC } from "react";

import { ClueSymbol } from "@/components/clue-symbol";
import { CLUES } from "@/constants/content";

const SWING = { rotate: [0, 10, -7, 4, -2, 0] };
const SWING_TRANSITION = { duration: 1.1, ease: "easeOut" } as const;

type ClueTagProps = {
  clue: "circle" | "diamond";
  className?: string | undefined;
};

/** A brass luggage tag with a symbol and a riddle; its answer is one wheel of the exit lock. */
export const ClueTag: FC<ClueTagProps> = ({ clue, className }) => (
  <motion.span
    className={`inline-flex origin-top flex-col items-center ${className ?? ""}`}
    whileHover={SWING}
    transition={SWING_TRANSITION}
  >
    <span aria-hidden className="h-3 w-px bg-steel" />
    <span className="relative flex items-center gap-1.5 rounded-sm border border-brass/50 bg-brass-soft px-2.5 pt-3 pb-1.5 font-mono text-[0.7rem] whitespace-nowrap text-brass shadow-sm">
      <span
        aria-hidden
        className="absolute top-1 left-1/2 size-1 -translate-x-1/2 rounded-full bg-paper ring-1 ring-brass/50"
      />
      <ClueSymbol clue={clue} />
      {CLUES[clue].riddle}
    </span>
  </motion.span>
);
