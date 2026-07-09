"use client";

import { gsap, useGSAP } from "@/lib/gsap";

/** Fades + lifts a single ref into view once, on scroll. Pair with className="gsap-reveal". */
export function useReveal(ref, { delay = 0, duration = 0.9, start = "top 88%" } = {}) {
  useGSAP(
    () => {
      if (!ref.current) return;
      gsap.to(ref.current, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration,
        delay,
        ease: "pzOut",
        scrollTrigger: { trigger: ref.current, start, once: true },
      });
    },
    { scope: ref }
  );
}

/** Staggers every element matching `selector` inside containerRef into view once, on scroll.
 *  Pair each target with className="gsap-reveal" (or gsap-reveal-scale). */
export function useStaggerReveal(
  containerRef,
  selector,
  { stagger = 0.09, duration = 0.8, start = "top 85%", from = {} } = {}
) {
  useGSAP(
    () => {
      if (!containerRef.current) return;
      const targets = containerRef.current.querySelectorAll(selector);
      if (!targets.length) return;
      gsap.to(targets, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration,
        stagger,
        ease: "pzOut",
        scrollTrigger: { trigger: containerRef.current, start, once: true },
        ...from,
      });
    },
    { scope: containerRef }
  );
}
