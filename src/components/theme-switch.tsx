import { motion } from "motion/react";
import type { FC } from "react";

import { toggleTheme } from "@/utils/theme";

const ROPE_PX = 56;
const CORD_SPRING = { type: "spring", stiffness: 400, damping: 10 } as const;

// The rope stays pinned to the top edge and stretches; the bead rides its end.
const ROPE_VARIANTS = {
  rest: { scaleY: 1 },
  hover: { scaleY: (ROPE_PX + 4) / ROPE_PX },
  pull: { scaleY: (ROPE_PX + 14) / ROPE_PX },
};
const BEAD_VARIANTS = {
  rest: { y: 0 },
  hover: { y: 4 },
  pull: { y: 14 },
};

// A lamp pull-cord. The <html> "dark" class is the single source of truth, so
// the label is swapped with CSS and no React state is needed. The button is
// wider than it looks so the thin rope is easy to grab.
export const ThemeSwitch: FC = () => (
  <motion.button
    type="button"
    onClick={toggleTheme}
    aria-label="Toggle lamplight"
    title="Pull the cord"
    initial="rest"
    animate="rest"
    whileHover="hover"
    whileTap="pull"
    className="group fixed top-12 right-2 z-40 flex flex-col items-center px-4 pb-3 sm:top-0 sm:right-5"
  >
    <motion.span
      aria-hidden
      variants={ROPE_VARIANTS}
      transition={CORD_SPRING}
      style={{ height: ROPE_PX }}
      className="w-px origin-top bg-steel"
    />
    <motion.span
      aria-hidden
      variants={BEAD_VARIANTS}
      transition={CORD_SPRING}
      className="flex flex-col items-center"
    >
      <span className="size-4 rounded-full bg-brass shadow-[inset_-2px_-2px_3px_rgb(0_0_0/0.25)] transition-transform group-hover:scale-110" />
      <span className="mt-1 font-mono text-[0.6rem] tracking-widest text-muted uppercase opacity-0 transition-opacity group-hover:opacity-100">
        <span className="dark:hidden">Lamp</span>
        <span className="hidden dark:inline">Day</span>
      </span>
    </motion.span>
  </motion.button>
);
