import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import rebind from "@/public/rebind_image.png";
import tailwindmarketplace from "@/public/tailwind-marketplace.png";
import txtr from "@/public/txtr.png";
import tonic from "@/public/tonic.png";
import blogapp from "@/public/blogapp.png";
import trackrupee from "@/public/trackrupee.png";
import stockup from "@/public/stockup.png";
import lyra from "@/public/lyra.png";
import buzz from "@/public/buzz.png";
import avent from "@/public/avent.png";

import portfolio from "@/public/portfolio.png";
import { SiGithub, SiLinkedin, SiX } from "react-icons/si";
import { ImLink } from "react-icons/im";
import { LuGraduationCap } from "react-icons/lu";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
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

export const experiencesData = [
  {
    title: "Full Stack Developer",
    company: "Tribe",
    isCurrent: true,
    companyLink: "https://tribechat.com/",
    location: "United States, Remote",
    description:
      "Here at Tribe, I'm building a next-gen group chat app using React Native, while also picking up Ruby on Rails to build the backend. Among some of the exciting features I've made here, one of my favorites is going to be building a complete end-to-end invite flow, making it super easy for users to invite their friends to the app. I've also been a key contributor to writing the code for some of the frequent emails we send out to our users in Ruby using the ActionMailer gem. I've integrated Perplexity and OpenAI to generate a link summary for every article posted in our chat and polished the UI of how those links appear, giving the ability to show/hide the summary for everyone.",
    icon: React.createElement(CgWorkAlt),
    date: "Jan 2025 - Present",
  },
  {
    title: "Full Stack Developer",
    company: "SleekSyntax",
    companyLink: "https://sleeksyntax.com/",
    isCurrent: false,
    location: "Switzerland, Remote",
    description:
      "As a full stack developer at SleekSyntax, I've had hands-on experience building a finance mobile application using React Native and Tailwind CSS, writing APIs in Nestjs. I also set up automated CI/CD pipelines using GitHub Actions for seamless integration and deployment. For storage and real-time updates, I integrated Firebase and Firestore.",
    icon: React.createElement(CgWorkAlt),
    date: "Nov 2024 - Dec 2024",
  },
] as const;

export const socials = [
  {
    link: "https://www.linkedin.com/in/saurabhparyani/",
    label: "LinkedIn",
    Icon: SiLinkedin,
  },
  {
    link: "https://www.github.com/saurabhparyani",
    label: "GitHub",
    Icon: SiGithub,
  },
  {
    link: "https://twitter.com/saurabhbuilds",
    label: "X",
    Icon: SiX,
  },
] as const;

type Tab =
  | "Featured"
  | "Full-Stack"
  | "Mobile"
  | "Frontend"
  | "Backend"
  | "Miscellaneous";

export const projectsData = [
  {
    title: "Tailwind Marketplace",
    description:
      "A digital marketplace for tailwind components built using Nextjs 14.",
    tags: [
      "Next.js",
      "Kinde",
      "Prisma",
      "TailwindCSS",
      "Shadcn UI",
      "Stripe",
      "Resend",
      "Typescript",
    ],
    imageUrl: tailwindmarketplace,
    githublink: "https://github.com/saurabhparyani/tailwind-marketplace",
    website: "https://tailwind-marketplace.saurabhparyani.dev/",
    githubicon: SiGithub,
    websiteicon: ImLink,
    projectTabs: ["Featured", "Full-Stack"] as Tab[],
  },
  {
    title: "buzz.",
    description: "A video sharing platform built using Nestjs and GraphQL.",
    tags: [
      "Nestjs",
      "GraphQL",
      "ReactJs",
      "PostgreSQL",
      "Typescript",
      "Tanstack Router",
      "AWS S3",
      "Zustand",
    ],
    imageUrl: buzz,
    githublink: "https://github.com/saurabhparyani/buzzvid",
    website: "https://buzz-ruby.vercel.app/",
    githubicon: SiGithub,
    websiteicon: ImLink,
    projectTabs: ["Featured", "Full-Stack"] as Tab[],
  },

  {
    title: "Avent",
    description: "An AI travel planner built using React Native and Gemini",
    tags: [
      "React Native",
      "Expo Router",
      "TypeScript",
      "Gemini AI",
      "Firebase",
      "TailwindCSS",
    ],
    imageUrl: avent,
    githublink: "https://github.com/saurabhparyani/avent",
    website:
      "https://drive.google.com/file/d/1UbQjPsd1CdqOqducUJLfNspNC3GU2N6Z/view",
    githubicon: SiGithub,
    websiteicon: ImLink,
    projectTabs: ["Featured", "Mobile"] as Tab[],
  },

  {
    title: "Tonic",
    description: "A Healthcare doctor booking app for users and doctors.",
    tags: [
      "React",
      "Express",
      "MongoDB",
      "JWT",
      "Tailwind",
      "Stripe",
      "JavaScript",
    ],
    imageUrl: tonic,
    githublink: "https://github.com/saurabhparyani/tonic",
    website: "https://tonic.saurabhparyani.dev",
    githubicon: SiGithub,
    websiteicon: ImLink,
    projectTabs: ["Full-Stack"] as Tab[],
  },
  {
    title: "StockUp",
    description:
      "A comprehensive platform to manage and track your inventory products",
    tags: [
      "Next.js",
      "Node.js",
      "Express",
      "AWS EC2",
      "AWS RDS",
      "AWS S3",
      "AWS Amplify",
      "Recharts",
    ],
    imageUrl: stockup,
    githublink: "https://github.com/saurabhparyani/stockup",
    website: "https://main.d3p5lqo99idtuu.amplifyapp.com/",
    githubicon: SiGithub,
    websiteicon: ImLink,
    projectTabs: ["Full-Stack"] as Tab[],
  },
  {
    title: "Portfolio",
    description:
      "A personal web development portfolio website to showcase my projects.",
    tags: ["Next.js", "Tailwind", "Shadcn UI", "Framer", "EmailJS"],
    imageUrl: portfolio,
    githublink: "https://github.com/saurabhparyani/portfolio",
    website: "https://saurabhparyani.dev",
    githubicon: SiGithub,
    websiteicon: ImLink,
    projectTabs: ["Featured", "Frontend"] as Tab[],
  },
  {
    title: "Track Rupee",
    description:
      "A budget tracking app to help you manage and control your expenses and income!",
    tags: [
      "Next.js",
      "Prisma",
      "Tanstack Query",
      "Clerk",
      "Tailwind",
      "Recharts",
      "Zod",
    ],
    imageUrl: trackrupee,
    githublink: "https://github.com/saurabhparyani/track-rupee",
    website: "https://track-rupee.vercel.app/",
    githubicon: SiGithub,
    websiteicon: ImLink,
    projectTabs: ["Featured", "Full-Stack"] as Tab[],
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
    websiteicon: ImLink,
    projectTabs: ["Featured", "Full-Stack"] as Tab[],
  },
  {
    title: "ReBind",
    description: "A note-taking SaaS application built with Next.js 14.",
    tags: [
      "Next.js",
      "Kinde",
      "Supabase",
      "Prisma",
      "Tailwind",
      "Shadcn UI",
      "Stripe",
      "Typescript",
    ],
    imageUrl: rebind,
    githublink: "https://github.com/saurabhparyani/rebind",
    website: "https://rebind.saurabhparyani.dev/",
    githubicon: SiGithub,
    websiteicon: ImLink,
    projectTabs: ["Full-Stack"] as Tab[],
  },
  {
    title: "blogapp",
    description:
      "A blog-app like Medium where users can create blog posts, view them and update them.",
    tags: ["React", "Cloudflare Workers", "Hono", "Postgres", "Prisma", "zod"],
    imageUrl: blogapp,
    githublink: "https://github.com/saurabhparyani/blogapp",
    website: "https://blog-saurabhparyani.vercel.app/",
    githubicon: SiGithub,
    websiteicon: ImLink,
    projectTabs: ["Full-Stack"] as Tab[],
  },
  {
    title: "LyraAI",
    description:
      "A pure frontend app built to demonstrate an eye catching landing page for an AI company.",
    tags: [
      "React.js",
      "Next.js",
      "Framer Motion",
      "Lottie Files",
      "TailwindCSS",
    ],
    imageUrl: lyra,
    githublink: "https://github.com/saurabhparyani/lyra-ai-homepage",
    website: "https://lyra-ai-seo.vercel.app/",
    githubicon: SiGithub,
    websiteicon: ImLink,
    projectTabs: ["Frontend"] as Tab[],
  },
] as const;

export const skillsData = [
  "JavaScript",
  "TypeScript",
  "Python",
  "Ruby on Rails",
  "Node.js",
  "Express",
  "React.js",
  "React Native",
  "Expo Router",
  "Web Sockets",
  "Next.js",
  "Nestjs",
  "GraphQL",
  "Git",
  "TailwindCSS",
  "Zod",
  "Prisma",
  "MongoDB",
  "Redux",
  "Zustand",
  "PostgreSQL",
  "Redis",
  "MySQL",
  "Docker",
  "AWS",
  "Framer Motion",
] as const;
