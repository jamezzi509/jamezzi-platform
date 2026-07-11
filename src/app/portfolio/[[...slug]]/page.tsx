import { ComingSoon } from "@/components/coming-soon";
import { titleFromSlug } from "@/lib/format";

export default async function PortfolioPage({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}) {
  const { slug } = await params;
  const title = slug?.length ? titleFromSlug(slug[slug.length - 1]) : undefined;
  return <ComingSoon section="Portfolio" title={title} />;
}
