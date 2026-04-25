import { Brain, Code2, Database, FileCode2, GitBranch, ShieldCheck, Terminal, Wrench } from "lucide-react"

const skillCategories = [
  {
    title: "Front applicatif",
    icon: FileCode2,
    skills: ["PHP", "Symfony", "Twig", "HTML", "CSS", "JavaScript", "Tailwind CSS"],
  },
  {
    title: "Back-end & logiciel",
    icon: Code2,
    skills: ["Ada", "C#", ".NET", "MVC", "MVVM", "WPF", "XAML", "XML"],
  },
  {
    title: "Automatisation & data",
    icon: Terminal,
    skills: ["Python", "PyQt", "Bash", "Multithreading", "Reporting", "Comparaison de résultats"],
  },
  {
    title: "DevOps & qualité",
    icon: GitBranch,
    skills: ["Docker", "CI/CD", "Git", "SVN", "Tests automatisés", "FlaUI", "SpecFlow"],
  },
  {
    title: "Données",
    icon: Database,
    skills: ["PostgreSQL", "MySQL", "Optimisation SQL", "Modélisation", "Data mining", "Visualisation"],
  },
  {
    title: "Produit & cadrage",
    icon: Brain,
    skills: ["Analyse du besoin", "Spécifications", "Documentation", "Figma", "Conduite du changement"],
  },
  {
    title: "Accessibilité & sécurité",
    icon: ShieldCheck,
    skills: ["WCAG", "W3C", "Audit d’interface", "Sécurité applicative", "Performance"],
  },
  {
    title: "Maintenance",
    icon: Wrench,
    skills: ["Refactoring", "Legacy", "Debug", "Architecture", "Manuels utilisateurs", "Support équipe"],
  },
]

export function Skills() {
  return (
    <section id="skills" className="container-custom scroll-mt-24 py-24">
      <div className="mx-auto mb-12 max-w-3xl text-center">
        <p className="section-kicker">Stack</p>
        <h2 className="section-title mt-3 text-white">Ma boîte à outils, rangée par usages.</h2>
        <p className="mt-5 text-base leading-8 text-pink-50/72">
          Ma base principale : PHP/Symfony pour le front applicatif, Ada et C# pour le back-end
          et les développements logiciels. Le reste vient soutenir la qualité, l’automatisation
          et la maintenabilité.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {skillCategories.map((category) => {
          const Icon = category.icon
          return (
            <article key={category.title} className="soft-panel rounded-xl p-5">
              <div className="mb-5 flex items-center gap-3">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-pink-300/10 text-pink-200">
                  <Icon size={20} />
                </div>
                <h3 className="font-display text-lg font-bold text-white">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-pink-200/10 bg-[#100814]/56 px-3 py-2 text-xs font-medium text-pink-50/68"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
