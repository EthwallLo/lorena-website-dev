import { Award, Calendar, GraduationCap } from "lucide-react"

const education = [
  {
    degree: "Manager des Systèmes d’Information et du Numérique",
    institution: "Grenoble École de Management",
    period: "Août 2021 - sept. 2023",
    details: "Project management, gouvernance SI, risques, sécurité, marketing digital et économie du numérique.",
  },
  {
    degree: "Mastère spécialisé Big Data",
    institution: "Grenoble INP - Ensimag",
    period: "Sept. 2023 - déc. 2023",
    details: "Apprentissage statistique, data mining, web des données, IA et visualisation de l’information.",
  },
  {
    degree: "Bachelor Responsable en Ingénierie des Logiciels",
    institution: "CESI",
    period: "Oct. 2020 - sept. 2021",
    details: "Analyse UML, développement objet, applications mobiles, gestion de projet et sécurité applicative.",
  },
  {
    degree: "BTS Systèmes Numériques, Informatique et Réseaux",
    institution: "Lycée du Grésivaudan",
    period: "2018 - 2020",
    details: "Linux, Windows, réseaux, C, C++, Java, HTML, PHP, MySQL, systèmes embarqués et UML.",
  },
]

const certifications = [
  "Python 3 Programming, University of Michigan",
  "Accessibility and Inclusive Design, University of Illinois",
  "Certification Le Robert",
  "CCNA Introduction aux Réseaux",
]

export function Education() {
  return (
    <section id="education" className="container-custom scroll-mt-24 py-24">
      <div className="mb-12 max-w-3xl">
        <p className="section-kicker">Formation</p>
        <h2 className="section-title mt-3">Un socle logiciel, projet et data.</h2>
        <p className="mt-5 text-base leading-8 text-[#7a5265]">
          Mon parcours est surtout construit autour de l’ingénierie logicielle, des systèmes
          d’information, de la donnée et de la gestion de projet.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="kawaii-panel divide-y divide-pink-100 overflow-hidden">
          {education.map((item) => (
            <article key={`${item.institution}-${item.degree}`} className="grid gap-4 p-5 sm:grid-cols-[3rem_1fr]">
              <div className="hidden h-11 w-11 items-center justify-center rounded-lg bg-pink-100 text-pink-500 sm:inline-flex">
                <GraduationCap size={22} />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-[#3d2230]">{item.degree}</h3>
                <p className="mt-1 font-semibold text-pink-600">{item.institution}</p>
                <p className="mt-3 inline-flex items-center gap-2 text-sm text-[#8a6475]">
                  <Calendar size={15} className="text-pink-400" />
                  {item.period}
                </p>
                <p className="mt-3 text-sm leading-6 text-[#7a5265]">{item.details}</p>
              </div>
            </article>
          ))}
        </div>

        <aside className="kawaii-panel h-fit p-6">
          <div className="mb-5 flex items-center gap-3">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-pink-100 text-pink-500">
              <Award size={20} />
            </div>
            <h3 className="font-display text-xl font-bold text-[#3d2230]">Certifications</h3>
          </div>
          <div className="grid gap-3">
            {certifications.map((certification) => (
              <div
                key={certification}
                className="rounded-lg border border-pink-100 bg-pink-50 px-4 py-3 text-sm text-[#7a5265]"
              >
                {certification}
              </div>
            ))}
          </div>
        </aside>
      </div>
    </section>
  )
}
