import { motion } from "motion/react";
import { useState } from "react";
import type { FC } from "react";

import { CombinationWheel, digitAt } from "@/components/combination-wheel";
import type { TurnDirection } from "@/components/combination-wheel";
import { Confetti } from "@/components/confetti";
import { Padlock } from "@/components/padlock";
import { PillLink } from "@/components/pill-link";
import { SectionHeading } from "@/components/section-heading";
import { CLUES, SOCIALS, WHEEL_ORDER } from "@/constants/content";
import { useSectionInView } from "@/hooks/active-section";
import { formatClock } from "@/utils/clock";

const REVEAL_TRANSITION = { duration: 0.5, ease: [0.3, 0.8, 0.3, 1] } as const;

const HINTS = [
  "Stuck? Get a hint",
  "Each wheel's symbol is hidden somewhere in the rooms.",
  "The wheels aren't in room order. Match each symbol to its wheel.",
] as const;

const msSince = (start: number): number => Date.now() - start;

const matchesCode = (positions: readonly number[]): boolean =>
  WHEEL_ORDER.every(
    (clue, index) => digitAt(positions[index] ?? 0) === CLUES[clue].digit,
  );

export const ExitLock: FC = () => {
  const sectionInView = useSectionInView("Exit");
  // Time is only measured, never shown, until the lock opens.
  const [startedAt] = useState(Date.now);
  const [escapedIn, setEscapedIn] = useState<number | null>(null);
  // Unbounded click counts per wheel, so 9 → 0 keeps rolling the same way.
  const [positions, setPositions] = useState<readonly number[]>([0, 0, 0]);
  const [hintLevel, setHintLevel] = useState(0);
  const isOpen = escapedIn !== null;

  const turn = (wheel: number, direction: TurnDirection): void => {
    const next = positions.map((position, index) =>
      index === wheel ? position + direction : position,
    );
    setPositions(next);
    if (matchesCode(next)) setEscapedIn(msSince(startedAt));
  };

  return (
    <motion.section
      {...sectionInView}
      id="exit"
      className="w-full max-w-xl scroll-mt-28 py-16 sm:py-24"
    >
      <SectionHeading room="IV" title="Exit" />
      <div className="rounded-2xl border border-rule bg-panel p-6 text-center shadow-sm sm:p-10">
        <div className="relative mx-auto w-fit">
          <Padlock open={isOpen} className="h-18 w-12 text-brass" />
          {isOpen && <Confetti />}
        </div>
        <p className="mx-auto mt-4 max-w-sm text-muted">
          {isOpen
            ? "The door swings open."
            : "Three wheels, three symbols. Every room you've been through hides one of them."}
        </p>
        <div className="mt-6 flex justify-center gap-3 sm:gap-4">
          {WHEEL_ORDER.map((clue, index) => (
            <CombinationWheel
              key={clue}
              clue={clue}
              position={positions[index] ?? 0}
              label={`${clue[0]?.toUpperCase()}${clue.slice(1)} wheel`}
              disabled={isOpen}
              onTurn={(direction) => {
                turn(index, direction);
              }}
            />
          ))}
        </div>
        <div aria-live="polite">
          {isOpen ? (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              transition={REVEAL_TRANSITION}
              className="overflow-hidden"
            >
              <p className="mt-8 font-display text-2xl">
                Click. You're out in{" "}
                <span className="font-mono text-brass">
                  {formatClock(escapedIn)}
                </span>
                .
              </p>
              <p className="mt-2 text-muted">
                Thanks for playing. If you'd like to build something together,
                come say hi.
              </p>
              <div className="mt-5 flex justify-center gap-3">
                {SOCIALS.map(({ link, label, Icon }) => (
                  <PillLink
                    key={label}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon aria-hidden className="size-3.5" />
                    {label}
                  </PillLink>
                ))}
              </div>
            </motion.div>
          ) : (
            <button
              type="button"
              disabled={hintLevel === HINTS.length - 1}
              onClick={() => {
                setHintLevel((level) => Math.min(level + 1, HINTS.length - 1));
              }}
              className="mt-6 font-mono text-xs tracking-wider text-muted uppercase underline decoration-dotted underline-offset-4 transition-colors hover:text-brass disabled:no-underline disabled:hover:text-muted"
            >
              {hintLevel > 0 && "Hint: "}
              {HINTS[hintLevel]}
            </button>
          )}
        </div>
      </div>
    </motion.section>
  );
};
