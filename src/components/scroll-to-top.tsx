import { useSyncExternalStore } from "react";
import type { FC } from "react";
import { FaArrowUp } from "react-icons/fa6";

const subscribe = (onChange: () => void): (() => void) => {
  window.addEventListener("scroll", onChange, { passive: true });
  return () => {
    window.removeEventListener("scroll", onChange);
  };
};

const getSnapshot = (): boolean => window.scrollY > 300;
const getServerSnapshot = (): boolean => false;

const scrollToTop = (): void => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

export const ScrollToTop: FC = () => {
  const isVisible = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );

  if (!isVisible) return null;

  return (
    <button
      className="fixed bottom-20 right-5 bg-white/80 w-[3rem] h-[3rem] backdrop-blur-[0.5rem] border border-slate-400/40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950 z-50"
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <FaArrowUp />
    </button>
  );
};
