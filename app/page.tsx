import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import CastingReel, { TechnicalDemoIndex } from "@/components/CastingReel";
import Thesis from "@/components/Thesis";
import Process from "@/components/Process";
import About from "@/components/About";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";
import HeadingMotion from "@/components/HeadingMotion";

export default function Page() {
  return <>
    <HeadingMotion />
    <Nav />
    <main>
      <Hero />
      <Thesis />
      <CastingReel />
      <TechnicalDemoIndex />
      <Process />
      <About />
      <CtaBanner />
    </main>
    <Footer />
  </>;
}
