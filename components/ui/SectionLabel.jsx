import { forwardRef } from "react";

/**
 * Protocolo Zilca — SectionLabel
 * The brand's signature eyebrow: all-caps, widely tracked, small. Optionally
 * rendered on the gradient bar (as seen on the identity deck section headers).
 */
export const SectionLabel = forwardRef(function SectionLabel(
  { children, onBar = false, className, style = {}, ...rest },
  ref
) {
  const base = {
    display: "inline-block",
    fontFamily: "var(--font-sans)",
    fontSize: 13,
    fontWeight: 500,
    letterSpacing: "var(--tracking-label)",
    textTransform: "uppercase",
    color: "var(--text-secondary)",
  };
  const bar = onBar
    ? {
        color: "#fff",
        backgroundImage: "var(--pz-gradient-bar)",
        padding: "8px 20px",
        borderRadius: "var(--radius-xs)",
        fontWeight: 600,
      }
    : {};
  return (
    <span ref={ref} className={className} style={{ ...base, ...bar, ...style }} {...rest}>
      {children}
    </span>
  );
});
