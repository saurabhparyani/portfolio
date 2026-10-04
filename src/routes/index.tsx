import { createFileRoute } from "@tanstack/react-router";
import type { FC } from "react";

import { About } from "@/components/about";
import { Experience } from "@/components/experience";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { SectionDivider } from "@/components/section-divider";
import { Skills } from "@/components/skills";
import { ActiveSectionContextProvider } from "@/context/active-section-context";

const Home: FC = () => (
  <>
    <div
      aria-hidden
      className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#272525]"
    />
    <div
      aria-hidden
      className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"
    />
    <div className="pt-28 sm:pt-36">
      <ActiveSectionContextProvider>
        <Header />
        <main className="flex flex-col items-center px-4">
          <About />
          <SectionDivider />
          <Experience />
          <Skills />
        </main>
        <Footer />
      </ActiveSectionContextProvider>
    </div>
  </>
);

export const Route = createFileRoute("/")({
  component: Home,
});
