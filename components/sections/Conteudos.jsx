"use client";

import { useRef } from "react";
import { SectionLabel } from "@/components/ui";
import { useReveal, useStaggerReveal } from "@/lib/scrollReveal";
import { hSans, grad } from "@/lib/site";

const CARDS = [
  { n: "01", t: "Preparação antes da imersão", b: ["Conteúdo baseado nas principais diretrizes da especialidade", "Plataforma própria com material de apoio", "O tempo presencial é dedicado à prática clínica"] },
  { n: "02", t: "Discussão de casos", b: ["Banco de casos reais com imagens e laudos", "Sessão preparatória conduzida pelo Dr. Cássio", "Desenvolvimento da interpretação antes da prática"] },
  { n: "03", t: "Prática supervisionada", b: ["Três dias de treinamento intensivo", "Um aluno por aparelho durante toda a imersão", "Pacientes reais e acompanhamento contínuo"] },
  { n: "04", t: "Continuidade após o treinamento", b: ["Desenvolvimento da autonomia na realização do exame", "Segurança na elaboração dos laudos", "Suporte e segunda opinião conforme o nível de acompanhamento escolhido"] },
];

export default function Conteudos() {
  const headRef = useRef(null);
  const gridRef = useRef(null);

  useReveal(headRef);
  useStaggerReveal(gridRef, ".gsap-reveal");

  return (
    <section id="conteudos" style={{ padding: "clamp(52px, 8vw, 88px) 0 40px", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, backgroundImage: "var(--pz-glow)", opacity: 0.6, pointerEvents: "none" }} />
      <div className="pz-wrap" style={{ position: "relative" }}>
        <div ref={headRef} className="gsap-reveal" style={{ textAlign: "center", maxWidth: 860, margin: "0 auto 48px" }}>
          <div style={{ height: 2, width: 120, backgroundImage: "var(--pz-gradient)", margin: "0 auto 20px" }} />
          <SectionLabel>A metodologia</SectionLabel>
          <h2 style={{ ...hSans, fontSize: "clamp(24px, 3.8vw, 38px)", marginTop: 16 }}>
            Uma metodologia construída para transformar conhecimento em <span style={grad}>experiência prática</span>.
          </h2>
        </div>
        <div ref={gridRef} className="pz-grid-4">
          {CARDS.map((c) => (
            <div
              key={c.n}
              className="gsap-reveal"
              style={{ position: "relative", height: "100%", borderRadius: 16, background: "var(--surface-card)", border: "1px solid var(--border-subtle)", boxShadow: "var(--edge-top), var(--shadow-md)", padding: 26, overflow: "hidden" }}
            >
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, backgroundImage: "var(--pz-gradient)" }} />
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 18 }}>
                <span style={{ width: 34, height: 34, borderRadius: 9, backgroundImage: "var(--pz-gradient)", color: "#fff", fontWeight: 800, fontSize: 15, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-sans)" }}>
                  {c.n}
                </span>
              </div>
              <h3 style={{ fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: 18, lineHeight: 1.25, margin: "0 0 14px", color: "#fff" }}>{c.t}</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
                {c.b.map((x) => (
                  <div key={x} style={{ display: "flex", gap: 9, alignItems: "flex-start" }}>
                    <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--accent-green)", marginTop: 7, flexShrink: 0 }} />
                    <span style={{ color: "var(--text-secondary)", fontSize: 13.5, lineHeight: 1.5 }}>{x}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
