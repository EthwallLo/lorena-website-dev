import { Header } from "./components/header"
import { About } from "./components/sections/about"
import { Experience } from "./components/sections/experience"
import { Education } from "./components/sections/education"
import { Skills } from "./components/sections/skills"
import { Contact } from "./components/sections/contact"
import { Projects } from "./components/sections/projects"
import { Hero } from "./components/sections/hero"
import { Footer } from "./components/footer"

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_18%_8%,rgba(244,114,182,0.24),transparent_32%),radial-gradient(circle_at_82%_0%,rgba(168,85,247,0.22),transparent_34%),linear-gradient(180deg,#100814_0%,#170b22_48%,#110817_100%)] text-pink-50">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:52px_52px]" />
      <Header />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </main>
  )
}
