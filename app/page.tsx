import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Work from "@/components/Work";
import Process from "@/components/Process";
import About from "@/components/About";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Nav />
      <main className="relative min-h-screen bg-bg-base text-ink-primary overflow-x-hidden">
        <Hero />
        <Services />
        <Work />
        <Process />
        <About />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
