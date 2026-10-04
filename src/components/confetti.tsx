import { motion } from "motion/react";
import type { FC } from "react";

const COLORS = [
  "bg-brass",
  "bg-brass-soft",
  "bg-ink",
  "bg-steel",
  "bg-rule",
] as const;
const PIECE_COUNT = 80;

// Small seeded PRNG, so the burst looks random but is identical on every run.
const seeded = (seed: number): (() => number) => {
  let state = seed;
  return () => {
    state = (state * 16807) % 2147483647;
    return state / 2147483647;
  };
};

const random = seeded(42);
const PIECES = Array.from({ length: PIECE_COUNT }, (_, index) => {
  // Mostly upwards, fanned out to both sides.
  const angle = -Math.PI / 2 + (random() - 0.5) * Math.PI * 1.3;
  const power = 180 + random() * 260;
  return {
    id: index,
    color: COLORS[index % COLORS.length] ?? "bg-brass",
    round: random() > 0.7,
    x: Math.cos(angle) * power,
    rise: Math.sin(angle) * power,
    // How far it falls past the launch point before fading.
    fall: 220 + random() * 260,
    spin: (random() - 0.5) * 1080,
    duration: 1.6 + random() * 0.9,
    delay: random() * 0.12,
  };
});

/** A one-shot burst of paper-and-brass confetti from the centre of its positioned parent. */
export const Confetti: FC = () => (
  <span aria-hidden className="pointer-events-none absolute inset-0 z-10">
    {PIECES.map((piece) => (
      <motion.span
        key={piece.id}
        className={`absolute top-1/2 left-1/2 ${piece.color} ${
          piece.round ? "size-2 rounded-full" : "h-3 w-1.5 rounded-[1px]"
        }`}
        initial={{ x: 0, y: 0, rotate: 0, opacity: 1 }}
        animate={{
          x: [0, piece.x * 0.8, piece.x],
          y: [0, piece.rise, piece.rise + piece.fall],
          rotate: piece.spin,
          opacity: [1, 1, 0],
        }}
        transition={{
          duration: piece.duration,
          delay: piece.delay,
          // Fast launch, slow drift: roughly a throw under gravity.
          times: [0, 0.3, 1],
          ease: ["easeOut", "easeIn"],
        }}
      />
    ))}
  </span>
);
