import { FaLinkedin } from "react-icons/fa6";
import { SiGithub, SiX } from "react-icons/si";

export const NAV_LINKS = [
  { name: "Home", hash: "#home" },
  { name: "Experience", hash: "#experience" },
  { name: "Skills", hash: "#skills" },
  { name: "Exit", hash: "#exit" },
] as const;

export type SectionName = (typeof NAV_LINKS)[number]["name"];

export const EXPERIENCES = [
  {
    title: "Full Stack Developer",
    company: "Tribe",
    companyLink: "https://tribechat.com/",
    location: "United States, Remote",
    description:
      "Here at Tribe, I'm building a next-gen group chat app using React Native, while also picking up Ruby on Rails to build the backend. Among some of the exciting features I've made here, one of my favorites is going to be building a complete end-to-end invite flow, making it super easy for users to invite their friends to the app. I've also been a key contributor to writing the code for some of the frequent emails we send out to our users in Ruby using the ActionMailer gem. I've integrated Perplexity and OpenAI to generate a link summary for every article posted in our chat and polished the UI of how those links appear, giving the ability to show/hide the summary for everyone.",
    date: "Jan 2025 - Present",
  },
  {
    title: "Intern",
    company: "SleekSyntax",
    companyLink: "https://sleeksyntax.com/",
    location: "Switzerland, Remote",
    description:
      "As an intern at SleekSyntax, I've had hands-on experience building a finance mobile application using React Native and Tailwind CSS, writing APIs in Nestjs. I also set up automated CI/CD pipelines using GitHub Actions for seamless integration and deployment. For storage and real-time updates, I integrated Firebase and Firestore.",
    date: "Nov 2024 - Dec 2024",
    // Stamped inside this (initially locked) file; see `CLUES.triangle`.
    clue: "triangle",
  },
] as const;

export const SOCIALS = [
  {
    link: "https://www.linkedin.com/in/saurabhparyani/",
    label: "LinkedIn",
    Icon: FaLinkedin,
  },
  {
    link: "https://github.com/saurabhparyani",
    label: "GitHub",
    Icon: SiGithub,
  },
  {
    link: "https://x.com/saurabhbuilds",
    label: "X",
    Icon: SiX,
  },
] as const;

export const SKILLS = [
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

export const FIRST_NAME = "Saurabh";

const VOWELS = new Set(["A", "E", "I", "O", "U"]);

// The exit puzzle. Rooms I and III have a tag with a symbol and a riddle;
// Room II's clue is stamped inside a locked case file. The lock's wheels are marked with the same symbols in a different
// order. Digits are derived from the content where possible, so the puzzle
// stays solvable if the content changes.
export const CLUES = {
  // Room I: the cryptex. S-A-U-R-A-B-H has three.
  circle: {
    riddle: "= vowels on my dials",
    digit: [...FIRST_NAME.toUpperCase()].filter((char) => VOWELS.has(char))
      .length,
  },
  // Room II: stamped inside the SleekSyntax file (Nov–Dec 2024).
  triangle: {
    stamp: "= months on this case",
    digit: 2,
  },
  // Room III: Ruby on Rails, React.js, React Native, Redux, Redis.
  diamond: {
    riddle: "= keys that start with R",
    digit: SKILLS.filter((skill) => skill.startsWith("R")).length,
  },
} as const;

export type ClueName = keyof typeof CLUES;

/** Left-to-right order of the wheels on the exit lock. */
export const WHEEL_ORDER = ["triangle", "diamond", "circle"] as const;
