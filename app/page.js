import SmoothScroll from "@/components/SmoothScroll";
import TopBar from "@/components/sections/TopBar";
import Hero from "@/components/sections/Hero";
import Marquee from "@/components/sections/Marquee";
import ParaQuem from "@/components/sections/ParaQuem";
import Problema from "@/components/sections/Problema";
import Conteudos from "@/components/sections/Conteudos";
import TresDias from "@/components/sections/TresDias";
import OQueMuda from "@/components/sections/OQueMuda";
import Niveis from "@/components/sections/Niveis";
import Mentor from "@/components/sections/Mentor";
import Prova from "@/components/sections/Prova";
import FAQ from "@/components/sections/FAQ";
import Aplicar from "@/components/sections/Aplicar";
import Footer from "@/components/sections/Footer";
import StickyBar from "@/components/sections/StickyBar";

export default function Home() {
  return (
    <SmoothScroll>
      <div style={{ background: "#010812", color: "#fff", minHeight: "100vh", overflowX: "hidden" }}>
        <TopBar />
        <main>
          <Hero />
          <Marquee />
          <ParaQuem />
          <Problema />
          <Conteudos />
          <TresDias />
          <OQueMuda />
          <Niveis />
          <Mentor />
          <Prova />
          <FAQ />
          <Aplicar />
        </main>
        <Footer />
        <StickyBar />
      </div>
    </SmoothScroll>
  );
}
