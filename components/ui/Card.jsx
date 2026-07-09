"use client";

import { useState, forwardRef } from "react";
import { GradientRule } from "./GradientRule";

/**
 * Protocolo Zilca — Card
 * Navy surface with a top-lit hairline edge and soft shadow. Optional gradient
 * top-rule and hover-glow. The default container for grouped content.
 */
export const Card = forwardRef(function Card(
  { children, topRule = false, interactive = false, padding = 24, className, style = {}, ...rest },
  ref
) {
  const [hover, setHover] = useState(false);
  return (
    <div
      ref={ref}
      className={className}
      onMouseEnter={() => interactive && setHover(true)}
      onMouseLeave={() => interactive && setHover(false)}
      style={{
        position: "relative",
        background: "var(--surface-card)",
        borderRadius: "var(--radius-lg)",
        border: "1px solid var(--border-subtle)",
        boxShadow: hover ? "var(--edge-top), var(--shadow-lg), var(--glow-teal)" : "var(--edge-top), var(--shadow-md)",
        overflow: "hidden",
        transform: hover ? "translateY(-2px)" : "translateY(0)",
        transition: "transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-standard)",
        cursor: interactive ? "pointer" : "default",
        ...style,
      }}
      {...rest}
    >
      {topRule && <GradientRule height={4} rounded={false} />}
      <div style={{ padding }}>{children}</div>
    </div>
  );
});
