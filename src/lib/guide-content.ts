import { readFileSync } from "fs";
import { join } from "path";

export interface GuideFrontmatter {
  title: string;
  slug: string;
  description: string;
  category: string;
  readingTime: string;
  author: string;
  language: string;
  featured: boolean;
  coverImage: string;
}

interface ParsedGuideMarkdown {
  frontmatter: GuideFrontmatter;
  content: string;
}

const GUIDES_MD_DIR = join(process.cwd(), "src/content/guides-md");

function parseFrontmatterValue(raw: string): string | boolean {
  const trimmed = raw.trim();
  if (trimmed === "true") return true;
  if (trimmed === "false") return false;
  if (trimmed.startsWith('"') && trimmed.endsWith('"')) {
    return trimmed.slice(1, -1);
  }
  return trimmed;
}

function parseFrontmatter(raw: string): {
  frontmatter: GuideFrontmatter;
  content: string;
} {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) {
    throw new Error("Guide markdown is missing frontmatter delimiters.");
  }
  const [, frontmatterBlock, content] = match;

  const data: Record<string, string | boolean> = {};
  for (const line of frontmatterBlock.split("\n")) {
    const colonIndex = line.indexOf(":");
    if (colonIndex === -1) continue;
    const key = line.slice(0, colonIndex).trim();
    const value = line.slice(colonIndex + 1);
    data[key] = parseFrontmatterValue(value);
  }

  // The body repeats the frontmatter title as a leading H1; the page renders
  // the title separately, so drop it here to avoid showing it twice.
  const contentWithoutLeadingTitle = content
    .trim()
    .replace(/^#\s+.+\r?\n+/, "");

  return {
    frontmatter: data as unknown as GuideFrontmatter,
    content: contentWithoutLeadingTitle.trim(),
  };
}

export function getGuideMarkdown(slug: string): ParsedGuideMarkdown | null {
  try {
    const raw = readFileSync(join(GUIDES_MD_DIR, `${slug}.md`), "utf-8");
    return parseFrontmatter(raw);
  } catch {
    return null;
  }
}
