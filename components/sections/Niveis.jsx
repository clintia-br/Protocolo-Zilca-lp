"use client";

import { useRef } from "react";
import { Button, SectionLabel } from "@/components/ui";
import { useReveal, useStaggerReveal } from "@/lib/scrollReveal";
import { WA_LINK, wrap } from "@/lib/site";

const NIVEIS = [
  {
    nome: "Essencial",
    destaque: false,
    tagline: "Pra quem quer o núcleo da experiência: dominar a técnica na prática.",
    itens: [
      "Imersão prática de 3 dias, um aluno por aparelho",
      "Acesso à plataforma (teoria + banco de casos)",
      "Revisão de laudo e suporte de dúvidas no período inicial",
    ],
  },
  {
    nome: "Recomendado",
    destaque: true,
    tagline: "Pra quem quer vencer a insegurança com apoio contínuo depois do curso.",
    itens: [
      "Tudo do Essencial",
      "Revisão de laudo estendida ao longo de 1 ano",
      "Suporte de dúvidas por 12 meses",
      "Mentoria de implantação no consultório",
      "Encontro dedicado de revisão pós-curso",
    ],
  },
  {
    nome: "Referência",
    destaque: false,
    tagline: "A experiência mais completa, exclusiva e individualizada.",
    itens: [
      "Tudo do Recomendado",
      "Dia extra de prática dedicada",
      "Hospedagem e traslado do aeroporto inclusos",
      "Mentoria estendida e próxima com o Dr. Cássio",
    ],
  },
];

export default function Niveis() {
  const headerRef = useRef(null);
  const cardsRef = useRef(null);

  useReveal(headerRef);
  useStaggerReveal(cardsRef, ".gsap-reveal");

  return (
    <section id="niveis" style={{ padding: "40px 0 96px", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, backgroundImage: "var(--pz-glow)", opacity: 0.6, pointerEvents: "none" }} />
      <div className="pz-wrap" style={{ ...wrap, position: "relative" }}>
        <div ref={headerRef} className="gsap-reveal" style={{ maxWidth: 760, marginBottom: 44 }}>
          <SectionLabel>Níveis de participação</SectionLabel>
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontWeight: 700,
              fontSize: "clamp(26px, 3.6vw, 40px)",
              margin: "16px 0 0",
              color: "#fff",
              letterSpacing: "var(--tracking-tight)",
              lineHeight: 1.12,
            }}
          >
            Escolha o nível de acompanhamento que faz sentido pra você.
          </h2>
        </div>
        <div ref={cardsRef} className="pz-grid-3" style={{ alignItems: "stretch" }}>
          {NIVEIS.map((n) => (
            <div
              key={n.nome}
              className="gsap-reveal"
              style={{
                position: "relative",
                height: "100%",
                borderRadius: "var(--radius-lg)",
                padding: 32,
                display: "flex",
                flexDirection: "column",
                background: n.destaque ? "var(--pz-gradient-deep)" : "var(--surface-card)",
                border: n.destaque ? "1px solid rgba(15,191,181,0.5)" : "1px solid var(--border-subtle)",
                boxShadow: n.destaque ? "var(--glow-teal), var(--shadow-lg)" : "var(--edge-top), var(--shadow-md)",
              }}
            >
              {n.destaque && (
                <span
                  style={{
                    position: "absolute",
                    top: -12,
                    left: 28,
                    background: "var(--pz-ink)",
                    border: "1px solid rgba(15,191,181,0.5)",
                    color: "var(--accent)",
                    fontSize: 11.5,
                    fontWeight: 700,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    padding: "5px 12px",
                    borderRadius: 999,
                  }}
                >
                  Escolha da maioria
                </span>
              )}
              <h3 style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: 28, margin: "0 0 8px", color: "#fff" }}>{n.nome}</h3>
              <p style={{ color: n.destaque ? "rgba(255,255,255,0.9)" : "var(--text-secondary)", fontSize: 14.5, lineHeight: 1.55, margin: "0 0 22px", minHeight: 66 }}>
                {n.tagline}
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 28 }}>
                {n.itens.map((it) => (
                  <div key={it} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                    <span
                      style={{
                        width: 18,
                        height: 18,
                        borderRadius: "50%",
                        background: n.destaque ? "rgba(255,255,255,0.22)" : "var(--surface-hover)",
                        flexShrink: 0,
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: n.destaque ? "#fff" : "var(--accent)",
                        fontSize: 11,
                        fontWeight: 700,
                        marginTop: 2,
                      }}
                    >
                      ✓
                    </span>
                    <span style={{ color: n.destaque ? "#fff" : "var(--text-primary)", fontSize: 14.5, lineHeight: 1.45 }}>{it}</span>
                  </div>
                ))}
              </div>
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", marginTop: "auto" }}>
                <Button
                  variant={n.destaque ? "primary" : "secondary"}
                  size="md"
                  style={
                    n.destaque
                      ? { width: "100%", borderRadius: 999, background: "var(--pz-ink)", backgroundImage: "none", boxShadow: "none" }
                      : { width: "100%", borderRadius: 999 }
                  }
                >
                  Quero aplicar
                </Button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
