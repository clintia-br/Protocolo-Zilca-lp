"use client";

import { useRef } from "react";
import { Button } from "@/components/ui";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";
import { WA_LINK, scrollToId } from "@/lib/site";

const ITEMS = [
  ["O problema", "problema"],
  ["A imersão", "virada"],
  ["Quem ensina", "quem-ensina"],
  ["Níveis", "niveis"],
  ["FAQ", "faq"],
];

export default function Nav() {
  const navRef = useRef(null);

  useGSAP(
    () => {
      gsap.fromTo(
        navRef.current,
        { y: -18, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, delay: 0.15, ease: "pzOut" }
      );

      let lastY = 0;
      ScrollTrigger.create({
        start: 0,
        end: "max",
        onUpdate: (self) => {
          const y = self.scroll();
          if (y < 80) {
            gsap.to(navRef.current, { y: 0, duration: 0.35, ease: "pzStandard" });
          } else if (self.direction === 1 && y > lastY) {
            gsap.to(navRef.current, { y: "-110%", duration: 0.35, ease: "pzStandard" });
          } else if (self.direction === -1) {
            gsap.to(navRef.current, { y: 0, duration: 0.35, ease: "pzStandard" });
          }
          lastY = y;
        },
      });
    },
    { scope: navRef }
  );

  return (
    <header
      ref={navRef}
      className="pz-nav"
      style={{
        position: "sticky",
        top: 0,
        zIndex: 40,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: "rgba(11,15,38,0.72)",
        backdropFilter: "blur(18px)",
        WebkitBackdropFilter: "blur(18px)",
        borderBottom: "1px solid var(--border-subtle)",
      }}
    >
      <img src="/assets/logo-lockup-dark.png" alt="Protocolo Zilca" style={{ height: 38 }} />
      <nav className="pz-nav-links">
        {ITEMS.map(([t, id]) => (
          <a
            key={id}
            href={`#${id}`}
            onClick={scrollToId(id)}
            style={{ color: "var(--text-secondary)", textDecoration: "none", fontSize: 14, fontWeight: 500 }}
          >
            {t}
          </a>
        ))}
      </nav>
      <a href={WA_LINK} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
        <Button variant="primary" size="sm" style={{ borderRadius: 999 }}>
          Quero aplicar
        </Button>
      </a>
    </header>
  );
}
