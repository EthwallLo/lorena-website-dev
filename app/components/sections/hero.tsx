"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowDown, Github, Linkedin, Mail, MapPin, Sparkles } from "lucide-react"

const socialLinks = [
  { label: "GitHub", href: "https://github.com/EthwallLo", icon: Github },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/lorena-guedouani/", icon: Linkedin },
  { label: "Email", href: "mailto:lor.guedo@gmail.com", icon: Mail },
]

export function Hero() {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <section id="hero" className="container-custom flex min-h-[92vh] items-center pt-28">
      <div className="grid w-full gap-12 pb-16 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-lg border border-pink-300/30 bg-pink-300/10 px-3 py-2 text-sm font-semibold text-pink-100">
            <Sparkles size={16} />
            Développeuse freelance
          </div>

          <h1 className="font-display text-5xl font-extrabold leading-[1.02] text-white md:text-7xl">
            Je développe des applications et des sites{" "}
            <span className="personal-underline">clairs, solides et agréables à maintenir</span>.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-pink-50/76">
            J’aime partir d’un besoin concret, comprendre les usages derrière l’écran, puis
            construire une solution propre : interface métier, site, automatisation ou outil
            interne.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="#contact"
              className="inline-flex h-12 items-center justify-center rounded-lg bg-linear-to-r from-pink-400 to-violet-400 px-6 text-sm font-bold text-white shadow-lg shadow-pink-950/30 transition hover:from-pink-300 hover:to-violet-300"
            >
              Discuter d'un projet
            </Link>
            <button
              type="button"
              onClick={scrollToAbout}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-pink-200/18 px-6 text-sm font-semibold text-pink-50 transition hover:border-pink-300 hover:text-pink-200"
            >
              Me découvrir <ArrowDown size={16} />
            </button>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-pink-100/58">
            <span className="inline-flex items-center gap-2">
              <MapPin size={16} className="text-pink-300" />
              Grenoble · À distance
            </span>
          </div>

          <div className="mt-6 flex gap-2">
            {socialLinks.map((link) => {
              const Icon = link.icon
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={link.label}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-pink-200/10 text-pink-100/62 transition hover:border-pink-300 hover:text-pink-200"
                >
                  <Icon size={20} />
                </Link>
              )
            })}
          </div>
        </div>

        <div className="soft-panel soft-panel-warm rounded-2xl p-5">
          <div className="grid gap-5 sm:grid-cols-[auto_1fr] sm:items-center lg:grid-cols-1">
            <div className="relative mx-auto h-52 w-52 overflow-hidden rounded-[1.25rem] border border-pink-200/20 shadow-2xl shadow-fuchsia-950/30 sm:mx-0 lg:mx-auto lg:h-72 lg:w-72">
              <Image
                src="/avatar.jpg"
                alt="Portrait de Lorena Guedouani"
                width={288}
                height={288}
                priority
                className="h-full w-full object-cover"
              />
            </div>

            <div className="space-y-4">
              <div>
                <p className="section-kicker">Profil</p>
                <h2 className="mt-2 font-display text-2xl font-bold text-white">
                  Lorena Guedouani
                </h2>
                <p className="mt-2 text-sm leading-6 text-pink-50/70">
                  Développeuse orientée applications métier : front applicatif avec PHP/Symfony,
                  back-end et logiciel avec Ada et C#, automatisation, CI/CD et documentation technique.
                </p>
              </div>

              <div className="rounded-xl border border-pink-200/12 bg-[#140817]/55 p-4">
                <p className="font-display text-lg font-semibold text-pink-100">
                  “Faire propre” ne veut pas dire faire froid.
                </p>
                <p className="mt-2 text-sm leading-6 text-pink-50/62">
                  Je cherche le bon équilibre entre rigueur technique, usage fluide et décisions
                  assez claires pour être reprises par une équipe.
                </p>
              </div>

              <dl className="grid grid-cols-2 gap-3">
                {[
                  ["Full-Stack", "spécialisation"],
                  ["8 +", "années d'expérience"],
                  ["Accessibilité numérique", "todo"],
                  ["??", "NN"],
                ].map(([value, label]) => (
                  <div key={label} className="rounded-lg border border-pink-200/10 bg-background/60 p-4">
                    <dt className="font-display text-xl font-bold text-pink-200">{value}</dt>
                    <dd className="mt-1 text-xs text-pink-100/52">{label}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
