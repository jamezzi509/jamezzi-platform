import {
  FocusTag,
  PlaceholderTrack,
  RadarPlaceholder,
} from "@/components/home/product-visual-primitives";

export function ProductVisualNichr() {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <div className="flex flex-col gap-6">
        <PlaceholderTrack label="Opportunity score" fillPercent={72} />
        <div>
          <p className="text-metadata text-muted">Competition &amp; risk</p>
          <div className="mt-2 flex flex-wrap gap-2">
            <FocusTag>Competition</FocusTag>
            <FocusTag>Risk</FocusTag>
          </div>
        </div>
        <div>
          <p className="text-metadata text-muted">Monetization potential</p>
          <div className="mt-2 flex flex-wrap gap-2">
            <FocusTag>Sponsorship</FocusTag>
            <FocusTag>Affiliate</FocusTag>
            <FocusTag>Products</FocusTag>
          </div>
        </div>
        <div className="rounded-control border-border border border-dashed p-3">
          <p className="text-metadata text-muted">
            One real YouTube niche example
          </p>
          <p className="text-supporting text-muted mt-1">
            Sample niche preview — coming soon
          </p>
        </div>
      </div>
      <div className="rounded-control bg-paper flex items-center justify-center p-4">
        <div className="w-full max-w-[220px]">
          <RadarPlaceholder />
        </div>
      </div>
    </div>
  );
}
