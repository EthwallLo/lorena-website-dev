import { Calendar, MapPin } from "lucide-react"

const experiences = [
  {
    title: "Développeuse PHP / Symfony",
    company: "Eviden",
    location: "Grenoble · hybride",
    period: "Nov. 2025 - aujourd’hui",
    type: "CDI",
    achievements: [
      "Développement et maintenance d’une application web métier avec Symfony.",
      "Analyse du besoin fonctionnel et traduction en solutions techniques.",
      "Interfaces dynamiques avec Twig, HTML, CSS et JavaScript.",
      "Refactorisation, optimisation PostgreSQL et documentation technique complète.",
      "Configuration d’environnements Docker et logique d’amélioration continue.",
    ],
  },
  {
    title: "Développeuse C# / .NET",
    company: "Eviden",
    location: "Grenoble · sur site",
    period: "Fév. 2024 - nov. 2025",
    type: "CDI",
    achievements: [
      "Interface de CAO pour automates Schneider Control Expert dans le contexte EPR2.",
      "Automatisation de création de programmes automates FBD.",
      "Développement C#/.NET en MVC puis MVVM, interfaces XAML, XML et WPF.",
      "Spécifications fonctionnelles et techniques, documentation interne et tests automatisés avec FlaUI et SpecFlow.",
    ],
  },
  {
    title: "Data Analyst & développeuse back-end",
    company: "ESRF - The European Synchrotron",
    location: "Grenoble · sur site",
    period: "Sept. 2023 - déc. 2023",
    type: "Alternance",
    achievements: [
      "Développement Python, multithreading et conduite du changement.",
      "Mise en place d’intégration continue et tests automatiques.",
      "Création d’une interface PyQt de gestion de version Git/SVN.",
    ],
  },
  {
    title: "Cheffe de projet SI & développeuse back-end",
    company: "Schneider Electric / Itris Automation",
    location: "Grenoble · sur site",
    period: "Sept. 2018 - sept. 2023",
    type: "Alternance",
    achievements: [
      "Développement Ada, PHP, scripts Bash et outils internes d’automatisation.",
      "Pilotage CI/CD back-end, machines virtuelles et scripts de reporting de binaires.",
      "Prototypage Figma, recommandations d’accessibilité web et documentation de l’existant.",
      "Administration réseau, PXE et projets de parseurs pour automates industriels.",
    ],
  },
  {
    title: "Correctrice - relectrice",
    company: "Au mot juste",
    location: "Grenoble · à distance",
    period: "Janv. 2026 - aujourd’hui",
    type: "Freelance",
    achievements: [
      "Activité de correction, relecture et structuration de contenus.",
      "Une exigence utile côté dev : documentation claire, écrans compréhensibles et consignes lisibles.",
      "Pour les particuliers, professionnels et maisons d'édition : vérification des informations, réécriture, mise en page, relecture.",
      "Pour des documents personnels (CV, documents administratifs), des travaux universitaires (mémoire, projets de recherche), ou encore des manuscrits ou contenus web."
    ],
  },
]

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 border-y border-pink-100 bg-white/64 py-24">
      <div className="container-custom">
        <div className="mb-12 max-w-3xl">
          <p className="section-kicker">Parcours</p>
          <h2 className="section-title mt-3">
            Des expériences concrètes dans des environnements exigeants.
          </h2>
        </div>

        <div className="relative border-l border-pink-200 pl-5 md:pl-8">
          {experiences.map((exp) => (
            <article key={`${exp.company}-${exp.title}`} className="relative pb-10 last:pb-0">
              <span className="absolute -left-[1.62rem] top-1 h-4 w-4 rounded-full border border-pink-300 bg-white md:-left-[2.1rem]" />
              <div className="kawaii-panel grid gap-5 p-5 lg:grid-cols-[0.82fr_1.18fr]">
                <div>
                  <div className="mb-4 inline-flex rounded-lg bg-pink-100 px-3 py-1 text-xs font-bold text-pink-700">
                    {exp.type}
                  </div>
                  <h3 className="font-display text-2xl font-black text-foreground">{exp.title}</h3>
                  <p className="mt-2 text-lg font-semibold text-pink-600">{exp.company}</p>
                  <div className="mt-5 grid gap-2 text-sm text-[#8a6475]">
                    <span className="inline-flex items-center gap-2">
                      <Calendar size={16} className="text-pink-400" />
                      {exp.period}
                    </span>
                    <span className="inline-flex items-center gap-2">
                      <MapPin size={16} className="text-pink-400" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <ul className="space-y-3">
                  {exp.achievements.map((achievement) => (
                    <li key={achievement} className="flex gap-3 text-sm leading-6 text-[#7a5265]">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-pink-400" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
