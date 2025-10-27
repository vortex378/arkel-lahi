import { Hero } from "@/components/sections/hero"
import { Achievements } from "@/components/sections/achievements"
import { ExperienceHighlights } from "@/components/sections/experience-highlights"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Achievements />
      <ExperienceHighlights />
    </div>
  )
}
