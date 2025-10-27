"use client"

import { Services } from "@/components/sections/services"
import { Skills } from "@/components/sections/skills"
import { motion } from "framer-motion"

export default function ServicesPage() {
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
              className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-semibold uppercase tracking-wider"
            >
              My Services
            </motion.span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white">
              Professional Web Development & Technical Consulting
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Building modern, scalable solutions for your business
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

      <Services />
      <Skills />

      <section className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 animate-gradient" />
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 top-0 left-0 bg-white/10 rounded-full blur-3xl animate-float" />
          <div
            className="absolute w-96 h-96 bottom-0 right-0 bg-white/10 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "1s" }}
          />
        </div>

        <div className="container relative z-10 mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">Let's Build Something Amazing</h2>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Ready to discuss your next web project or technical challenge? I'm here to help bring your ideas to life
              with professional development and consulting.
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-full font-bold text-lg shadow-2xl hover:shadow-white/50 transition-all duration-300"
            >
              Connect With Me
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
