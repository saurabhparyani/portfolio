"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";
import { motion } from "framer-motion";
import { Card } from "./Card";

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
    <section id="experience" ref={ref} className="scroll-mt-28 mb-8 sm:mb-16">
      <SectionHeading>My experience</SectionHeading>
      <div className="max-w-4xl mx-auto">
        {experiencesData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="mb-8"
          >
            <Card>
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div
                    className={`mr-6 p-3 rounded-full ${
                      theme === "light" ? "bg-white/80" : "bg-white/20"
                    } transform hover:scale-110 transition-transform duration-200`}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-2xl mb-1 tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-base text-gray-600 dark:text-gray-400 font-medium">
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
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
