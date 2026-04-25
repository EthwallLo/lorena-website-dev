"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowDown, Github, Heart, Linkedin, Mail, MapPin } from "lucide-react"

const socialLinks = [
  { label: "GitHub", href: "https://github.com/EthwallLo", icon: Github },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/lorena-guedouani/", icon: Linkedin },
  { label: "Email", href: "mailto:lor.guedo@gmail.com", icon: Mail },
]

const markers = [
  ["Spécialisation", "Full-Stack"],
  ["Expérience", "+ 8 ans"]
]

const notes = [
  "Interfaces claires",
  "Code maintenable",
  "Documentation utile",
]

export function Hero() {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <section id="hero" className="container-custom min-h-[94vh] pt-28">
      <div className="grid min-h-[calc(94vh-7rem)] gap-10 pb-16 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-center">
        <div>
          <p className="section-kicker inline-flex items-center gap-2 rounded-lg bg-white px-3 py-2 shadow-sm">
            Développeuse freelance
          </p>

          <h1 className="mt-6 max-w-5xl font-display text-[clamp(3.2rem,10vw,8rem)] font-black leading-[0.9] text-[#3d2230]">
            Lorena
            <span className="block text-pink-500">Guedouani</span>
          </h1>

          <div className="mt-8 max-w-3xl rounded-lg border border-pink-200 bg-white/82 p-5 shadow-sm">
            <p className="text-2xl font-semibold leading-snug text-[#3d2230] md:text-3xl">
              Je développe des applications et des sites{" "}
              <span className="personal-underline">clairs, solides et agréables à maintenir</span>.
            </p>
            <p className="mt-5 text-base leading-8 text-[#6d4a5b] md:text-lg">
              J’aime partir d’un besoin concret, démêler ce qui coince, puis construire quelque
              chose qui tient debout : une interface métier, un outil interne, une automatisation,
              un écran qui arrête de faire perdre du temps.
            </p>
          </div>

          <div className="mt-5 grid max-w-4xl gap-3 md:grid-cols-3">
            {notes.map((note) => (
              <div
                key={note}
                className="kawaii-note flex items-center gap-2 p-4 text-sm font-semibold text-[#6d4a5b]"
              >
                <Heart size={15} className="fill-pink-200 text-pink-400" />
                {note}
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="#contact"
              className="inline-flex h-12 items-center justify-center rounded-lg bg-pink-400 px-6 text-sm font-bold text-white shadow-sm shadow-pink-200 transition hover:bg-pink-500"
            >
              Me contacter
            </Link>
            <button
              type="button"
              onClick={scrollToAbout}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-pink-200 bg-white px-6 text-sm font-semibold text-pink-600 transition hover:border-pink-300"
            >
              Me découvrir <ArrowDown size={16} />
            </button>
          </div>

          <p className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-[#8a6475]">
            <MapPin size={16} className="text-pink-400" />
            Grenoble · Disponible à distance
          </p>
        </div>

        <aside>
          <div className="kawaii-panel overflow-hidden bg-white">
            <div className="border-b border-pink-100 bg-pink-50 px-4 py-3">
              <div className="flex gap-2">
                <span className="h-3 w-3 rounded-full bg-pink-300" />
                <span className="h-3 w-3 rounded-full bg-rose-200" />
                <span className="h-3 w-3 rounded-full bg-violet-200" />
              </div>
            </div>
            <Image
              src="/avatar.jpg"
              alt="Portrait de Lorena Guedouani"
              width={420}
              height={420}
              priority
              className="aspect-square w-full object-cover"
            />
            <div className="space-y-4 p-5">
              <div className="pink-rule" />
              <div className="grid gap-3">
                {markers.map(([label, value]) => (
                  <div key={label} className="flex items-baseline justify-between gap-4">
                    <span className="text-xs font-bold uppercase tracking-[0.16em] text-pink-400/75">
                      {label}
                    </span>
                    <span className="text-right text-sm font-bold text-[#3d2230]">{value}</span>
                  </div>
                ))}
              </div>
              <div className="flex gap-2 pt-2">
                {socialLinks.map((link) => {
                  const Icon = link.icon
                  return (
                    <Link
                      key={link.label}
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      aria-label={link.label}
                      className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-pink-200 bg-white text-pink-500 transition hover:border-pink-300 hover:bg-pink-50"
                    >
                      <Icon size={18} />
                    </Link>
                  )
                })}
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  )
}
