import { Contact } from "@/components/Contact";
import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
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
      <span className="text-4xl">✉️</span>
      <Heading className="font-black mb-2">Contact Me</Heading>
      <Paragraph className="mb-10 max-w-xl">
        Feel free to reach out me via email, and I will get back to you as soon
        as I can!{" "}
      </Paragraph>
      <Paragraph className="font-bold mb-10 max-w-xl">
        <a href="mailto:isaacmlevine4@gmail.com">isaacmlevine4@gmail.com</a>
      </Paragraph>
      {/* <Contact /> */}
    </Container>
  );
}
