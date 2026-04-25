import { Accessibility, Blocks, FileText, Gauge, Heart, RefreshCcw, Workflow } from "lucide-react"

const services = [
  {
    icon: Blocks,
    title: "Applications métier",
    description:
      "Fonctionnalités sur mesure, interfaces Twig/HTML/CSS/JavaScript, logique back-end et intégration dans des systèmes existants.",
  },
  {
    icon: RefreshCcw,
    title: "Refactoring sans brutalité",
    description:
      "Remise à plat progressive, clarification du code, optimisation PostgreSQL et amélioration de la maintenabilité sans casser l’usage.",
  },
  {
    icon: Workflow,
    title: "Automatisation utile",
    description:
      "Scripts, outils internes, CI/CD, génération de livrables et workflows qui économisent du temps aux équipes.",
  },
  {
    icon: Accessibility,
    title: "Interfaces accessibles",
    description:
      "Analyse, recommandations et prototypage d’interfaces lisibles, robustes et pensées pour de vrais utilisateurs.",
  },
  {
    icon: Gauge,
    title: "Performance & sécurité",
    description:
      "Développement orienté qualité : configuration d’environnements, performance, sécurité applicative et comportement fiable.",
  },
  {
    icon: FileText,
    title: "Documentation technique",
    description:
      "Spécifications, manuels utilisateurs et supports clairs pour que le projet reste compréhensible après livraison.",
  },
]

const personalNotes = [
  "Je fais attention aux états vides, aux messages d’erreur, aux parcours un peu fragiles et aux petits endroits où l’utilisateur peut hésiter.",
  "J’aime comprendre avant de produire : le contexte, les contraintes, les usages réels derrière l’application.",
  "Je préfère une solution sobre, fiable et maintenable à une démonstration brillante mais difficile à reprendre.",
]

export function About() {
  return (
    <section id="about" className="container-custom scroll-mt-24 py-24">
      <div className="grid gap-12 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
        <div>
          <p className="section-kicker">Approche</p>
          <h2 className="section-title mt-3 text-white">
            Je construis des applications et outils métier avec méthode, nuance et sens du détail.
          </h2>
          <div className="mt-6 space-y-5 text-base leading-8 text-pink-50/74">
            <p>
              Mon parcours mélange développement web, back-end industriel, automatisation, data
              et conduite de projet. Ça donne une manière de travailler très concrète : comprendre
              le besoin, cadrer le périmètre, livrer proprement, documenter ce qui doit durer.
            </p>
            <p>
              En freelance, je peux rejoindre un projet existant, créer un module, développer une
              application interne, clarifier une interface ou automatiser un irritant. Et je garde
              toujours en tête la personne qui devra utiliser, maintenir ou faire évoluer ce que je livre.
            </p>
          </div>

          <div className="mt-8 rounded-2xl border border-pink-200/14 bg-pink-300/7 p-5">
            <div className="mb-4 flex items-center gap-3 text-pink-100">
              <Heart size={20} className="text-pink-300" />
              <h3 className="font-display text-xl font-bold">Ce qui me ressemble</h3>
            </div>
            <ul className="space-y-3">
              {personalNotes.map((note) => (
                <li key={note} className="flex gap-3 text-sm leading-6 text-pink-50/68">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-pink-300" />
                  <span>{note}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <article
                key={service.title}
                className="soft-panel rounded-xl p-5 transition hover:border-pink-300/50"
              >
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-pink-300/10 text-pink-200">
                  <Icon size={22} />
                </div>
                <h3 className="font-display text-lg font-bold text-white">{service.title}</h3>
                <p className="mt-3 text-sm leading-6 text-pink-50/62">{service.description}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
