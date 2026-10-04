import { AnimatePresence, motion } from "motion/react";
import { useId, useState } from "react";
import type { FC } from "react";

import { ClueSymbol } from "@/components/clue-symbol";
import { Padlock } from "@/components/padlock";
import { CLUES } from "@/constants/content";

const DRAWER_TRANSITION = { duration: 0.35, ease: [0.3, 0.8, 0.3, 1] } as const;

type CaseFileProps = {
  number: number;
  order: number;
  defaultOpen: boolean;
  title: string;
  company: string;
  companyLink: string;
  location: string;
  date: string;
  description: string;
  /** A clue for the exit lock, stamped inside the drawer. */
  clue?: "triangle" | undefined;
};

/** One job as a locked case file; the padlock opens a drawer with the details. */
export const CaseFile: FC<CaseFileProps> = ({
  number,
  order,
  defaultOpen,
  title,
  company,
  companyLink,
  location,
  date,
  description,
  clue,
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const drawerId = useId();

  return (
    <motion.li
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4, delay: order * 0.1 }}
      className={`overflow-hidden rounded-xl border bg-panel shadow-sm transition-colors ${
        isOpen ? "border-brass/50" : "border-rule hover:border-brass/40"
      }`}
    >
      <div className="flex items-start gap-4 p-5 sm:p-6">
        <div className="min-w-0 flex-1">
          <p className="font-mono text-[0.7rem] tracking-[0.2em] text-muted uppercase">
            File №{String(number).padStart(3, "0")} · {date}
          </p>
          <h3 className="mt-1.5 font-display text-xl font-medium sm:text-2xl">
            {title} <span className="text-muted">at</span>{" "}
            <a
              href={companyLink}
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-brass/50 underline-offset-4 transition-colors hover:decoration-brass"
            >
              {company}
            </a>
          </h3>
          <p className="mt-1 text-sm text-muted">{location}</p>
        </div>
        <button
          type="button"
          onClick={() => {
            setIsOpen((open) => !open);
          }}
          aria-label={`${isOpen ? "Lock" : "Unlock"} the ${company} file`}
          aria-expanded={isOpen}
          aria-controls={drawerId}
          className="flex w-16 shrink-0 flex-col items-center gap-1 rounded-lg py-1.5 text-brass transition-colors hover:bg-brass-soft/50"
        >
          <Padlock open={isOpen} className="h-9 w-6" />
          <span className="font-mono text-[0.65rem] tracking-wider text-muted uppercase">
            {isOpen ? "Lock" : "Unlock"}
          </span>
        </button>
      </div>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={drawerId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={DRAWER_TRANSITION}
          >
            <div className="mx-5 border-t border-dashed border-rule py-5 sm:mx-6">
              <p className="leading-relaxed text-muted">{description}</p>
              {clue !== undefined && (
                <p className="mt-4 inline-block -rotate-2 rounded border-2 border-double border-brass/60 px-2.5 py-1 font-mono text-xs text-brass">
                  <ClueSymbol clue={clue} className="mr-1.5 align-[-0.05em]" />
                  {CLUES[clue].stamp}
                </p>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.li>
  );
};
