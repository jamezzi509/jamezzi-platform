import {
  FocusTag,
  PlaceholderTrack,
  RadarPlaceholder,
} from "@/components/home/product-visual-primitives";

export function ProductVisualNichr() {
  return (
    <div className="grid gap-8 sm:grid-cols-2">
      <div className="flex flex-col gap-6">
        <PlaceholderTrack
          label="Opportunity score"
          fillPercent={72}
          tone="dark"
        />
        <div>
          <p className="text-metadata text-night-muted">
            Competition &amp; risk
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            <FocusTag tone="dark">Competition</FocusTag>
            <FocusTag tone="dark">Risk</FocusTag>
          </div>
        </div>
        <div>
          <p className="text-metadata text-night-muted">
            Monetization potential
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            <FocusTag tone="dark">Sponsorship</FocusTag>
            <FocusTag tone="dark">Affiliate</FocusTag>
            <FocusTag tone="dark">Products</FocusTag>
          </div>
        </div>
        <div>
          <p className="text-metadata text-night-muted">Niche example</p>
          <div className="mt-2 flex flex-wrap gap-2">
            <FocusTag tone="dark">Sample niche</FocusTag>
          </div>
        </div>
      </div>
      <div className="rounded-control bg-night-raised flex items-center justify-center p-4">
        <div className="w-full max-w-[220px]">
          <RadarPlaceholder tone="dark" />
        </div>
      </div>
    </div>
  );
}
