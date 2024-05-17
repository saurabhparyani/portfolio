import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import rebind from "@/public/rebind_image.png";
import txtr from "@/public/txtr.png";
import tonic from "@/public/tonic.png"
import blogapp from "@/public/blogapp_image.png"
import portfolio from "@/public/portfolio.png";
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
//         title: "Web Developer Intern • Wells Fargo, Inc.",
//         location: "Hyderabad, India",
//         description:
//             "I worked as a web developer intern for my client, Wells Fargo and worked on...",
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
            "A note-taking SaaS application built with Next.js 14.",
        tags: ["Next.js", "Kinde", "Supabase", "Prisma", "Tailwind", "Shadcn UI", "Stripe", "Typescript"],
        imageUrl: rebind,
        githublink: "https://github.com/saurabhparyani/rebind",
        website: "https://rebind.saurabhparyani.dev/",
        githubicon: SiGithub,
        websiteicon: ImLink
    },
    {
        title: "Tonic",
        description:
            "A Healthcare doctor booking app for users and doctors.",
        tags: ["React", "Express", "MongoDB", "JWT", "Tailwind","Stripe","JavaScript"],
        imageUrl: tonic,
        githublink: "https://github.com/saurabhparyani/tonic",
        website: "https://tonic.saurabhparyani.dev",
        githubicon: SiGithub,
        websiteicon: ImLink
    },
    {
        title: "Portfolio",
        description:
            "A personal web development portfolio website to showcase my projects.",
        tags: ["Next.js","Tailwind", "Shadcn UI", "Framer", "EmailJS"],
        imageUrl: portfolio,
        githublink: "https://github.com/saurabhparyani/portfolio",
        website: "https://saurabhparyani.dev",
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
    "Python",
    "Node.js",
    "Express",
    "React",
    "Next.js",
    "Git",
    "Tailwind",
    "Zod",
    "Prisma",
    "MongoDB",
    "Recoil",
    "Redux",
    "PostgreSQL",
    "Redis",
    "Django",
    "Framer Motion",
] as const;