import Hero from "@/components/hero"
import Navbar from "@/components/navbar"
import About from "@/components/about"
import Experience from "@/components/experience"
import Projects from "@/components/projects"
import Skills from "@/components/skills"
import Education from "@/components/education"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <section id="home" className="pt-16">
          <Hero />
        </section>
        <section id="about" className="py-16">
          <About />
        </section>
        <section id="experience" className="py-16 bg-muted/50">
          <Experience />
        </section>
        <section id="projects" className="py-16">
          <Projects />
        </section>
        <section id="skills" className="py-16 bg-muted/50">
          <Skills />
        </section>
        
        <section id="contact" className="py-16 bg-muted/50">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  )
}

