"use client";

import { useRef, type ReactNode, type PointerEvent } from "react";
import { useReducedMotion } from "@/lib/use-reduced-motion";

const MAX_SHIFT_PX = 5;

export function HeroArtworkParallax({ children }: { children: ReactNode }) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (reducedMotion || event.pointerType !== "mouse" || !wrapperRef.current)
      return;
    const bounds = wrapperRef.current.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    wrapperRef.current.style.setProperty(
      "--parallax-x",
      `${x * MAX_SHIFT_PX * 2}px`,
    );
    wrapperRef.current.style.setProperty(
      "--parallax-y",
      `${y * MAX_SHIFT_PX * 2}px`,
    );
  };

  const handlePointerLeave = () => {
    wrapperRef.current?.style.setProperty("--parallax-x", "0px");
    wrapperRef.current?.style.setProperty("--parallax-y", "0px");
  };

  return (
    <div
      ref={wrapperRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className="absolute inset-0 [translate:var(--parallax-x,0px)_var(--parallax-y,0px)] transition-[translate] duration-300 ease-out"
    >
      {children}
    </div>
  );
}
