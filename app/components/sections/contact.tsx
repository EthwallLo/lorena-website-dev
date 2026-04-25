import Link from "next/link"
import { Github, Linkedin, Mail, MessageSquare } from "lucide-react"

const contactMethods = [
  {
    title: "Email",
    description: "Pour me transmettre un besoin, un brief ou une première idée de mission.",
    icon: Mail,
    href: "mailto:lor.guedo@gmail.com",
    label: "lor.guedo@gmail.com",
  },
  {
    title: "LinkedIn",
    description: "Pour consulter le parcours complet et échanger côté réseau professionnel.",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/lorena-guedouani/",
    label: "Profil LinkedIn",
  },
  {
    title: "GitHub",
    description: "Pour voir le profil développeuse et les dépôts publics disponibles.",
    icon: Github,
    href: "https://github.com/EthwallLo",
    label: "Profil GitHub",
  },
]

export function Contact() {
  return (
    <section id="contact" className="container-custom scroll-mt-24 py-24">
      <div className="soft-panel soft-panel-warm rounded-2xl p-6 md:p-10">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-pink-300/10 text-pink-200">
              <MessageSquare size={24} />
            </div>
            <p className="section-kicker">Contact</p>
            <h2 className="section-title mt-3 text-white">On démêle votre prochain outil ?</h2>
            <p className="mt-5 text-base leading-8 text-pink-50/72">
              Envoyez-moi le contexte, l’objectif, les contraintes et l’échéance. Je vous répondrai
              avec une première lecture claire : périmètre, risques, étapes et informations à préciser.
            </p>
          </div>

          <div className="grid gap-4">
            {contactMethods.map((method) => {
              const Icon = method.icon
              return (
                <Link
                  key={method.title}
                  href={method.href}
                  target={method.href.startsWith("http") ? "_blank" : undefined}
                  rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group rounded-xl border border-pink-200/10 bg-[#100814]/56 p-5 transition hover:border-pink-300/60 hover:bg-[#170b22]"
                >
                  <div className="flex items-start gap-4">
                    <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-pink-300/10 text-pink-200">
                      <Icon size={22} />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-bold text-white">{method.title}</h3>
                      <p className="mt-1 text-sm leading-6 text-pink-50/58">{method.description}</p>
                      <p className="mt-3 text-sm font-semibold text-pink-200">{method.label}</p>
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
