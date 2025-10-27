"use client"

import { motion } from "framer-motion"
import { frontendSkills, frameworkSkills, technicalSkills } from "@/content/data"
import { useState } from "react"
import { ChevronDown, ChevronUp, Code, Layers, Wrench } from "lucide-react"
import { AnimatedProgress } from "@/components/ui/animated-progress"

export function Skills() {
  const [showTechnical, setShowTechnical] = useState(false)

  return (
    <section id="skills" className="py-24 md:py-32 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-blue-950/20 dark:via-purple-950/20 dark:to-pink-950/20" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-float" />
      <div
        className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "1s" }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-400/10 rounded-full blur-3xl animate-pulse" />

      <div className="container relative z-10 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block text-sm font-semibold text-primary uppercase tracking-wider"
          >
            Skills
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold gradient-text">Technical Expertise</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive proficiency across modern web technologies
          </p>
        </motion.div>

        <div className="space-y-8">
          {/* Front-End Technologies */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-500" />
              <div className="relative bg-background/95 backdrop-blur-xl border border-blue-500/20 rounded-2xl p-8 shadow-2xl">
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 shadow-lg shadow-blue-500/50">
                    <Code className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                    Front-End Technologies
                  </h3>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  {frontendSkills.map((skill, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="space-y-3"
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-lg">{skill.name}</span>
                        <motion.span
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + 0.3 }}
                          className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"
                        >
                          {skill.level}%
                        </motion.span>
                      </div>
                      <AnimatedProgress value={skill.level} color="blue" />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Frameworks & Libraries */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-500" />
              <div className="relative bg-background/95 backdrop-blur-xl border border-purple-500/20 rounded-2xl p-8 shadow-2xl">
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 shadow-lg shadow-purple-500/50">
                    <Layers className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Frameworks & Libraries
                  </h3>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  {frameworkSkills.map((skill, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="space-y-3"
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-lg">{skill.name}</span>
                        <motion.span
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + 0.3 }}
                          className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
                        >
                          {skill.level}%
                        </motion.span>
                      </div>
                      <AnimatedProgress value={skill.level} color="purple" />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Technical Skills - Expandable */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500 via-emerald-500 to-green-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-500" />
              <div className="relative bg-background/95 backdrop-blur-xl border border-green-500/20 rounded-2xl p-8 shadow-2xl">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 shadow-lg shadow-green-500/50">
                      <Wrench className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                      Technical Skills Matrix
                    </h3>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setShowTechnical(!showTechnical)}
                    className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold shadow-lg shadow-green-500/30 hover:shadow-green-500/50 transition-all duration-300"
                  >
                    {showTechnical ? (
                      <>
                        <ChevronUp className="h-5 w-5" />
                        Hide
                      </>
                    ) : (
                      <>
                        <ChevronDown className="h-5 w-5" />
                        Show All
                      </>
                    )}
                  </motion.button>
                </div>
                {showTechnical && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-10"
                  >
                    {Object.entries(technicalSkills).map(([category, skills], catIndex) => (
                      <motion.div
                        key={catIndex}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: catIndex * 0.1 }}
                      >
                        <h4 className="font-bold text-2xl mb-6 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                          {category}
                        </h4>
                        <div className="grid md:grid-cols-2 gap-8">
                          {skills.map((skill, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: catIndex * 0.1 + index * 0.05 }}
                              className="space-y-3"
                            >
                              <div className="flex justify-between items-center">
                                <span className="font-bold text-lg">{skill.name}</span>
                                <motion.span
                                  initial={{ opacity: 0, scale: 0 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  transition={{ delay: catIndex * 0.1 + index * 0.05 + 0.3 }}
                                  className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent"
                                >
                                  {skill.level}%
                                </motion.span>
                              </div>
                              <AnimatedProgress value={skill.level} color="green" />
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
