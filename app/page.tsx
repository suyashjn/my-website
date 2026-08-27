import FluidBackground from "@/components/FluidBackground";
import CursorGlow from "@/components/CursorGlow";
import Header from "@/components/Header";
import Hero from "@/components/sections/Hero";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <FluidBackground />
      <CursorGlow />
      <Header />
      <main className="relative flex-1">
        <Hero />
        <Skills />
        <Experience />
        <Contact />
      </main>
    </>
  );
}
