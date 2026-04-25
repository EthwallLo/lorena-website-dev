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
    <main className="kawaii-bg relative min-h-screen overflow-hidden text-foreground">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Contact />
      <Footer />
    </main>
  )
}
