import { Hero } from "@/components/hero"
import { Timeline } from "@/components/timeline"
import { Footer } from "@/components/footer"
import { ScrollProgress } from "@/components/scroll-progress"
import { EraDivider } from "@/components/era-divider"

export default function Page() {
  return (
    <main className="relative min-h-screen">
      <ScrollProgress />
      <Hero />
      <EraDivider label="Optische Spielzeuge & Apparate" yearRange="1659 - 1895" />
      <Timeline />
      <EraDivider label="Die Geburt des Kinos" yearRange="Das 20. Jahrhundert beginnt" />
      <Footer />
    </main>
  )
}
