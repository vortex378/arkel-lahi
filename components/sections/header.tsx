"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { personalInfo } from "@/content/data"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
  ]

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "glass shadow-xl border-b border-white/10"
            : "bg-background/70 backdrop-blur-xl border-b border-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="relative group">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex items-center gap-3">
                <div className="relative w-12 h-12 rounded-full bg-gradient-to-br from-primary via-secondary to-pink-500 flex items-center justify-center text-white font-bold text-xl shadow-lg animate-gradient">
                  <span className="relative z-10">{personalInfo.name.split(" ")[0][0]}</span>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-secondary opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
                </div>
                <div className="hidden sm:block">
                  <div className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300 neon-text">
                    {personalInfo.name.split(" ")[0]}
                  </div>
                  <div className="text-xs text-muted-foreground">Senior Developer</div>
                </div>
              </motion.div>
            </Link>

            {/* Desktop Navigation - Enhanced visibility and interactivity */}
            <nav className="hidden md:flex items-center gap-1">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href={item.href}
                    className={`group relative px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 neon-text ${
                      pathname === item.href ? "text-primary" : "text-foreground hover:text-primary"
                    }`}
                  >
                    <span className="relative z-10">{item.label}</span>
                    {/* Active state background */}
                    {pathname === item.href && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 rounded-xl shadow-lg"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    {/* Hover effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md" />
                    {/* Bottom border on hover */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-3/4 transition-all duration-300" />
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Right side actions */}
            <div className="flex items-center gap-3">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/contact"
                  className="hidden md:block relative px-6 py-2.5 bg-gradient-to-r from-primary via-secondary to-primary text-white rounded-xl font-bold overflow-hidden glow-button animate-gradient shadow-xl hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300 neon-text-white"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Get In Touch
                    <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
                  </span>
                </Link>
              </motion.div>

              {/* Mobile Menu Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-gradient-to-br from-muted to-muted/50 hover:from-primary/20 hover:to-secondary/20 transition-all duration-300"
              >
                <AnimatePresence mode="wait">
                  {mobileMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="h-5 w-5" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="h-5 w-5" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden glass border-t border-border/50"
            >
              <nav className="container mx-auto px-4 py-6 space-y-2">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block px-4 py-3 rounded-xl font-bold transition-all duration-300 neon-text ${
                        pathname === item.href
                          ? "bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 text-primary shadow-lg"
                          : "text-muted-foreground hover:bg-gradient-to-r hover:from-primary/5 hover:to-secondary/5 hover:text-foreground"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navItems.length * 0.1 }}
                >
                  <Link
                    href="/contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-4 py-3 rounded-xl font-bold text-center bg-gradient-to-r from-primary via-secondary to-primary text-white glow-button animate-gradient neon-text-white"
                  >
                    Get In Touch
                  </Link>
                </motion.div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  )
}
