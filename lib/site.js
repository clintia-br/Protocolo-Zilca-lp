// TROCAR: número de WhatsApp real (formato internacional, só dígitos)
export const WA_NUMBER = "5511999999999";
export const WA_MSG = "Olá! Quero aplicar para a próxima turma da Imersão Protocolo Zilca (Doppler de carótidas).";
export const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_MSG)}`;

export const wrap = { maxWidth: 1240, margin: "0 auto" };

export function scrollToId(id) {
  return (e) => {
    if (e) e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    const smoother = typeof window !== "undefined" && window.__pzSmoother;
    if (smoother && smoother.scrollTo) {
      smoother.scrollTo(el, true, "top 88px");
    } else {
      window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 24, behavior: "smooth" });
    }
  };
}
