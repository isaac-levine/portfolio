import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { TechStack } from "@/components/TechStack";
import Image from "next/image";

export default function Home() {
  return (
    <Container>
      <span className="text-4xl">👋</span>
      <Heading className="font-black">Hi there! I&apos;m Isaac</Heading>
      <Paragraph className="max-w-xl mt-4">
        I&apos;m a backend software engineer and CS student at Northeastern who
        loves <Highlight>building products</Highlight> that solve real problems.
      </Paragraph>
      <Paragraph className="max-w-xl mt-4">
        I&apos;ve worked across <Highlight>frontend</Highlight>,{" "}
        <Highlight>backend</Highlight>, <Highlight>full-stack</Highlight>, and{" "}
        <Highlight>DevOps</Highlight> roles, ultimately finding my passion in
        backend development and system architecture.
      </Paragraph>
      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
      >
        What I&apos;ve been working on
      </Heading>
      <Products />
      <TechStack />
    </Container>
  );
}
