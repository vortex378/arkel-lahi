"use client"

import { motion } from "framer-motion"
import { aboutBio, achievements } from "@/content/data"
import { GradientCard } from "@/components/ui/gradient-card"
import { MapPin, Briefcase, Target, Award } from "lucide-react"

export function About() {
  const stats = [
    { icon: MapPin, label: "Location", value: aboutBio.location },
    { icon: Briefcase, label: "Experience", value: aboutBio.experience },
    { icon: Target, label: "Focus", value: aboutBio.focus },
  ]

  return (
    <section id="about" className="py-24 md:py-32 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />

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
            About Me
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold gradient-text">{aboutBio.name}</h2>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-6 mb-12"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GradientCard className="bg-card/50 backdrop-blur-sm border border-border/50">
                  <div className="p-6 flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                      <div className="text-lg font-bold">{stat.value}</div>
                    </div>
                  </div>
                </GradientCard>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12"
        >
          <GradientCard className="bg-card/50 backdrop-blur-sm border border-border/50">
            <div className="p-8 md:p-12">
              <p className="text-lg leading-relaxed text-muted-foreground">{aboutBio.description}</p>
            </div>
          </GradientCard>
        </motion.div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <Award className="h-6 w-6 text-primary" />
            <h3 className="text-2xl md:text-3xl font-bold">Key Achievements</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GradientCard
                  className="h-full bg-card/50 backdrop-blur-sm border border-border/50"
                  gradient="bg-gradient-to-br from-primary/5 to-secondary/5"
                >
                  <div className="p-6 space-y-3">
                    <div className="text-4xl font-bold gradient-text">{achievement.value}</div>
                    <div className="font-semibold text-lg">{achievement.label}</div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{achievement.description}</p>
                  </div>
                </GradientCard>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
