"use client"

import { motion } from "framer-motion"
import { experienceHighlights } from "@/content/data"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { HeartPulse, Sparkles, Building, Users } from "lucide-react"

const iconMap = {
  "heart-pulse": HeartPulse,
  sparkles: Sparkles,
  building: Building,
  users: Users,
}

export function ExperienceHighlights() {
  return (
    <section className="py-16 md:py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Professional Experience Highlights</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-balance">
            Proven expertise across diverse industries and technologies
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {experienceHighlights.map((highlight, index) => {
            const Icon = iconMap[highlight.icon as keyof typeof iconMap]
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <Card className="h-full hover:shadow-lg transition-all">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-2xl bg-primary/10 text-primary">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="mb-2">{highlight.title}</CardTitle>
                        <CardDescription className="text-base leading-relaxed">{highlight.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
