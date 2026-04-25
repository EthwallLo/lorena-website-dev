import { ArrowUpRight, ClipboardCheck, CodeXml, DatabaseZap, PanelsTopLeft, Wrench } from "lucide-react"

const missionTypes = [
  {
    icon: PanelsTopLeft,
    title: "Créer une interface web métier",
    description:
      "Un écran, un module ou un espace complet qui colle aux usages internes : formulaires, tableaux, filtres, droits, règles métier.",
    stack: ["Symfony", "Twig", "JavaScript", "CSS"],
  },
  {
    icon: Wrench,
    title: "Reprendre un outil existant",
    description:
      "Comprendre le code en place, stabiliser les irritants, documenter les choix et livrer des améliorations sans grand chamboulement.",
    stack: ["Refactoring", "Tests", "Documentation", "Git"],
  },
  {
    icon: DatabaseZap,
    title: "Automatiser un processus",
    description:
      "Transformer une tâche manuelle ou fragile en workflow fiable : scripts, reporting, génération, contrôle et comparaison.",
    stack: ["Python", "Bash", "CI/CD", "Docker"],
  },
  {
    icon: ClipboardCheck,
    title: "Auditer qualité et accessibilité",
    description:
      "Repérer les points bloquants d’une interface ou d’un parcours, puis prioriser les corrections utiles et réalistes.",
    stack: ["WCAG", "Figma", "UX", "Spécifications"],
  },
]

export function Projects() {
  return (
    <section id="projects" className="border-y border-pink-200/10 bg-[#130717]/54 py-24">
      <div className="container-custom">
        <div className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <p className="section-kicker">Missions freelance</p>
            <h2 className="section-title mt-3 text-white">Des missions où je peux être vraiment utile.</h2>
            <p className="mt-5 text-base leading-8 text-pink-50/72">
              Ce que je préfère : entrer dans un sujet un peu emmêlé, comprendre le fil,
              puis livrer quelque chose de plus clair, plus stable, plus facile à reprendre.
            </p>
          </div>
          <a
            href="mailto:lor.guedo@gmail.com"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-pink-300/35 px-5 text-sm font-semibold text-pink-100 transition hover:bg-pink-300 hover:text-[#170b22]"
          >
            Décrire mon besoin <ArrowUpRight size={16} />
          </a>
        </div>

        <div className="mb-5 rounded-2xl border border-pink-200/14 bg-pink-300/7 p-5">
          <div className="flex items-start gap-4">
            <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-pink-300/10 text-pink-200">
              <CodeXml size={24} />
            </div>
            <div>
              <h3 className="font-display text-xl font-bold text-white">Un renfort dev qui aime clarifier</h3>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-pink-50/68">
                Je peux intervenir sur le code, les écrans, les scripts, les environnements et la
                documentation technique qui permet à l’équipe de continuer sereinement après la livraison.
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {missionTypes.map((mission) => {
            const Icon = mission.icon
            return (
              <article key={mission.title} className="soft-panel rounded-xl p-6">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-pink-300/10 text-pink-200">
                  <Icon size={24} />
                </div>
                <h3 className="font-display text-2xl font-bold text-white">{mission.title}</h3>
                <p className="mt-4 text-sm leading-7 text-pink-50/70">{mission.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {mission.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-lg border border-pink-200/10 bg-[#100814]/56 px-3 py-2 text-xs font-medium text-pink-50/68"
                    >
                      {item}
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
