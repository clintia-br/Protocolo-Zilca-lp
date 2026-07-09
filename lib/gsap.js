"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { CustomEase } from "gsap/CustomEase";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, SplitText, ScrollSmoother, CustomEase, useGSAP);
  // Brand motion: calm, precise — mirrors --ease-standard / --ease-out from the design tokens.
  CustomEase.create("pzStandard", "M0,0 C0.22,0.61 0.36,1 1,1");
  CustomEase.create("pzOut", "M0,0 C0.16,1 0.3,1 1,1");
  gsap.defaults({ ease: "pzStandard", duration: 0.9 });
}

export { gsap, ScrollTrigger, SplitText, ScrollSmoother, useGSAP };
