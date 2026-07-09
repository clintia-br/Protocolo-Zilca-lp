"use client";

import { useRef, useState } from "react";
import { Button, Input, SectionLabel } from "@/components/ui";
import { useReveal } from "@/lib/scrollReveal";
import { gsap, useGSAP } from "@/lib/gsap";
import { WA_LINK, hSans } from "@/lib/site";

const OPCOES = ["Ainda não", "Sim, mas quero ganhar mais segurança", "Sim, busco aperfeiçoamento"];
const fieldStyle = { background: "rgba(1,8,18,0.4)", borderColor: "rgba(255,255,255,0.35)" };

export default function Aplicar() {
  const [sent, setSent] = useState(false);
  const [doppler, setDoppler] = useState("");
  const panelRef = useRef(null);
  const successRef = useRef(null);

  useReveal(panelRef, { duration: 1 });

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
    <section id="aplicar" style={{ padding: "56px 0 96px" }}>
      <div className="pz-wrap">
        <div
          ref={panelRef}
          className="gsap-reveal pz-aplicar-panel"
          style={{ position: "relative", overflow: "hidden", borderRadius: 24, backgroundImage: "var(--pz-gradient-deep)", border: "1px solid rgba(15,191,181,0.35)", boxShadow: "var(--glow-teal), var(--shadow-xl)" }}
        >
          <img className="pz-aplicar-shield" src="/assets/logo-shield-dark.png" alt="" aria-hidden="true" style={{ position: "absolute", right: -50, top: -40, height: 340, opacity: 0.12, pointerEvents: "none" }} />
          <div className="pz-aplicar-scrim" />
          <div className="pz-aplicar" style={{ position: "relative" }}>
            <div>
              <SectionLabel>Inscrições</SectionLabel>
              <h2 style={{ ...hSans, fontSize: "clamp(24px, 3.8vw, 38px)", margin: "16px 0 16px" }}>Faça parte da próxima turma do Programa de Treinamento em Doppler de Carótidas.</h2>
              <p style={{ color: "rgba(255,255,255,0.86)", fontSize: 16.5, lineHeight: 1.6, margin: "0 0 24px" }}>
                Preencha seus dados para receber as próximas datas disponíveis, informações sobre as modalidades de
                participação e orientações para inscrição. Nossa equipe entrará em contato para apresentar todos os
                detalhes do programa.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 12, color: "rgba(255,255,255,0.82)", fontSize: 14.5 }}>
                {["Turmas limitadas a quatro médicos", "Um participante por equipamento", "Comunicação direta com nossa equipe"].map((t) => (
                  <div key={t} style={{ display: "flex", gap: 10, alignItems: "center" }}>
                    <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--accent-green)" }} />
                    {t}
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: "rgba(1,8,18,0.4)", border: "1px solid rgba(255,255,255,0.14)", borderRadius: 18, padding: 30, backdropFilter: "blur(6px)" }}>
              {sent ? (
                <div ref={successRef} style={{ textAlign: "center", padding: "40px 8px" }}>
                  <div className="success-check" style={{ width: 56, height: 56, borderRadius: "50%", backgroundImage: "var(--pz-gradient)", display: "inline-flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 28, fontWeight: 700, marginBottom: 18 }}>
                    ✓
                  </div>
                  <h3 className="success-fade" style={{ fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: 24, color: "#fff", margin: "0 0 10px" }}>Recebemos sua solicitação.</h3>
                  <p className="success-fade" style={{ color: "rgba(255,255,255,0.8)", fontSize: 15, lineHeight: 1.6, margin: "0 0 22px" }}>
                    Nossa equipe entrará em contato para apresentar as próximas datas disponíveis e esclarecer qualquer
                    dúvida sobre o programa.
                  </p>
                  <a className="success-fade" href={WA_LINK} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", display: "inline-block" }}>
                    <Button variant="primary" size="md" style={{ borderRadius: 12 }}>
                      Conversar pelo WhatsApp
                    </Button>
                  </a>
                </div>
              ) : (
                <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} style={{ display: "flex", flexDirection: "column", gap: 15 }}>
                  <Input label="Nome completo" name="nome" placeholder="Seu nome" required style={fieldStyle} />
                  <div className="pz-form-2">
                    <Input label="CRM / UF" name="crm" placeholder="000000 / UF" required style={fieldStyle} />
                    <Input label="Especialidade" name="especialidade" placeholder="Ex: Cardiologia" style={fieldStyle} />
                  </div>
                  <div className="pz-form-2">
                    <Input label="WhatsApp" name="whatsapp" type="tel" placeholder="(00) 00000-0000" required style={fieldStyle} />
                    <Input label="E-mail" name="email" type="email" placeholder="voce@clinica.com.br" required style={fieldStyle} />
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "rgba(255,255,255,0.82)", marginBottom: 10 }}>Você já realiza Doppler de Carótidas?</label>
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
                            borderRadius: 8,
                            border: "1px solid",
                            borderColor: doppler === o ? "var(--accent)" : "rgba(255,255,255,0.18)",
                            background: doppler === o ? "rgba(15,191,181,0.12)" : "transparent",
                            transition: "all var(--dur-fast) var(--ease-standard)",
                          }}
                        >
                          <input type="radio" name="doppler" value={o} checked={doppler === o} onChange={() => setDoppler(o)} style={{ accentColor: "var(--accent)" }} required />
                          <span style={{ color: "#fff", fontSize: 14.5 }}>{o}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  <Button type="submit" variant="primary" size="lg" style={{ width: "100%", borderRadius: 12, marginTop: 4 }}>
                    Solicitar informações
                  </Button>
                  <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 12.5, textAlign: "center", margin: 0 }}>Os dados informados serão utilizados exclusivamente para contato relacionado às próximas turmas da formação.</p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
