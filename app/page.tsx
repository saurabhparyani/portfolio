import About from "@/components/About";
import Contact from "@/components/Contact";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
// import Experience from "@/components/Experience";
import SectionDivider from "@/components/section-divider";
import React from "react";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <About />
      <SectionDivider />
      {/* <Experience /> */}
      <Projects />
      <Skills />
      <Contact />
    </main>
  )
}