import About from "@/components/About";
import Projects from "@/components/Projects";
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
    </main>
  )
}