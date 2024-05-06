import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import rebind from "@/public/rebind_image.png";
import txtr from "@/public/txtr_image.png";
import blogapp from "@/public/blogapp_image.png";
import { SiGithub, SiLinkedin, SiX } from "react-icons/si";
import { ImLink } from "react-icons/im";
import { LuGraduationCap } from "react-icons/lu";

export const links = [
    {
        name: "Home",
        hash: "#home",
    },
    // {
    //     name: "About",
    //     hash: "#about",
    // },
    // {
    //     name: "Experience",
    //     hash: "#experience",
    // },
    {
        name: "Projects",
        hash: "#projects",
    },
    {
        name: "Skills",
        hash: "#skills",
    },
    {
        name: "Contact",
        hash: "#contact",
    },
] as const;

// export const experiencesData = [
//     {
//         title: "Web Developer Intern • Marriott International, Inc.",
//         location: "Hyderabad, India",
//         description:
//             "I worked as a web developer intern for my client, Marriott and worked on Express.js and Node.js",
//         icon: React.createElement(CgWorkAlt),
//         date: "Jan 2024 - April 2024",
//     },

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
        title: "ReBind",
        description:
            "A note-taking SaaS application built with Next.js 14",
        tags: ["Next.js", "Kinde", "Supabase", "Prisma", "Tailwind", "Shadcn UI", "Stripe", "Typescript"],
        imageUrl: rebind,
        githublink: "https://github.com/saurabhparyani/rebind",
        website: "https://rebind.saurabhparyani.dev/",
        githubicon: SiGithub,
        websiteicon: ImLink
    },
    {
        title: "TXTR",
        description:
            "A realtime chat app that lets users send messages super fast!",
        tags: ["Next.js", "Redis", "Zod", "Pusher", "Tailwind", "TypeScript"],
        imageUrl: txtr,
        githublink: "https://github.com/saurabhparyani/txtr",
        website: "https://txtr.vercel.app/",
        githubicon: SiGithub,
        websiteicon: ImLink
    },
    {
        title: "blogapp",
        description:
            "A blog-app like Medium where users can create blog posts, view them and update them.",
        tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
        imageUrl: blogapp,
        githublink: "https://github.com/saurabhparyani/blogapp",
        website: "https://blog-saurabhparyani.vercel.app/",
        githubicon: SiGithub,
        websiteicon: ImLink
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