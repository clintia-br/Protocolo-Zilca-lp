"use client";

import { useRef } from "react";
import { SectionLabel } from "@/components/ui";
import { useReveal } from "@/lib/scrollReveal";
import { gsap, useGSAP } from "@/lib/gsap";
import { wrap } from "@/lib/site";

export default function QuemEnsina() {
  const textRef = useRef(null);
  const frameRef = useRef(null);
  const imgRef = useRef(null);

  useReveal(textRef, { delay: 0.1 });

  useGSAP(
    () => {
      gsap.to(imgRef.current, {
        scale: 1,
        opacity: 1,
        duration: 1.1,
        ease: "pzOut",
        scrollTrigger: { trigger: frameRef.current, start: "top 82%", once: true },
      });
    },
    { scope: frameRef }
  );

  return (
    <section id="quem-ensina" style={{ padding: "40px 0 96px" }}>
      <div className="pz-wrap" style={wrap}>
        <div
          className="pz-grid-2"
          style={{
            alignItems: "stretch",
            background: "var(--surface-raised)",
            borderRadius: "var(--radius-xl)",
            border: "1px solid var(--border-subtle)",
            overflow: "hidden",
            boxShadow: "var(--edge-top), var(--shadow-lg)",
          }}
        >
          <div ref={frameRef} style={{ position: "relative", minHeight: 420, overflow: "hidden" }}>
            <img
              ref={imgRef}
              src="/assets/dr-cassio-hero.jpg"
              alt="Dr. Cássio Bermudes com transdutor de ultrassom"
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "50% 20%",
                opacity: 0,
                transform: "scale(1.08)",
              }}
            />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, transparent 55%, rgba(20,20,46,0.55) 100%)" }} />
          </div>
          <div ref={textRef} style={{ padding: "56px 56px 56px 8px" }}>
            <SectionLabel>Quem ensina</SectionLabel>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontWeight: 700,
                fontSize: "clamp(24px, 3vw, 36px)",
                margin: "16px 0 20px",
                color: "#fff",
                lineHeight: 1.16,
              }}
            >
              Quem te ensina viveu exatamente o seu problema.
            </h2>
            <p style={{ color: "var(--text-secondary)", fontSize: 16, lineHeight: 1.65, margin: "0 0 16px" }}>
              O Dr. Cássio Bermudes contrata médicos pra fazer exames na própria clínica há anos. E viu o mesmo padrão
              se repetir: o cardiologista se forma dominando o eco e sai com quase nenhuma prática em carótida.
              Resolveu ensinar do jeito que gostaria de ter aprendido.
            </p>
            <p style={{ color: "var(--text-secondary)", fontSize: 16, lineHeight: 1.65, margin: "0 0 28px" }}>
              São quase duas décadas de rotina e mais de 20 mil exames feitos com velocidade e segurança. Em vez de
              repetir o modelo teórico de sempre, montou um formato que respeita como um médico de fato aprende:
              teoria por conta, olho treinado nos casos, prática intensiva com aparelho na mão.
            </p>
            <div style={{ borderLeft: "3px solid transparent", borderImage: "var(--pz-gradient) 1", paddingLeft: 22 }}>
              <p style={{ fontFamily: "var(--font-serif)", fontSize: 21, lineHeight: 1.45, color: "#fff", margin: 0, fontStyle: "italic" }}>
                “Não é mais um curso teórico. É a prática que eu queria ter tido quando comecei: paciente real, caso
                difícil de verdade, e alguém do lado que já fez isso mais de 20 mil vezes.”
              </p>
              <div style={{ marginTop: 16, color: "var(--text-muted)", fontSize: 13.5, letterSpacing: "0.04em", textTransform: "uppercase", fontWeight: 600 }}>
                Dr. Cássio Bermudes
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
