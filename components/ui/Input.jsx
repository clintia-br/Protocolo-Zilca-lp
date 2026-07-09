"use client";

import { useState } from "react";

/**
 * Protocolo Zilca — Input
 * Text field for dark surfaces. Hairline border, teal focus glow, optional
 * label and helper text. Calm focus transition.
 */
export function Input({ label, helper, type = "text", invalid = false, style = {}, id, ...rest }) {
  const [focus, setFocus] = useState(false);
  const fid = id || (label ? "in-" + label.toLowerCase().replace(/\s+/g, "-") : undefined);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 7, fontFamily: "var(--font-sans)" }}>
      {label && (
        <label htmlFor={fid} style={{ fontSize: 13, fontWeight: 500, color: "var(--text-secondary)", letterSpacing: "0.01em" }}>
          {label}
        </label>
      )}
      <input
        id={fid}
        type={type}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        style={{
          fontFamily: "var(--font-sans)",
          fontSize: 15,
          color: "var(--text-primary)",
          background: "var(--surface-raised)",
          borderWidth: 1,
          borderStyle: "solid",
          borderColor: invalid ? "var(--danger)" : focus ? "var(--accent)" : "var(--border-strong)",
          borderRadius: "var(--radius-sm)",
          padding: "11px 14px",
          outline: "none",
          boxShadow: focus && !invalid ? "var(--glow-focus)" : "none",
          transition: "border-color var(--dur-base) var(--ease-standard), box-shadow var(--dur-base) var(--ease-standard)",
          width: "100%",
          ...style,
        }}
        {...rest}
      />
      {helper && <span style={{ fontSize: 12, color: invalid ? "var(--danger)" : "var(--text-muted)" }}>{helper}</span>}
    </div>
  );
}
