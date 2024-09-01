"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";
import { motion } from "framer-motion";

export default function Experience() {
  const { ref, inView } = useSectionInView("Experience");
  const { theme } = useTheme();
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-5 sm:mb-12">
      <SectionHeading>My experience</SectionHeading>
      <div className="max-w-3xl mx-auto">
        {experiencesData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="mb-12"
          >
            <div
              className={`p-6 rounded-lg ${
                theme === "light"
                  ? "bg-gray-100 shadow-md"
                  : "bg-white/5 border border-white/10"
              }`}
            >
              <div className="flex items-center mb-4">
                <div
                  className={`mr-4 p-2 rounded-full ${
                    theme === "light" ? "bg-white" : "bg-white/15"
                  }`}
                >
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-xl">{item.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {item.date}
                  </p>
                </div>
              </div>
              <p className="font-normal mb-2">{item.location}</p>
              <p className="text-gray-700 dark:text-white/75">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
