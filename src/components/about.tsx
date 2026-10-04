import { motion } from "motion/react";
import type { FC } from "react";
import { HiDownload } from "react-icons/hi";

import { ClueTag } from "@/components/clue-tag";
import { Cryptex } from "@/components/cryptex";
import { DialFrame } from "@/components/dial-frame";
import { PillLink } from "@/components/pill-link";
import { FIRST_NAME, SOCIALS } from "@/constants/content";
import { useSectionInView } from "@/hooks/active-section";

const RISE = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
};

export const About: FC = () => {
  const sectionInView = useSectionInView("Home");

  return (
    <motion.section
      {...sectionInView}
      id="home"
      className="flex min-h-[calc(100svh-4rem)] w-full max-w-5xl scroll-mt-36 flex-col-reverse items-center justify-center gap-20 py-12 md:gap-12 md:flex-row md:justify-between"
    >
      <div className="max-w-xl">
        <motion.p
          {...RISE}
          className="font-mono text-xs tracking-[0.3em] text-brass uppercase"
        >
          Room I · The introduction
        </motion.p>
        <h1 className="mt-4 font-display text-4xl leading-tight font-medium sm:text-5xl">
          Hi, I'm
          <br />
          <span className="mt-2 inline-block font-mono text-3xl font-semibold sm:text-5xl">
            <Cryptex word={FIRST_NAME} />
          </span>
        </h1>
        <motion.p
          {...RISE}
          transition={{ delay: 0.3 }}
          className="mt-6 text-lg leading-relaxed text-muted"
        >
          A <strong className="text-ink">full-stack developer</strong> at{" "}
          <a
            href="https://tribechat.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-ink underline decoration-brass/60 underline-offset-4 transition-colors hover:decoration-brass"
          >
            Tribe
          </a>
          , building a modern group chat app with{" "}
          <strong className="text-ink">React Native</strong> and{" "}
          <strong className="text-ink">Ruby on Rails</strong>. Have a look
          around. Every room hides a clue, and the exit is locked.
        </motion.p>
        <motion.div
          {...RISE}
          transition={{ delay: 0.45 }}
          className="mt-8 flex flex-wrap items-center gap-3"
        >
          <PillLink href="/CV.pdf" download>
            <HiDownload aria-hidden className="size-3.5" />
            Download CV
          </PillLink>
          {SOCIALS.map(({ link, label, Icon }) => (
            <a
              key={label}
              href={link}
              target="_blank"
              rel="noopener noreferrer me"
              aria-label={label}
              className="flex size-10 items-center justify-center rounded-full border border-rule bg-panel text-muted transition hover:-translate-y-0.5 hover:border-brass hover:text-brass"
            >
              <Icon className="size-4" />
            </a>
          ))}
        </motion.div>
      </div>
      <div className="relative">
        <DialFrame>
          <img
            src="/image.webp"
            alt="Portrait of Saurabh Paryani"
            width={819}
            height={806}
            fetchPriority="high"
            className="size-full rounded-full object-cover"
          />
        </DialFrame>
        <ClueTag
          clue="circle"
          className="absolute top-[97%] left-1/2 -translate-x-1/2"
        />
      </div>
    </motion.section>
  );
};
