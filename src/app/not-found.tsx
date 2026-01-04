import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Paragraph } from "@/components/Paragraph";
import Link from "next/link";

export default function NotFound() {
  return (
    <Container>
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
        <Heading as="h1" className="font-black text-6xl md:text-8xl mb-4">
          404
        </Heading>
        <Paragraph className="text-lg mb-8">
          This page doesn&apos;t exist — maybe it never did.
        </Paragraph>
        <Link
          href="/"
          className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
        >
          🏠 Back to home
        </Link>
      </div>
    </Container>
  );
}

