"use client";

import { useRef } from "react";
import { Button } from "@/components/ui";
import { useReveal, useStaggerReveal } from "@/lib/scrollReveal";
import { WA_LINK, hSans } from "@/lib/site";

const NIVEIS = [
  {
    nome: "Essencial",
    destaque: false,
    tagline: "O núcleo da experiência: dominar a técnica na prática.",
    itens: ["Imersão prática de 3 dias, um aluno por aparelho", "Acesso à plataforma (teoria + banco de casos)", "Revisão de laudo e suporte no período inicial"],
  },
  {
    nome: "Recomendado",
    destaque: true,
    tagline: "Vencer a insegurança com apoio contínuo depois do curso.",
    itens: ["Tudo do Essencial", "Revisão de laudo estendida por 1 ano", "Suporte de dúvidas por 12 meses", "Mentoria de implantação no consultório", "Encontro dedicado de revisão pós-curso"],
  },
  {
    nome: "Referência",
    destaque: false,
    tagline: "A experiência mais completa, exclusiva e individualizada.",
    itens: ["Tudo do Recomendado", "Dia extra de prática dedicada", "Hospedagem e traslado do aeroporto inclusos", "Mentoria estendida e próxima com o Dr. Cássio"],
  },
];

export default function Niveis() {
  const headRef = useRef(null);
  const gridRef = useRef(null);

  useReveal(headRef);
  useStaggerReveal(gridRef, ".gsap-reveal");

  return (
    <section id="niveis" style={{ padding: "56px 0 40px", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, backgroundImage: "var(--pz-glow)", opacity: 0.5, pointerEvents: "none" }} />
      <div className="pz-wrap" style={{ position: "relative" }}>
        <div ref={headRef} className="gsap-reveal" style={{ textAlign: "center", maxWidth: 720, margin: "0 auto 48px" }}>
          <h2 style={{ ...hSans, fontSize: "clamp(24px, 3.8vw, 38px)" }}>Escolha o nível de acompanhamento que faz sentido pra você.</h2>
        </div>
        <div ref={gridRef} className="pz-grid-3" style={{ alignItems: "stretch" }}>
          {NIVEIS.map((n) => (
            <div
              key={n.nome}
              className="gsap-reveal"
              style={{
                position: "relative",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                borderRadius: 20,
                padding: "34px 30px",
                background: n.destaque ? "var(--pz-gradient-deep)" : "var(--surface-card)",
                border: n.destaque ? "1px solid rgba(15,191,181,0.5)" : "1px solid var(--border-subtle)",
                boxShadow: n.destaque ? "var(--glow-teal), var(--shadow-lg)" : "var(--edge-top), var(--shadow-md)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 6 }}>
                <span
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontWeight: 700,
                    fontSize: 13,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: n.destaque ? "#fff" : "var(--accent)",
                    background: n.destaque ? "rgba(255,255,255,0.14)" : "rgba(15,191,181,0.12)",
                    padding: "6px 14px",
                    borderRadius: 999,
                  }}
                >
                  Nível {n.nome}
                </span>
                {n.destaque && (
                  <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--pz-ink)", background: "var(--accent-green)", padding: "5px 10px", borderRadius: 999 }}>
                    Maioria
                  </span>
                )}
              </div>
              <p style={{ color: n.destaque ? "rgba(255,255,255,0.9)" : "var(--text-secondary)", fontSize: 14.5, lineHeight: 1.5, margin: "16px 0 22px", minHeight: 44 }}>{n.tagline}</p>
              <div style={{ display: "flex", flexDirection: "column", marginBottom: 26 }}>
                {n.itens.map((it, k) => (
                  <div
                    key={it}
                    style={{ display: "flex", gap: 12, alignItems: "flex-start", padding: "12px 0", borderTop: k === 0 ? "none" : `1px solid ${n.destaque ? "rgba(255,255,255,0.16)" : "var(--border-subtle)"}` }}
                  >
                    <span style={{ color: n.destaque ? "#fff" : "var(--accent)", fontSize: 15, fontWeight: 700, lineHeight: 1.3 }}>✓</span>
                    <span style={{ color: n.destaque ? "#fff" : "var(--text-primary)", fontSize: 14.5, lineHeight: 1.4 }}>{it}</span>
                  </div>
                ))}
              </div>
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", marginTop: "auto" }}>
                <Button
                  variant={n.destaque ? "primary" : "secondary"}
                  size="md"
                  style={n.destaque ? { width: "100%", borderRadius: 12, background: "var(--pz-ink)", backgroundImage: "none", boxShadow: "none" } : { width: "100%", borderRadius: 12 }}
                >
                  Quero me inscrever
                </Button>
              </a>
            </div>
          ))}
        </div>
        <p style={{ textAlign: "center", color: "var(--text-muted)", fontSize: 14, margin: "36px auto 0", maxWidth: 640 }}>
          São até quatro médicos por turma, um por aparelho. Turma pequena enche rápido — aplicar cedo garante prioridade
          na data que você quer.
        </p>
      </div>
    </section>
  );
}
