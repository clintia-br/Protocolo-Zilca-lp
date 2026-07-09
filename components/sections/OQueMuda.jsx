"use client";

import { useRef } from "react";
import { SectionLabel } from "@/components/ui";
import { useReveal } from "@/lib/scrollReveal";
import { gsap, useGSAP } from "@/lib/gsap";
import { hSans } from "@/lib/site";

const ITEMS = [
  "Você faz Doppler de carótida com a naturalidade que já tem no eco.",
  "Você fecha o ciclo eco + esteira + carótida dentro do próprio consultório.",
  "Você libera o laudo com segurança, com segunda opinião de apoio no começo.",
  "Você para de mandar receita pra fora todo mês.",
  "Você protege a credibilidade de tudo que assina.",
];

export default function OQueMuda() {
  const headRef = useRef(null);
  const listRef = useRef(null);

  useReveal(headRef);

  useGSAP(
    () => {
      const rows = listRef.current.querySelectorAll(".muda-row");
      gsap.fromTo(
        rows,
        { x: 24, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.7, stagger: 0.09, ease: "pzOut", scrollTrigger: { trigger: listRef.current, start: "top 82%", once: true } }
      );
    },
    { scope: listRef }
  );

  return (
    <section style={{ padding: "56px 0 40px" }}>
      <div className="pz-wrap">
        <div className="pz-muda">
          <div ref={headRef} className="gsap-reveal">
            <SectionLabel>O que muda para você</SectionLabel>
            <h2 style={{ ...hSans, fontSize: "clamp(26px, 3.6vw, 36px)", marginTop: 16 }}>Depois de 3 dias, o cenário no consultório é outro.</h2>
          </div>
          <div ref={listRef} style={{ display: "flex", flexDirection: "column" }}>
            {ITEMS.map((t, i) => (
              <div
                key={i}
                className="muda-row"
                style={{ display: "flex", gap: 16, alignItems: "center", padding: "18px 0", borderBottom: i < ITEMS.length - 1 ? "1px solid var(--border-subtle)" : "none" }}
              >
                <span style={{ width: 26, height: 26, borderRadius: "50%", backgroundImage: "var(--pz-gradient)", flexShrink: 0, display: "inline-flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 13, fontWeight: 700 }}>
                  ✓
                </span>
                <span style={{ color: "var(--text-primary)", fontSize: 17, lineHeight: 1.45 }}>{t}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
