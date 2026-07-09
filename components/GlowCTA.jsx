"use client";

import { useRef } from "react";
import { Button } from "@/components/ui";
import { useMagnetic } from "@/lib/animations";

/** Pulsing gradient-glow pill CTA with a subtle cursor-follow pull — reserved for the hero's primary action. */
export default function GlowCTA({ children, href, onClick, size = "lg" }) {
  const ref = useRef(null);
  useMagnetic(ref, 0.22);

  return (
    <a
      ref={ref}
      href={href}
      onClick={onClick}
      style={{ textDecoration: "none", display: "inline-block", position: "relative" }}
    >
      <span
        style={{
          position: "absolute",
          inset: -10,
          borderRadius: 999,
          backgroundImage: "var(--pz-gradient)",
          filter: "blur(22px)",
          opacity: 0.55,
          animation: "pzGlowPulse 3.4s var(--ease-standard) infinite",
          pointerEvents: "none",
        }}
      />
      <Button variant="primary" size={size} style={{ position: "relative", borderRadius: 999, paddingLeft: 34, paddingRight: 34 }}>
        {children}
      </Button>
    </a>
  );
}
