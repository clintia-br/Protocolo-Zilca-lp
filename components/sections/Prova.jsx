"use client";

import { useRef } from "react";
import { SectionLabel } from "@/components/ui";
import { useReveal, useStaggerReveal } from "@/lib/scrollReveal";
import { hSans } from "@/lib/site";

export default function Prova() {
  const headRef = useRef(null);
  const gridRef = useRef(null);

  useReveal(headRef);
  useStaggerReveal(gridRef, ".gsap-reveal");

  return (
    <section style={{ padding: "56px 0 40px" }}>
      <div className="pz-wrap">
        <div ref={headRef} className="gsap-reveal" style={{ maxWidth: 760, marginBottom: 40 }}>
          <SectionLabel>Resultados</SectionLabel>
          <h2 style={{ ...hSans, fontSize: "clamp(26px, 3.6vw, 36px)", margin: "16px 0 14px" }}>A evolução dos participantes é a principal medida da qualidade do treinamento.</h2>
          <p style={{ color: "var(--text-secondary)", fontSize: 16, lineHeight: 1.6, margin: 0 }}>
            Cada turma reúne poucos médicos para garantir acompanhamento próximo durante toda a formação. O retorno dos
            participantes reflete exatamente esse modelo: mais segurança na realização do exame, maior confiança na
            interpretação dos casos e suporte contínuo durante a incorporação do Doppler de Carótidas à rotina clínica.
          </p>
        </div>
        <div ref={gridRef} className="pz-grid-3">
          {[1, 2, 3].map((n) => (
            <div
              key={n}
              className="gsap-reveal"
              style={{ height: "100%", display: "flex", flexDirection: "column", borderRadius: 16, background: "var(--surface-card)", border: "1px solid var(--border-subtle)", boxShadow: "var(--edge-top)", padding: 28 }}
            >
              <span style={{ fontFamily: "var(--font-serif)", fontSize: 46, lineHeight: 0.6, color: "var(--accent)", height: 26 }}>“</span>
              <p style={{ color: "var(--text-secondary)", fontSize: 14, lineHeight: 1.65, margin: "0 0 24px", fontFamily: "ui-monospace, Menlo, monospace" }}>
                [ Inserir depoimento autorizado ]
              </p>
              <div style={{ marginTop: "auto", display: "flex", alignItems: "center", gap: 12 }}>
                <span style={{ width: 42, height: 42, borderRadius: "50%", background: "var(--surface-hover)", border: "1px solid var(--border-subtle)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "ui-monospace, monospace", fontSize: 10, color: "var(--text-muted)" }}>
                  foto
                </span>
                <div>
                  <div style={{ color: "#fff", fontSize: 14, fontWeight: 600 }}>Cardiologista</div>
                  <div style={{ color: "var(--text-muted)", fontSize: 12.5 }}>Participante da Imersão</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
