"use client";

import { useRef } from "react";
import { Card, SectionLabel } from "@/components/ui";
import { useReveal, useStaggerReveal } from "@/lib/scrollReveal";
import { wrap } from "@/lib/site";

export default function Prova() {
  const headerRef = useRef(null);
  const cardsRef = useRef(null);

  useReveal(headerRef);
  useStaggerReveal(cardsRef, ".gsap-reveal");

  return (
    <section style={{ padding: "40px 0 96px" }}>
      <div className="pz-wrap" style={wrap}>
        <div ref={headerRef} className="gsap-reveal" style={{ maxWidth: 780, marginBottom: 40 }}>
          <SectionLabel>Prova</SectionLabel>
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontWeight: 700,
              fontSize: "clamp(26px, 3.6vw, 40px)",
              margin: "16px 0 16px",
              color: "#fff",
              letterSpacing: "var(--tracking-tight)",
              lineHeight: 1.12,
            }}
          >
            O que os colegas dizem depois da imersão.
          </h2>
          <p style={{ color: "var(--text-secondary)", fontSize: 16.5, lineHeight: 1.65, margin: 0, maxWidth: 720 }}>
            Turma pequena gera acompanhamento próximo. É isso que aparece nos retornos: médicos que voltaram ao
            consultório liberando o próprio laudo, mandando casos pra segunda opinião e indicando colegas.
          </p>
        </div>
        <div ref={cardsRef} className="pz-grid-3">
          {[1, 2, 3].map((n) => (
            <Card key={n} padding={28} className="gsap-reveal" style={{ height: "100%", display: "flex", flexDirection: "column" }}>
              <span style={{ fontFamily: "var(--font-serif)", fontSize: 44, lineHeight: 0.6, color: "var(--accent)", height: 24 }}>“</span>
              <p style={{ color: "var(--text-secondary)", fontSize: 14.5, lineHeight: 1.65, margin: "0 0 24px", fontFamily: "ui-monospace, Menlo, monospace" }}>
                [ SUBSTITUIR ] depoimento real e autorizado do cardiologista — texto, print ou vídeo. Espaço para 1 a
                3 depoimentos.
              </p>
              <div style={{ marginTop: "auto", display: "flex", alignItems: "center", gap: 12 }}>
                <span
                  style={{
                    width: 42,
                    height: 42,
                    borderRadius: "50%",
                    background: "var(--surface-hover)",
                    border: "1px solid var(--border-subtle)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "ui-monospace, monospace",
                    fontSize: 10,
                    color: "var(--text-muted)",
                  }}
                >
                  foto
                </span>
                <div>
                  <div style={{ color: "#fff", fontSize: 14, fontWeight: 600 }}>Cardiologista</div>
                  <div style={{ color: "var(--text-muted)", fontSize: 12.5 }}>Aluno da imersão</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
