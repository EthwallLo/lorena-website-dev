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
    title: "Correction & rédaction technique",
    company: "Au mot juste",
    location: "Grenoble · à distance",
    period: "Janv. 2026 - aujourd’hui",
    type: "Freelance",
    achievements: [
      "Activité complémentaire de relecture et structuration de contenus.",
      "Une exigence utile côté dev : documentation claire, écrans compréhensibles et consignes lisibles.",
    ],
  },
]

export function Experience() {
  return (
    <section id="experience" className="border-y border-pink-200/10 bg-[#130717]/54 py-24">
      <div className="container-custom">
        <div className="mb-12 max-w-3xl">
          <p className="section-kicker">Expérience</p>
          <h2 className="section-title mt-3 text-white">
            Des outils métier, du back-end, de l’automatisation et du concret.
          </h2>
          <p className="mt-5 text-base leading-8 text-pink-50/72">
            J’ai beaucoup appris dans les contextes où il faut être précise : legacy, exigences
            client, documentation, tests, environnements, utilisateurs finaux. C’est cette rigueur
            technique que j’apporte en mission freelance.
          </p>
        </div>

        <div className="space-y-5">
          {experiences.map((exp) => (
            <article key={`${exp.company}-${exp.title}`} className="soft-panel rounded-xl p-6">
              <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
                <div>
                  <div className="mb-4 inline-flex rounded-lg border border-pink-300/25 bg-pink-300/10 px-3 py-1 text-xs font-bold text-pink-100">
                    {exp.type}
                  </div>
                  <h3 className="font-display text-2xl font-bold text-white">{exp.title}</h3>
                  <p className="mt-2 text-lg font-semibold text-pink-200">{exp.company}</p>
                  <div className="mt-5 grid gap-2 text-sm text-pink-100/55">
                    <span className="inline-flex items-center gap-2">
                      <Calendar size={16} className="text-pink-300" />
                      {exp.period}
                    </span>
                    <span className="inline-flex items-center gap-2">
                      <MapPin size={16} className="text-pink-300" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <ul className="space-y-3">
                  {exp.achievements.map((achievement) => (
                    <li key={achievement} className="flex gap-3 text-sm leading-6 text-pink-50/70">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-pink-300 to-violet-300" />
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
