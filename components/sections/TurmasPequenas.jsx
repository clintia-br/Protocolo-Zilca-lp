"use client";

import { useRef } from "react";
import { useReveal } from "@/lib/scrollReveal";
import { useParallax } from "@/lib/animations";
import { wrap } from "@/lib/site";

export default function TurmasPequenas() {
  const bannerRef = useRef(null);
  const shieldRef = useRef(null);

  useReveal(bannerRef, { duration: 1 });
  useParallax(shieldRef, { yPercent: -22 });

  return (
    <section style={{ padding: "40px 0 96px" }}>
      <div className="pz-wrap" style={wrap}>
        <div
          ref={bannerRef}
          className="gsap-reveal-scale"
          style={{ position: "relative", overflow: "hidden", borderRadius: "var(--radius-xl)", backgroundImage: "var(--pz-gradient)", padding: "56px 56px" }}
        >
          <img
            ref={shieldRef}
            src="/assets/logo-shield-green.png"
            alt=""
            aria-hidden="true"
            style={{ position: "absolute", right: -30, bottom: -50, height: 320, opacity: 0.18, mixBlendMode: "multiply", pointerEvents: "none" }}
          />
          <div style={{ position: "relative", maxWidth: 780 }}>
            <div
              style={{
                fontFamily: "ui-monospace, monospace",
                fontSize: 12,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "rgba(1,8,18,0.65)",
                fontWeight: 700,
                marginBottom: 16,
              }}
            >
              Por que as turmas são pequenas
            </div>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontWeight: 800,
                fontSize: "clamp(24px, 3.2vw, 34px)",
                lineHeight: 1.2,
                margin: "0 0 16px",
                color: "var(--pz-ink)",
              }}
            >
              São até quatro médicos por turma, um por aparelho.
            </h2>
            <p style={{ color: "rgba(1,8,18,0.78)", fontSize: 17, lineHeight: 1.6, margin: 0, maxWidth: 640 }}>
              O limite é físico e tem uma razão prática: é o que permite ao Dr. Cássio acompanhar cada aluno de perto,
              com tempo de aparelho de sobra pra cada um. Turma pequena enche rápido. Aplicar cedo garante prioridade
              na data que você quer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
