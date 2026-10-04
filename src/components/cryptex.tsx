import { motion, useAnimate } from "motion/react";
import type { FC } from "react";

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// Two laps of letters, so every dial can spin through a full turn and land on
// the second copy of its letter.
const STRIP = [...ALPHABET, ...ALPHABET];
const CELL_EM = 1.1;
const MECHANICAL_EASE = [0.25, 0.9, 0.3, 1] as const;

// Offset so the target letter sits in the middle of the window, with half of
// each neighbour peeking above and below.
const yForIndex = (index: number): string => `${(0.5 - index) * CELL_EM}em`;

type DialProps = {
  letter: string;
  order: number;
};

const Dial: FC<DialProps> = ({ letter, order }) => {
  const [scope, animate] = useAnimate<HTMLSpanElement>();
  const target = ALPHABET.length + ALPHABET.indexOf(letter);

  // Jump back one lap (it looks identical) and spin forward again.
  const spin = (): void => {
    void animate(
      scope.current,
      { y: [yForIndex(target - ALPHABET.length), yForIndex(target)] },
      { duration: 0.9, ease: MECHANICAL_EASE },
    );
  };

  return (
    <motion.span
      aria-hidden
      className="relative block h-[2.2em] w-[0.95em] cursor-pointer overflow-hidden rounded-md border border-rule bg-panel shadow-[inset_0_6px_8px_-6px_rgb(0_0_0/0.25),inset_0_-6px_8px_-6px_rgb(0_0_0/0.25)] mask-y-from-70% mask-y-to-100%"
      whileHover={{ y: "-0.06em" }}
      whileTap={{ scale: 0.96 }}
      onClick={spin}
    >
      <motion.span
        ref={scope}
        className="absolute inset-x-0 top-0 flex flex-col items-center"
        initial={{ y: yForIndex(0) }}
        animate={{ y: yForIndex(target) }}
        transition={{
          duration: 1.4 + order * 0.18,
          delay: 0.2,
          ease: MECHANICAL_EASE,
        }}
      >
        {STRIP.map((char, index) => (
          <span
            // Characters repeat across the two laps, so the index is the key.
            // oxlint-disable-next-line react/no-array-index-key
            key={index}
            className="flex items-center justify-center"
            style={{ height: `${CELL_EM}em` }}
          >
            {char}
          </span>
        ))}
      </motion.span>
      {/* Brass guide rails across the reading line. */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-1/2 h-[1.1em] -translate-y-1/2 border-y border-brass/40"
      />
    </motion.span>
  );
};

type CryptexProps = {
  word: string;
};

/** Renders a word as a row of letter dials that spin into place. Click a dial to spin it again. */
export const Cryptex: FC<CryptexProps> = ({ word }) => (
  <span className="inline-flex gap-[0.08em] align-middle">
    <span className="sr-only">{word}</span>
    {[...word.toUpperCase()].map((letter, index) => (
      // Letters can repeat (e.g. the two A's), so the index is the key.
      // oxlint-disable-next-line react/no-array-index-key
      <Dial key={index} letter={letter} order={index} />
    ))}
  </span>
);
