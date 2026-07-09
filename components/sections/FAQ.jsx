"use client";

import { useRef, useState, useEffect } from "react";
import { Button, SectionLabel } from "@/components/ui";
import { gsap, useGSAP } from "@/lib/gsap";
import { useReveal, useStaggerReveal } from "@/lib/scrollReveal";
import { WA_LINK, hSans } from "@/lib/site";

const FAQS = [
  ["“Três dias fora do consultório? Não consigo me afastar.”", "O formato é concentrado de propósito. São três dias que passam a te devolver, semana após semana, um exame que hoje você terceiriza."],
  ["“Eu já faço a carótida, dou um jeito.”", "O “jeitinho” é justamente o problema. Um laudo impreciso não fica isolado: ele enfraquece a percepção de todos os exames complexos que você assina. A imersão troca o “dou um jeito” por segurança de verdade."],
  ["“E depois do curso, se eu travar num caso?”", "Você não fica sozinho. No nível Recomendado são 12 meses de revisão dos seus laudos e suporte de dúvidas com o próprio Dr. Cássio, apoio pros primeiros meses, que é quando a insegurança aparece."],
  ["“É teórico ou é prático de verdade?”", "A teoria você estuda antes, na plataforma. O presencial é 100% mão na massa: paciente real, um aluno por aparelho, supervisão direta."],
];

function FAQItem({ q, a, open, onClick }) {
  const bodyRef = useRef(null);
  const iconRef = useRef(null);
  const first = useRef(true);

  useEffect(() => {
    const el = bodyRef.current;
    if (!el) return;
    if (first.current) {
      gsap.set(el, { height: open ? "auto" : 0 });
      first.current = false;
      return;
    }
    gsap.to(el, { height: open ? "auto" : 0, duration: 0.5, ease: "pzStandard" });
    gsap.to(iconRef.current, { rotate: open ? 45 : 0, duration: 0.45, ease: "pzStandard" });
  }, [open]);

  return (
    <div style={{ borderRadius: 14, border: "1px solid var(--border-subtle)", background: "var(--surface-card)", overflow: "hidden", boxShadow: "var(--edge-top)" }}>
      <button
        onClick={onClick}
        aria-expanded={open}
        style={{ width: "100%", background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 18, padding: "20px 24px", textAlign: "left", color: "#fff", fontFamily: "var(--font-sans)", fontSize: 16, fontWeight: 500 }}
      >
        <span>{q}</span>
        <span ref={iconRef} style={{ flexShrink: 0, color: "var(--accent)", fontSize: 22, display: "inline-block" }}>
          +
        </span>
      </button>
      <div ref={bodyRef} style={{ height: 0, overflow: "hidden" }}>
        <p style={{ margin: 0, padding: "0 24px 22px", color: "var(--text-secondary)", fontSize: 15, lineHeight: 1.65 }}>{a}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [open, setOpen] = useState(0);
  const headRef = useRef(null);
  const listRef = useRef(null);
  const supportRef = useRef(null);

  useReveal(headRef);
  useStaggerReveal(listRef, ".gsap-reveal", { start: "top 85%" });
  useReveal(supportRef, { delay: 0.15 });

  return (
    <section id="faq" style={{ padding: "56px 0 40px" }}>
      <div className="pz-wrap">
        <div ref={headRef} className="gsap-reveal" style={{ marginBottom: 40 }}>
          <SectionLabel>FAQ</SectionLabel>
          <h2 style={{ ...hSans, fontSize: "clamp(26px, 3.8vw, 38px)", marginTop: 16 }}>Perguntas frequentes</h2>
        </div>
        <div className="pz-faq">
          <div ref={listRef} style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {FAQS.map(([q, a], i) => (
              <div key={i} className="gsap-reveal">
                <FAQItem q={q} a={a} open={open === i} onClick={() => setOpen(open === i ? -1 : i)} />
              </div>
            ))}
          </div>
          <div ref={supportRef} className="gsap-reveal" style={{ borderRadius: 20, background: "var(--surface-card)", border: "1px solid var(--border-subtle)", boxShadow: "var(--edge-top)", padding: 34, position: "sticky", top: 90 }}>
            <SectionLabel>Suporte</SectionLabel>
            <h3 style={{ fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: 22, lineHeight: 1.25, margin: "16px 0 10px", color: "#fff" }}>Ainda com dúvida? Fale com a equipe.</h3>
            <p style={{ color: "var(--text-secondary)", fontSize: 14.5, lineHeight: 1.6, margin: "0 0 22px" }}>Resposta de médico para médico, direto no WhatsApp — sem robô, sem espera.</p>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
              <Button variant="primary" size="md" style={{ width: "100%", borderRadius: 12 }}>
                Quero falar no WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
