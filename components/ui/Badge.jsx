/**
 * Protocolo Zilca — Badge / Tag
 * Small status or category chip. Solid uses a tinted brand fill; outline is a
 * hairline; gradient fills with the signature spectrum for emphasis.
 */
export function Badge({ children, variant = "solid", tone = "teal", style = {}, ...rest }) {
  const tones = {
    teal: "var(--pz-teal)",
    green: "var(--pz-emerald)",
    blue: "var(--pz-cyan)",
    neutral: "rgba(255,255,255,0.7)",
  };
  const c = tones[tone] || tones.teal;
  const base = {
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
    fontFamily: "var(--font-sans)",
    fontWeight: 600,
    fontSize: 12,
    letterSpacing: "0.04em",
    textTransform: "uppercase",
    padding: "5px 11px",
    borderRadius: "var(--radius-pill)",
    lineHeight: 1,
  };
  const variants = {
    solid: {
      color: c,
      background: "color-mix(in srgb, " + c + " 16%, transparent)",
      border: "1px solid color-mix(in srgb, " + c + " 30%, transparent)",
    },
    outline: { color: "var(--text-secondary)", background: "transparent", border: "1px solid var(--border-strong)" },
    gradient: { color: "#fff", backgroundImage: "var(--pz-gradient)", border: "1px solid transparent" },
  };
  return (
    <span style={{ ...base, ...variants[variant], ...style }} {...rest}>
      {children}
    </span>
  );
}
