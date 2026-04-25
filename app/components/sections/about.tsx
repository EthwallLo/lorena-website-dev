import { Compass, FileText, Heart, RefreshCcw, ShieldCheck } from "lucide-react"

const principles = [
  {
    icon: Compass,
    title: "Comprendre le contexte",
    description:
      "Avant de coder, j’essaie de comprendre le besoin, les habitudes de travail, les contraintes et ce qui rend l’outil difficile à utiliser aujourd’hui.",
  },
  {
    icon: RefreshCcw,
    title: "Avancer progressivement",
    description:
      "Sur un projet existant, je préfère améliorer par étapes : sécuriser, clarifier, refactorer, puis ajouter ce qui manque.",
  },
  {
    icon: ShieldCheck,
    title: "Penser maintenance",
    description:
      "Un bon livrable doit pouvoir être repris. J’accorde donc beaucoup d’importance à la lisibilité du code, aux choix simples et aux comportements prévisibles.",
  },
  {
    icon: FileText,
    title: "Expliquer ce qui compte",
    description:
      "Je documente les décisions utiles, les points sensibles et les consignes qui éviteront de perdre du temps plus tard.",
  },
]

const attentionPoints = [
  "des écrans lisibles",
  "des formulaires moins pénibles",
  "des messages d’erreur utiles",
  "du code facile à relire",
  "des noms de variables compréhensibles",
  "des petites frictions qu’on finit par ne plus voir",
  "une documentation utile",
]

export function About() {
  return (
    <section id="about" className="container-custom scroll-mt-24 py-24">
      <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
        <div className="lg:sticky lg:top-28">
          <p className="section-kicker">Mon approche</p>
          <h2 className="section-title mt-3">
            Faire simple, propre, et vraiment utile.
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {principles.map((principle) => {
            const Icon = principle.icon
            return (
              <article key={principle.title} className="kawaii-panel p-5">
                <div className="mb-5 flex items-center gap-3">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-pink-100 text-pink-500">
                    <Icon size={21} />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground">{principle.title}</h3>
                </div>
                <p className="text-sm leading-6 text-[#7a5265]">{principle.description}</p>
              </article>
            )
          })}
        </div>
      </div>

      <div className="mt-8 kawaii-note p-5">
        <p className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.16em] text-pink-500">
          <Heart size={16} className="fill-pink-200" />
          Ce à quoi je fais attention
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {attentionPoints.map((item) => (
            <span
              key={item}
              className="rounded-lg border border-pink-100 bg-white px-4 py-2 text-sm font-medium text-[#7a5265]"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
