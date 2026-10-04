import { motion } from "motion/react";
import type { FC } from "react";

import { SectionHeading } from "@/components/section-heading";
import { SKILLS } from "@/constants/content";
import { useSectionInView } from "@/hooks/active-section";

const FADE_IN_VARIANTS = {
  initial: { opacity: 0, y: 100 },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.05 * index },
  }),
};

export const Skills: FC = () => {
  const sectionInView = useSectionInView("Skills");

  return (
    <motion.section
      {...sectionInView}
      id="skills"
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {SKILLS.map((skill, index) => (
          <motion.li
            className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
            key={skill}
            variants={FADE_IN_VARIANTS}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </motion.section>
  );
};
