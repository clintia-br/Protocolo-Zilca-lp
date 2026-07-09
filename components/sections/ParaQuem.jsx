"use client";

import { useRef } from "react";
import { useReveal, useStaggerReveal } from "@/lib/scrollReveal";
import { hSans, grad } from "@/lib/site";

const CARDS = [
  ["Você já atua com ecocardiografia", "Busca ampliar sua atuação clínica incorporando o Doppler de Carótidas com maior domínio técnico e confiança na execução do exame."],
  ["Deseja ampliar sua prática assistencial", "Incorporar um exame frequentemente solicitado na rotina cardiovascular e realizá-lo dentro da própria clínica com segurança."],
  ["Valoriza treinamento prático", "Já estudou a teoria, mas procura uma experiência presencial que permita desenvolver habilidade prática ao lado de um profissional experiente."],
  ["Busca evolução profissional", "Quer consolidar uma formação que integre ecocardiografia, teste ergométrico e Doppler de Carótidas na mesma rotina clínica."],
];

export default function ParaQuem() {
  const headRef = useRef(null);
  const gridRef = useRef(null);

  useReveal(headRef);
  useStaggerReveal(gridRef, ".gsap-reveal");

  return (
    <section id="para-quem" style={{ padding: "clamp(56px, 9vw, 96px) 0 40px" }}>
      <div className="pz-wrap">
        <div ref={headRef} className="gsap-reveal" style={{ marginBottom: 44 }}>
          <h2 style={{ ...hSans, fontSize: "clamp(26px, 4vw, 40px)" }}>Para quem é esta imersão?</h2>
        </div>
        <div style={{ height: 1, background: "var(--border-subtle)", marginBottom: 40 }} />
        <div ref={gridRef} className="pz-grid-4">
          {CARDS.map(([t, d]) => (
            <div
              key={t}
              className="gsap-reveal"
              style={{ height: "100%", borderRadius: 16, background: "var(--surface-card)", border: "1px solid var(--border-subtle)", boxShadow: "var(--edge-top)", padding: 26 }}
            >
              <h3 style={{ fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: 18, lineHeight: 1.25, margin: "0 0 10px", ...grad }}>{t}</h3>
              <p style={{ color: "var(--text-secondary)", fontSize: 14, lineHeight: 1.6, margin: 0 }}>{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
