import Image from "next/image"
import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/EthwallLo",
    icon: Github,
    label: "Voir le profil GitHub de Lorena Guedouani",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/lorena-guedouani/",
    icon: Linkedin,
    label: "Voir le profil LinkedIn de Lorena Guedouani",
  },
  {
    name: "Email",
    href: "mailto:lor.guedo@gmail.com",
    icon: Mail,
    label: "Envoyer un email à Lorena Guedouani",
  },
]

export function Footer() {
  return (
    <footer className="border-t border-pink-200/10 bg-[#100814]">
      <div className="container-custom py-10">
        <div className="flex flex-col items-center justify-between gap-8 text-center md:flex-row md:text-left">
          <div className="flex items-center gap-4">
            <div className="relative h-14 w-14 overflow-hidden rounded-full ring-2 ring-pink-300/45">
              <Image
                src="/avatar.jpg"
                alt="Lorena Guedouani"
                width={56}
                height={56}
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <p className="font-display text-lg font-bold text-white">Lorena Guedouani</p>
              <p className="text-sm text-pink-100/60">Développeuse freelance · précision, nuance, code</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {socialLinks.map((link) => {
              const Icon = link.icon
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-pink-200/10 text-pink-100/60 transition hover:border-pink-300 hover:text-pink-200"
                  aria-label={link.label}
                >
                  <Icon size={20} />
                </Link>
              )
            })}
          </div>
        </div>

        <div className="mt-8 flex flex-col justify-between gap-2 border-t border-pink-200/10 pt-6 text-center text-sm text-pink-100/45 md:flex-row">
          <p>© {new Date().getFullYear()} Lorena Guedouani. Tous droits réservés.</p>
          <p>Développé avec Next.js, TypeScript et une obsession raisonnable du détail.</p>
        </div>
      </div>
    </footer>
  )
}
