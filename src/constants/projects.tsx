import fireplaceImg from "/public/images/fireplace-dashboard.png";
import boilerbaseImg from "/public/images/boilerbase-dashboard.png";
import intellibetImg from "/public/images/intellibet-dashboard.png";
import fileSystemImg from "/public/images/filesystem-dashboard.png";
import geoGeniusImg from "/public/images/geogenius-dashboard.png";
import unixShellImg from "/public/images/unixshell-dashboard.png";
import photoshopImg from "/public/images/photoshop-dashboard.png";
import laxMatchImg from "/public/images/laxmatch-dashboard.png";
import findRxImg from "/public/images/findrx-dashboard.png";
import frontstepImg from "/public/images/frontstep-dashboard.png";
import { StaticImageData } from "next/image";
// import githubImg from "/public/images/github-placeholder-dashboard.png";

export interface Project {
  href: string;
  title: string;
  description: string;
  thumbnail: StaticImageData;
  stack: string[];
  slug?: string;
  githubLink?: string;
}

export const projects: Project[] = [
  {
    href: "https://frontstep.vercel.app?utm_source=portfolio",
    title: "Frontstep.ai",
    description:
      "AI-powered text automation for real estate agents that syncs with popular CRMS like CINC and FollowUpBoss to instantly qualify new leads 24/7. Built in <24 hours.",
    thumbnail: frontstepImg,
    stack: [
      "React.js",
      "TypeScript",
      "Twilio API",
      "Vite",
      "Clerk Auth",
      "Tailwind",
    ],
    slug: "findrx",
    // githubLink: "https://frontstep.vercel.app?utm_source=portfolio",
  },
  {
    href: "https://findrx.vercel.app?utm_source=portfolio",
    title: "FindRx",
    description:
      "Landing page, dashboard, and intake form all rebuilt in one weekend for FindRx, a company that helps patients find medications in shortage.",
    thumbnail: findRxImg,
    stack: ["React.js", "TypeScript", "Vite", "Clerk Auth", "Tailwind"],
    slug: "findrx",
    // githubLink: "https://findrx.vercel.app?utm_source=portfolio",
  },
  {
    href: "https://boilerbase.io?utm_source=portfolio",
    title: "Boilerbase",
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
    title: "Fireplace",
    description:
      "Community management platform for college student organizations. Built with React Native and Next.js, featuring organization discovery, member management, and community engagement tools.",
    thumbnail: fireplaceImg,
    stack: ["React Native", "Next.js", "Node.js", "PostgreSQL"],
    slug: "fireplace",
    githubLink: "https://github.com/makefireplace",
  },

  {
    href: "https://intellibet.io?utm_source=portfolio",
    title: "Intellibet",
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
    href: "https://github.com/isaac-levine/file-system",
    title: "File System",
    description:
      "Built a complete file system using 1MB virtual disk that supports all basic file/directory operations.",
    thumbnail: fileSystemImg,
    stack: ["C", "Unix"],
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
    href: "https://github.com/isaac-levine/unix-shell",
    title: "Unix Shell",
    description:
      "Command-line interface written in C for Unix-like systems that supports all standard commands and advanced shell functionalities like sequencing, piping, and input/output redirection.",
    thumbnail: unixShellImg,
    stack: ["C", "Unix"],
    githubLink: "https://github.com/isaac-levine/unix-shell",
  },
  {
    href: "https://github.com/isaac-levine/photoshop",
    title: "Photoshop Clone",
    description:
      "Image editing application that supports 10 advanced image operations and uploading/saving files to local machine.",
    thumbnail: photoshopImg,
    stack: ["Java", "JSwing", "JUnit"],
    githubLink: "https://github.com/isaac-levine/photoshop",
  },
  {
    href: "https://github.com/isaac-levine/lax-match",
    title: "Lax-Match",
    description:
      "Interactive React quiz app that recommends a specific lacrosse stick to the user based on in-game tendencies and playstyle.",
    thumbnail: laxMatchImg,
    stack: ["React"],
    githubLink: "https://github.com/isaac-levine/lax-match",
  },
];
