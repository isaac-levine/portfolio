import fireplaceImg from "/public/images/fireplace-dashboard.png";
import boilerbaseImg from "/public/images/boilerbase-dashboard.png";
import intellibetImg from "/public/images/intellibet-dashboard.png";
import fileSystemImg from "/public/images/filesystem-dashboard.png";
import geoGeniusImg from "/public/images/geogenius-dashboard.png";
import unixShellImg from "/public/images/unixshell-dashboard.png";
import photoshopImg from "/public/images/photoshop-dashboard.png";
import laxMatchImg from "/public/images/laxmatch-dashboard.png";
import rust from "/public/images/nextjs-analyzer-dashboard.png";
// import githubImg from "/public/images/github-placeholder-dashboard.png";

export const products = [
  {
    href: "https://www.boilerbase.io&utm_source=portfolio",
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
    githubLink: "https://www.boilerbase.io",
    // githubLink: "https://www.github.com/isaac-levine/boilerbase",
  },
  // {
  //   href: "https://github.com/isaac-levine/nextjs-analyzer",
  //   title: "[Work in Progress] NextJS Code Analyzer",
  //   description:
  //     "Building a Rust-based code analysis tool for NextJS. Currently, the tool generates an Abstract Syntax Tree for a given snippet of JavaScript/TypeScript code.",
  //   thumbnail: rust,
  //   stack: ["Rust"],
  //   slug: "nextjs-analyzer",
  //   githubLink: "https://github.com/isaac-levine/nextjs-analyzer",
  // },
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
    href: "https://www.intellibet.io",
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
    githubLink: "https://www.github.com/isaac-levine/intellibet",
  },
  {
    href: "https://www.github.com/isaac-levine/file-system",
    title: "File System",
    description:
      "Built a complete file system using 1MB virtual disk that supports all basic file/directory operations.",
    thumbnail: fileSystemImg,
    stack: ["C", "Unix"],
    githubLink: "https://www.github.com/isaac-levine/file-system",
  },
  {
    href: "https://country-game-project.netlify.app/#/welcome",
    title: "GeoGenius",
    description:
      "Country guessing game that also supports user authentication, search of users and countries with filters, following between users, travel bucket list creation, profile management, global leaderboard display, and more.",
    thumbnail: geoGeniusImg,
    stack: ["React", "Express.js", "Node.js", "MongoDB"],
    slug: "geogenius",
    githubLink: "https://www.github.com/isaac-levine/country-game",
  },
  {
    href: "https://www.github.com/isaac-levine/unix-shell",
    title: "Unix Shell",
    description:
      "Command-line interface written in C for Unix-like systems that supports all standard commands and advanced shell functionalities like sequencing, piping, and input/output redirection.",
    thumbnail: unixShellImg,
    stack: ["C", "Unix"],
    githubLink: "https://www.github.com/isaac-levine/unix-shell",
  },
  {
    href: "https://www.github.com/isaac-levine/photoshop",
    title: "Photoshop Clone",
    description:
      "Image editing application that supports 10 advanced image operations and uploading/saving files to local machine.",
    thumbnail: photoshopImg,
    stack: ["Java", "JSwing", "JUnit"],
    githubLink: "https://www.github.com/isaac-levine/photoshop",
  },
  {
    href: "https://www.github.com/isaac-levine/lax-match",
    title: "Lax-Match",
    description:
      "Interactive React quiz app that recommends a specific lacrosse stick to the user based on in-game tendencies and playstyle.",
    thumbnail: laxMatchImg,
    stack: ["React"],
    githubLink: "https://www.github.com/isaac-levine/lax-match",
  },
];
