// TROCAR: número de WhatsApp real (formato internacional, só dígitos)
export const WA_NUMBER = "5511999999999";
export const WA_MSG = "Olá! Quero aplicar para a próxima turma da Imersão Protocolo Zilca (Doppler de carótidas).";
export const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_MSG)}`;

// Heavy sans display headline — fiel ao layout de referência (v2).
export const hSans = {
  fontFamily: "var(--font-sans)",
  fontWeight: 800,
  letterSpacing: "-0.02em",
  lineHeight: 1.06,
  margin: 0,
  color: "#fff",
};

export const grad = {
  backgroundImage: "var(--pz-gradient-text)",
  WebkitBackgroundClip: "text",
  backgroundClip: "text",
  color: "transparent",
};

export function scrollToId(id) {
  return (e) => {
    if (e) e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    const smoother = typeof window !== "undefined" && window.__pzSmoother;
    if (smoother && smoother.scrollTo) {
      smoother.scrollTo(el, true, "top 80px");
    } else {
      window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 20, behavior: "smooth" });
    }
  };
}
