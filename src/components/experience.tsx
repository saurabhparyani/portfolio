import { motion } from "motion/react";
import type { FC } from "react";

import { CaseFile } from "@/components/case-file";
import { SectionHeading } from "@/components/section-heading";
import { EXPERIENCES } from "@/constants/content";
import { useSectionInView } from "@/hooks/active-section";

export const Experience: FC = () => {
  const sectionInView = useSectionInView("Experience");

  return (
    <motion.section
      {...sectionInView}
      id="experience"
      className="w-full max-w-3xl scroll-mt-28 py-16 sm:py-24"
    >
      <SectionHeading room="II" title="Case files" />
      <ol className="flex flex-col gap-5">
        {EXPERIENCES.map((item, index) => (
          <CaseFile
            key={item.company}
            number={EXPERIENCES.length - index}
            order={index}
            defaultOpen={index === 0}
            title={item.title}
            company={item.company}
            companyLink={item.companyLink}
            location={item.location}
            date={item.date}
            description={item.description}
            clue={"clue" in item ? item.clue : undefined}
          />
        ))}
      </ol>
    </motion.section>
  );
};
