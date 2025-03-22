import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Projects } from "@/components/Projects";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projects | Isaac Levine",
  description:
    "Isaac Levine is a software engineer and CS student at Northeastern University, building products at the intersection of tech and community. Follow his journey in software development, startups, and tech.",
};

export default function ProjectPage() {
  return (
    <Container>
      <span className="text-4xl">🚀</span>
      <Heading className="font-black mb-4">
        {" "}
        What I&apos;ve been working on
      </Heading>
      <Paragraph className="mb-8">
        You can find more projects on my{" "}
        <Link
          className="underline text-blue-500"
          href="https://github.com/isaac-levine"
          target="_blank"
        >
          GitHub
        </Link>
        .
      </Paragraph>
      <Projects />
    </Container>
  );
}
