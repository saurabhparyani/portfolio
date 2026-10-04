import { motion } from "motion/react";
import type { FC } from "react";

const SHACKLE_SPRING = { type: "spring", stiffness: 500, damping: 18 } as const;

type PadlockProps = {
  open: boolean;
  className?: string | undefined;
};

/** A padlock whose shackle springs up when `open`. */
export const Padlock: FC<PadlockProps> = ({ open, className }) => (
  <svg
    aria-hidden
    viewBox="0 -6 24 36"
    fill="none"
    className={className}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
  >
    <motion.path
      d="M7 15V9a5 5 0 0 1 10 0v6"
      initial={false}
      animate={{ y: open ? -5 : 0 }}
      transition={SHACKLE_SPRING}
    />
    <rect
      x={3}
      y={14}
      width={18}
      height={14}
      rx={3}
      className="fill-brass/15"
    />
    <circle cx={12} cy={20} r={1.6} className="fill-current" stroke="none" />
    <path d="M12 21.5v3" />
  </svg>
);
