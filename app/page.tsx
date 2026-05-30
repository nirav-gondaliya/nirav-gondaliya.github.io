import { Nav } from "@/components/nav";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Experience } from "@/components/sections/experience";
import { Skills } from "@/components/sections/skills";
import { Projects } from "@/components/sections/projects";
import { Tools } from "@/components/sections/tools";
import { OpenSource } from "@/components/sections/open-source";
import { Mentoring } from "@/components/sections/mentoring";
import { Clients } from "@/components/sections/clients";
import { LookingFor } from "@/components/sections/looking-for";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/footer";

export default function HomePage() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:bg-accent focus:text-white focus:px-3 focus:py-2 focus:border focus:border-fg"
      >
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Tools />
        <OpenSource />
        <Mentoring />
        <Clients />
        <LookingFor />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
