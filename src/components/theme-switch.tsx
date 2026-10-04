import type { FC } from "react";
import { BsMoon, BsSun } from "react-icons/bs";

import { toggleTheme } from "@/utils/theme";

// The <html> "dark" class is the single source of truth, so the icon is
// swapped with CSS and no React state is needed.
export const ThemeSwitch: FC = () => (
  <button
    className="fixed bottom-5 right-5 bg-white/80 w-[3rem] h-[3rem] backdrop-blur-[0.5rem] border border-slate-400/40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950"
    onClick={toggleTheme}
    aria-label="Toggle dark mode"
  >
    <BsSun className="dark:hidden" />
    <BsMoon className="hidden dark:block" />
  </button>
);
