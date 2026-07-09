"use client";

import { useRef, useState } from "react";
import { SectionLabel } from "@/components/ui";
import { useReveal } from "@/lib/scrollReveal";
import { hSans, grad } from "@/lib/site";

const CUSTOS = [
  ["Na técnica", "A insegurança de liberar o laudo sem ter certeza de que não passou nada batido."],
  ["No faturamento", "A receita que escapa do consultório todo mês, num exame que já bateu na sua porta junto do eco."],
  ["Na reputação", "Um laudo vascular fraco derruba a confiança em tudo que você assina. Se o colega duvida da sua carótida, começa a duvidar do seu eco."],
];

function CustoCard({ t, d }) {
  const [h, setH] = useState(false);
  return (
    <div
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{
        borderTop: "2px solid transparent",
        borderImage: "var(--pz-gradient) 1",
        paddingTop: 18,
        cursor: "default",
        transition: "transform var(--dur-base) var(--ease-standard)",
        transform: h ? "translateY(-3px)" : "none",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10 }}>
        <h3 style={{ fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: 17, margin: 0, color: "var(--accent)" }}>{t}</h3>
        <span
          style={{
            width: 24,
            height: 24,
            borderRadius: "50%",
            border: "1px solid var(--border-strong)",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            color: "var(--accent)",
            fontSize: 17,
            lineHeight: 1,
            flexShrink: 0,
            transition: "transform var(--dur-base) var(--ease-standard), background var(--dur-base)",
            transform: h ? "rotate(45deg)" : "none",
            background: h ? "rgba(15,191,181,0.14)" : "transparent",
          }}
        >
          +
        </span>
      </div>
      <div style={{ maxHeight: h ? 220 : 0, opacity: h ? 1 : 0, overflow: "hidden", transition: "max-height var(--dur-slow) var(--ease-standard), opacity var(--dur-base) var(--ease-standard)" }}>
        <p style={{ color: "var(--text-secondary)", fontSize: 14.5, lineHeight: 1.6, margin: "10px 0 0" }}>{d}</p>
      </div>
    </div>
  );
}

export default function Problema() {
  const cardRef = useRef(null);
  useReveal(cardRef);

  return (
    <section style={{ padding: "64px 0 40px" }}>
      <div className="pz-wrap">
        <div
          ref={cardRef}
          className="gsap-reveal"
          style={{ borderRadius: 24, background: "var(--surface-raised)", border: "1px solid var(--border-subtle)", boxShadow: "var(--edge-top), var(--shadow-lg)", padding: "52px 52px" }}
        >
          <div style={{ maxWidth: 780 }}>
            <SectionLabel>O problema</SectionLabel>
            <h2 style={{ ...hSans, fontSize: "clamp(26px, 3.4vw, 34px)", margin: "16px 0 18px" }}>Você domina o coração. Na carótida, trava.</h2>
            <p style={{ color: "var(--text-secondary)", fontSize: 16.5, lineHeight: 1.7, margin: 0 }}>
              Você dá um jeito, segura o laudo mais tempo do que gostaria, ou libera sem ter segurança. Aprendeu a
              teoria, mas a prática real, guiada, teve quase nenhuma. Esse &quot;jeito&quot; sai caro em três frentes:
            </p>
          </div>
          <div className="pz-grid-3" style={{ margin: "36px 0 28px" }}>
            {CUSTOS.map(([t, d]) => (
              <CustoCard key={t} t={t} d={d} />
            ))}
          </div>
          <p style={{ ...hSans, fontSize: "clamp(19px, 2.4vw, 22px)", maxWidth: 640 }}>
            Nada disso é falta de capacidade. <span style={grad}>É falta de prática do jeito certo.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
