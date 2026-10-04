const applySavedTheme = (): void => {
  try {
    const saved = localStorage.getItem("theme");
    const prefersDark = matchMedia("(prefers-color-scheme: dark)").matches;
    if (saved === "dark" || (!saved && prefersDark)) {
      document.documentElement.classList.add("dark");
    }
  } catch {
    // Storage can be blocked (e.g. private mode); fall back to light.
  }
};

// Inlined into <head> so the theme is applied before first paint, avoiding a
// flash of the wrong theme. It must be a string because it runs before React loads.
export const THEME_INIT_SCRIPT = `(${applySavedTheme.toString()})()`;

const flipTheme = (): void => {
  const isDark = document.documentElement.classList.toggle("dark");
  try {
    localStorage.setItem("theme", isDark ? "dark" : "light");
  } catch {
    // Storage can be blocked; the theme still applies for this visit.
  }
};

/** Toggles the theme, crossfading with the View Transitions API where supported. */
export const toggleTheme = (): void => {
  const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion || !("startViewTransition" in document)) {
    flipTheme();
    return;
  }
  document.startViewTransition(flipTheme);
};
