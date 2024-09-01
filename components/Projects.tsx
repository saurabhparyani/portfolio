"use client";
import React, { useState } from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";
import { Card } from "./Card";
import { Circle } from "lucide-react";

const ITEMS_PER_PAGE = 4;

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);
  const [activeTab, setActiveTab] = useState("Featured");
  const [currentPage, setCurrentPage] = useState(0);

  const tabs = [
    "Featured",
    "Full-Stack",
    "Frontend",
    "Backend",
    "Miscellaneous",
  ];

  const filteredProjects = projectsData.filter((project) => {
    return project.projectTabs.includes(activeTab as any);
  });

  const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE);

  const handlePageClick = (pageIndex: number) => {
    setCurrentPage(pageIndex);
  };

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    setCurrentPage(0); // Reset to first page when tab changes
  };

  const paginatedProjects = filteredProjects.slice(
    currentPage * ITEMS_PER_PAGE,
    (currentPage + 1) * ITEMS_PER_PAGE
  );

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>My Projects</SectionHeading>
      {/* TAB GROUP */}
      <div className="flex flex-wrap items-center justify-center mb-8 gap-2 md:gap-5 text-nowrap text-xs md:text-base mx-4 md:mx-0">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => handleTabClick(tab)}
            className={`rounded-full px-3 py-1 md:px-4 md:py-2 text-normal font-medium transition-all duration-150 hover:bg-purple-400 dark:text-gray-800 dark:hover:bg-purple-200 ${
              activeTab === tab
                ? "dark:bg-purple-400 bg-purple-200"
                : "bg-gray-200"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
        {paginatedProjects.length === 0 ? (
          <div className="text-center text-lg col-span-full">
            Coming Soon...
          </div>
        ) : (
          paginatedProjects.map((project, index) => (
            <Card key={index}>
              <Project {...project} />
            </Card>
          ))
        )}
      </div>
      <div className="flex justify-center mt-8">
        {Array.from({ length: totalPages }).map((_, pageIndex) => (
          <Circle
            key={pageIndex}
            className={`w-3 h-3 mx-2 fill-current cursor-pointer ${
              currentPage === pageIndex ? "text-purple-500" : "text-gray-400"
            }`}
            onClick={() => handlePageClick(pageIndex)}
          />
        ))}
      </div>
    </section>
  );
}
