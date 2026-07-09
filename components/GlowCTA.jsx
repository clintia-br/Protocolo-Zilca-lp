"use client";

import { useRef } from "react";
import { Button } from "@/components/ui";
import { useMagnetic } from "@/lib/animations";

/** Pulsing gradient-glow CTA with a subtle cursor-follow pull — matches the v2 hero button. */
export default function GlowCTA({ children, href, onClick, size = "lg", style }) {
  const ref = useRef(null);
  useMagnetic(ref, 0.2);

  return (
    <a
      ref={ref}
      href={href}
      target={href && href.startsWith("http") ? "_blank" : undefined}
      rel={href && href.startsWith("http") ? "noopener noreferrer" : undefined}
      onClick={onClick}
      style={{ textDecoration: "none", display: "inline-block", position: "relative", ...style }}
    >
      <span
        style={{
          position: "absolute",
          inset: -8,
          borderRadius: 14,
          backgroundImage: "var(--pz-gradient)",
          filter: "blur(20px)",
          opacity: 0.5,
          animation: "pzGlowPulse 3.4s var(--ease-standard) infinite",
          pointerEvents: "none",
        }}
      />
      <Button variant="primary" size={size} style={{ position: "relative", borderRadius: 12 }}>
        {children}
      </Button>
    </a>
  );
}
