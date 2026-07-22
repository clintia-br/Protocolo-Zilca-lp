"use client";

import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";

/** Slow, subtle scroll-linked parallax drift for background/decorative elements. */
export function useParallax(ref, { yPercent = -14, start = "top bottom", end = "bottom top" } = {}) {
  useGSAP(
    () => {
      if (!ref.current) return;
      // Scroll-scrubbed parallax is a desktop-only nicety; skip it on touch and
      // reduced-motion so it never interferes with mobile scrolling.
      if (
        window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
        !window.matchMedia("(min-width: 1025px) and (pointer: fine)").matches
      ) {
        return;
      }
      gsap.to(ref.current, {
        yPercent,
        ease: "none",
        scrollTrigger: {
          trigger: ref.current,
          start,
          end,
          scrub: true,
        },
      });
    },
    { scope: ref }
  );
}

/** Gentle cursor-follow pull — reserved for a single hero-level CTA, not overused. */
export function useMagnetic(ref, strength = 0.35) {
  useGSAP(
    () => {
      const el = ref.current;
      if (!el || window.matchMedia("(pointer: coarse)").matches) return;

      const xTo = gsap.quickTo(el, "x", { duration: 0.5, ease: "pzOut" });
      const yTo = gsap.quickTo(el, "y", { duration: 0.5, ease: "pzOut" });

      const onMove = (e) => {
        const rect = el.getBoundingClientRect();
        const relX = e.clientX - (rect.left + rect.width / 2);
        const relY = e.clientY - (rect.top + rect.height / 2);
        xTo(relX * strength);
        yTo(relY * strength);
      };
      const onLeave = () => {
        xTo(0);
        yTo(0);
      };

      el.addEventListener("mousemove", onMove);
      el.addEventListener("mouseleave", onLeave);
      return () => {
        el.removeEventListener("mousemove", onMove);
        el.removeEventListener("mouseleave", onLeave);
      };
    },
    { scope: ref }
  );
}
