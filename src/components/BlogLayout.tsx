"use client";
import { usePathname } from "next/navigation";
import { formatDate } from "../../lib/formatDate";
import { Prose } from "@/components/Prose";
import { Container } from "./Container";
import { Link } from "next-view-transitions";


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
}: any) {
  const pathname = usePathname();
  const slug = pathname?.replace(/^\/blog\//, "") ?? "";

  return (
    <Container>
      <article>
        <header className="flex flex-col">
          <Link
            href="/blog"
            aria-label="Back to all posts"
            className="group inline-flex items-center gap-2 text-sm self-start no-underline transition-colors duration-150"
            style={{ color: "var(--text-tertiary)" }}
          >
            <ArrowLeftIcon
              className="h-3.5 w-3.5 transition-transform duration-150 group-hover:-translate-x-0.5"
              style={{ stroke: "currentColor" }}
            />
            <span className="group-hover:[color:var(--text-secondary)] transition-colors duration-150">
              All posts
            </span>
          </Link>

          <h1
            className="mt-8 text-2xl md:text-3xl font-semibold tracking-tight leading-tight"
            style={{
              color: "var(--text-primary)",
              viewTransitionName: `blog-title-${slug}`,
            }}
          >
            {meta.title}
          </h1>

          <time
            dateTime={meta.date}
            className="mt-3 text-sm"
            style={{
              color: "var(--text-secondary)",
              viewTransitionName: `blog-date-${slug}`,
            }}
          >
            {formatDate(meta.date)}
          </time>
        </header>
        <Prose className="mt-10">{children}</Prose>
      </article>
    </Container>
  );
}
