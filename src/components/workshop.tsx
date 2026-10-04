import { motion } from "motion/react";
import type { Variants } from "motion/react";
import type { FC } from "react";

import { SectionHeading } from "@/components/section-heading";

// Each tape repeats its phrases enough times to run past both edges.
const tapeText = (phrases: readonly string[]): string =>
  Array.from({ length: 3 }, () => phrases.join(" ✕ ")).join(" ✕ ");

// Each tape gets its resting angle through `custom`. It stretches across when
// the room scrolls in and sags a little further when the door is hovered.
const TAPE_VARIANTS: Variants = {
  hidden: (angle: number) => ({ rotate: angle, scaleX: 0 }),
  shown: (angle: number) => ({
    rotate: angle,
    scaleX: 1,
    transition: { duration: 0.6, ease: [0.3, 0.8, 0.3, 1] },
  }),
  sway: (angle: number) => ({
    rotate: angle * 1.5,
    transition: { type: "spring", stiffness: 200, damping: 8 },
  }),
};

const TAPES = [
  {
    angle: -4,
    className: "top-6",
    text: tapeText([
      "Caution",
      "Under construction",
      "Do not cross",
      "Work in progress",
      "Hard hat area",
    ]),
  },
  {
    angle: 3,
    className: "bottom-6",
    text: tapeText([
      "Keep out",
      "Pardon our dust",
      "Wet paint",
      "Deploy in progress",
      "No exit this way",
    ]),
  },
] as const;

/** A sealed side room: where side projects will go once they're rebuilt. */
export const Workshop: FC = () => (
  <section
    id="workshop"
    className="w-full max-w-3xl scroll-mt-28 py-16 sm:py-24"
  >
    <SectionHeading room="?" title="Workshop" />
    <motion.div
      initial="hidden"
      whileInView="shown"
      whileHover="sway"
      viewport={{ once: true, amount: 0.5 }}
      className="relative overflow-hidden rounded-2xl border border-dashed border-rule bg-panel px-6 py-24 text-center"
    >
      <p className="font-display text-2xl">Closed for renovation.</p>
      <p className="mx-auto mt-3 max-w-md text-muted">
        My side projects are being rebuilt in here. For now, the best of my work
        is in the case files above, shipped at Tribe. Check back soon.
      </p>
      {TAPES.map(({ angle, className, text }) => (
        <motion.div
          key={angle}
          aria-hidden
          custom={angle}
          variants={TAPE_VARIANTS}
          className={`absolute -inset-x-8 overflow-hidden bg-brass py-1 font-mono text-[0.65rem] font-semibold tracking-[0.3em] whitespace-nowrap text-paper uppercase shadow-sm ${className}`}
        >
          {text}
        </motion.div>
      ))}
    </motion.div>
  </section>
);
