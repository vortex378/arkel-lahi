"use client"

import { motion } from "framer-motion"
import { personalInfo } from "@/content/data"
import { Code, Database, Layers, Server, Sparkles } from "lucide-react"
import { TypewriterEffect } from "@/components/typewriter-effect"
import Image from "next/image"
import { useState, useEffect } from "react"

export function Hero() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const typewriterWords = [
    "Senior Full-Stack Developer",
    "Front-End Specialist",
    "Back-End Expert",
    "Cloud Architect",
    "React & Next.js Developer",
    ".NET Expert",
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-secondary">
      <div className="absolute inset-0 overflow-hidden">
        {isMounted &&
          [...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
              }}
              animate={{
                y: [null, Math.random() * window.innerHeight],
                x: [null, Math.random() * window.innerWidth],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            />
          ))}
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm"
            >
              <Code className="h-4 w-4" />
              <TypewriterEffect words={typewriterWords} />
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-4"
            >
              <h1 className="text-xl md:text-2xl font-light">{"I'm"}</h1>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                <span className="text-white">{personalInfo.name}</span>
              </h2>
              <p className="text-xl md:text-2xl font-light text-white/90">
                {personalInfo.tagline.split("—")[1].trim()}
              </p>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-lg text-white/80 max-w-xl leading-relaxed"
            >
              Delivering enterprise-grade web applications and cloud solutions with 8+ years of experience. Specializing
              in Azure cloud-native development and system integration.
            </motion.p>

            {/* Tags */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-wrap gap-3 pt-4"
            >
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm">
                <Code className="h-4 w-4" />
                <span>React & Next.js</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm">
                <Layers className="h-4 w-4" />
                <span>Full-Stack Development</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm">
                <Server className="h-4 w-4" />
                <span>Node.js & APIs</span>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex items-center justify-center"
          >
            {/* Main Workspace Image */}
            <div className="relative">
              <div className="w-full max-w-2xl rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20 backdrop-blur-sm">
                <Image
                  src="/workspace-image.png"
                  alt="Developer Workspace"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>

              {/* Floating Icons */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-xl"
              >
                <Code className="h-8 w-8 text-blue-500" />
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay: 0.5 }}
                className="absolute top-1/4 -left-8 w-16 h-16 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center shadow-xl"
              >
                <Sparkles className="h-8 w-8 text-white" />
              </motion.div>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
                className="absolute bottom-8 -right-8 w-16 h-16 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center shadow-xl"
              >
                <Database className="h-8 w-8 text-white" />
              </motion.div>

              {/* Status indicator */}
              <div className="absolute bottom-4 right-4 w-12 h-12 rounded-full bg-green-500 border-4 border-white shadow-lg flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-white animate-pulse" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="wave-divider">
        <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg" className="fill-background">
          <path d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
        </svg>
      </div>
    </section>
  )
}
