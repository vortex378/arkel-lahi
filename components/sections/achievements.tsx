"use client"

import { motion, animate, useInView } from "framer-motion"
import { achievements } from "@/content/data"
import { GradientCard } from "@/components/ui/gradient-card"
import { useEffect, useRef } from "react"

function Counter({ value, duration = 2 }: { value: string; duration?: number }) {
  const nodeRef = useRef<HTMLSpanElement>(null)
  // Count up only once the number is actually on screen.
  const inView = useInView(nodeRef, { once: true, margin: "-10% 0px" })
  const numericValue = Number.parseInt(value.replace(/\D/g, ""))
  const hasPlus = value.includes("+")

  useEffect(() => {
    const node = nodeRef.current
    if (!node || !inView || isNaN(numericValue)) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    const controls = animate(0, numericValue, {
      duration,
      onUpdate(animatedValue) {
        node.textContent = Math.round(animatedValue).toString() + (hasPlus ? "+" : "")
      },
    })

    return () => controls.stop()
  }, [inView, numericValue, hasPlus, duration])

  // Server-rendered with the real value, so crawlers, link previews and
  // no-JS visitors never see "0".
  return <span ref={nodeRef}>{value}</span>
}

export function Achievements() {
  return (
    <section className="py-20 md:py-28 px-4 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

      <div className="container relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4"
          >
            Achievements
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">Proven Track Record</h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                type: "spring",
                stiffness: 100,
              }}
            >
              <GradientCard
                className="h-full bg-card/50 backdrop-blur-sm border border-border/50"
                gradient="bg-gradient-to-br from-primary/10 to-secondary/10"
              >
                <div className="p-6 text-center space-y-2">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.3, type: "spring", stiffness: 200 }}
                    className="text-3xl md:text-4xl font-bold gradient-text"
                  >
                    <Counter value={achievement.value} />
                  </motion.div>
                  <div className="text-xs md:text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                    {achievement.label}
                  </div>
                </div>
              </GradientCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
