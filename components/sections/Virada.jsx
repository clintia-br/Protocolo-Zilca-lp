"use client";

import { useRef } from "react";
import { Card, SectionLabel } from "@/components/ui";
import { useReveal, useStaggerReveal } from "@/lib/scrollReveal";
import { useParallax } from "@/lib/animations";
import { wrap } from "@/lib/site";

const TRIPE = [
  [
    "01",
    "A teoria fica com você, antes",
    "Diretrizes das sociedades de cardio, angio e radiologia, com material curado na plataforma própria, no seu tempo. O presencial não gasta um minuto com slide.",
  ],
  [
    "02",
    "A visão você treina nos casos",
    "Um banco de casos reais, com laudo e imagem em alta, mais uma sessão ao vivo com o Dr. Cássio cerca de uma semana antes, pra acostumar o olho às placas antes de encostar no transdutor.",
  ],
  [
    "03",
    "A prática é o coração de tudo",
    "Três dias intensivos, um aluno por aparelho, em pacientes reais selecionados, incluindo casos graves que costumam aparecer só em livro. O Dr. Cássio demonstra e supervisiona de perto, o tempo todo.",
  ],
];

export default function Virada() {
  const headerRef = useRef(null);
  const cardsRef = useRef(null);
  const boxRef = useRef(null);
  const glowRef = useRef(null);

  useReveal(headerRef);
  useStaggerReveal(cardsRef, ".gsap-reveal");
  useReveal(boxRef, { delay: 0.1 });
  useParallax(glowRef, { yPercent: -10 });

  return (
    <section id="virada" style={{ padding: "96px 0 40px", position: "relative", overflow: "hidden" }}>
      <div ref={glowRef} style={{ position: "absolute", inset: "-10% 0", backgroundImage: "var(--pz-glow)", opacity: 0.7, pointerEvents: "none" }} />
      <div className="pz-wrap" style={{ ...wrap, position: "relative" }}>
        <div ref={headerRef} className="gsap-reveal" style={{ maxWidth: 860 }}>
          <SectionLabel>A virada</SectionLabel>
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontWeight: 700,
              fontSize: "clamp(26px, 3.8vw, 42px)",
              margin: "16px 0 20px",
              color: "#fff",
              letterSpacing: "var(--tracking-tight)",
              lineHeight: 1.16,
            }}
          >
            O que faltou nunca foi teoria. Foi{" "}
            <span
              style={{
                backgroundImage: "var(--pz-gradient-text)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              aparelho na mão
            </span>
            , em paciente real, com alguém do lado.
          </h2>
          <p style={{ color: "var(--text-secondary)", fontSize: 17, lineHeight: 1.65, margin: 0, maxWidth: 680 }}>
            A imersão se apoia num tripé. Cada parte fecha uma lacuna que os cursos comuns deixam aberta.
          </p>
        </div>

        <div ref={cardsRef} className="pz-grid-3" style={{ marginTop: 40 }}>
          {TRIPE.map(([n, t, d]) => (
            <Card key={n} topRule interactive padding={30} className="gsap-reveal" style={{ height: "100%" }}>
              <div style={{ fontFamily: "var(--font-serif)", fontSize: 34, fontWeight: 700, color: "var(--accent)", marginBottom: 14 }}>{n}</div>
              <h3 style={{ fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: 22, margin: "0 0 10px", color: "#fff", lineHeight: 1.2 }}>{t}</h3>
              <p style={{ color: "var(--text-secondary)", fontSize: 14.5, lineHeight: 1.6, margin: 0 }}>{d}</p>
            </Card>
          ))}
        </div>

        <div
          ref={boxRef}
          className="gsap-reveal"
          style={{
            marginTop: 30,
            borderRadius: "var(--radius-lg)",
            border: "1px solid var(--border-subtle)",
            background: "var(--surface-raised)",
            padding: "28px 32px",
            boxShadow: "var(--edge-top)",
          }}
        >
          <p style={{ margin: 0, color: "var(--text-primary)", fontSize: 17, lineHeight: 1.65 }}>
            Você entra fazendo “meio que dá”.{" "}
            <span style={{ color: "var(--accent-green)", fontWeight: 600 }}>
              Sai gerando a imagem, medindo pela velocidade, cravando o diagnóstico
            </span>{" "}
            e liberando o próprio laudo com segurança, com segunda opinião de apoio nos primeiros meses.
          </p>
        </div>
      </div>
    </section>
  );
}
