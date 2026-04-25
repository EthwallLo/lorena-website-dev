import { Brain, Database, FileCode2, GitBranch, ShieldCheck, Terminal, Wrench } from "lucide-react"

const mainStacks = [
  {
    title: "Front applicatif",
    subtitle: "Interfaces métier, formulaires, parcours, écrans internes",
    skills: ["PHP", "Symfony", "Twig", "HTML", "CSS", "JavaScript"],
  },
  {
    title: "Back-end & logiciel",
    subtitle: "Logique métier, outils industriels, automatisation logicielle",
    skills: ["Ada", "C#", ".NET", "MVC", "MVVM", "WPF"],
  },
]

const supportStacks = [
  {
    title: "Automatisation",
    icon: Terminal,
    skills: ["Python", "PyQt", "Bash", "Multithreading", "Reporting"],
  },
  {
    title: "Qualité",
    icon: GitBranch,
    skills: ["Docker", "CI/CD", "Git", "SVN", "FlaUI", "SpecFlow"],
  },
  {
    title: "Données",
    icon: Database,
    skills: ["PostgreSQL", "MySQL", "Optimisation SQL", "Modélisation"],
  },
  {
    title: "Cadrage",
    icon: Brain,
    skills: ["Analyse du besoin", "Spécifications", "Documentation", "Figma"],
  },
  {
    title: "Accessibilité",
    icon: ShieldCheck,
    skills: ["WCAG", "W3C", "Audit d’interface", "Performance"],
  },
  {
    title: "Maintenance",
    icon: Wrench,
    skills: ["Refactoring", "Legacy", "Debug", "Architecture"],
  },
]

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 border-y border-pink-100 bg-white/64 py-24">
      <div className="container-custom">
        <div className="mb-12 max-w-3xl">
          <p className="section-kicker">Technos</p>
          <h2 className="section-title mt-3">Deux axes forts, puis tout ce qui les rend fiables.</h2>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          {mainStacks.map((stack) => (
            <article key={stack.title} className="kawaii-panel p-6 md:p-8">
              <div className="mb-8 flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-display text-3xl font-black text-[#3d2230]">{stack.title}</h3>
                  <p className="mt-2 max-w-md text-sm leading-6 text-[#7a5265]">{stack.subtitle}</p>
                </div>
                <FileCode2 className="mt-1 text-pink-400" size={28} />
              </div>
              <div className="flex flex-wrap gap-2">
                {stack.skills.map((skill) => (
                  <span key={skill} className="rounded-lg bg-pink-100 px-4 py-2 text-sm font-bold text-pink-700">
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {supportStacks.map((stack) => {
            const Icon = stack.icon
            return (
              <article key={stack.title} className="kawaii-panel p-5">
                <div className="mb-4 flex items-center gap-3">
                  <Icon size={20} className="text-pink-500" />
                  <h3 className="font-display text-lg font-bold text-[#3d2230]">{stack.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {stack.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-pink-100 bg-white px-3 py-1.5 text-xs font-semibold text-[#7a5265]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
