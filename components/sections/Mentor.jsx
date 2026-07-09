"use client";

import { useRef } from "react";
import { SectionLabel } from "@/components/ui";
import { useReveal } from "@/lib/scrollReveal";
import { gsap, useGSAP } from "@/lib/gsap";
import { useParallax } from "@/lib/animations";
import { hSans } from "@/lib/site";

export default function Mentor() {
  const textRef = useRef(null);
  const imgRef = useRef(null);
  const watermarkRef = useRef(null);

  useReveal(textRef, { delay: 0.1 });
  useParallax(watermarkRef, { yPercent: -18 });

  useGSAP(
    () => {
      gsap.fromTo(
        imgRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.1, ease: "pzOut", scrollTrigger: { trigger: imgRef.current, start: "top 90%", once: true } }
      );
    },
    { scope: imgRef }
  );

  return (
    <section id="mentor" style={{ padding: "clamp(48px, 8vw, 80px) 0 40px", position: "relative", overflow: "hidden" }}>
      <div
        ref={watermarkRef}
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 30,
          left: 0,
          right: 0,
          textAlign: "center",
          fontFamily: "var(--font-sans)",
          fontWeight: 800,
          fontSize: "clamp(90px, 16vw, 220px)",
          letterSpacing: "-0.03em",
          lineHeight: 1,
          color: "rgba(255,255,255,0.03)",
          pointerEvents: "none",
          userSelect: "none",
          whiteSpace: "nowrap",
        }}
      >
        MENTOR
      </div>
      <div className="pz-wrap" style={{ position: "relative" }}>
        <div className="pz-mentor">
          <div style={{ position: "relative", alignSelf: "stretch", overflow: "hidden", borderTopLeftRadius: 24, borderBottomLeftRadius: 24, minHeight: 440 }}>
            <img
              ref={imgRef}
              src="/assets/dr-cassio.jpg"
              alt="Dr. Cássio Bermudes"
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center", pointerEvents: "none" }}
            />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, transparent 68%, var(--surface-raised))", borderBottomLeftRadius: 24, pointerEvents: "none" }} />
          </div>
          <div ref={textRef} className="gsap-reveal pz-mentor-text" style={{ display: "flex", flexDirection: "column", justifyContent: "center", minHeight: 440 }}>
            <SectionLabel>Quem ensina</SectionLabel>
            <h2 style={{ ...hSans, fontSize: "clamp(26px, 3.8vw, 40px)", margin: "14px 0 6px" }}>Dr. Cássio Bermudes</h2>
            <p style={{ color: "var(--accent)", fontSize: 15, fontWeight: 600, margin: "0 0 22px" }}>+20 mil exames · quase 2 décadas de rotina clínica</p>
            <p style={{ color: "var(--text-secondary)", fontSize: 15.5, lineHeight: 1.65, margin: "0 0 16px" }}>
              O Dr. Cássio contrata médicos pra fazer exames na própria clínica há anos e viu o mesmo padrão se repetir:
              o cardiologista se forma dominando o eco e sai com quase nenhuma prática em carótida. Resolveu ensinar do
              jeito que gostaria de ter aprendido.
            </p>
            <p style={{ color: "var(--text-secondary)", fontSize: 15.5, lineHeight: 1.65, margin: "0 0 26px" }}>
              Em vez de repetir o modelo teórico de sempre, montou um formato que respeita como um médico de fato
              aprende: teoria por conta, olho treinado nos casos, prática intensiva com aparelho na mão.
            </p>
            <div style={{ borderLeft: "3px solid transparent", borderImage: "var(--pz-gradient) 1", paddingLeft: 22 }}>
              <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: 20, lineHeight: 1.45, color: "#fff", margin: 0 }}>
                “Não é mais um curso teórico. É a prática que eu queria ter tido quando comecei: paciente real, caso
                difícil de verdade, e alguém do lado que já fez isso mais de 20 mil vezes.”
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
