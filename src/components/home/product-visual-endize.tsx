import {
  FocusTag,
  PlaceholderTrack,
} from "@/components/home/product-visual-primitives";

const categories = [
  { label: "Foundation", fillPercent: 80 },
  { label: "Compliance", fillPercent: 55 },
  { label: "Identity", fillPercent: 70 },
  { label: "Contract Readiness", fillPercent: 45 },
];

export function ProductVisualEndize() {
  return (
    <div className="flex flex-col gap-6">
      <PlaceholderTrack label="Weighted score (out of 100)" fillPercent={64} />
      <div className="grid gap-4 sm:grid-cols-2">
        {categories.map((category) => (
          <PlaceholderTrack
            key={category.label}
            label={category.label}
            fillPercent={category.fillPercent}
          />
        ))}
      </div>
      <div className="rounded-control border-border border border-dashed p-3">
        <p className="text-metadata text-muted">Prioritized action plan</p>
        <div className="mt-2 flex flex-wrap gap-2">
          <FocusTag>Next action</FocusTag>
          <FocusTag>One missing requirement</FocusTag>
        </div>
      </div>
    </div>
  );
}
