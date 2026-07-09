"use client";

import { useRef } from "react";
import { SectionLabel } from "@/components/ui";
import { useReveal, useStaggerReveal } from "@/lib/scrollReveal";
import { hSans } from "@/lib/site";

const ITEMS = [
  "Realizar o Doppler de Carótidas com maior domínio técnico e consistência na prática clínica.",
  "Integrar o exame à rotina do consultório de forma estruturada e segura.",
  "Elaborar laudos com mais tranquilidade, contando com suporte nas primeiras etapas da implantação.",
  "Evoluir profissionalmente ampliando sua atuação em ultrassonografia vascular.",
];

export default function OQueMuda() {
  const headRef = useRef(null);
  const gridRef = useRef(null);

  useReveal(headRef);
  useStaggerReveal(gridRef, ".gsap-reveal", { start: "top 85%" });

  return (
    <section style={{ padding: "56px 0 40px" }}>
      <div className="pz-wrap">
        <div ref={headRef} className="gsap-reveal" style={{ textAlign: "center", maxWidth: 720, margin: "0 auto 40px" }}>
          <SectionLabel>Resultados da imersão</SectionLabel>
          <h2 style={{ ...hSans, fontSize: "clamp(24px, 3.6vw, 36px)", marginTop: 16 }}>Uma formação pensada para gerar confiança também depois do treinamento.</h2>
        </div>
        <div ref={gridRef} className="pz-muda-grid" style={{ maxWidth: 940, margin: "0 auto" }}>
          {ITEMS.map((t, i) => (
            <div
              key={i}
              className="gsap-reveal"
              style={{ display: "flex", gap: 16, alignItems: "center", padding: "18px 0", borderBottom: "1px solid var(--border-subtle)", height: "100%" }}
            >
              <span style={{ width: 26, height: 26, borderRadius: "50%", backgroundImage: "var(--pz-gradient)", flexShrink: 0, display: "inline-flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 13, fontWeight: 700 }}>
                ✓
              </span>
              <span style={{ color: "var(--text-primary)", fontSize: 17, lineHeight: 1.45 }}>{t}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
