import type { SectionName } from "@/constants/content";
import { useActiveSectionContext } from "@/context/active-section-context";

// Shrinks the viewport to a 0px line across the middle of the screen, so only
// one section can be "in view" at a time.
const MIDDLE_OF_SCREEN = { margin: "-50% 0px -50% 0px" } as const;

export type UseSectionInViewRtn = {
  viewport: typeof MIDDLE_OF_SCREEN;
  onViewportEnter: () => void;
};

/** Props for a `motion.section`: it becomes the active nav item while it crosses the middle of the screen. */
export const useSectionInView = (
  sectionName: SectionName,
): UseSectionInViewRtn => {
  const { setActiveSection } = useActiveSectionContext();

  return {
    viewport: MIDDLE_OF_SCREEN,
    onViewportEnter: () => {
      setActiveSection(sectionName);
    },
  };
};
