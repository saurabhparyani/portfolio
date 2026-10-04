import { motion } from "motion/react";
import { useState } from "react";
import type { FC, PropsWithChildren } from "react";

const TICKS = Array.from({ length: 60 }, (_, index) => index);
const BEZEL_SPRING = { type: "spring", stiffness: 60, damping: 12 } as const;
const NOTCH_DEG = 72;

/**
 * Wraps content in a combination-lock bezel that turns when hovered. Touch
 * screens have no hover, so there each tap turns it one more notch instead.
 */
export const DialFrame: FC<PropsWithChildren> = ({ children }) => {
  const [taps, setTaps] = useState(0);

  return (
    <motion.div
      className="relative size-56 sm:size-72"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      whileHover="turn"
      onTap={(event) => {
        if (!(event instanceof PointerEvent) || event.pointerType !== "mouse")
          setTaps((count) => count + 1);
      }}
    >
      <motion.svg
        aria-hidden
        viewBox="-50 -50 100 100"
        className="absolute inset-0 size-full text-brass"
        variants={{ turn: { rotate: NOTCH_DEG } }}
        transition={BEZEL_SPRING}
      >
        <motion.g
          animate={{ rotate: taps * NOTCH_DEG }}
          transition={BEZEL_SPRING}
        >
          <circle r={49} className="fill-panel stroke-rule" strokeWidth={0.6} />
          {TICKS.map((tick) => (
            <line
              key={tick}
              y1={-47.5}
              y2={tick % 5 === 0 ? -43.5 : -45.5}
              stroke="currentColor"
              strokeWidth={tick % 5 === 0 ? 0.8 : 0.4}
              transform={`rotate(${tick * 6})`}
            />
          ))}
        </motion.g>
      </motion.svg>
      {/* Fixed index mark at 12 o'clock. */}
      <span
        aria-hidden
        className="absolute -top-2 left-1/2 size-0 -translate-x-1/2 border-x-[6px] border-t-[9px] border-x-transparent border-t-brass"
      />
      <div className="absolute inset-[9%] overflow-hidden rounded-full border-4 border-panel shadow-[0_8px_30px_-8px_rgb(0_0_0/0.35)]">
        {children}
      </div>
    </motion.div>
  );
};
