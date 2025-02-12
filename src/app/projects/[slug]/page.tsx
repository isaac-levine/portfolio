import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { SingleProject } from "@/components/Product";
import { Projects } from "@/components/Projects";
import { projects } from "@/constants/projects";
import { Project } from "@/types/projects";
import { Metadata } from "next";
import Image from "next/image";
import { redirect } from "next/navigation";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.slug;
  const product = projects.find((p) => p.slug === slug) as Project | undefined;
  if (product) {
    return {
      title: product.title,
      description: product.description,
    };
  } else {
    return {
      title: "Projects | Isaac Levine",
      description:
        "Isaac Levine is a software engineer and CS student at Northeastern University, building products at the intersection of tech and community. Follow his journey in software development, startups, and tech.",
    };
  }
}

export default function SingleProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const slug = params.slug;
  const product = projects.find((p) => p.slug === slug);

  if (!product) {
    redirect("/projects");
  }
  return (
    <Container>
      {/* <SingleProject project={product} /> */}
      <div></div>
    </Container>
  );
}
