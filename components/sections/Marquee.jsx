"use client";

const WORDS = ["Doppler", "Carótidas", "Vascular", "Paciente real", "Prática guiada", "Laudo com segurança"];

export default function Marquee() {
  const row = [...WORDS, ...WORDS];
  return (
    <div style={{ borderTop: "1px solid var(--border-subtle)", borderBottom: "1px solid var(--border-subtle)", background: "var(--surface-raised)", overflow: "hidden", padding: "16px 0" }}>
      <div className="pz-marquee-track">
        {row.map((w, i) => (
          <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: 34, paddingRight: 34 }}>
            <span style={{ fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: 22, letterSpacing: "0.02em", color: i % 2 ? "var(--text-muted)" : "#fff", textTransform: "uppercase" }}>
              {w}
            </span>
            <span style={{ width: 9, height: 9, transform: "rotate(45deg)", backgroundImage: "var(--pz-gradient)" }} />
          </span>
        ))}
      </div>
    </div>
  );
}
