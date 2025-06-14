"use client";

import React, { useEffect } from "react";
import SectionHeading from "./section-heading";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";
import { motion } from "framer-motion";
import { Card } from "./Card";
import Link from "next/link";
import { ShimmerButton } from "./ui/shimmer-button";

export default function Experience() {
  const { ref, inView } = useSectionInView("Experience", 0.3);
  const { theme } = useTheme();
  const [isVisible, setIsVisible] = React.useState(false);

  useEffect(() => {
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
                  <div className="flex-1">
                    <div className="flex flex-row items-center">
                      <h3 className="font-bold text-2xl mb-1 tracking-tight">
                        {item.title}
                      </h3>
                      <span className="font-bold text-2xl mb-1 tracking-tight hidden md:block mx-2">
                        •
                      </span>
                      <Link href={item.companyLink} target="_blank">
                        <h3 className="font-bold text-2xl mb-1 tracking-tight underline underline-offset-4 hover:scale-105 transition-transform duration-200">
                          {item.company}
                        </h3>
                      </Link>
                    </div>
                    <p className="text-base text-gray-600 dark:text-gray-400 font-medium mb-3 md:mb-0">
                      {item.date}
                    </p>
                    {item.isCurrent && (
                      <div className="md:hidden">
                        <Link href={item.companyLink} target="_blank">
                          <ShimmerButton
                            borderRadius="12px"
                            className="text-sm font-semibold tracking-wide"
                          >
                            View Journey
                          </ShimmerButton>
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
                <p className="font-semibold text-xl mb-3 text-gray-800 dark:text-gray-200">
                  {item.location}
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg font-medium">
                  {item.description}
                </p>
              </div>
              {item.isCurrent && (
                <div className="hidden md:flex justify-end top-0 absolute right-0 p-8">
                  <Link href={item.companyLink} target="_blank">
                    <ShimmerButton
                      borderRadius="12px"
                      className="text-sm font-semibold tracking-wide"
                    >
                      View Journey
                    </ShimmerButton>
                  </Link>
                </div>
              )}
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
