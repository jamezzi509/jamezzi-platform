import ReactMarkdown from "react-markdown";
import type { Components } from "react-markdown";

const components: Components = {
  h2: ({ children }) => (
    <h2 className="text-feature-headline-sm text-ink mt-10 first:mt-0">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="text-card-title text-ink mt-8">{children}</h3>
  ),
  p: ({ children }) => (
    <p className="text-guide-body text-muted mt-4">{children}</p>
  ),
  ul: ({ children }) => (
    <ul className="text-guide-body text-muted mt-4 list-disc space-y-2 pl-5">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="text-guide-body text-muted mt-4 list-decimal space-y-2 pl-5">
      {children}
    </ol>
  ),
  li: ({ children }) => <li>{children}</li>,
  blockquote: ({ children }) => (
    <blockquote className="border-indigo font-display text-ink mt-6 border-l-4 pl-5 text-[22px] leading-snug italic lg:text-[26px] [&>p]:mt-0 [&>p]:font-[inherit] [&>p]:text-[inherit]">
      {children}
    </blockquote>
  ),
  strong: ({ children }) => (
    <strong className="text-ink font-semibold">{children}</strong>
  ),
  hr: () => <hr className="border-border mt-10" />,
  a: ({ href, children }) => (
    <a
      href={href}
      className="text-indigo-dark underline underline-offset-2 hover:text-indigo"
    >
      {children}
    </a>
  ),
};

export function GuideBody({ content }: { content: string }) {
  return (
    <div className="mt-10">
      <ReactMarkdown components={components}>{content}</ReactMarkdown>
    </div>
  );
}
