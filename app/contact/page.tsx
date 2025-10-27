"use client"

import { Contact } from "@/components/sections/contact"
import { motion } from "framer-motion"
import { Mail, MessageSquare, Linkedin, Github } from "lucide-react"
import { personalInfo } from "@/content/data"

export default function ContactPage() {
  return (
    <div className="min-h-screen dark">
      <section className="relative pt-32 pb-20 px-4 overflow-hidden bg-gradient-to-br from-primary via-secondary to-pink-500 animate-gradient">
        {/* Animated background particles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 -top-48 -left-48 bg-white/10 rounded-full blur-3xl animate-float" />
          <div
            className="absolute w-96 h-96 -bottom-48 -right-48 bg-white/10 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "1s" }}
          />
        </div>

        <div className="container relative z-10 mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-semibold uppercase tracking-wider glow-text"
            >
              Get In Touch
            </motion.span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white glow-text">
              Let's Build Something Amazing
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Ready to discuss your next project? I'm here to help bring your ideas to life with professional web
              development and technical consulting.
            </p>
          </motion.div>
        </div>

        {/* Wavy bottom divider */}
        <div className="wave-divider">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-background">
            <path
              d="M0,32L48,37.3C96,43,192,53,288,58.7C384,64,480,64,576,58.7C672,53,768,43,864,42.7C960,43,1056,53,1152,53.3C1248,53,1344,43,1392,37.3L1440,32L1440,80L1392,80C1344,80,1248,80,1152,80C1056,80,960,80,864,80C768,80,672,80,576,80C480,80,384,80,288,80C192,80,96,80,48,80L0,80Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </section>

      <section className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/20 via-purple-950/20 to-pink-950/20" />
        <div className="absolute top-20 right-10 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-20 left-10 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        />

        <div className="container relative z-10 mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          >
            {[
              {
                icon: Mail,
                title: "Email",
                color: "blue",
                href: `mailto:${personalInfo.email}`,
              },
              {
                icon: MessageSquare,
                title: "WhatsApp",
                color: "green",
                href: personalInfo.whatsapp,
              },
              {
                icon: Linkedin,
                title: "LinkedIn",
                color: "blue",
                href: personalInfo.linkedin,
              },
              {
                icon: Github,
                title: "GitHub",
                color: "purple",
                href: personalInfo.github,
              },
            ].map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.05 }}
                className="relative group"
              >
                <div
                  className={`absolute -inset-0.5 bg-gradient-to-r ${
                    item.color === "blue"
                      ? "from-blue-500 to-cyan-500"
                      : item.color === "green"
                        ? "from-green-500 to-emerald-500"
                        : "from-purple-500 to-pink-500"
                  } rounded-2xl blur opacity-30 group-hover:opacity-70 transition duration-500 glow-effect`}
                />
                <div className="relative bg-background/95 backdrop-blur-xl border border-border/50 rounded-2xl p-8 text-center h-full flex flex-col items-center justify-center">
                  <div
                    className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${
                      item.color === "blue"
                        ? "from-blue-500 to-cyan-500 shadow-blue-500/50"
                        : item.color === "green"
                          ? "from-green-500 to-emerald-500 shadow-green-500/50"
                          : "from-purple-500 to-pink-500 shadow-purple-500/50"
                    } shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <item.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-bold text-xl glow-text-subtle">{item.title}</h3>
                </div>
              </motion.a>
            ))}
          </motion.div>

          <Contact />
        </div>
      </section>
    </div>
  )
}
