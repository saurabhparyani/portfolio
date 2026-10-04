import { createFileRoute } from "@tanstack/react-router";
import type { FC } from "react";

import { About } from "@/components/about";
import { ExitLock } from "@/components/exit-lock";
import { Experience } from "@/components/experience";
import { Footer } from "@/components/footer";
import { Gears } from "@/components/gears";
import { Header } from "@/components/header";
import { Skills } from "@/components/skills";
import { Workshop } from "@/components/workshop";
import { ActiveSectionContextProvider } from "@/context/active-section-context";

const Home: FC = () => (
  <ActiveSectionContextProvider>
    <Gears />
    <Header />
    <main className="flex flex-col items-center px-4 pt-12 sm:pt-16">
      <About />
      <Experience />
      <Skills />
      <Workshop />
      <ExitLock />
    </main>
    <Footer />
  </ActiveSectionContextProvider>
);

export const Route = createFileRoute("/")({
  component: Home,
});
