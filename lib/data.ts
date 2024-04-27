import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import rebind from "@/public/rebind_image.png";
import txtr from "@/public/txtr_image.png";
import blogapp from "@/public/blogapp_image.png";
import { SiGithub, SiLinkedin, SiX } from "react-icons/si";

export const links = [
    {
        name: "Home",
        hash: "#home",
    },
    {
        name: "About",
        hash: "#about",
    },
    {
        name: "Projects",
        hash: "#projects",
    },
    {
        name: "Skills",
        hash: "#skills",
    },
    //   {
    //     name: "Experience",
    //     hash: "#experience",
    //   },
    {
        name: "Contact",
        hash: "#contact",
    },
] as const;

// export const experiencesData = [

// ] as const;

export const socials = [
    {
        link: "https://www.linkedin.com/in/saurabhparyani/",
        label: "LinkedIn",
        Icon: SiLinkedin
    },
    {
        link: "https://www.github.com/saurabhparyani",
        label: "GitHub",
        Icon: SiGithub
    },
    {
        link: "https://twitter.com/saurabhbuilds",
        label: "X",
        Icon: SiX
    }
] as const;

export const projectsData = [
    {
        title: "rebind",
        description:
            "desc title 1",
        tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
        imageUrl: rebind,
    },
    {
        title: "txtr",
        description:
            "desc title 2",
        tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
        imageUrl: txtr,
    },
    {
        title: "blogapp",
        description:
            "desc title 3",
        tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
        imageUrl: blogapp,
    },
] as const;

export const skillsData = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Git",
    "Tailwind",
    "Prisma",
    "MongoDB",
    "Recoil",
    "Express",
    "PostgreSQL",
    "Python",
    "Django",
    "Framer Motion",
] as const;