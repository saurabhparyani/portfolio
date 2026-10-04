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
  window.scrollTo({ top: 0 });
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
      type="button"
      className="fixed right-5 bottom-5 z-40 flex size-11 items-center justify-center rounded-full border border-rule bg-panel/85 text-muted shadow-lg backdrop-blur-md transition hover:-translate-y-0.5 hover:text-brass"
      onClick={scrollToTop}
      aria-label="Back to Room I"
    >
      <FaArrowUp className="size-3.5" />
    </button>
  );
};
