import { motion } from "motion/react";
import type { FC } from "react";
import { CgWorkAlt } from "react-icons/cg";

import { Card } from "@/components/card";
import { SectionHeading } from "@/components/section-heading";
import { EXPERIENCES } from "@/constants/content";
import { useSectionInView } from "@/hooks/active-section";

export const Experience: FC = () => {
  const sectionInView = useSectionInView("Experience");

  return (
    <motion.section
      {...sectionInView}
      id="experience"
      className="scroll-mt-28 mb-8 sm:mb-16"
    >
      <SectionHeading>My experience</SectionHeading>
      <div className="max-w-4xl mx-auto">
        {EXPERIENCES.map((item, index) => (
          <motion.div
            key={item.company}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="mb-8"
          >
            <Card>
              <article className="p-8">
                <div className="flex items-center mb-6">
                  <div className="mr-6 p-3 rounded-full bg-white/80 dark:bg-white/20 hover:scale-110 transition-transform duration-200">
                    <CgWorkAlt aria-hidden />
                  </div>
                  <div className="flex-1">
                    <h3 className="flex flex-row items-center font-bold text-2xl mb-1 tracking-tight">
                      <span className="pr-1">{item.title}</span>
                      <span aria-hidden className="hidden md:block mx-2">
                        •
                      </span>
                      <a
                        href={item.companyLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block underline underline-offset-4 hover:scale-105 transition-transform duration-200"
                      >
                        {item.company}
                      </a>
                    </h3>
                    <p className="text-base text-gray-600 dark:text-gray-400 font-medium mb-3 md:mb-0">
                      {item.date}
                    </p>
                  </div>
                </div>
                <p className="font-semibold text-xl mb-3 text-gray-800 dark:text-gray-200">
                  {item.location}
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg font-medium">
                  {item.description}
                </p>
              </article>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};
