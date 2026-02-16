/**
 * Generates a search index JSON file from blog MDX files and project data.
 * Run with: node scripts/generate-search-index.mjs
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

function stripMdx(content) {
  return (
    content
      // Remove import/export statements
      .replace(/^import\s+.*$/gm, "")
      .replace(/^export\s+.*$/gm, "")
      // Remove JSX tags
      .replace(/<[^>]+>/g, "")
      // Remove markdown headers markers but keep text
      .replace(/^#{1,6}\s+/gm, "")
      // Remove markdown links, keep text
      .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
      // Remove images
      .replace(/!\[[^\]]*\]\([^)]+\)/g, "")
      // Remove footnote references
      .replace(/\[\^\d+\]/g, "")
      // Remove bold/italic markers
      .replace(/\*{1,3}([^*]+)\*{1,3}/g, "$1")
      // Remove code blocks
      .replace(/```[\s\S]*?```/g, "")
      // Remove inline code
      .replace(/`([^`]+)`/g, "$1")
      // Remove horizontal rules
      .replace(/^---$/gm, "")
      // Collapse whitespace
      .replace(/\n{3,}/g, "\n\n")
      .trim()
  );
}

function extractMeta(content) {
  const titleMatch = content.match(/title:\s*["'](.+?)["']/);
  const dateMatch = content.match(/date:\s*["'](.+?)["']/);
  return {
    title: titleMatch ? titleMatch[1] : "",
    date: dateMatch ? dateMatch[1] : "",
  };
}

// Collect blog posts
const blogDir = path.join(root, "src/app/blog");
const blogEntries = [];

const blogFolders = fs
  .readdirSync(blogDir)
  .filter((f) => {
    const fullPath = path.join(blogDir, f);
    return fs.statSync(fullPath).isDirectory() && f !== "page.tsx";
  });

for (const folder of blogFolders) {
  const mdxPath = path.join(blogDir, folder, "content.mdx");
  if (!fs.existsSync(mdxPath)) continue;

  const raw = fs.readFileSync(mdxPath, "utf-8");
  const meta = extractMeta(raw);
  const text = stripMdx(raw);

  blogEntries.push({
    title: meta.title,
    href: `/blog/${folder}`,
    category: "Post",
    date: meta.date,
    text,
  });
}

// Collect projects from the constants file
// We parse it simply since it's a TypeScript file with a known structure
const projectsPath = path.join(root, "src/constants/projects.tsx");
const projectsRaw = fs.readFileSync(projectsPath, "utf-8");

// Extract project objects using regex (simple approach for known structure)
const projectRegex =
  /\{\s*(?:href:\s*"[^"]*",\s*)?title:\s*"([^"]+)",\s*description:\s*"([^"]+)"[\s\S]*?slug:\s*"([^"]+)"/g;

const projectEntries = [];
let match;
while ((match = projectRegex.exec(projectsRaw)) !== null) {
  projectEntries.push({
    title: match[1],
    href: `/projects/${match[3]}`,
    category: "Project",
    text: match[2],
  });
}

// Pages
const pageEntries = [
  { title: "Home", href: "/", category: "Page", text: "" },
  { title: "Projects", href: "/projects", category: "Page", text: "" },
  { title: "Posts", href: "/blog", category: "Page", text: "" },
  { title: "Contact", href: "/contact", category: "Page", text: "" },
  { title: "Resume", href: "/resume", category: "Page", text: "" },
];

const index = [...pageEntries, ...blogEntries, ...projectEntries];

const outPath = path.join(root, "src/generated/search-index.json");
fs.writeFileSync(outPath, JSON.stringify(index, null, 2));

console.log(
  `Search index generated: ${index.length} items (${pageEntries.length} pages, ${blogEntries.length} posts, ${projectEntries.length} projects)`
);
