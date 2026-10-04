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

export const toggleTheme = (): void => {
  const isDark = document.documentElement.classList.toggle("dark");
  try {
    localStorage.setItem("theme", isDark ? "dark" : "light");
  } catch {
    // Storage can be blocked; the theme still applies for this visit.
  }
};
