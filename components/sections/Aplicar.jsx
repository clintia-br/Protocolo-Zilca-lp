"use client";

import { useRef, useState } from "react";
import { Button, Input, SectionLabel } from "@/components/ui";
import { useReveal, useStaggerReveal } from "@/lib/scrollReveal";
import { gsap, useGSAP } from "@/lib/gsap";
import { WA_LINK, wrap } from "@/lib/site";

const OPCOES = ["Não faço", "Faço com insegurança", "Faço, quero aprimorar"];
const fieldStyle = { background: "rgba(1,8,18,0.35)", borderColor: "rgba(255,255,255,0.35)" };

export default function Aplicar() {
  const [sent, setSent] = useState(false);
  const [doppler, setDoppler] = useState("");
  const panelRef = useRef(null);
  const copyRef = useRef(null);
  const formRef = useRef(null);
  const successRef = useRef(null);

  useReveal(panelRef, { duration: 1 });
  useReveal(copyRef, { delay: 0.1 });
  useStaggerReveal(formRef, ".form-row", { start: "top 85%", stagger: 0.07 });

  useGSAP(
    () => {
      if (!sent || !successRef.current) return;
      const check = successRef.current.querySelector(".success-check");
      const rest = successRef.current.querySelectorAll(".success-fade");
      gsap.fromTo(check, { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.55, ease: "pzOut" });
      gsap.fromTo(rest, { y: 14, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, stagger: 0.08, delay: 0.15, ease: "pzOut" });
    },
    { dependencies: [sent], scope: successRef }
  );

  return (
    <section id="aplicar" style={{ padding: "40px 0 104px" }}>
      <div className="pz-wrap" style={wrap}>
        <div
          ref={panelRef}
          className="gsap-reveal"
          style={{
            position: "relative",
            overflow: "hidden",
            borderRadius: "var(--radius-xl)",
            backgroundImage: "var(--pz-gradient-deep)",
            padding: "64px 56px",
            border: "1px solid rgba(15,191,181,0.35)",
            boxShadow: "var(--glow-teal), var(--shadow-xl)",
          }}
        >
          <img
            src="/assets/logo-shield-dark.png"
            alt=""
            aria-hidden="true"
            style={{ position: "absolute", right: -50, top: -40, height: 360, opacity: 0.12, pointerEvents: "none" }}
          />
          <div className="pz-grid-2" style={{ position: "relative", alignItems: "start" }}>
            <div ref={copyRef}>
              <SectionLabel>Aplicação</SectionLabel>
              <h2
                style={{
                  fontFamily: "var(--font-serif)",
                  fontWeight: 800,
                  fontSize: "clamp(26px, 3.4vw, 40px)",
                  margin: "16px 0 16px",
                  color: "#fff",
                  lineHeight: 1.1,
                }}
              >
                Você já faz eco com segurança. Falta pouco pra fazer a carótida igual.
              </h2>
              <p style={{ color: "rgba(255,255,255,0.86)", fontSize: 17, lineHeight: 1.6, margin: "0 0 24px" }}>
                Três dias de prática real fecham esse ciclo. Deixe seus dados e nossa equipe volta com as datas
                disponíveis e o próximo passo.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 12, color: "rgba(255,255,255,0.82)", fontSize: 14.5 }}>
                {["Turmas de até 4 médicos, um por aparelho", "Comunicação de médico para médico", "Sem compromisso — a equipe retorna com as datas"].map(
                  (t) => (
                    <div key={t} style={{ display: "flex", gap: 10, alignItems: "center" }}>
                      <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--accent-green)" }} />
                      {t}
                    </div>
                  )
                )}
              </div>
            </div>

            <div style={{ background: "rgba(1,8,18,0.35)", border: "1px solid rgba(255,255,255,0.14)", borderRadius: "var(--radius-lg)", padding: 32, backdropFilter: "blur(6px)" }}>
              {sent ? (
                <div ref={successRef} style={{ textAlign: "center", padding: "40px 8px" }}>
                  <div
                    className="success-check"
                    style={{
                      width: 56,
                      height: 56,
                      borderRadius: "50%",
                      backgroundImage: "var(--pz-gradient)",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#fff",
                      fontSize: 28,
                      fontWeight: 700,
                      marginBottom: 18,
                    }}
                  >
                    ✓
                  </div>
                  <h3 className="success-fade" style={{ fontFamily: "var(--font-serif)", fontSize: 24, color: "#fff", margin: "0 0 10px" }}>
                    Aplicação recebida
                  </h3>
                  <p className="success-fade" style={{ color: "rgba(255,255,255,0.8)", fontSize: 15, lineHeight: 1.6, margin: "0 0 22px" }}>
                    Nossa equipe entra em contato com as próximas datas. Se preferir, fale agora pelo WhatsApp.
                  </p>
                  <a className="success-fade" href={WA_LINK} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", display: "inline-block" }}>
                    <Button variant="primary" size="md" style={{ borderRadius: 999 }}>
                      Falar no WhatsApp
                    </Button>
                  </a>
                </div>
              ) : (
                <form
                  ref={formRef}
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSent(true);
                  }}
                  style={{ display: "flex", flexDirection: "column", gap: 16 }}
                >
                  <div className="form-row gsap-reveal">
                    <Input label="Nome completo" name="nome" placeholder="Seu nome" required style={fieldStyle} />
                  </div>
                  <div className="form-row gsap-reveal pz-grid-2-tight">
                    <Input label="CRM / UF" name="crm" placeholder="000000 / UF" required style={fieldStyle} />
                    <Input label="Especialidade" name="especialidade" placeholder="Ex: Cardiologia" style={fieldStyle} />
                  </div>
                  <div className="form-row gsap-reveal pz-grid-2-tight">
                    <Input label="WhatsApp" name="whatsapp" type="tel" placeholder="(00) 00000-0000" required style={fieldStyle} />
                    <Input label="E-mail" name="email" type="email" placeholder="voce@clinica.com.br" required style={fieldStyle} />
                  </div>
                  <div className="form-row gsap-reveal">
                    <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "rgba(255,255,255,0.82)", marginBottom: 10 }}>
                      Você já realiza Doppler de carótida hoje?
                    </label>
                    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                      {OPCOES.map((o) => (
                        <label
                          key={o}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 10,
                            cursor: "pointer",
                            padding: "10px 14px",
                            borderRadius: "var(--radius-sm)",
                            borderWidth: 1,
                            borderStyle: "solid",
                            borderColor: doppler === o ? "var(--accent)" : "rgba(255,255,255,0.18)",
                            background: doppler === o ? "rgba(15,191,181,0.12)" : "transparent",
                            transition: "all var(--dur-fast) var(--ease-standard)",
                          }}
                        >
                          <input
                            type="radio"
                            name="doppler"
                            value={o}
                            checked={doppler === o}
                            onChange={() => setDoppler(o)}
                            style={{ accentColor: "var(--accent)" }}
                            required
                          />
                          <span style={{ color: "#fff", fontSize: 14.5 }}>{o}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  <div className="form-row gsap-reveal">
                    <Button type="submit" variant="primary" size="lg" style={{ width: "100%", borderRadius: 999, marginTop: 6 }}>
                      Enviar minha aplicação
                    </Button>
                    <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 12.5, textAlign: "center", margin: "10px 0 0" }}>
                      Seus dados são usados apenas para contato sobre a imersão.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
