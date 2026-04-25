import { Compass, FileText, Heart, RefreshCcw, ShieldCheck } from "lucide-react"

const principles = [
  {
    icon: Compass,
    title: "Comprendre avant d’écrire",
    description:
      "Je commence par le besoin réel, les contraintes, les usages et le petit truc qui bloque mais que personne n’a encore nommé.",
  },
  {
    icon: RefreshCcw,
    title: "Améliorer sans tout casser",
    description:
      "J’aime les reprises patientes : lire l’existant, repérer ce qui tient, puis rendre la suite plus propre étape par étape.",
  },
  {
    icon: ShieldCheck,
    title: "Livrer du maintenable",
    description:
      "Je préfère une solution un peu sobre mais solide à quelque chose d’impressionnant que personne n’ose toucher ensuite.",
  },
  {
    icon: FileText,
    title: "Laisser une trace utile",
    description:
      "Spécifications, documentation, consignes : je laisse de quoi comprendre le pourquoi, pas seulement le comment.",
  },
]

const likes = [
  "les formulaires qui ne se battent pas avec les utilisateurs",
  "les noms de variables qui disent la vérité",
  "les tests qui rassurent au lieu de décorer",
  "les interfaces sobres avec une vraie intention",
]

export function About() {
  return (
    <section id="about" className="container-custom scroll-mt-24 py-24">
      <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
        <div className="lg:sticky lg:top-28">
          <p className="section-kicker">Mon approche</p>
          <h2 className="section-title mt-3">
            Du code propre, avec un peu de douceur autour.
          </h2>
        </div>

        <div>
          <div className="mt-5 kawaii-note p-5">
            <p className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.16em] text-pink-500">
              <Heart size={16} className="fill-pink-200" />
              Petites obsessions très pratiques
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {likes.map((item) => (
                <span
                  key={item}
                  className="rounded-lg border border-pink-100 bg-white px-4 py-2 text-sm font-medium text-[#7a5265]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {principles.map((principle) => {
              const Icon = principle.icon
              return (
                <article key={principle.title} className="kawaii-panel p-5">
                  <div className="mb-5 flex items-center gap-3">
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-pink-100 text-pink-500">
                      <Icon size={21} />
                    </div>
                    <h3 className="font-display text-xl font-bold text-[#3d2230]">{principle.title}</h3>
                  </div>
                  <p className="text-sm leading-6 text-[#7a5265]">{principle.description}</p>
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
