"use client";

import { gsap, useGSAP } from "@/lib/gsap";

const prefersReducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/** Fades + lifts a single ref into view once. Uses IntersectionObserver (reliable
 *  on iOS Safari) to trigger a GSAP tween — no ScrollTrigger/ScrollSmoother needed.
 *  Pair with className="gsap-reveal". Fail-safe: if IO is unavailable the element
 *  is shown immediately, so content can never stay hidden. */
export function useReveal(ref, { delay = 0, duration = 0.9 } = {}) {
  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      if (prefersReducedMotion() || typeof IntersectionObserver === "undefined") {
        gsap.set(el, { opacity: 1, y: 0, scale: 1 });
        return;
      }
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              gsap.to(el, { opacity: 1, y: 0, scale: 1, duration, delay, ease: "pzOut" });
              io.disconnect();
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
      );
      io.observe(el);
      return () => io.disconnect();
    },
    { scope: ref }
  );
}

/** Staggers every element matching `selector` inside containerRef into view once,
 *  triggered by IntersectionObserver. Pair each target with className="gsap-reveal". */
export function useStaggerReveal(containerRef, selector, { stagger = 0.09, duration = 0.8, from = {} } = {}) {
  useGSAP(
    () => {
      const container = containerRef.current;
      if (!container) return;
      const targets = container.querySelectorAll(selector);
      if (!targets.length) return;
      if (prefersReducedMotion() || typeof IntersectionObserver === "undefined") {
        gsap.set(targets, { opacity: 1, y: 0, scale: 1 });
        return;
      }
      const io = new IntersectionObserver(
        (entries) => {
          if (entries.some((e) => e.isIntersecting)) {
            gsap.to(targets, { opacity: 1, y: 0, scale: 1, duration, stagger, ease: "pzOut", ...from });
            io.disconnect();
          }
        },
        { threshold: 0.1, rootMargin: "0px 0px -6% 0px" }
      );
      io.observe(container);
      return () => io.disconnect();
    },
    { scope: containerRef }
  );
}
