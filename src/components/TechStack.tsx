import Image from "next/image";
import React from "react";
import { Heading } from "./Heading";
import { twMerge } from "tailwind-merge";

export const TechStack = () => {
  const stack = [
    {
      title: "Java",
      src: "/images/logos/java.png",

      className: "h-10 w-20",
    },
    // {
    //   title: "Python",
    //   src: "/images/logos/python.png",

    //   className: "h-10 w-20",
    // },
    {
      title: "TypeScript",
      src: "/images/logos/typescript.png",

      className: "h-10 w-10",
    },
    {
      title: "JavaScript",
      src: "/images/logos/javascript.png",

      className: "h-10 w-10",
    },
    {
      title: "Spring Boot",
      src: "/images/logos/springboot.png",

      className: "h-10 w-20",
    },
    {
      title: "Node.js",
      src: "/images/logos/node.png",

      className: "h-10 w-12",
    },
    {
      title: "AWS",
      src: "/images/logos/aws.webp",

      className: "h-10 w-10",
    },
    {
      title: "Next.js",
      src: "/images/logos/next.png",

      className: "h-10 w-14",
    },

    // {
    //   title: "Figma",
    //   src: "/images/logos/figma.png",

    //   className: "h-10 w-8",
    // },
    // {
    //   title: "Framer Motion",
    //   src: "/images/logos/framer.webp",

    //   className: "h-10 w-10",
    // },

    {
      title: "React",
      src: "/images/logos/react.png",

      className: "h-10 w-10",
    },
    {
      title: "Tailwind",
      src: "/images/logos/tailwind.png",

      className: "h-10 w-24",
    },
    {
      title: "Vercel",
      src: "/images/logos/vercel.png",

      className: "h-10 w-24",
    },
  ];
  return (
    <div>
      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
      >
        My Tech Stack
      </Heading>
      <div className="flex flex-wrap">
        {stack.map((item) => (
          <Image
            src={item.src}
            key={item.src}
            width={`200`}
            height={`200`}
            alt={item.title}
            className={twMerge("object-contain mr-4 mb-4", item.className)}
          />
        ))}
      </div>
    </div>
  );
};
