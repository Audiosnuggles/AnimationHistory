"use client"

import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { Film } from "lucide-react"

export function Footer() {
  const { ref, isVisible } = useScrollReveal(0.2)

  return (
    <footer
      ref={ref}
      className="relative overflow-hidden border-t border-foreground/10 px-6 py-32"
    >
      <div
        className={`relative mx-auto max-w-2xl text-center transition-all duration-700 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        <div className="mx-auto mb-8 flex h-14 w-14 items-center justify-center rounded-full border-2 border-foreground bg-foreground">
          <Film className="h-6 w-6 text-background" />
        </div>

        <p className="font-mono text-[10px] uppercase tracking-[0.5em] text-muted-foreground">
          Epilog
        </p>
        <h2 className="mt-5 font-mono text-3xl font-bold text-foreground md:text-4xl">
          <span className="text-balance">
            Das 20. Jahrhundert konnte beginnen.
          </span>
        </h2>
        <p className="mt-6 mx-auto max-w-md font-sans text-sm leading-relaxed text-muted-foreground">
          Von optischen Taeuschungen in der Handflaege bis zur ersten
          Kinovorfuehrung in Paris &mdash; diese Pioniere schufen die
          Grundlagen fuer eine Kunstform, die Milliarden Menschen bewegt.
        </p>

        <div className="mx-auto mt-10 flex items-center justify-center gap-3">
          <div className="h-px w-12 bg-foreground/15" />
          <div className="h-1.5 w-1.5 rotate-45 border border-foreground/20" />
          <div className="h-px w-12 bg-foreground/15" />
        </div>

        <p className="mt-10 font-mono text-[10px] uppercase tracking-[0.5em] text-muted-foreground/60">
          Animation History &middot; 1659&ndash;1895
        </p>
      </div>
    </footer>
  )
}
