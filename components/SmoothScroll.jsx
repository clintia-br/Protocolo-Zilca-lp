"use client";

import { useRef } from "react";
import { ScrollSmoother, ScrollTrigger, useGSAP } from "@/lib/gsap";

export default function SmoothScroll({ children }) {
  const wrapperRef = useRef(null);
  const contentRef = useRef(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      const smoother = ScrollSmoother.create({
        wrapper: wrapperRef.current,
        content: contentRef.current,
        smooth: 1.15,
        smoothTouch: 0.1,
        effects: true,
        normalizeScroll: true,
      });
      window.__pzSmoother = smoother;

      return () => {
        window.__pzSmoother = null;
        smoother.kill();
        ScrollTrigger.getAll().forEach((st) => st.kill());
      };
    },
    { scope: wrapperRef }
  );

  return (
    <div id="smooth-wrapper" ref={wrapperRef}>
      <div id="smooth-content" ref={contentRef}>
        {children}
      </div>
    </div>
  );
}
