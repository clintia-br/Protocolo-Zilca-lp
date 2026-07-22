"use client";

import { useRef } from "react";
import Image from "next/image";
import GlowCTA from "@/components/GlowCTA";
import { Button } from "@/components/ui";
import { gsap, useGSAP } from "@/lib/gsap";
import { WA_LINK, scrollToId, hSans, grad } from "@/lib/site";
import heroImg from "@/public/assets/dr-cassio-hero.jpg";

const CHIPS = ["3 dias de prática", "Pacientes reais", "1 aluno por aparelho", "Supervisão direta"];
const STATS = [
  ["+20 mil", "exames realizados"],
  ["20 anos", "de experiência clínica"],
  ["Philips", "equipamentos de alta performance"],
  ["1", "aluno por aparelho"],
];

export default function Hero() {
  const root = useRef(null);
  const eyebrowRef = useRef(null);
  const chipsRef = useRef(null);
  const h1Ref = useRef(null);
  const subRef = useRef(null);
  const ctaRef = useRef(null);
  const microRef = useRef(null);
  const imgWrapRef = useRef(null);
  const imgRef = useRef(null);
  const statsRef = useRef(null);

  useGSAP(
    () => {
      // Above-the-fold entrance. No SplitText (fragile with web-font timing on
      // iOS) — the headline fades in as a whole. Everything animates from a
      // hidden state set in a layout effect, so if GSAP never loads the markup
      // simply stays visible.
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      const tl = gsap.timeline({ defaults: { ease: "pzOut" }, delay: 0.1 });
      tl.from(eyebrowRef.current, { y: -12, opacity: 0, duration: 0.6 })
        .from(chipsRef.current.children, { y: 12, opacity: 0, duration: 0.5, stagger: 0.08 }, "-=0.3")
        .from(h1Ref.current, { y: 18, opacity: 0, duration: 0.8 }, "-=0.2")
        .from(subRef.current, { y: 16, opacity: 0, duration: 0.6 }, "-=0.5")
        .from(ctaRef.current.children, { y: 14, opacity: 0, duration: 0.55, stagger: 0.08 }, "-=0.35")
        .from(microRef.current, { opacity: 0, duration: 0.5 }, "-=0.25")
        .from(statsRef.current.querySelectorAll(".stat-cell"), { y: 20, opacity: 0, duration: 0.6, stagger: 0.07 }, "-=0.4")
        // Reveal the hero image early (absolute t=0.15) with a quick fade so it
        // doesn't gate LCP, while still animating in.
        .fromTo(imgRef.current, { opacity: 0, scale: 1.08 }, { opacity: 1, scale: 1, duration: 0.9 }, 0.15);
    },
    { scope: root }
  );

  return (
    <section ref={root} style={{ position: "relative", overflow: "hidden", padding: "64px 0 56px" }}>
      <div style={{ position: "absolute", inset: 0, backgroundImage: "var(--pz-glow)", pointerEvents: "none" }} />
      <div className="pz-wrap" style={{ position: "relative" }}>
        <div style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", marginBottom: 44 }}>
          <div style={{ marginBottom: 20 }}>
            <span
              ref={eyebrowRef}
              style={{
                display: "inline-block",
                fontFamily: "var(--font-sans)",
                fontSize: 16,
                fontWeight: 600,
                letterSpacing: "var(--tracking-label)",
                textTransform: "uppercase",
                color: "var(--text-secondary)",
              }}
            >
              Imersão prática · Doppler de carótidas · Treinamento presencial
            </span>
          </div>
          <div ref={chipsRef} style={{ display: "flex", gap: 10, flexWrap: "wrap", justifyContent: "center" }}>
            {CHIPS.map((c) => (
              <span key={c} style={{ fontSize: 13, fontWeight: 500, color: "var(--text-secondary)", border: "1px solid var(--border-strong)", borderRadius: 999, padding: "7px 16px" }}>
                {c}
              </span>
            ))}
          </div>
        </div>

        <div className="pz-hero-grid">
          <div>
            <h1 ref={h1Ref} style={{ ...hSans, fontSize: "clamp(27px, 4.4vw, 42px)", lineHeight: 1.18, textWrap: "balance", maxWidth: 600 }}>
              Desenvolva segurança para incorporar o <span style={grad}>Doppler de Carótidas</span> à sua rotina clínica em uma imersão prática de três dias.
            </h1>
            <p style={{ color: "var(--text-secondary)", fontSize: 17.5, lineHeight: 1.7, maxWidth: 540, margin: "28px 0 34px" }} ref={subRef}>
              Um treinamento presencial desenvolvido para médicos que desejam aprimorar sua prática em Doppler de
              Carótidas. Três dias de atividades supervisionadas, pacientes reais, um aluno por aparelho e
              acompanhamento próximo do Dr. Cássio Bermudes durante toda a imersão.
            </p>
            <div ref={ctaRef} style={{ display: "flex", gap: 14, alignItems: "center", flexWrap: "wrap" }}>
              <GlowCTA href={WA_LINK}>Quero me inscrever na próxima turma</GlowCTA>
              <a href="#conteudos" onClick={scrollToId("conteudos")} style={{ textDecoration: "none" }}>
                <Button variant="secondary" size="lg" style={{ borderRadius: 12 }}>
                  Ver a imersão
                </Button>
              </a>
            </div>
            <p ref={microRef} style={{ color: "var(--text-muted)", fontSize: 13.5, margin: "18px 0 0" }}>
              Turmas com até quatro médicos para garantir acompanhamento individual durante toda a prática.
            </p>
          </div>

          <div
            ref={imgWrapRef}
            style={{ position: "relative", minHeight: 560, alignSelf: "stretch", borderRadius: 24, overflow: "hidden", border: "1px solid var(--border-subtle)", boxShadow: "var(--shadow-xl)", background: "#04160e" }}
          >
            <div ref={imgRef} style={{ position: "absolute", inset: 0 }}>
              <Image
                src={heroImg}
                alt="Dr. Cássio Bermudes"
                fill
                priority
                sizes="(max-width: 960px) 100vw, 46vw"
                style={{ objectFit: "cover", objectPosition: "center center" }}
              />
            </div>
            <div
              style={{
                position: "absolute",
                inset: 0,
                pointerEvents: "none",
                background: "linear-gradient(90deg, #03140f 0%, rgba(3,20,15,0) 24%), linear-gradient(270deg, #023022 0%, rgba(2,48,34,0) 24%)",
              }}
            />
          </div>
        </div>

        <div ref={statsRef} className="pz-stats" style={{ marginTop: 52 }}>
          {STATS.map(([v, l], i) => (
            <div key={l} className="stat-cell" style={{ background: "var(--surface-raised)", padding: "22px 26px" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 4, alignItems: "center", fontFamily: "var(--font-sans)" }}>
                <span
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontWeight: 700,
                    fontSize: "clamp(26px, 7vw, 46px)",
                    lineHeight: 1,
                    letterSpacing: "var(--tracking-tight)",
                    whiteSpace: "nowrap",
                    ...(i === 0 ? grad : { color: "var(--text-primary)" }),
                  }}
                >
                  {v}
                </span>
                <span style={{ fontSize: 13, letterSpacing: "var(--tracking-label)", textTransform: "uppercase", color: "var(--text-muted)", textAlign: "center" }}>
                  {l}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
