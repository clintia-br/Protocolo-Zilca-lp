"use client";

import { useRef } from "react";
import { useReveal, useStaggerReveal } from "@/lib/scrollReveal";
import { hSans, grad } from "@/lib/site";

const CARDS = [
  ["Domina o eco, trava na carótida", "Você libera o eco de olhos fechados. Na carótida, dá um jeito, segura o laudo ou manda pra fora."],
  ["Manda receita pra fora todo mês", "Um exame que já bate na sua porta junto do eco escapa do consultório por falta de prática guiada."],
  ["Fecha diagnóstico sem segurança", "Aprendeu a teoria, mas prática real, em caso difícil, teve quase nenhuma. Falta cravar o diagnóstico sem hesitar."],
  ["Quer fechar o ciclo no consultório", "Eco + esteira + carótida dentro da própria clínica, liberando o próprio laudo com segurança."],
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
          <h2 style={{ ...hSans, fontSize: "clamp(26px, 4vw, 40px)" }}>Para quem é essa imersão?</h2>
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
