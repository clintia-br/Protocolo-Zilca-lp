"use client";

import { useRef } from "react";
import Image from "next/image";
import { SectionLabel } from "@/components/ui";
import mentorImg from "@/public/assets/dr-cassio.jpg";
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
            <div ref={imgRef} style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
              <Image
                src={mentorImg}
                alt="Dr. Cássio Bermudes"
                fill
                sizes="(max-width: 960px) 100vw, 42vw"
                style={{ objectFit: "cover", objectPosition: "center top" }}
              />
            </div>
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, transparent 68%, var(--surface-raised))", borderBottomLeftRadius: 24, pointerEvents: "none" }} />
          </div>
          <div ref={textRef} className="gsap-reveal pz-mentor-text" style={{ display: "flex", flexDirection: "column", justifyContent: "center", minHeight: 440 }}>
            <SectionLabel>Mentoria</SectionLabel>
            <h2 style={{ ...hSans, fontSize: "clamp(26px, 3.8vw, 40px)", margin: "14px 0 6px" }}>Dr. Cássio Bermudes</h2>
            <p style={{ color: "var(--accent)", fontSize: 15, fontWeight: 600, margin: "0 0 22px" }}>Mais de 20 mil exames realizados · Duas décadas dedicadas à prática clínica</p>
            <p style={{ color: "var(--text-secondary)", fontSize: 15.5, lineHeight: 1.65, margin: "0 0 16px" }}>
              Ao longo da carreira, o Dr. Cássio Bermudes acompanhou de perto a formação de médicos que dominavam a
              ecocardiografia, mas encontravam poucas oportunidades para desenvolver experiência prática em Doppler de
              Carótidas. Essa realidade motivou a criação de uma metodologia voltada para a formação técnica baseada na
              prática supervisionada.
            </p>
            <p style={{ color: "var(--text-secondary)", fontSize: 15.5, lineHeight: 1.65, margin: "0 0 26px" }}>
              A proposta da imersão é aproximar o treinamento da rotina clínica. O conteúdo teórico é disponibilizado
              previamente, permitindo que o período presencial seja integralmente dedicado à execução dos exames,
              discussão dos casos e desenvolvimento da tomada de decisão ao lado do mentor.
            </p>
            <div style={{ borderLeft: "3px solid transparent", borderImage: "var(--pz-gradient) 1", paddingLeft: 22 }}>
              <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: 20, lineHeight: 1.45, color: "#fff", margin: 0 }}>
                “A prática supervisionada encurta a curva de aprendizado e proporciona ao médico a confiança necessária
                para incorporar o Doppler de Carótidas à sua rotina clínica com segurança e consistência.”
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
