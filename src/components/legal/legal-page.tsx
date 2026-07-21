import type { ReactNode } from "react";
import { Container } from "@/components/ui/container";
import type { LegalDocument } from "@/types/legal";

const EMAIL_PATTERN = /[\w.+-]+@[\w-]+\.[\w.-]+/g;

let linkKey = 0;

function linkEmails(segment: string): ReactNode[] {
  const parts: ReactNode[] = [];
  let lastIndex = 0;
  for (const emailMatch of segment.matchAll(EMAIL_PATTERN)) {
    const index = emailMatch.index ?? 0;
    if (index > lastIndex) {
      parts.push(segment.slice(lastIndex, index));
    }
    parts.push(
      <a
        key={`email-${linkKey++}`}
        href={`mailto:${emailMatch[0]}`}
        className="text-indigo-dark underline underline-offset-2 hover:text-indigo"
      >
        {emailMatch[0]}
      </a>,
    );
    lastIndex = index + emailMatch[0].length;
  }
  if (lastIndex < segment.length) {
    parts.push(segment.slice(lastIndex));
  }
  return parts;
}

function renderInline(text: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  const boldPattern = /\*\*(.+?)\*\*/g;
  let cursor = 0;
  let match: RegExpExecArray | null;

  while ((match = boldPattern.exec(text)) !== null) {
    if (match.index > cursor) {
      nodes.push(...linkEmails(text.slice(cursor, match.index)));
    }
    nodes.push(
      <strong key={`b-${linkKey++}`}>{linkEmails(match[1])}</strong>,
    );
    cursor = match.index + match[0].length;
  }
  if (cursor < text.length) {
    nodes.push(...linkEmails(text.slice(cursor)));
  }

  return nodes;
}

export function LegalPage({ document }: { document: LegalDocument }) {
  return (
    <section className="bg-paper py-20 lg:py-24">
      <Container className="max-w-3xl">
        <p className="text-eyebrow text-indigo-dark">
          LAST UPDATED: {document.lastUpdated.toUpperCase()}
        </p>
        <h1 className="text-editorial-headline text-ink mt-4">
          {document.title}
        </h1>

        <div className="mt-10 flex flex-col gap-8">
          {document.sections.map((section) => (
            <div key={section.heading}>
              <h2 className="text-card-title text-ink">{section.heading}</h2>
              <div className="text-guide-body text-muted mt-3 flex flex-col gap-3">
                {section.blocks.map((block, index) =>
                  block.type === "paragraph" ? (
                    <p key={index}>{renderInline(block.text)}</p>
                  ) : (
                    <ul key={index} className="list-disc space-y-1.5 pl-5">
                      {block.items.map((item, itemIndex) => (
                        <li key={itemIndex}>{renderInline(item)}</li>
                      ))}
                    </ul>
                  ),
                )}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
