"use client"

import { Home, Briefcase, User, Mail } from "lucide-react"
import { useState, useEffect } from "react"

export function MobileNav() {
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "skills", "about", "contact"]
      const current = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (current) setActiveSection(current)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { label: "Home", href: "#home", icon: Home },
    { label: "Skills", href: "#skills", icon: Briefcase },
    { label: "About", href: "#about", icon: User },
    { label: "Contact", href: "#contact", icon: Mail },
  ]

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-lg border-t border-border">
      <div className="flex items-center justify-around h-16 px-4">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = activeSection === item.href.slice(1)
          return (
            <a
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center gap-1 px-3 py-2 rounded-lg transition-colors ${
                isActive ? "text-primary" : "text-muted-foreground"
              }`}
            >
              <Icon className="h-5 w-5" />
              <span className="text-xs font-medium">{item.label}</span>
            </a>
          )
        })}
      </div>
    </nav>
  )
}
