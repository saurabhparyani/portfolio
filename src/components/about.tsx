import { motion } from "motion/react";
import type { FC } from "react";
import { HiDownload } from "react-icons/hi";

import { useSectionInView } from "@/hooks/active-section";

export const About: FC = () => {
  const sectionInView = useSectionInView("Home");

  return (
    <motion.section
      {...sectionInView}
      id="home"
      className="min-h-[60vh] flex flex-col md:flex-row items-center scroll-mt-36"
    >
      <div className="flex flex-col md:ml-40 mb-8 md:mb-0">
        <h1 className="text-4xl lg:text-7xl font-bold">
          Hello there! 👋
          <br />
          I'm{" "}
          <span className="underline underline-offset-8 decoration-black dark:decoration-white">
            Saurabh
          </span>
          .
        </h1>
        <p className="w-auto text-2xl pt-8 dark:text-gray-300">
          I'm a <strong>full-stack developer</strong> at{" "}
          <a
            href="https://tribechat.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 font-bold"
          >
            Tribe
          </a>{" "}
          building a modern group chat app, upskilling myself in{" "}
          <strong>React Native and Ruby on Rails!</strong>
        </p>
        <motion.div
          className="flex sm:flex-row justify-start gap-4 pt-5 text-lg font-medium"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <a
            className="group bg-white px-5 py-2 text-sm md:text-base md:px-7 md:py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
            href="/CV.pdf"
            download
          >
            Download CV
            <HiDownload
              aria-hidden
              className="opacity-60 group-hover:translate-y-1 transition"
            />
          </a>
        </motion.div>
      </div>
      <motion.div
        className="ml-4 mr-4 md:mr-44 w-48 md:w-auto"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "tween", duration: 0.2 }}
      >
        <img
          src="/image.png"
          alt="Portrait of Saurabh Paryani"
          width={520}
          height={512}
          fetchPriority="high"
          className="rounded-full object-cover shadow-xl"
        />
      </motion.div>
    </motion.section>
  );
};
