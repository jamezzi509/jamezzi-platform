import {
  FocusTag,
  PlaceholderTrack,
} from "@/components/home/product-visual-primitives";

export function ProductVisualClienIQ() {
  return (
    <div className="flex flex-col gap-6">
      <PlaceholderTrack label="Untapped revenue" fillPercent={58} />
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-control bg-paper p-4">
          <p className="text-metadata text-muted">Sales pipeline</p>
          <div className="mt-2 flex flex-wrap gap-2">
            <FocusTag>Leads</FocusTag>
            <FocusTag>Proposals</FocusTag>
          </div>
        </div>
        <div className="rounded-control bg-paper p-4">
          <p className="text-metadata text-muted">Delivery pipeline</p>
          <div className="mt-2 flex flex-wrap gap-2">
            <FocusTag>Active work</FocusTag>
            <FocusTag>Documents</FocusTag>
          </div>
        </div>
      </div>
      <div className="rounded-control bg-paper p-4">
        <p className="text-metadata text-muted">Opportunity Engine</p>
        <div className="mt-2 flex flex-wrap gap-2">
          <FocusTag>Missing services</FocusTag>
          <FocusTag>Recommended next action</FocusTag>
        </div>
      </div>
    </div>
  );
}
