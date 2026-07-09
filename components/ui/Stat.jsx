import { forwardRef } from "react";

/**
 * Protocolo Zilca — Stat
 * A headline metric with label. The value uses the display serif; can be
 * gradient-clipped for hero emphasis.
 */
export const Stat = forwardRef(function Stat(
  { value, label, gradient = false, align = "left", className, style = {}, ...rest },
  ref
) {
  return (
    <div
      ref={ref}
      className={className}
      style={{ display: "flex", flexDirection: "column", gap: 4, textAlign: align, fontFamily: "var(--font-sans)", ...style }}
      {...rest}
    >
      <span
        style={{
          fontFamily: "var(--font-serif)",
          fontWeight: 700,
          fontSize: 46,
          lineHeight: 1,
          letterSpacing: "var(--tracking-tight)",
          color: gradient ? "transparent" : "var(--text-primary)",
          backgroundImage: gradient ? "var(--pz-gradient-text)" : "none",
          WebkitBackgroundClip: gradient ? "text" : "border-box",
          backgroundClip: gradient ? "text" : "border-box",
        }}
      >
        {value}
      </span>
      <span style={{ fontSize: 13, letterSpacing: "var(--tracking-label)", textTransform: "uppercase", color: "var(--text-muted)" }}>
        {label}
      </span>
    </div>
  );
});
