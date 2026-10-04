import { motion } from "motion/react";
import type { FC } from "react";

import { NAV_LINKS, SOCIALS } from "@/constants/content";
import { useActiveSectionContext } from "@/context/active-section-context";

const ACTIVE_PILL_TRANSITION = {
  type: "spring",
  stiffness: 380,
  damping: 30,
} as const;

export const Header: FC = () => {
  const { activeSection } = useActiveSectionContext();

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-[999] flex justify-center sm:top-6">
        <motion.nav
          aria-label="Main"
          className="flex h-12 w-full items-center justify-center border border-white/40 bg-white/80 px-2 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:h-[3.25rem] sm:w-auto sm:rounded-full dark:border-black/40 dark:bg-gray-950/75"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          <ul className="flex items-center gap-1 text-xl font-medium text-gray-500 sm:gap-2">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.name;

              return (
                <li key={link.hash}>
                  <a
                    className={`relative block rounded-full px-4 py-1.5 transition hover:text-gray-950 dark:text-gray-400 dark:hover:text-gray-200 ${
                      isActive ? "text-gray-950 dark:text-gray-200" : ""
                    }`}
                    href={link.hash}
                    aria-current={isActive ? "true" : undefined}
                  >
                    {link.name}
                    {isActive && (
                      <motion.span
                        className="absolute inset-0 -z-10 rounded-full bg-gray-100 dark:bg-gray-800"
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
      <div className="mx-auto flex w-full max-w-[1400px] justify-end px-8">
        <div className="flex gap-7 mb-9 md:mb-0 mr-28 lg:-mt-48 md:mr-20">
          {SOCIALS.map(({ link, label, Icon }) => (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer me"
              key={label}
              aria-label={label}
            >
              <Icon className="w-6 h-6 md:w-8 md:h-8 hover:scale-125 transition-all" />
            </a>
          ))}
        </div>
      </div>
    </>
  );
};
