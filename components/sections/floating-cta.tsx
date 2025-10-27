"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"
import { personalInfo } from "@/content/data"

export function FloatingCTA() {
  return (
    <Button asChild size="lg" className="md:hidden fixed bottom-20 right-4 z-40 rounded-full shadow-lg h-14 w-14 p-0">
      <a href={personalInfo.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="Contact on WhatsApp">
        <MessageCircle className="h-6 w-6" />
      </a>
    </Button>
  )
}
