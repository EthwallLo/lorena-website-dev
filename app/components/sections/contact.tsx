import Link from "next/link"
import { Github, Linkedin, Mail, MessageSquare } from "lucide-react"

const contactMethods = [
  {
    title: "Email",
    description: "Le plus simple pour me transmettre un contexte, une contrainte ou une idée de mission.",
    icon: Mail,
    href: "mailto:lor.guedo@gmail.com",
    label: "lor.guedo@gmail.com",
  },
  {
    title: "LinkedIn",
    description: "Pour voir mon parcours complet et échanger sur mes réseaux professionnels.",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/lorena-guedouani/",
    label: "Profil LinkedIn",
  },
  {
    title: "GitHub",
    description: "Pour accéder au profil développeuse et aux dépôts publics disponibles.",
    icon: Github,
    href: "https://github.com/EthwallLo",
    label: "Profil GitHub",
  },
]

export function Contact() {
  return (
    <section id="contact" className="container-custom scroll-mt-24 py-24">
      <div className="kawaii-panel p-6 md:p-10">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-pink-100 text-pink-500">
              <MessageSquare size={24} />
            </div>
            <p className="section-kicker">Contact</p>
            <h2 className="section-title mt-3">On en discute ensemble ?</h2>
            <p className="mt-5 text-base leading-8 text-[#7a5265]">
              Envoyez-moi le contexte, ce qui existe déjà, ce qui bloque et ce que vous aimeriez
              obtenir. Je vous répondrai avec une première lecture concrète du périmètre.
            </p>
          </div>

          <div className="grid gap-3">
            {contactMethods.map((method) => {
              const Icon = method.icon
              return (
                <Link
                  key={method.title}
                  href={method.href}
                  target={method.href.startsWith("http") ? "_blank" : undefined}
                  rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group rounded-lg border border-pink-100 bg-white p-5 transition hover:border-pink-300 hover:bg-pink-50"
                >
                  <div className="flex items-start gap-4">
                    <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-pink-100 text-pink-500">
                      <Icon size={21} />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-bold text-foreground">{method.title}</h3>
                      <p className="mt-1 text-sm leading-6 text-[#7a5265]">{method.description}</p>
                      <p className="mt-3 text-sm font-semibold text-pink-600">{method.label}</p>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
