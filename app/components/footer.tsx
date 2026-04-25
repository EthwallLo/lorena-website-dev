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
    <footer className="border-t border-pink-100 bg-white/75">
      <div className="container-custom py-10">
        <div className="flex flex-col items-center justify-between gap-8 text-center md:flex-row md:text-left">
          <div className="flex items-center gap-4">
            <div className="relative h-14 w-14 overflow-hidden rounded-lg ring-2 ring-pink-200">
              <Image
                src="/avatar.jpg"
                alt="Lorena Guedouani"
                width={56}
                height={56}
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <p className="font-display text-lg font-bold text-[#3d2230]">Lorena Guedouani</p>
              <p className="text-sm text-[#8a6475]">Développeuse freelance</p>
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
                  className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-pink-100 bg-white text-pink-500 transition hover:border-pink-300 hover:bg-pink-50"
                  aria-label={link.label}
                >
                  <Icon size={20} />
                </Link>
              )
            })}
          </div>
        </div>

        <div className="mt-8 flex flex-col justify-between gap-2 border-t border-pink-100 pt-6 text-center text-sm text-[#9a7284] md:flex-row">
          <p>© {new Date().getFullYear()} Lorena Guedouani - Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}
