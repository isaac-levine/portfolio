import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Projects } from "@/components/Projects";
import { TechStack } from "@/components/TechStack";
import Image from "next/image";

export default function Home() {
  return (
    <Container>
      <div className="flex justify-start mb-2">
        {/* <Image
          src="/images/headshot.png"
          alt="Isaac Levine"
          width={150}
          height={150}
          className="rounded-full border-2 border-black-200 shadow-lg"
        /> */}
      </div>
      <Heading
        as="h1"
        className="font-black text-2xl md:text-2xl lg:text-2xl mb-4"
      >
        Isaac Levine
      </Heading>
      <Paragraph className="max-w-xl mt-4">
        I&apos;m a software developer living in Boston, MA. I previously co-founded <a href="https://frontstep.ai" style={{ color: "blue", textDecoration: "underline" }} target="_blank">frontstep.ai</a>, which was acquired by LeaseHub in January 2026.
      </Paragraph>
      <Paragraph className="max-w-xl mt-4">
        Today, I work as a software engineer at CarGurus, where I help build the product data platform.
      </Paragraph>
      <Paragraph className="max-w-xl mt-4">
        I've worked in Frontend, Backend, Full-stack, and DevOps roles for both startups and large companies. Sometimes I'll write about what I'm working on here, and you can find some of my past projects below, with more on my <a href="https://github.com/isaac-levine" style={{ color: "blue", textDecoration: "underline" }} target="_blank">GitHub</a>.

      </Paragraph>
      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-10 mb-4"
      >
        Some recent projects of mine
      </Heading>
      <Projects />
      <TechStack />
    </Container>
  );
}
