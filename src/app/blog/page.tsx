import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { getAllBlogs } from "../../../lib/getAllBlogs";
import { Blogs } from "@/components/Blogs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs | Isaac Levine",
  description:
    "Isaac Levine is a software engineer and CS student at Northeastern University, building products at the intersection of tech and community. Follow his journey in software development, startups, and tech.",
};

export default async function Blog() {
  const blogs = await getAllBlogs();
  const data = blogs.map(({ component, ...meta }) => meta);

  return (
    <Container>
      {/* <span className="text-4xl">📝</span> */}
      <Heading className="font-black pb-4">Project Updates</Heading>
      {/* <Paragraph className="pb-10">
        I occasionally write about software engineering, project updates,
        startups, technology, and more.
      </Paragraph> */}
      <Blogs blogs={data} />
    </Container>
  );
}
