"use client"

import type React from "react"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { useState } from "react"

interface GradientCardProps {
  children: React.ReactNode
  className?: string
  gradient?: string
}

export function GradientCard({ children, className, gradient }: GradientCardProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  return (
    <motion.div
      className={cn("group relative overflow-hidden rounded-2xl", className)}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      whileHover={{ scale: 1.02, y: -5 }}
      transition={{ duration: 0.3 }}
    >
      {/* Gradient background */}
      <div
        className={cn("absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100", gradient)}
      />

      {/* Spotlight effect */}
      {isHovering && (
        <motion.div
          className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,.1), transparent 40%)`,
          }}
        />
      )}

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </motion.div>
  )
}
