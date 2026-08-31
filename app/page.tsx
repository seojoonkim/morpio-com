import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import MorphMachine from "@/components/MorphMachine";
import Services from "@/components/Services";
import CastingReel from "@/components/CastingReel";
import Thesis from "@/components/Thesis";
import Process from "@/components/Process";
import About from "@/components/About";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";

export default function Page() {
  return <>
    <Nav />
    <main>
      <Hero />
      <MorphMachine />
      <Services />
      <CastingReel />
      <Thesis />
      <Process />
      <About />
      <CtaBanner />
    </main>
    <Footer />
  </>;
}
