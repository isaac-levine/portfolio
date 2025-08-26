import { Contact } from "@/components/Contact";
import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Contact | Isaac Levine",
  description:
    "Isaac Levine is a software engineer and CS student at Northeastern University, building products at the intersection of tech and community. Follow his journey in software development, startups, and tech.",
};

export default function Projects() {
  return (
    <Container>
      <Heading className="font-black mb-2">Contact Me</Heading>
      <Paragraph className="font-bold my-10 max-w-xl">
        <a href="mailto:isaac@frontstep.ai">isaac@frontstep.ai</a>
      </Paragraph>
      {/* <Contact /> */}
    </Container>
  );
}
