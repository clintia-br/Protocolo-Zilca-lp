"use client";

import { useRef } from "react";
import GlowCTA from "@/components/GlowCTA";
import { Button, SectionLabel, Stat } from "@/components/ui";
import { gsap, SplitText, useGSAP } from "@/lib/gsap";
import { useParallax } from "@/lib/animations";
import { WA_LINK, scrollToId } from "@/lib/site";

const AUTHORITY = [
  ["+20 mil", "exames na prática"],
  ["~2 décadas", "de rotina clínica"],
  ["Philips", "aparelhos top de linha"],
  ["1 : 1", "um aluno por aparelho"],
];

export default function Hero() {
  const heroRef = useRef(null);
  const labelRef = useRef(null);
  const headlineRef = useRef(null);
  const subRef = useRef(null);
  const ctaRef = useRef(null);
  const microRef = useRef(null);
  const statsRef = useRef(null);
  const shieldRef = useRef(null);

  useParallax(shieldRef, { yPercent: 18 });

  useGSAP(
    () => {
      const split = SplitText.create(headlineRef.current, {
        type: "lines",
        mask: "lines",
        linesClass: "hero-line",
      });

      const tl = gsap.timeline({ defaults: { ease: "pzOut" }, delay: 0.1 });
      tl.from(labelRef.current, { y: -14, opacity: 0, duration: 0.6 })
        .from(split.lines, { yPercent: 112, opacity: 0, duration: 1, stagger: 0.09 }, "-=0.3")
        .from(subRef.current, { y: 16, opacity: 0, duration: 0.7 }, "-=0.55")
        .from(Array.from(ctaRef.current.children), { y: 14, opacity: 0, duration: 0.6, stagger: 0.08 }, "-=0.4")
        .from(microRef.current, { opacity: 0, duration: 0.5 }, "-=0.25")
        .from(
          statsRef.current.querySelectorAll(".stat-cell"),
          { y: 22, opacity: 0, duration: 0.75, stagger: 0.08 },
          "-=0.3"
        );

      return () => split.revert();
    },
    { scope: heroRef }
  );

  return (
    <section ref={heroRef} className="pz-wrap" style={{ position: "relative", overflow: "hidden", padding: "72px 0 96px" }}>
      <div style={{ position: "absolute", inset: 0, backgroundImage: "var(--pz-glow)", pointerEvents: "none" }} />
      <img
        ref={shieldRef}
        src="/assets/logo-shield-dark.png"
        alt=""
        aria-hidden="true"
        style={{
          position: "absolute",
          left: "50%",
          top: 160,
          transform: "translateX(-50%)",
          height: "clamp(360px, 46vw, 620px)",
          opacity: 0.06,
          pointerEvents: "none",
        }}
      />

      <div style={{ position: "relative", maxWidth: 940, margin: "0 auto", textAlign: "center" }}>
        <div style={{ marginBottom: 26 }}>
          <SectionLabel ref={labelRef}>Imersão prática · Doppler de carótidas · 3 dias em paciente real</SectionLabel>
        </div>
        <h1
          ref={headlineRef}
          style={{
            fontFamily: "var(--font-serif)",
            fontWeight: 800,
            fontSize: "clamp(34px, 5.6vw, 62px)",
            lineHeight: 1.1,
            letterSpacing: "var(--tracking-tight)",
            margin: 0,
            color: "#fff",
          }}
        >
          Em 3 dias, saia do “faço meio que dá” e passe a fazer Doppler de carótidas{" "}
          <span
            style={{
              backgroundImage: "var(--pz-gradient-text)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            com a mesma segurança que você já tem no eco.
          </span>
        </h1>
        <p
          ref={subRef}
          style={{ color: "var(--text-secondary)", fontSize: "clamp(15.5px, 1.8vw, 19px)", lineHeight: 1.6, maxWidth: 720, margin: "26px auto 36px" }}
        >
          Prática intensiva em paciente real, um aluno por aparelho, ao lado de quem já fez mais de 20 mil exames. Sem
          teoria enrolada. Sem sala lotada. Aparelho na mão de verdade.
        </p>
        <div ref={ctaRef} style={{ display: "flex", gap: 16, alignItems: "center", justifyContent: "center", flexWrap: "wrap" }}>
          <GlowCTA href={WA_LINK}>Quero aplicar para a próxima turma</GlowCTA>
          <a href="#virada" onClick={scrollToId("virada")} style={{ textDecoration: "none" }}>
            <Button variant="secondary" size="lg" style={{ borderRadius: 999 }}>
              Como funciona a imersão
            </Button>
          </a>
        </div>
        <p ref={microRef} style={{ color: "var(--text-muted)", fontSize: 13.5, margin: "18px 0 0" }}>
          Turmas de até 4 médicos. Vaga sujeita à disponibilidade de aparelho.
        </p>
      </div>

      <div ref={statsRef} style={{ position: "relative", maxWidth: 1080, margin: "58px auto 0" }}>
        <div
          className="pz-grid-4"
          style={{
            gap: 1,
            background: "var(--border-subtle)",
            border: "1px solid var(--border-subtle)",
            borderRadius: "var(--radius-lg)",
            overflow: "hidden",
          }}
        >
          {AUTHORITY.map(([v, l], i) => (
            <div key={l} className="stat-cell" style={{ background: "var(--surface-raised)", padding: "24px 26px" }}>
              <Stat value={v} label={l} gradient={i === 0} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
