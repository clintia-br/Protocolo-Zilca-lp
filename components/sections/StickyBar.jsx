"use client";

import { useRef, useState, useEffect } from "react";
import { Button } from "@/components/ui";
import { gsap } from "@/lib/gsap";
import { WA_LINK } from "@/lib/site";

export default function StickyBar() {
  const [closed, setClosed] = useState(false);
  const barRef = useRef(null);

  // Plain native scroll listener — reliable on every device (no ScrollTrigger).
  useEffect(() => {
    const el = barRef.current;
    if (!el) return;
    gsap.set(el, { yPercent: 140, opacity: 0 });
    let shown = false;
    const onScroll = () => {
      const show = window.scrollY > 620;
      if (show === shown) return;
      shown = show;
      gsap.to(el, { yPercent: show ? 0 : 140, opacity: show ? 1 : 0, duration: 0.45, ease: "pzOut" });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [closed]);

  if (closed) return null;

  return (
    <div ref={barRef} style={{ position: "fixed", left: 0, right: 0, bottom: 0, zIndex: 50, display: "flex", justifyContent: "center", padding: "0 16px 16px", pointerEvents: "none" }}>
      <div
        style={{
          pointerEvents: "auto",
          display: "flex",
          alignItems: "center",
          gap: 18,
          maxWidth: 960,
          width: "100%",
          background: "rgba(1,8,18,0.9)",
          backdropFilter: "blur(18px)",
          WebkitBackdropFilter: "blur(18px)",
          border: "1px solid var(--border-strong)",
          borderRadius: 16,
          padding: "12px 12px 12px 24px",
          boxShadow: "var(--shadow-xl)",
        }}
      >
        <div style={{ flex: 1, minWidth: 0 }}>
          <div className="pz-sticky-title" style={{ color: "#fff", fontSize: 15.5, fontWeight: 600 }}>Próximas turmas do Programa de Treinamento em Doppler de Carótidas</div>
          <div className="pz-sticky-sub" style={{ color: "var(--text-muted)", fontSize: 13 }}>Turmas reduzidas · Um participante por aparelho · Formação presencial</div>
        </div>
        <a href={WA_LINK} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", flexShrink: 0 }}>
          <Button variant="primary" size="md" style={{ borderRadius: 10, whiteSpace: "nowrap" }}>
            Quero me inscrever
          </Button>
        </a>
        <button onClick={() => setClosed(true)} aria-label="Fechar" style={{ background: "none", border: "none", color: "var(--text-muted)", cursor: "pointer", fontSize: 20, lineHeight: 1, padding: "0 8px" }}>
          ×
        </button>
      </div>
    </div>
  );
}
