"use client";

import { useRef } from "react";
import { SectionLabel } from "@/components/ui";
import { gsap, useGSAP } from "@/lib/gsap";
import { wrap } from "@/lib/site";

const ITEMS = [
  "Você faz Doppler de carótida com a naturalidade que já tem no eco.",
  "Você fecha o ciclo eco + esteira + carótida dentro do próprio consultório.",
  "Você libera o laudo com segurança, com segunda opinião de apoio no começo.",
  "Você para de mandar receita pra fora todo mês.",
  "Você protege a credibilidade de tudo que assina.",
];

function Check() {
  return (
    <span
      style={{
        width: 24,
        height: 24,
        borderRadius: "50%",
        backgroundImage: "var(--pz-gradient)",
        flexShrink: 0,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        fontSize: 13,
        fontWeight: 700,
        marginTop: 1,
      }}
    >
      ✓
    </span>
  );
}

export default function MudaPraVoce() {
  const headerRef = useRef(null);
  const listRef = useRef(null);

  useGSAP(
    () => {
      gsap.to(headerRef.current, {
        opacity: 1,
        x: 0,
        duration: 0.9,
        ease: "pzOut",
        scrollTrigger: { trigger: headerRef.current, start: "top 85%", once: true },
      });

      const rows = listRef.current.querySelectorAll(".muda-row");
      gsap.to(rows, {
        opacity: 1,
        x: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: "pzOut",
        scrollTrigger: { trigger: listRef.current, start: "top 82%", once: true },
      });

      const checks = listRef.current.querySelectorAll(".muda-check");
      gsap.to(checks, {
        scale: 1,
        duration: 0.5,
        stagger: 0.1,
        delay: 0.15,
        ease: "pzOut",
        scrollTrigger: { trigger: listRef.current, start: "top 82%", once: true },
      });
    },
    { scope: listRef }
  );

  return (
    <section style={{ padding: "96px 0" }}>
      <div className="pz-wrap" style={wrap}>
        <div className="pz-grid-2-header">
          <div ref={headerRef} style={{ opacity: 0, transform: "translateX(-24px)" }}>
            <SectionLabel>O que muda para você</SectionLabel>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontWeight: 700,
                fontSize: "clamp(26px, 3.6vw, 40px)",
                margin: "16px 0 0",
                color: "#fff",
                letterSpacing: "var(--tracking-tight)",
                lineHeight: 1.14,
              }}
            >
              Depois de 3 dias, o cenário no consultório é outro.
            </h2>
          </div>
          <div ref={listRef} style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            {ITEMS.map((t) => (
              <div key={t} className="muda-row" style={{ display: "flex", gap: 14, alignItems: "flex-start", opacity: 0, transform: "translateX(24px)" }}>
                <span className="muda-check" style={{ display: "inline-flex", transform: "scale(0.4)" }}>
                  <Check />
                </span>
                <span style={{ color: "var(--text-primary)", fontSize: 17, lineHeight: 1.5 }}>{t}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
