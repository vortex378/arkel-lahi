"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"

interface AnimatedProgressProps {
  value: number
  className?: string
  color?: "blue" | "purple" | "green" | "orange" | "pink"
}

const colorClasses = {
  blue: "from-blue-500 via-cyan-500 to-blue-600",
  purple: "from-purple-500 via-pink-500 to-purple-600",
  green: "from-green-500 via-emerald-500 to-green-600",
  orange: "from-orange-500 via-amber-500 to-orange-600",
  pink: "from-pink-500 via-rose-500 to-pink-600",
}

const glowClasses = {
  blue: "shadow-[0_0_20px_rgba(59,130,246,0.5)]",
  purple: "shadow-[0_0_20px_rgba(168,85,247,0.5)]",
  green: "shadow-[0_0_20px_rgba(34,197,94,0.5)]",
  orange: "shadow-[0_0_20px_rgba(249,115,22,0.5)]",
  pink: "shadow-[0_0_20px_rgba(236,72,153,0.5)]",
}

export function AnimatedProgress({ value, className = "", color = "blue" }: AnimatedProgressProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setDisplayValue(value)
      }, 100)
      return () => clearTimeout(timer)
    }
  }, [isInView, value])

  return (
    <div ref={ref} className={`relative h-3 bg-muted/30 rounded-full overflow-hidden ${className}`}>
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer" />

      {/* Progress bar */}
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: isInView ? `${displayValue}%` : 0 }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
        className={`h-full bg-gradient-to-r ${colorClasses[color]} ${glowClasses[color]} relative overflow-hidden rounded-full`}
      >
        {/* Animated shine effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
          animate={{
            x: ["-100%", "200%"],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            repeatDelay: 1,
            ease: "easeInOut",
          }}
        />

        {/* Pulsing glow */}
        <motion.div
          className="absolute inset-0 bg-white/20 rounded-full"
          animate={{
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </motion.div>
    </div>
  )
}
