"use client";

import { useRef } from "react";
import { ScrollSmoother, ScrollTrigger, useGSAP } from "@/lib/gsap";

export default function SmoothScroll({ children }) {
  const wrapperRef = useRef(null);
  const contentRef = useRef(null);

  useGSAP(
    () => {
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      // ScrollSmoother is unreliable on iOS Safari and touch devices — only enable
      // it on desktop pointers. Everywhere else we use native scrolling, which is
      // rock-solid and keeps every IntersectionObserver reveal working.
      const desktop = window.matchMedia("(min-width: 1025px) and (pointer: fine)").matches;

      if (reduce || !desktop) {
        ScrollTrigger.refresh();
        return;
      }

      const smoother = ScrollSmoother.create({
        wrapper: wrapperRef.current,
        content: contentRef.current,
        smooth: 1.15,
        effects: true,
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
