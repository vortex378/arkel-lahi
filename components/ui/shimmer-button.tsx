"use client"

import type React from "react"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface ShimmerButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  shimmerColor?: string
}

export function ShimmerButton({ children, className, shimmerColor = "#ffffff", ...props }: ShimmerButtonProps) {
  return (
    <button
      className={cn(
        "group relative overflow-hidden rounded-lg px-6 py-3 font-semibold transition-all duration-300",
        className,
      )}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      <motion.div
        className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
        animate={{
          translateX: ["100%", "-100%"],
        }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          duration: 2,
          ease: "linear",
        }}
      />
    </button>
  )
}
