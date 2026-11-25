"use client"

import { personalInfo } from "@/content/data"
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"

export function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
  ]

  const socialLinks = [
    { icon: Github, href: personalInfo.github, label: "GitHub (vortex378)", gradient: "from-gray-700 to-gray-900" },
    { icon: Github, href: personalInfo.githubAlt, label: "GitHub (silivex)", gradient: "from-gray-600 to-gray-800" },
    { icon: Linkedin, href: personalInfo.linkedin, label: "LinkedIn", gradient: "from-blue-600 to-blue-800" },
    { icon: Mail, href: `mailto:${personalInfo.email}`, label: "Email", gradient: "from-primary to-secondary" },
  ]

  return (
    <footer className="relative border-t border-border/50 bg-gradient-to-b from-background via-muted/30 to-background py-16 px-4 mb-16 md:mb-0 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 mesh-gradient opacity-30" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float-slow" />
      <div
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float-slow"
        style={{ animationDelay: "2s" }}
      />

      <div className="container relative z-10 mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative group mb-4">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-500" />
              <h3 className="relative text-2xl font-bold gradient-text">{personalInfo.name}</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">{personalInfo.tagline}</p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="font-bold text-lg mb-6 gradient-text-fast">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <a
                    href={link.href}
                    className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-all duration-300"
                  >
                    <span className="w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-4 transition-all duration-300" />
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-bold text-lg mb-6 gradient-text-fast">Connect</h4>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, type: "spring", stiffness: 200 }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className={`group relative p-3 rounded-xl bg-gradient-to-br ${social.gradient} text-white overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300`}
                    aria-label={social.label}
                  >
                    <Icon className="h-5 w-5 relative z-10" />
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  </motion.a>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          onClick={scrollToTop}
          className="fixed bottom-24 md:bottom-8 right-8 z-40 p-4 rounded-full bg-gradient-to-br from-primary to-secondary text-white shadow-lg hover:shadow-xl glow-button"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ArrowUp className="h-5 w-5" />
        </motion.button>
      )}
    </footer>
  )
}
