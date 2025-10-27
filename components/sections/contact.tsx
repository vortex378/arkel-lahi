"use client"

import type React from "react"

import { motion } from "framer-motion"
import { personalInfo } from "@/content/data"
import { useToast } from "@/hooks/use-toast"
import { Mail, MapPin, Clock, CheckCircle, MessageCircle, Send, Linkedin, Github } from "lucide-react"
import { useState } from "react"
import confetti from "canvas-confetti"
import { GradientCard } from "@/components/ui/gradient-card"
import { MagneticButton } from "@/components/ui/magnetic-button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export function Contact() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast({
      title: "Message sent successfully!",
      description: "I'll get back to you within 24 hours.",
    })

    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    })

    setFormData({ name: "", email: "", message: "" })
    setIsSubmitting(false)
  }

  const contactInfo = [
    { icon: MapPin, label: "Location", value: personalInfo.location },
    { icon: Clock, label: "Response Time", value: personalInfo.responseTime },
    { icon: CheckCircle, label: "Availability", value: personalInfo.availability },
  ]

  const socialLinks = [
    { icon: Mail, label: "Email", href: `mailto:${personalInfo.email}`, gradient: "from-blue-500 to-cyan-500" },
    { icon: MessageCircle, label: "WhatsApp", href: personalInfo.whatsapp, gradient: "from-green-500 to-emerald-500" },
    { icon: Linkedin, label: "LinkedIn", href: personalInfo.linkedin, gradient: "from-blue-600 to-blue-400" },
    { icon: Github, label: "GitHub", href: personalInfo.github, gradient: "from-purple-500 to-pink-500" },
  ]

  return (
    <section id="contact" className="py-24 md:py-32 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background" />

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
            className="inline-block text-sm font-semibold text-primary uppercase tracking-wider glow-text-subtle"
          >
            Contact
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold gradient-text glow-text">Let's Work Together</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your project
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Contact Details */}
            <GradientCard className="bg-card/50 backdrop-blur-sm border border-border/50">
              <div className="p-8 space-y-6">
                <h3 className="text-2xl font-bold mb-6 glow-text-subtle">Contact Information</h3>
                {contactInfo.map((item, index) => {
                  const Icon = item.icon
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-4 group"
                    >
                      <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 group-hover:from-primary/30 group-hover:to-secondary/30 transition-all duration-300">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-medium text-sm text-muted-foreground">{item.label}</div>
                        <div className="font-semibold text-foreground">{item.value}</div>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </GradientCard>

            <div className="grid grid-cols-2 gap-4">
              {socialLinks.map((link, index) => {
                const Icon = link.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <MagneticButton strength={0.2} className="w-full">
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group relative w-full flex flex-col items-center gap-3 p-6 rounded-2xl bg-gradient-to-br ${link.gradient} text-white overflow-hidden hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300 hover:scale-105 glow-effect`}
                      >
                        <Icon className="h-7 w-7 transition-transform group-hover:scale-110 group-hover:rotate-6" />
                        <span className="font-bold text-base">{link.label}</span>
                        <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                      </a>
                    </MagneticButton>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <GradientCard className="bg-card/50 backdrop-blur-sm border border-border/50">
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-6 glow-text-subtle">Send a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="space-y-2"
                  >
                    <Label htmlFor="name">Your Name</Label>
                    <Input
                      id="name"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="bg-background/50 border-border/50 focus:border-primary transition-all duration-300"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="space-y-2"
                  >
                    <Label htmlFor="email">Your Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="bg-background/50 border-border/50 focus:border-primary transition-all duration-300"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="space-y-2"
                  >
                    <Label htmlFor="message">Your Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell me about your project..."
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      className="bg-background/50 border-border/50 focus:border-primary transition-all duration-300 resize-none"
                    />
                  </motion.div>
                  <MagneticButton strength={0.2} className="w-full">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group relative w-full flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-semibold overflow-hidden hover:shadow-xl hover:shadow-primary/50 transition-all duration-300 disabled:opacity-50 glow-effect"
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        {isSubmitting ? (
                          "Sending..."
                        ) : (
                          <>
                            <Send className="h-5 w-5" />
                            Send Message
                          </>
                        )}
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </button>
                  </MagneticButton>
                </form>
              </div>
            </GradientCard>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
