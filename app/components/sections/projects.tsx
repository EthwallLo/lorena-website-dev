import { ArrowUpRight, ClipboardCheck, DatabaseZap, PanelsTopLeft, Wrench } from "lucide-react"

const missionTypes = [
  {
    icon: PanelsTopLeft,
    title: "“On a besoin d’un écran qui marche vraiment.”",
    description:
      "Créer ou faire évoluer une application interne : écrans, formulaires, règles métier, droits, tableaux, filtres.",
    stack: ["PHP/Symfony", "Twig", "JavaScript", "PostgreSQL"],
  },
  {
    icon: Wrench,
    title: "“Personne n’ose trop toucher ce module.”",
    description:
      "Entrer dans un code déjà là, comprendre ce qui tient, stabiliser ce qui gêne, refactorer par étapes.",
    stack: ["Legacy", "Refactoring", "Debug", "Documentation"],
  },
  {
    icon: DatabaseZap,
    title: "“On refait toujours cette tâche à la main.”",
    description:
      "Remplacer une tâche répétitive ou fragile par un outil fiable : script, reporting, génération, contrôle.",
    stack: ["Python", "Bash", "CI/CD", "Docker"],
  },
  {
    icon: ClipboardCheck,
    title: "“L’outil fonctionne, mais il fatigue tout le monde.”",
    description:
      "Rendre une interface plus claire : états, messages, parcours, accessibilité, cohérence visuelle et technique.",
    stack: ["WCAG", "UX", "Figma", "Spécifications"],
  },
]

export function Projects() {
  return (
    <section id="projects" className="container-custom scroll-mt-24 py-24">
      <div className="mb-12 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
        <div>
          <p className="section-kicker">Missions freelance</p>
          <h2 className="section-title mt-3">Les problèmes que j’aime prendre en main.</h2>
        </div>
        <p className="max-w-2xl text-base leading-8 text-[#7a5265] lg:justify-self-end">
          J’aime les sujets concrets, ceux qui ont un avant et un après visible : moins de friction,
          moins de flou, moins de tâches répétées, plus de stabilité.
        </p>
      </div>

      <div className="kawaii-panel divide-y divide-pink-100 overflow-hidden">
        {missionTypes.map((mission, index) => {
          const Icon = mission.icon
          return (
            <article key={mission.title} className="grid gap-5 p-5 md:grid-cols-[4rem_0.85fr_1fr] md:p-7">
              <div className="flex items-center gap-3 md:block">
                <span className="font-display text-sm font-black text-pink-300">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="mt-0 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-pink-100 text-pink-500 md:mt-4">
                  <Icon size={22} />
                </div>
              </div>
              <div>
                <h3 className="font-display text-2xl font-black leading-tight text-[#3d2230]">{mission.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#7a5265]">{mission.description}</p>
              </div>
              <div className="flex flex-wrap content-start gap-2 md:justify-end">
                {mission.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-lg border border-pink-100 bg-pink-50 px-3 py-1.5 text-xs font-bold text-pink-700"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          )
        })}
      </div>

      <div className="mt-8 flex justify-start">
        <a
          href="mailto:lor.guedo@gmail.com"
          className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-pink-400 px-6 text-sm font-bold text-white shadow-sm shadow-pink-200 transition hover:bg-pink-500"
        >
          Me parler du besoin <ArrowUpRight size={16} />
        </a>
      </div>
    </section>
  )
}
