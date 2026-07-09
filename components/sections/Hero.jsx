"use client";

import { useRef } from "react";
import GlowCTA from "@/components/GlowCTA";
import { Button } from "@/components/ui";
import { gsap, SplitText, useGSAP } from "@/lib/gsap";
import { WA_LINK, scrollToId, hSans, grad } from "@/lib/site";

const CHIPS = ["3 dias inteiros de prática", "Presencial · paciente real", "1 aluno por aparelho"];
const STATS = [
  ["+20 mil", "exames na prática"],
  ["20 anos", "de rotina clínica"],
  ["Philips", "Aparelhos modernos"],
  ["1", "um aluno por aparelho"],
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
      const split = SplitText.create(h1Ref.current, { type: "lines", mask: "lines" });

      const tl = gsap.timeline({ defaults: { ease: "pzOut" }, delay: 0.12 });
      tl.from(eyebrowRef.current, { y: -12, opacity: 0, duration: 0.6 })
        .from(chipsRef.current.children, { y: 12, opacity: 0, duration: 0.5, stagger: 0.08 }, "-=0.3")
        .from(split.lines, { yPercent: 110, opacity: 0, duration: 0.9, stagger: 0.1 }, "-=0.2")
        .from(subRef.current, { y: 16, opacity: 0, duration: 0.6 }, "-=0.5")
        .from(ctaRef.current.children, { y: 14, opacity: 0, duration: 0.55, stagger: 0.08 }, "-=0.35")
        .from(microRef.current, { opacity: 0, duration: 0.5 }, "-=0.25")
        .fromTo(
          imgRef.current,
          { clipPath: "inset(0 0 100% 0)", scale: 1.12 },
          { clipPath: "inset(0 0 0% 0)", scale: 1, duration: 1.1 },
          "-=1.1"
        )
        .from(statsRef.current.querySelectorAll(".stat-cell"), { y: 20, opacity: 0, duration: 0.6, stagger: 0.07 }, "-=0.4");

      return () => split.revert();
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
              Imersão prática · Doppler de carótidas · 3 dias em paciente real
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
            <h1 ref={h1Ref} style={{ ...hSans, fontSize: "clamp(30px, 4.4vw, 42px)", lineHeight: 1.18, textWrap: "balance", maxWidth: 600 }}>
              Em 3 dias, saia do &quot;eu me viro no Doppler de Carótidas&quot; e passe a fazer o exame{" "}
              <span style={grad}>com a mesma segurança que você já tem no eco.</span>
            </h1>
            <p style={{ color: "var(--text-secondary)", fontSize: 17.5, lineHeight: 1.7, maxWidth: 540, margin: "28px 0 34px" }} ref={subRef}>
              Prática intensiva em paciente real, um aluno por aparelho, ao lado de quem já fez mais de 20 mil exames.
              Sem teoria enrolada. Sem sala lotada. Aparelho na mão para uma prática guiada por quem tem experiência.
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
              Turmas de até 4 médicos. Vaga sujeita à disponibilidade de aparelho.
            </p>
          </div>

          <div ref={imgWrapRef} style={{ position: "relative", minHeight: 520, alignSelf: "stretch" }}>
            <div style={{ position: "absolute", inset: 0, borderRadius: 24, overflow: "hidden", border: "1px solid var(--border-subtle)", boxShadow: "var(--shadow-xl)" }}>
              <img ref={imgRef} src="/assets/dr-cassio-hero.jpg" alt="Dr. Cássio Bermudes" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }} />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(90deg, #010812 0%, rgba(1,8,18,0.5) 15%, transparent 38%), linear-gradient(180deg, transparent 55%, rgba(1,8,18,0.85) 100%)",
                  pointerEvents: "none",
                }}
              />
            </div>
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
                    fontSize: 46,
                    lineHeight: 1,
                    letterSpacing: "var(--tracking-tight)",
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
