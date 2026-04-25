import {
  Brain,
  Code2,
  Database,
  FileCode2,
  GitBranch,
  MonitorCog,
  ShieldCheck,
  Terminal,
} from "lucide-react"

const mainStacks = [
  {
    title: "Front-end & front applicatif",
    skills: ["HTML5", "CSS3", "JavaScript", "Symfony", "WordPress", "XML"],
  },
  {
    title: "Back-end & logiciel",
    skills: ["C#", ".NET", "Ada", "PHP", "Python", "Bash", "Java", "SQL"],
  },
]

const supportStacks = [
  {
    title: "Bases de données",
    icon: Database,
    skills: ["PostgreSQL", "MySQL", "Optimisation", "Refactorisation", "Modélisation"],
  },
  {
    title: "Tests & qualité",
    icon: ShieldCheck,
    skills: ["TDD", "FlaUI", "SpecFlow", "Tests automatisés", "Tests unitaires", "Non-régression", "Refactoring"],
  },
  {
    title: "CI/CD & versioning",
    icon: GitBranch,
    skills: ["CI/CD", "Git", "GitHub", "GitLab", "SVN", "Jenkins", "Azure DevOps"],
  },
  {
    title: "Outils & environnements",
    icon: MonitorCog,
    skills: ["Docker", "VirtualBox", "VMWare", "Windows", "Linux", "Jira", "Office", "LaTeX"],
  },
  {
    title: "Automatisation & data",
    icon: Terminal,
    skills: ["Python", "PyQt", "Bash", "Multithreading", "Reporting", "Comparaison de binaires"],
  },
  {
    title: "Cadrage & documentation",
    icon: Brain,
    skills: ["Analyse du besoin", "Gestion de projet", "UML", "Spécifications", "Documentation technique", "Manuel utilisateur"],
  },
  {
    title: "UX/UI & accessibilité",
    icon: FileCode2,
    skills: ["UX/UI", "Figma", "Maquettage", "RGAA", "WCAG", "W3C", "Audit d’interface"],
  },
  {
    title: "Méthodes & management",
    icon: MonitorCog,
    skills: ["Management", "Méthodologies Agiles", "Scrum", "Kanban", "Gestion de projet", "Jira"],
  },
  {
    title: "Domaines métier",
    icon: Code2,
    skills: ["Applications métier", "Automates", "Control Expert", "FBD", "CAO", "Outils internes"],
  },
]

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 border-y border-pink-100 bg-white/64 py-24">
      <div className="container-custom">
        <div className="mb-12 max-w-3xl">
          <p className="section-kicker">Compétences</p>
          <h2 className="section-title mt-3">Une base full-stack et maîtrisée.</h2>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          {mainStacks.map((stack) => (
            <article key={stack.title} className="kawaii-panel p-6 md:p-8">
              <div className="mb-8 flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-display text-3xl font-black text-foreground">{stack.title}</h3>
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
                  <h3 className="font-display text-lg font-bold text-foreground">{stack.title}</h3>
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
