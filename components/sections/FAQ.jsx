"use client";

import { useRef, useState, useEffect } from "react";
import { Button, SectionLabel } from "@/components/ui";
import { gsap, useGSAP } from "@/lib/gsap";
import { useReveal, useStaggerReveal } from "@/lib/scrollReveal";
import { WA_LINK, hSans } from "@/lib/site";

const FAQS = [
  ["Preciso me afastar do consultório durante três dias?", "Sim. O treinamento foi estruturado em formato concentrado para reduzir o impacto na agenda médica e permitir uma experiência prática contínua. A proposta é dedicar esse período exclusivamente ao desenvolvimento técnico."],
  ["Já realizo Doppler de Carótidas. A imersão ainda faz sentido?", "Sim. Muitos participantes já executam o exame e procuram aperfeiçoar técnica, padronização, interpretação dos achados e segurança na elaboração dos laudos."],
  ["Existe acompanhamento após o treinamento?", "Sim. Dependendo do nível escolhido, o participante conta com revisão de exames, esclarecimento de dúvidas e acompanhamento durante a incorporação do método à rotina clínica."],
  ["O treinamento é realmente prático?", "Sim. O conteúdo teórico é disponibilizado previamente na plataforma. Durante o encontro presencial, o foco é a prática supervisionada em pacientes reais, discussão de casos e desenvolvimento técnico individual."],
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
          <h2 style={{ ...hSans, fontSize: "clamp(26px, 3.8vw, 38px)", marginTop: 16 }}>Dúvidas frequentes sobre o treinamento.</h2>
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
            <SectionLabel>Atendimento</SectionLabel>
            <h3 style={{ fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: 22, lineHeight: 1.25, margin: "16px 0 10px", color: "#fff" }}>Nossa equipe está disponível para esclarecer qualquer dúvida.</h3>
            <p style={{ color: "var(--text-secondary)", fontSize: 14.5, lineHeight: 1.6, margin: "0 0 22px" }}>Se desejar mais informações sobre a metodologia, próximas turmas ou níveis de participação, fale diretamente com nossa equipe pelo WhatsApp.</p>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
              <Button variant="primary" size="md" style={{ width: "100%", borderRadius: 12 }}>
                Conversar com a equipe
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
