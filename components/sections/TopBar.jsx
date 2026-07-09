"use client";

import { useRef } from "react";
import { Button } from "@/components/ui";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";
import { WA_LINK, scrollToId } from "@/lib/site";

const ITEMS = [
  ["Para quem", "para-quem"],
  ["A imersão", "conteudos"],
  ["Níveis", "niveis"],
  ["Mentor", "mentor"],
  ["FAQ", "faq"],
];

export default function TopBar() {
  const ref = useRef(null);

  useGSAP(
    () => {
      gsap.fromTo(ref.current, { y: -16, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, delay: 0.1, ease: "pzOut" });

      let last = 0;
      ScrollTrigger.create({
        start: 0,
        end: "max",
        onUpdate: (self) => {
          const y = self.scroll();
          if (y < 80) gsap.to(ref.current, { y: 0, duration: 0.35, ease: "pzStandard" });
          else if (self.direction === 1 && y > last) gsap.to(ref.current, { y: "-110%", duration: 0.35, ease: "pzStandard" });
          else if (self.direction === -1) gsap.to(ref.current, { y: 0, duration: 0.35, ease: "pzStandard" });
          last = y;
        },
      });
    },
    { scope: ref }
  );

  return (
    <header
      ref={ref}
      style={{
        position: "sticky",
        top: 0,
        zIndex: 40,
        background: "rgba(1,8,18,0.78)",
        backdropFilter: "blur(18px)",
        WebkitBackdropFilter: "blur(18px)",
        borderBottom: "1px solid var(--border-subtle)",
      }}
    >
      <div className="pz-wrap" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: 12, paddingBottom: 12 }}>
        <img src="/assets/logo-lockup-dark.png" alt="Protocolo Zilca" width={74} height={36} decoding="async" style={{ height: 36, width: "auto" }} />
        <nav className="pz-nav-links" style={{ display: "flex", gap: 28, alignItems: "center" }}>
          {ITEMS.map(([t, id]) => (
            <a key={id} href={`#${id}`} onClick={scrollToId(id)} style={{ color: "var(--text-secondary)", textDecoration: "none", fontSize: 14, fontWeight: 500 }}>
              {t}
            </a>
          ))}
        </nav>
        <a href={WA_LINK} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
          <Button variant="primary" size="sm" style={{ borderRadius: 10 }}>
            Quero me inscrever
          </Button>
        </a>
      </div>
    </header>
  );
}
