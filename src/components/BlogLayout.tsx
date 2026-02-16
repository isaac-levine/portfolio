"use client";
import { useRouter } from "next/navigation";
import { formatDate } from "../../lib/formatDate";
import { Prose } from "@/components/Prose";
import { Container } from "./Container";
import { Heading } from "./Heading";
import Link from "next/link";
import { Paragraph } from "./Paragraph";


function ArrowLeftIcon(props: any) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M7.25 11.25 3.75 8m0 0 3.5-3.25M3.75 8h8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function BlogLayout({
  children,
  meta,
  isRssFeed = false,
  previousPathname,
}: any) {
  let router = useRouter();

  return (
    <>
      <Container>
        <article>
          <header className="flex flex-col items-center text-center">
            <Link
              type="button"
              href="/blog"
              aria-label="Go back to articles"
              className="group mb-4 flex h-10 w-10 items-center justify-center rounded-full shadow-md transition self-start"
              style={{
                backgroundColor: "var(--card-bg)",
                boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                border: "1px solid var(--border)",
              }}
            >
              <ArrowLeftIcon
                className="h-4 w-4 transition"
                style={{ stroke: "var(--text-secondary)" }}
              />
            </Link>

            <Heading className="py-4 !text-3xl md:!text-4xl lg:!text-5xl">{meta.title}</Heading>
            <time
              dateTime={meta.date}
              className="flex items-center text-base"
              style={{ color: "var(--text-tertiary)" }}
            >
              <Paragraph>
                {formatDate(meta.date)}
              </Paragraph>
            </time>
          </header>
          <Prose className="mt-12">{children}</Prose>
        </article>
      </Container>
    </>
  );
}
