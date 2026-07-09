"use client";

import { useRef, useState, useEffect } from "react";
import { SectionLabel } from "@/components/ui";
import { gsap, useGSAP } from "@/lib/gsap";
import { useReveal, useStaggerReveal } from "@/lib/scrollReveal";
import { wrap } from "@/lib/site";

const FAQS = [
  [
    "“Três dias fora do consultório? Não consigo me afastar.”",
    "O formato é concentrado de propósito: sexta à tarde, sábado e domingo de manhã. São três dias que passam a te devolver, semana após semana, um exame que hoje você terceiriza.",
  ],
  [
    "“Eu já faço a carótida, dou um jeito.”",
    "O “jeitinho” é justamente o problema. Um laudo impreciso não fica isolado: ele enfraquece a percepção de todos os exames complexos que você assina. A imersão troca o “dou um jeito” por segurança de verdade.",
  ],
  [
    "“E depois do curso, se eu travar num caso?”",
    "Você não fica sozinho. No nível Recomendado são 12 meses de revisão dos seus laudos e suporte de dúvidas com o próprio Dr. Cássio, apoio pros primeiros meses, que é quando a insegurança aparece.",
  ],
  [
    "“É teórico ou é prático de verdade?”",
    "A teoria você estuda antes, na plataforma. O presencial é 100% mão na massa: paciente real, um aluno por aparelho, supervisão direta.",
  ],
];

function FAQItem({ q, a, open, onClick }) {
  const bodyRef = useRef(null);
  const iconRef = useRef(null);
  const firstRun = useRef(true);

  useEffect(() => {
    const el = bodyRef.current;
    if (!el) return;
    if (firstRun.current) {
      gsap.set(el, { height: open ? "auto" : 0 });
      firstRun.current = false;
      return;
    }
    gsap.to(el, { height: open ? "auto" : 0, duration: 0.55, ease: "pzStandard" });
    gsap.to(iconRef.current, { rotate: open ? 45 : 0, duration: 0.45, ease: "pzStandard" });
  }, [open]);

  return (
    <div style={{ borderRadius: "var(--radius-md)", border: "1px solid var(--border-subtle)", background: "var(--surface-card)", overflow: "hidden", boxShadow: "var(--edge-top)" }}>
      <button
        onClick={onClick}
        style={{
          width: "100%",
          background: "none",
          border: "none",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 20,
          padding: "22px 26px",
          textAlign: "left",
          color: "#fff",
          fontFamily: "var(--font-sans)",
          fontSize: 17,
          fontWeight: 500,
        }}
        aria-expanded={open}
      >
        <span>{q}</span>
        <span
          ref={iconRef}
          style={{
            flexShrink: 0,
            width: 26,
            height: 26,
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            color: "var(--accent)",
            fontSize: 22,
          }}
        >
          +
        </span>
      </button>
      <div ref={bodyRef} style={{ height: 0, overflow: "hidden" }}>
        <p style={{ margin: 0, padding: "0 26px 24px", color: "var(--text-secondary)", fontSize: 15.5, lineHeight: 1.65 }}>{a}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [open, setOpen] = useState(0);
  const headerRef = useRef(null);
  const listRef = useRef(null);

  useReveal(headerRef);
  useStaggerReveal(listRef, ".gsap-reveal", { start: "top 88%" });

  return (
    <section id="faq" style={{ padding: "40px 0 96px" }}>
      <div className="pz-wrap" style={{ ...wrap, maxWidth: 900 }}>
        <div ref={headerRef} className="gsap-reveal" style={{ textAlign: "center", marginBottom: 44 }}>
          <SectionLabel>Perguntas frequentes</SectionLabel>
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontWeight: 700,
              fontSize: "clamp(26px, 3.6vw, 40px)",
              margin: "16px 0 0",
              color: "#fff",
              letterSpacing: "var(--tracking-tight)",
            }}
          >
            Ainda com dúvida? A gente responde direto.
          </h2>
        </div>
        <div ref={listRef} style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {FAQS.map(([q, a], i) => (
            <div key={i} className="gsap-reveal">
              <FAQItem q={q} a={a} open={open === i} onClick={() => setOpen(open === i ? -1 : i)} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
