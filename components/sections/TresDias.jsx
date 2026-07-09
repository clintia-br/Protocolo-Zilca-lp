"use client";

import { useRef } from "react";
import { SectionLabel } from "@/components/ui";
import { useReveal } from "@/lib/scrollReveal";
import { gsap, useGSAP } from "@/lib/gsap";
import { hSans, grad } from "@/lib/site";

const NUMS = [
  ["4", "aparelhos Philips disponíveis"],
  ["1", "aluno por aparelho"],
  ["100%", "pacientes reais na imersão"],
];

export default function TresDias() {
  const textRef = useRef(null);
  const mediaRef = useRef(null);
  const img1Ref = useRef(null);

  useReveal(textRef);

  useGSAP(
    () => {
      if (!img1Ref.current) return;
      gsap.fromTo(
        img1Ref.current,
        { clipPath: "inset(0 0 100% 0)", scale: 1.1 },
        {
          clipPath: "inset(0 0 0% 0)",
          scale: 1,
          duration: 1.1,
          ease: "pzOut",
          scrollTrigger: { trigger: mediaRef.current, start: "top 82%", once: true },
        }
      );
    },
    { scope: mediaRef }
  );

  return (
    <section style={{ padding: "56px 0 40px" }}>
      <div className="pz-wrap">
        <div className="pz-tresdias">
          <div
            ref={textRef}
            className="gsap-reveal"
            style={{ borderRadius: 24, background: "var(--surface-raised)", border: "1px solid var(--border-subtle)", boxShadow: "var(--edge-top)", padding: "clamp(28px, 6vw, 48px)", display: "flex", flexDirection: "column", justifyContent: "flex-start" }}
          >
            <SectionLabel>A experiência presencial</SectionLabel>
            <h2 style={{ ...hSans, fontSize: "clamp(23px, 3.2vw, 32px)", margin: "16px 0 16px" }}>Três dias dedicados ao desenvolvimento da prática clínica.</h2>
            <p style={{ color: "var(--text-secondary)", fontSize: 16, lineHeight: 1.65, margin: "0 0 22px" }}>
              A programação foi estruturada para aproveitar ao máximo o tempo presencial. Durante três dias, cada
              participante realiza os exames em pacientes reais, com um aparelho exclusivo e supervisão contínua do Dr.
              Cássio Bermudes. O foco está na execução da técnica, interpretação dos achados e construção da segurança
              necessária para incorporar o exame à rotina clínica.
            </p>
            <div style={{ display: "flex", gap: 22, flexWrap: "wrap" }}>
              {NUMS.map(([v, l]) => (
                <div key={l}>
                  <div style={{ ...hSans, fontSize: 30, ...grad }}>{v}</div>
                  <div style={{ color: "var(--text-muted)", fontSize: 13, marginTop: 2 }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
          <div ref={mediaRef}>
            <div style={{ borderRadius: 24, overflow: "hidden", position: "relative", border: "1px solid var(--border-subtle)", minHeight: 300, height: "100%" }}>
              <img ref={img1Ref} src="/assets/imersao-real.jpg" alt="Imersão prática — Dr. Cássio conduzindo o exame ao lado do aluno" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, transparent 55%, rgba(1,8,18,0.55))", pointerEvents: "none" }} />
              <span style={{ position: "absolute", left: 20, bottom: 16, color: "#fff", fontSize: 13, fontWeight: 600, background: "rgba(1,8,18,0.5)", backdropFilter: "blur(6px)", padding: "6px 12px", borderRadius: 999, border: "1px solid var(--border-subtle)" }}>
                Treinamento prático em pacientes reais com acompanhamento individual
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
