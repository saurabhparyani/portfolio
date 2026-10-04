import { motion } from "motion/react";
import type { FC } from "react";

import { NAV_LINKS } from "@/constants/content";
import { useActiveSectionContext } from "@/context/active-section-context";

const ACTIVE_PILL_TRANSITION = {
  type: "spring",
  stiffness: 380,
  damping: 30,
} as const;

const ROOM_LABELS = {
  Home: "Intro",
  Experience: "Files",
  Skills: "Keys",
  Exit: "Exit",
} as const;

export const Header: FC = () => {
  const { activeSection } = useActiveSectionContext();

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center sm:top-5">
      <motion.nav
        aria-label="Main"
        className="pointer-events-auto flex h-12 w-full items-center justify-center border-b border-rule bg-panel/85 px-2 shadow-sm backdrop-blur-md sm:h-13 sm:w-auto sm:rounded-full sm:border"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <ul className="flex items-center text-sm font-medium text-muted">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.name;

            return (
              <li key={link.hash}>
                <a
                  className={`relative block rounded-full px-3 py-1.5 transition-colors hover:text-ink sm:px-4 ${
                    isActive ? "text-ink" : ""
                  }`}
                  href={link.hash}
                  aria-current={isActive ? "true" : undefined}
                >
                  {ROOM_LABELS[link.name]}
                  {isActive && (
                    <motion.span
                      className="absolute inset-0 -z-10 rounded-full bg-brass-soft/70"
                      layoutId="activeSection"
                      transition={ACTIVE_PILL_TRANSITION}
                    />
                  )}
                </a>
              </li>
            );
          })}
        </ul>
      </motion.nav>
    </header>
  );
};
