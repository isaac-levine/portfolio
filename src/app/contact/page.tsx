import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Paragraph } from "@/components/Paragraph";
import { socials } from "@/constants/socials";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Isaac Levine",
  description:
    "Isaac Levine is a software engineer and CS student at Northeastern University, building products at the intersection of tech and community. Follow his journey in software development, startups, and tech.",
};

export default function Projects() {
  return (
    <Container>
      <Heading className="font-black mb-10">Contact Me</Heading>
      <Paragraph className="mb-10 max-w-xl">
        <a href="mailto:isaacmlevine4@gmail.com" className="inline-block transition-all hover:font-bold hover:scale-105">isaacmlevine4@gmail.com</a>
      </Paragraph>
      <div className="flex items-center gap-4">
        {socials.map((social, index) => {
          const Icon = social.icon;
          return (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-500 hover:text-neutral-800 transition-all hover:scale-110"
            >
              <Icon size={24} />
            </a>
          );
        })}
      </div>
    </Container>
  );
}
