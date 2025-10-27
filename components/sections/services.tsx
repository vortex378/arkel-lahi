"use client"

import { motion } from "framer-motion"
import { services } from "@/content/data"
import { personalInfo } from "@/content/data"
import { GradientCard } from "@/components/ui/gradient-card"
import { MagneticButton } from "@/components/ui/magnetic-button"
import { Check, MessageCircle, Mail, Pen } from "lucide-react"

const serviceIcons = [
  { icon: Mail, gradient: "bg-gradient-to-br from-red-500/20 to-pink-500/20" },
  { icon: Pen, gradient: "bg-gradient-to-br from-blue-500/20 to-cyan-500/20" },
]

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />

      <div className="container relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block"
          >
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Services</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold gradient-text">Choose the perfect service</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From simple websites to complex full-stack applications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => {
            const IconComponent = serviceIcons[index]?.icon || MessageCircle
            const gradientClass = serviceIcons[index]?.gradient || "bg-gradient-to-br from-primary/20 to-secondary/20"

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <GradientCard
                  className="h-full bg-card border border-border/50 backdrop-blur-sm"
                  gradient={service.recommended ? "bg-gradient-to-br from-primary/5 to-secondary/5" : ""}
                >
                  <div className="p-8 space-y-6">
                    {/* Icon with Gradient Background */}
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="relative"
                    >
                      <div
                        className={`w-20 h-20 rounded-2xl ${gradientClass} flex items-center justify-center backdrop-blur-sm`}
                      >
                        <IconComponent className="h-10 w-10 text-foreground" />
                      </div>
                      {service.recommended && (
                        <motion.div
                          animate={{ rotate: [0, 5, 0] }}
                          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                          className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs font-bold px-2 py-1 rounded-full"
                        >
                          ⭐
                        </motion.div>
                      )}
                    </motion.div>

                    {/* Title & Subtitle */}
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold">{service.title}</h3>
                      <p className="text-muted-foreground">{service.subtitle}</p>
                    </div>

                    {/* Features */}
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + idx * 0.05 }}
                          className="flex items-start gap-3"
                        >
                          <div className="mt-0.5 shrink-0">
                            <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                              <Check className="h-3 w-3 text-primary" />
                            </div>
                          </div>
                          <span className="text-sm">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>

                    {/* CTA Button */}
                    <MagneticButton strength={0.2} className="w-full">
                      <a
                        href={personalInfo.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group relative w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-semibold transition-all duration-300 overflow-hidden ${
                          service.recommended
                            ? "bg-primary text-primary-foreground hover:shadow-lg hover:shadow-primary/50"
                            : "bg-muted text-foreground hover:bg-muted/80"
                        }`}
                      >
                        <MessageCircle className="h-5 w-5 transition-transform group-hover:scale-110" />
                        <span>{service.cta}</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                      </a>
                    </MagneticButton>
                  </div>
                </GradientCard>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
