import SmoothScroll from "@/components/SmoothScroll";
import Nav from "@/components/sections/Nav";
import Hero from "@/components/sections/Hero";
import Problema from "@/components/sections/Problema";
import Virada from "@/components/sections/Virada";
import MudaPraVoce from "@/components/sections/MudaPraVoce";
import TresDias from "@/components/sections/TresDias";
import QuemEnsina from "@/components/sections/QuemEnsina";
import Prova from "@/components/sections/Prova";
import Niveis from "@/components/sections/Niveis";
import TurmasPequenas from "@/components/sections/TurmasPequenas";
import FAQ from "@/components/sections/FAQ";
import Aplicar from "@/components/sections/Aplicar";
import Footer from "@/components/sections/Footer";
import StickyBar from "@/components/sections/StickyBar";

export default function Home() {
  return (
    <SmoothScroll>
      <div style={{ minHeight: "100vh", overflowX: "hidden" }}>
        <Nav />
        <main>
          <Hero />
          <Problema />
          <Virada />
          <MudaPraVoce />
          <TresDias />
          <QuemEnsina />
          <Prova />
          <Niveis />
          <TurmasPequenas />
          <FAQ />
          <Aplicar />
        </main>
        <Footer />
        <StickyBar />
      </div>
    </SmoothScroll>
  );
}
