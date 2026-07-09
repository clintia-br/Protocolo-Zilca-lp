"use client";

import { useState } from "react";

/**
 * Protocolo Zilca — Button
 * Primary uses the signature gradient; secondary is a hairline outline on dark;
 * ghost is text-only. Calm hover (brighten / fill), subtle press (translateY).
 */
export function Button({
  children,
  variant = "primary",
  size = "md",
  disabled = false,
  iconLeft = null,
  iconRight = null,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: { padding: "8px 16px", fontSize: 13 },
    md: { padding: "12px 24px", fontSize: 15 },
    lg: { padding: "16px 34px", fontSize: 17 },
  };
  const base = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    fontFamily: "var(--font-sans)",
    fontWeight: 600,
    letterSpacing: "0.01em",
    lineHeight: 1,
    borderRadius: "var(--radius-sm)",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "transparent",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.45 : 1,
    transition:
      "transform var(--dur-fast) var(--ease-standard), filter var(--dur-base) var(--ease-standard), background var(--dur-base) var(--ease-standard), box-shadow var(--dur-base) var(--ease-standard)",
    ...sizes[size],
  };
  const variants = {
    primary: {
      color: "#fff",
      backgroundImage: "var(--pz-gradient)",
      boxShadow: "var(--glow-green)",
    },
    secondary: {
      color: "var(--text-primary)",
      background: "transparent",
      borderColor: "var(--border-strong)",
    },
    ghost: {
      color: "var(--accent)",
      background: "transparent",
    },
  };

  const [hover, setHover] = useState(false);
  const [press, setPress] = useState(false);
  const hoverStyle =
    hover && !disabled
      ? variant === "primary"
        ? { filter: "brightness(1.08)" }
        : variant === "secondary"
        ? { background: "rgba(255,255,255,0.06)", borderColor: "var(--accent)" }
        : { color: "var(--link-hover)" }
      : {};

  return (
    <button
      style={{
        ...base,
        ...variants[variant],
        ...hoverStyle,
        transform: press && !disabled ? "translateY(1px)" : "translateY(0)",
        ...style,
      }}
      disabled={disabled}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => {
        setHover(false);
        setPress(false);
      }}
      onMouseDown={() => setPress(true)}
      onMouseUp={() => setPress(false)}
      {...rest}
    >
      {iconLeft}
      {children}
      {iconRight}
    </button>
  );
}
