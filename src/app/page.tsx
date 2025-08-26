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
      <div className="flex justify-start mb-6">
        <Image
          src="/images/headshot.png"
          alt="Isaac Levine"
          width={150}
          height={150}
          className="rounded-full border-2 border-black-200 shadow-lg"
        />
      </div>
      <Heading
        as="h1"
        className="font-black text-lg md:text-lg lg:text-lg mt-10 mb-4"
      >
        Isaac Levine
      </Heading>
      <Paragraph className="max-w-xl mt-4">
        I&apos;m a recent CS graduate from Northeastern University and a backend
        software engineer at CarGurus. I&apos;ve shipped products across
        Frontend, Backend, Full-stack, and DevOps roles for startups and large
        companies alike.
      </Paragraph>
      <Paragraph className="max-w-xl mt-4">
        Right now, I&apos;m building{" "}
        <a
          href="https://www.frontstep.ai"
          style={{ color: "blue", textDecoration: "underline" }}
          target="_blank"
        >
          frontstep.ai
        </a>
        , a platform for rental brokerages and property managers to automate
        their inbound lead communication using conversational AI. It
        automatically integrates with Zillow and responds to new leads based on
        your qualification questions, notifying you when they are qualified and
        ready for a showing.
      </Paragraph>
      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-10 mb-4"
      >
        What I&apos;ve been working on
      </Heading>
      <Projects />
      <TechStack />
    </Container>
  );
}
