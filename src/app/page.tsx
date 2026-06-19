import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import DevOps from "@/components/DevOps";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Divider } from "@/components/ui/Divider";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <About />
        <Projects />
        <Divider />
        <Skills />
        <DevOps />
        <Divider />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
