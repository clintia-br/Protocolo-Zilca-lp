"use client";

import { useRef } from "react";
import { SectionLabel } from "@/components/ui";
import { useReveal, useStaggerReveal } from "@/lib/scrollReveal";
import { hSans, grad } from "@/lib/site";

const CARDS = [
  { n: "01", chip: "Antes", t: "A teoria fica com você", b: ["Diretrizes de cardio, angio e radiologia", "Material curado na plataforma própria", "No seu tempo — o presencial não gasta um minuto com slide"] },
  { n: "02", chip: "Uma semana antes", t: "A visão você treina nos casos", b: ["Banco de casos reais, laudo e imagem em alta", "Sessão ao vivo com o Dr. Cássio", "Olho acostumado às placas antes do transdutor"] },
  { n: "03", chip: "3 dias", t: "A prática é o coração de tudo", b: ["Três dias intensivos, um aluno por aparelho", "Pacientes reais, incluindo casos graves", "Demonstração e supervisão de perto, o tempo todo"] },
  { n: "04", chip: "Depois", t: "Você libera o próprio laudo", b: ["Gera a imagem e mede pela velocidade", "Crava o diagnóstico sem hesitar", "Segunda opinião de apoio nos primeiros meses"] },
];

export default function Conteudos() {
  const headRef = useRef(null);
  const gridRef = useRef(null);

  useReveal(headRef);
  useStaggerReveal(gridRef, ".gsap-reveal");

  return (
    <section id="conteudos" style={{ padding: "88px 0 40px", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, backgroundImage: "var(--pz-glow)", opacity: 0.6, pointerEvents: "none" }} />
      <div className="pz-wrap" style={{ position: "relative" }}>
        <div ref={headRef} className="gsap-reveal" style={{ textAlign: "center", maxWidth: 860, margin: "0 auto 48px" }}>
          <div style={{ height: 2, width: 120, backgroundImage: "var(--pz-gradient)", margin: "0 auto 20px" }} />
          <SectionLabel>A virada</SectionLabel>
          <h2 style={{ ...hSans, fontSize: "clamp(26px, 3.8vw, 38px)", marginTop: 16 }}>
            O que faltou nunca foi teoria. Foi <span style={grad}>aparelho na mão</span>, em paciente real, com a orientação certa.
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
