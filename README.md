# Protocolo Zilca — Landing Page

Landing page da **Imersão Protocolo Zilca** (Doppler de carótidas), construída em Next.js
(App Router) a partir do design system da marca, com animações em [GSAP](https://gsap.com)
(ScrollTrigger, SplitText, ScrollSmoother).

## Rodando localmente

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Stack

- **Next.js 16** (App Router, JavaScript)
- **GSAP 3** — `ScrollTrigger` para revelações no scroll, `SplitText` para a animação do
  título do herói, `ScrollSmoother` para o scroll suave, `CustomEase` para a curva de
  movimento da marca (`--ease-standard` / `--ease-out`)
- Tokens de design (cor, tipografia, espaçamento, efeitos) portados de `tokens/*.css` do
  design system original para `app/globals.css`
- Fontes **Spectral** (serifada, display) e **Archivo** (sans, corpo) via `next/font/google`

## Estrutura

- `components/ui/` — primitivos do design system (Button, Card, Input, Badge, SectionLabel,
  GradientRule, Stat)
- `components/sections/` — seções da landing (Nav, Hero, Problema, Virada, MudaPraVoce,
  TresDias, QuemEnsina, Prova, Niveis, TurmasPequenas, FAQ, Aplicar, Footer, StickyBar)
- `lib/gsap.js` — registro dos plugins GSAP e das eases da marca
- `lib/scrollReveal.js`, `lib/animations.js` — hooks reutilizáveis de scroll-reveal, stagger
  e parallax
- `lib/site.js` — link do WhatsApp e helpers de navegação

## Antes de publicar

- Troque `WA_NUMBER` em `lib/site.js` pelo número real de WhatsApp (formato internacional,
  só dígitos).
- O formulário de aplicação (seção "Aplicar") só simula o envio no cliente — conecte a um
  endpoint/CRM real antes de ir ao ar.
- Os depoimentos na seção "Prova" são placeholders — substitua por depoimentos reais e
  autorizados.
