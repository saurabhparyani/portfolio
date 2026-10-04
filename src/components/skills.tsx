import { motion } from "motion/react";
import type { Variants } from "motion/react";
import type { FC } from "react";

import { ClueTag } from "@/components/clue-tag";
import { SectionHeading } from "@/components/section-heading";
import { SKILLS } from "@/constants/content";
import { useSectionInView } from "@/hooks/active-section";

const TAG_VARIANTS: Variants = {
  initial: { opacity: 0, y: 16 },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.025 * index },
  }),
  // A key tag swinging on its hole.
  swing: {
    rotate: [0, -7, 5, -2, 0],
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export const Skills: FC = () => {
  const sectionInView = useSectionInView("Skills");

  return (
    <motion.section
      {...sectionInView}
      id="skills"
      className="w-full max-w-3xl scroll-mt-28 py-16 sm:py-24"
    >
      <SectionHeading room="III" title="Keychains" />
      <ul className="flex flex-wrap justify-center gap-2.5">
        {SKILLS.map((skill, index) => (
          <motion.li
            key={skill}
            variants={TAG_VARIANTS}
            initial="initial"
            whileInView="animate"
            whileHover="swing"
            viewport={{ once: true }}
            custom={index}
            className="flex origin-left cursor-default items-center gap-2.5 rounded-md rounded-l-2xl border border-rule bg-panel py-2 pr-4 pl-2.5 text-sm font-medium shadow-sm transition-colors hover:border-brass/60"
          >
            <span
              aria-hidden
              className="size-2 rounded-full bg-paper ring-1 ring-steel/60"
            />
            {skill}
          </motion.li>
        ))}
      </ul>
      <div className="mt-8 flex justify-center">
        <ClueTag clue="diamond" />
      </div>
    </motion.section>
  );
};
