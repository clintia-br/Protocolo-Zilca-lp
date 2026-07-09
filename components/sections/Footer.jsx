"use client";

import { useRef } from "react";
import { GradientRule } from "@/components/ui";
import { gsap, useGSAP } from "@/lib/gsap";

export default function Footer() {
  const ruleRef = useRef(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ruleRef.current,
        { scaleX: 0 },
        { scaleX: 1, duration: 1, ease: "pzOut", scrollTrigger: { trigger: ruleRef.current, start: "top 96%", once: true } }
      );
    },
    { scope: ruleRef }
  );

  return (
    <footer style={{ borderTop: "1px solid var(--border-subtle)", padding: "40px 44px 120px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div ref={ruleRef} style={{ transformOrigin: "left center" }}>
          <GradientRule height={3} />
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 26, flexWrap: "wrap", gap: 20 }}>
          <img src="/assets/logo-lockup-dark.png" alt="Protocolo Zilca" style={{ height: 32 }} />
          <span style={{ color: "var(--text-muted)", fontSize: 13 }}>© 2026 Protocolo Zilca · Ultrassonografia Vascular</span>
        </div>
        <p style={{ color: "var(--text-muted)", fontSize: 12, lineHeight: 1.6, margin: "24px 0 0", maxWidth: 760 }}>
          Conteúdo educacional destinado a médicos. Comunicação em conformidade com o CFM: sem promessa de resultado ou
          retorno financeiro, sem sensacionalismo. Imagens de exame e de pacientes com anonimato preservado. Depoimentos
          apenas reais e autorizados.
        </p>
      </div>
    </footer>
  );
}
