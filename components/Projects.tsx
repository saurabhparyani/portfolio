"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";
import { Card } from "./Card";

export default function Projects() {
    const { ref } = useSectionInView("Projects", 0.5);

    return (
        <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
            <SectionHeading>My Projects</SectionHeading>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {projectsData.map((project, index) => (
                    <Card key={index}>
                        <Project {...project} />
                    </Card>
                ))}
            </div>
        </section>
    );
}