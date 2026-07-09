"use client";

import { useRef } from "react";
import { SectionLabel } from "@/components/ui";
import { useReveal } from "@/lib/scrollReveal";
import { gsap, useGSAP } from "@/lib/gsap";
import { hSans, grad } from "@/lib/site";

const NUMS = [
  ["4", "aparelhos rodando"],
  ["1", "aluno por aparelho"],
  ["0", "simulação"],
];

export default function TresDias() {
  const textRef = useRef(null);
  const mediaRef = useRef(null);
  const img1Ref = useRef(null);
  const img2Ref = useRef(null);

  useReveal(textRef);

  useGSAP(
    () => {
      [img1Ref, img2Ref].forEach((r, i) => {
        if (!r.current) return;
        gsap.fromTo(
          r.current,
          { clipPath: "inset(0 0 100% 0)", scale: 1.1 },
          {
            clipPath: "inset(0 0 0% 0)",
            scale: 1,
            duration: 1.1,
            delay: i * 0.15,
            ease: "pzOut",
            scrollTrigger: { trigger: mediaRef.current, start: "top 82%", once: true },
          }
        );
      });
    },
    { scope: mediaRef }
  );

  return (
    <section style={{ padding: "56px 0 40px" }}>
      <div className="pz-wrap">
        <div className="pz-tresdias">
          <div
            ref={textRef}
            className="gsap-reveal"
            style={{ borderRadius: 24, background: "var(--surface-raised)", border: "1px solid var(--border-subtle)", boxShadow: "var(--edge-top)", padding: "48px 48px", display: "flex", flexDirection: "column", justifyContent: "center" }}
          >
            <SectionLabel>Como são os três dias</SectionLabel>
            <h2 style={{ ...hSans, fontSize: "clamp(24px, 3.2vw, 32px)", margin: "16px 0 16px" }}>Formato concentrado, pra pesar o mínimo na sua agenda.</h2>
            <p style={{ color: "var(--text-secondary)", fontSize: 16, lineHeight: 1.65, margin: "0 0 22px" }}>
              Três dias inteiros de prática. Um aluno por aparelho, até quatro aparelhos Philips top de linha rodando ao
              mesmo tempo. Pacientes reais e selecionados, com patologia de verdade — nada de simulação. E o Dr. Cássio
              ali do lado, demonstrando, corrigindo a mão, acompanhando caso a caso.
            </p>
            <div style={{ display: "flex", gap: 22, flexWrap: "wrap" }}>
              {NUMS.map(([v, l]) => (
                <div key={l}>
                  <div style={{ ...hSans, fontSize: 30, ...grad }}>{v}</div>
                  <div style={{ color: "var(--text-muted)", fontSize: 13, marginTop: 2 }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
          <div ref={mediaRef} className="pz-tresdias-media">
            <div style={{ borderRadius: 24, overflow: "hidden", border: "1px solid var(--border-subtle)", position: "relative", minHeight: 200 }}>
              <img ref={img1Ref} src="/assets/photo-ultrasound.jpg" alt="Doppler de carótida em paciente real" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, transparent 55%, rgba(1,8,18,0.5))" }} />
              <span style={{ position: "absolute", left: 20, bottom: 16, color: "#fff", fontSize: 13, fontWeight: 600, background: "rgba(1,8,18,0.5)", backdropFilter: "blur(6px)", padding: "6px 12px", borderRadius: 999, border: "1px solid var(--border-subtle)" }}>
                Doppler de carótida · caso real
              </span>
            </div>
            <div style={{ borderRadius: 24, overflow: "hidden", border: "1px solid var(--border-subtle)", position: "relative", minHeight: 160 }}>
              <img ref={img2Ref} src="/assets/imersao-real.jpg" alt="Bastidores da imersão — aluno operando o transdutor sob supervisão" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, transparent 60%, rgba(1,8,18,0.45))" }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
