"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { Heart, Menu, X } from "lucide-react"

const navigation = [
  { name: "Accueil", href: "#hero" },
  { name: "Approche", href: "#about" },
  { name: "Technos", href: "#skills" },
  // { name: "Missions", href: "#projects" },
  { name: "Parcours", href: "#experience" },
  { name: "Formations", href: "#education" },
  { name: "Contact", href: "#contact" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")
  const [isScrolled, setIsScrolled] = useState(false)
  const [indicatorStyle, setIndicatorStyle] = useState({ width: 0, left: 0 })
  const navRefs = useRef<(HTMLAnchorElement | null)[]>([])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24)

      const currentSection = navigation
        .map((item) => item.href.slice(1))
        .find((section) => {
          const element = document.getElementById(section)
          if (!element) return false
          const rect = element.getBoundingClientRect()
          return rect.top <= 120 && rect.bottom >= 120
        })

      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const activeIndex = navigation.findIndex((item) => item.href.slice(1) === activeSection)
    const activeRef = navRefs.current[activeIndex]

    if (activeRef) {
      setIndicatorStyle({
        width: activeRef.offsetWidth,
        left: activeRef.offsetLeft,
      })
    }
  }, [activeSection])

  const handleNavClick = (href: string, index: number) => {
    setIsOpen(false)
    const section = href.slice(1)
    setActiveSection(section)

    const targetRef = navRefs.current[index]
    if (targetRef) {
      setIndicatorStyle({
        width: targetRef.offsetWidth,
        left: targetRef.offsetLeft,
      })
    }

    const element = document.getElementById(section)
    if (element) {
      if (section === "about") {
        element.scrollIntoView({
          behavior: "smooth",
          block: "center",
        })
        return
      }

      window.scrollTo({
        top: element.offsetTop - 88,
        behavior: "smooth",
      })
    }
  }

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "border-b border-pink-200/70 bg-white/88 shadow-sm backdrop-blur-xl"
            : "bg-white/55 backdrop-blur-sm"
        }`}
      >
        <nav className="container-custom">
          <div className="flex h-20 items-center justify-between">
            <Link
              href="#hero"
              onClick={(event) => {
                event.preventDefault()
                handleNavClick("#hero", 0)
              }}
              className="leading-tight"
            >
              <span className="flex items-center gap-2 font-display text-lg font-extrabold text-foreground">
                <Heart size={18} className="fill-pink-300 text-pink-400" />
                Lorena Guedouani
              </span>
              <span className="block pl-7 text-xs font-semibold uppercase tracking-[0.18em] text-pink-500/70">
                dev freelance
              </span>
            </Link>

            <div className="relative hidden items-center lg:flex">
              <div className="relative flex gap-1">
                {navigation.map((item, index) => (
                  <Link
                    key={item.name}
                    ref={(element) => {
                      navRefs.current[index] = element
                    }}
                    href={item.href}
                    onClick={(event) => {
                      event.preventDefault()
                      handleNavClick(item.href, index)
                    }}
                    className={`rounded-lg px-3 py-2 text-sm font-semibold transition ${
                      activeSection === item.href.slice(1)
                        ? "text-pink-600"
                        : "text-[#7a5265] hover:text-pink-600"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <div
                  className="absolute bottom-0 h-0.5 rounded-full bg-pink-400 transition-all duration-300"
                  style={{
                    width: indicatorStyle.width,
                    transform: `translateX(${indicatorStyle.left}px)`,
                  }}
                />
              </div>
            </div>

            <Link
              href="#contact"
              onClick={(event) => {
                event.preventDefault()
                handleNavClick("#contact", navigation.length - 1)
              }}
              className="hidden rounded-lg bg-pink-400 px-4 py-2 text-sm font-bold text-white shadow-sm shadow-pink-200 transition hover:bg-pink-500 lg:inline-flex"
            >
              Échanger
            </Link>

            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-pink-200 bg-white text-pink-500 transition hover:border-pink-300 lg:hidden"
              onClick={() => setIsOpen((value) => !value)}
              aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>
      </header>

      {isOpen && (
        <div className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-5 bg-white/96 px-6 backdrop-blur-xl lg:hidden">
          {navigation.map((item, index) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(event) => {
                event.preventDefault()
                handleNavClick(item.href, index)
              }}
              className="text-2xl font-semibold text-foreground transition hover:text-pink-500"
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </>
  )
}
