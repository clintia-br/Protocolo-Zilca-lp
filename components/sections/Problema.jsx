"use client";

import { useRef } from "react";
import { Card, SectionLabel } from "@/components/ui";
import { useReveal, useStaggerReveal } from "@/lib/scrollReveal";
import { wrap } from "@/lib/site";

const CUSTOS = [
  ["Na técnica", "A insegurança de liberar sem ter certeza de que não passou nada batido."],
  [
    "No faturamento",
    "A receita que escapa do consultório todo mês, num exame que já bateu na sua porta junto do eco.",
  ],
  [
    "Na reputação",
    "Um laudo vascular fraco derruba a confiança em tudo que você assina. Se o colega duvida da sua carótida, começa a duvidar do seu eco.",
  ],
];

export default function Problema() {
  const headerRef = useRef(null);
  const cardsRef = useRef(null);
  const closingRef = useRef(null);

  useReveal(headerRef);
  useStaggerReveal(cardsRef, ".gsap-reveal");
  useReveal(closingRef, { delay: 0.1 });

  return (
    <section id="problema" style={{ padding: "104px 0 40px", position: "relative" }}>
      <div className="pz-wrap" style={wrap}>
        <div ref={headerRef} className="gsap-reveal" style={{ maxWidth: 820 }}>
          <SectionLabel>O problema</SectionLabel>
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontWeight: 700,
              fontSize: "clamp(28px, 4vw, 44px)",
              margin: "16px 0 22px",
              color: "#fff",
              letterSpacing: "var(--tracking-tight)",
              lineHeight: 1.15,
            }}
          >
            Você domina o coração. Na carótida, trava.
          </h2>
          <p style={{ color: "var(--text-secondary)", fontSize: 17.5, lineHeight: 1.7, margin: "0 0 16px", maxWidth: 760 }}>
            O pedido chega quase sempre no mesmo papel: eco, esteira e carótida. O eco você libera de olhos fechados. A
            carótida, não.
          </p>
          <p style={{ color: "var(--text-secondary)", fontSize: 17.5, lineHeight: 1.7, margin: 0, maxWidth: 760 }}>
            Você dá um jeito, segura o laudo mais tempo do que gostaria, ou manda pra fora. E manda por um motivo
            simples: aprendeu a teoria, mas prática real, guiada, em caso difícil, teve quase nenhuma. Ninguém te
            colocou tempo suficiente na frente do aparelho pra gerar a imagem, medir pela velocidade do sangue e
            cravar o diagnóstico sem hesitar.
          </p>
        </div>

        <div
          style={{
            margin: "44px 0 8px",
            color: "var(--text-muted)",
            fontSize: 13.5,
            letterSpacing: "0.04em",
            textTransform: "uppercase",
            fontWeight: 600,
          }}
        >
          Esse “jeitinho” sai caro em três frentes
        </div>
        <div ref={cardsRef} className="pz-grid-3">
          {CUSTOS.map(([t, d]) => (
            <Card key={t} padding={28} className="gsap-reveal" style={{ height: "100%" }}>
              <h3 style={{ fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: 22, margin: "0 0 10px", color: "var(--accent)" }}>
                {t}
              </h3>
              <p style={{ color: "var(--text-secondary)", fontSize: 15, lineHeight: 1.6, margin: 0 }}>{d}</p>
            </Card>
          ))}
        </div>

        <p
          ref={closingRef}
          className="gsap-reveal"
          style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px, 2.4vw, 26px)", lineHeight: 1.4, color: "#fff", maxWidth: 720, margin: "44px 0 0" }}
        >
          Nada disso é falta de capacidade. <span style={{ color: "var(--accent-green)" }}>É falta de prática do jeito certo.</span>
        </p>
      </div>
    </section>
  );
}
