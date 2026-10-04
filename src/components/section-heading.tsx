import { animate, motion } from "motion/react";
import { useRef } from "react";
import type { FC } from "react";

const GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ#%&*+=?";

const randomGlyph = (): string =>
  GLYPHS[Math.floor(Math.random() * GLYPHS.length)] ?? "#";

/** `text` with the first `progress` share of letters solved and the rest still ciphered. */
const partiallyDecoded = (text: string, progress: number): string => {
  const solved = Math.floor(text.length * progress);
  return [...text]
    .map((char, index) =>
      index < solved || char === " " ? char : randomGlyph(),
    )
    .join("");
};

// Glyphs re-roll at most this many times per decode, not every frame, so the
// cipher flickers gently instead of strobing.
const GLYPH_STEPS = 14;

const decode = (element: HTMLElement, text: string): void => {
  let lastStep = -1;
  void animate(0, 1, {
    duration: 0.6,
    ease: "easeOut",
    onUpdate: (progress) => {
      const step = Math.floor(progress * GLYPH_STEPS);
      if (step === lastStep && progress < 1) return;
      lastStep = step;
      element.textContent = partiallyDecoded(text, progress);
    },
  });
};

type SectionHeadingProps = {
  room: string;
  title: string;
};

/** Room label plus a title that decodes itself from a cipher the first time it scrolls into view. */
export const SectionHeading: FC<SectionHeadingProps> = ({ room, title }) => {
  const hasDecoded = useRef(false);

  return (
    <header className="mb-10 text-center">
      <p className="font-mono text-xs tracking-[0.3em] text-brass uppercase">
        Room {room}
      </p>
      <h2 className="mt-2 font-display text-4xl font-medium sm:text-5xl">
        <motion.span
          viewport={{ once: true, amount: 1 }}
          onViewportEnter={(entry) => {
            if (hasDecoded.current) return;
            if (entry?.target instanceof HTMLElement) {
              hasDecoded.current = true;
              decode(entry.target, title);
            }
          }}
        >
          {title}
        </motion.span>
      </h2>
    </header>
  );
};
