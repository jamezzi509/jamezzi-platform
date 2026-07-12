import Image from "next/image";
import { cn } from "@/lib/cn";

// Source asset is 182×480 (aspect ≈ 0.379). Width is derived per requested
// height so next/image always renders at the exact intended display size.
const ASPECT = 182 / 480;

interface JamezziMarkProps {
  heightPx: number;
  priority?: boolean;
  className?: string;
}

export function JamezziMark({
  heightPx,
  priority = false,
  className,
}: JamezziMarkProps) {
  return (
    <Image
      src="/brand/jamezzi-j.webp"
      alt=""
      width={Math.round(heightPx * ASPECT)}
      height={heightPx}
      priority={priority}
      className={cn("shrink-0", className)}
    />
  );
}
