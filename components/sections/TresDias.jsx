"use client";

import { useRef } from "react";
import { Card, SectionLabel } from "@/components/ui";
import { useReveal, useStaggerReveal } from "@/lib/scrollReveal";
import { gsap, useGSAP } from "@/lib/gsap";
import { wrap } from "@/lib/site";

const DIAS = [
  ["Sexta", "à tarde", "Aquecimento prático e primeiros casos com o transdutor na mão."],
  ["Sábado", "dia inteiro", "Imersão total em pacientes reais selecionados, do rastreio ao caso grave."],
  ["Domingo", "de manhã", "Consolidação, medição por velocidade e fechamento de laudo."],
];

function MediaFrame({ src, alt, height, imgRef }) {
  return (
    <div style={{ height, borderRadius: "var(--radius-lg)", overflow: "hidden", position: "relative", border: "1px solid var(--border-subtle)" }}>
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        style={{ width: "100%", height: "100%", objectFit: "cover", clipPath: "inset(0 0 100% 0)", transform: "scale(1.12)" }}
      />
    </div>
  );
}

export default function TresDias() {
  const headerRef = useRef(null);
  const cardsRef = useRef(null);
  const mediaWrapRef = useRef(null);
  const img1Ref = useRef(null);
  const img2Ref = useRef(null);

  useReveal(headerRef);
  useStaggerReveal(cardsRef, ".gsap-reveal");

  useGSAP(
    () => {
      [img1Ref, img2Ref].forEach((r, i) => {
        if (!r.current) return;
        gsap.to(r.current, {
          clipPath: "inset(0 0 0% 0)",
          scale: 1,
          duration: 1.2,
          delay: i * 0.15,
          ease: "pzOut",
          scrollTrigger: { trigger: mediaWrapRef.current, start: "top 82%", once: true },
        });
      });
    },
    { scope: mediaWrapRef }
  );

  return (
    <section style={{ padding: "40px 0 96px", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, backgroundImage: "var(--pz-glow)", opacity: 0.6, pointerEvents: "none" }} />
      <div className="pz-wrap" style={{ ...wrap, position: "relative" }}>
        <div ref={headerRef} className="gsap-reveal" style={{ maxWidth: 820, marginBottom: 40 }}>
          <SectionLabel>Como são os três dias</SectionLabel>
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontWeight: 700,
              fontSize: "clamp(26px, 3.6vw, 40px)",
              margin: "16px 0 18px",
              color: "#fff",
              letterSpacing: "var(--tracking-tight)",
              lineHeight: 1.12,
            }}
          >
            Formato concentrado pra pesar o mínimo na sua agenda.
          </h2>
          <p style={{ color: "var(--text-secondary)", fontSize: 17, lineHeight: 1.65, margin: 0, maxWidth: 720 }}>
            Um aluno por aparelho, até quatro aparelhos Philips top de linha rodando ao mesmo tempo. Pacientes reais e
            selecionados, com patologia de verdade, nada de simulação. E o Dr. Cássio ali do lado, demonstrando,
            corrigindo a mão, acompanhando caso a caso.
          </p>
        </div>

        <div ref={cardsRef} className="pz-grid-3" style={{ marginBottom: 22 }}>
          {DIAS.map(([d, sub, desc]) => (
            <Card key={d} padding={28} className="gsap-reveal" style={{ height: "100%" }}>
              <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginBottom: 12 }}>
                <span style={{ fontFamily: "var(--font-serif)", fontSize: 26, fontWeight: 700, color: "#fff" }}>{d}</span>
                <span style={{ color: "var(--accent)", fontSize: 14, fontWeight: 600 }}>{sub}</span>
              </div>
              <p style={{ color: "var(--text-secondary)", fontSize: 14.5, lineHeight: 1.6, margin: 0 }}>{desc}</p>
            </Card>
          ))}
        </div>

        <div ref={mediaWrapRef} className="pz-grid-tresdias">
          <MediaFrame src="/assets/imersao-real.jpg" alt="Bastidores da imersão — aparelho e supervisão em tempo real" height={300} imgRef={img1Ref} />
          <MediaFrame src="/assets/photo-ultrasound.jpg" alt="Doppler de carótida em paciente real" height={300} imgRef={img2Ref} />
        </div>
      </div>
    </section>
  );
}
