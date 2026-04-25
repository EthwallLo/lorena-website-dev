"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

const navigation = [
  { name: "Accueil", href: "#hero" },
  { name: "Approche", href: "#about" },
  { name: "Expérience", href: "#experience" },
  { name: "Stack", href: "#skills" },
  { name: "Missions", href: "#projects" },
  { name: "Formation", href: "#education" },
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
            ? "border-b border-pink-200/10 bg-[#100814]/88 shadow-2xl shadow-fuchsia-950/30 backdrop-blur-xl"
            : "bg-transparent"
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
              className="font-display text-lg font-extrabold text-white"
            >
              Lorena <span className="text-pink-300">Guedouani</span>
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
                    className={`rounded-lg px-3 py-2 text-sm transition ${
                      activeSection === item.href.slice(1)
                        ? "text-pink-200"
                        : "text-pink-100/70 hover:text-white"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <div
                  className="absolute bottom-0 h-0.5 rounded-full bg-gradient-to-r from-pink-300 to-violet-300 transition-all duration-300"
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
              className="hidden rounded-lg bg-gradient-to-r from-pink-400 to-violet-400 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-pink-950/30 transition hover:from-pink-300 hover:to-violet-300 lg:inline-flex"
            >
              Discuter d’un projet
            </Link>

            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-pink-200/20 text-pink-100 transition hover:border-pink-300 hover:text-pink-200 lg:hidden"
              onClick={() => setIsOpen((value) => !value)}
              aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>
      </header>

      {isOpen && (
        <div className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-5 bg-[#100814]/96 px-6 backdrop-blur-xl lg:hidden">
          {navigation.map((item, index) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(event) => {
                event.preventDefault()
                handleNavClick(item.href, index)
              }}
              className="text-2xl font-semibold text-pink-50 transition hover:text-pink-200"
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </>
  )
}
