/**
 * Protocolo Zilca — GradientRule
 * The signature spectrum bar (emerald → teal → azure → deep blue). Use as a
 * section divider, accent underline, or top border on cards/headers.
 */
export function GradientRule({ height = 6, rounded = true, style = {}, ...rest }) {
  return (
    <div
      style={{
        height,
        width: "100%",
        backgroundImage: "var(--pz-gradient-bar)",
        borderRadius: rounded ? "var(--radius-pill)" : 0,
        transformOrigin: "left center",
        ...style,
      }}
      {...rest}
    />
  );
}
