import fireplaceImg from "/public/images/fireplace-dashboard.png";
import boilerbaseImg from "/public/images/boilerbase-dashboard.png";
import intellibetImg from "/public/images/intellibet-dashboard.png";
import fileSystemImg from "/public/images/filesystem-dashboard.png";
import geoGeniusImg from "/public/images/geogenius-dashboard.png";
import unixShellImg from "/public/images/unixshell-dashboard.png";
import photoshopImg from "/public/images/photoshop-dashboard.png";
import laxMatchImg from "/public/images/laxmatch-dashboard.png";
import findRxImg from "/public/images/findrx-dashboard.png";
// import frontstepImg from "/public/images/frontstep-dashboard.png";
import frontstepImg from "/public/images/frontstep-dashboard3.png";
import { StaticImageData } from "next/image";

export interface Project {
  href?: string;
  title: string;
  description: string;
  thumbnail: StaticImageData;
  stack: string[];
  slug: string;
  githubLink?: string;
  demo?: string;
}

export const projects: Project[] = [
  {
    href: "https://frontstep.ai?utm_source=portfolio",
    title: "frontstep.ai",
    description:
      "AI-powered text automation for real estate agents that syncs with popular CRMS like CINC and FollowUpBoss to instantly qualify new leads 24/7.",
    thumbnail: frontstepImg,
    stack: [
      "React.js",
      "TypeScript",
      "Twilio API",
      "Vite",
      "Clerk Auth",
      "Tailwind",
    ],
    slug: "frontstep",
    demo: "https://www.youtube.com/watch?v=vGrRwrFhySc",
  },
  {
    href: "https://findrx.vercel.app?utm_source=portfolio",
    title: "findrx.org",
    description:
      "Landing page, dashboard, and intake form all rebuilt in one weekend for FindRx, a company that helps patients find medications in shortage.",
    thumbnail: findRxImg,
    stack: ["React.js", "TypeScript", "Vite", "Clerk Auth", "Tailwind"],
    slug: "findrx",
  },
  {
    href: "https://boilerbase.io?utm_source=portfolio",
    title: "boilerbase.io",
    description:
      "Open-source boilerplate generator and community marketplace. Create custom full-stack SaaS templates or explore community-reviewed boilerplates. Features smart code generation, transparent community ratings, and modern stack support.",
    thumbnail: boilerbaseImg,
    stack: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "NextAuth.js",
      "Tailwind",
    ],
    slug: "boilerbase",
    githubLink: "https://www.github.com/isaac-levine/boilerbase",
  },
  {
    href: "https://app.makefireplace.com",
    title: "makefireplace.com",
    description:
      "Community management platform for college student organizations. Built with React Native and Next.js, featuring organization discovery, member management, and community engagement tools.",
    thumbnail: fireplaceImg,
    stack: ["React.js", "Node.js", "React Native", "Tailwind", "PostgreSQL"],
    slug: "fireplace",
    githubLink: "https://github.com/makefireplace",
  },

  {
    href: "https://intellibet.io?utm_source=portfolio",
    title: "intellibet.io",
    description:
      "AI-powered sports betting sentiment analysis tool featuring customizable watch lists, real-time sentiment tracking, and intuitive dashboard display of sentiment data.",
    thumbnail: intellibetImg,
    stack: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Stripe",
      "Tailwind",
    ],
    slug: "intellibet",
    githubLink: "https://github.com/isaac-levine/intellibet",
  },
  {
    title: "File System",
    description:
      "Built a complete file system using 1MB virtual disk that supports all basic file/directory operations.",
    thumbnail: fileSystemImg,
    stack: ["C", "Unix"],
    slug: "file-system",
    githubLink: "https://github.com/isaac-levine/file-system",
  },
  {
    href: "https://country-game-project.netlify.app/#/welcome",
    title: "GeoGenius",
    description:
      "Country guessing game that also supports user authentication, search of users and countries with filters, following between users, travel bucket list creation, profile management, global leaderboard display, and more.",
    thumbnail: geoGeniusImg,
    stack: ["React", "Express.js", "Node.js", "MongoDB"],
    slug: "geogenius",
    githubLink: "https://github.com/isaac-levine/country-game",
  },
  {
    title: "Unix Shell",
    description:
      "Command-line interface written in C for Unix-like systems that supports all standard commands and advanced shell functionalities like sequencing, piping, and input/output redirection.",
    thumbnail: unixShellImg,
    stack: ["C", "Unix"],
    slug: "unix-shell",
    githubLink: "https://github.com/isaac-levine/unix-shell",
  },
  {
    title: "Photoshop Clone",
    description:
      "Image editing application that supports 10 advanced image operations and uploading/saving files to local machine.",
    thumbnail: photoshopImg,
    stack: ["Java", "JSwing", "JUnit"],
    slug: "photoshop",
    githubLink: "https://github.com/isaac-levine/photoshop",
  },
  {
    title: "Lax-Match",
    description:
      "Interactive React quiz app that recommends a specific lacrosse stick to the user based on in-game tendencies and playstyle.",
    thumbnail: laxMatchImg,
    stack: ["React"],
    slug: "lax-match",
    githubLink: "https://github.com/isaac-levine/lax-match",
  },
];
