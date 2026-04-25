import type { Metadata } from "next"
import { inter, outfit } from "./fonts"
import "./globals.css"

export const metadata: Metadata = {
  title: "Lorena Guedouani | Développeuse freelance",
  description:
    "Développement d’applications web, outils métier, automatisation et refactoring avec une approche précise, humaine et documentée.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${outfit.variable} h-full scroll-smooth`}>
      <body
        className="min-h-screen bg-[#fff8fc] font-sans text-[#3d2230] antialiased"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  )
}
