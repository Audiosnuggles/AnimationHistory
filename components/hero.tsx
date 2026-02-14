"use client"

import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { Film, ChevronDown } from "lucide-react"

export function Hero() {
  const { ref, isVisible } = useScrollReveal(0.1)

  return (
    <section
      ref={ref}
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 py-24"
    >
      {/* Film strip decoration left */}
      <div className="absolute left-4 top-0 hidden h-full w-8 md:left-8 md:block">
        <div className="h-full w-full border-x border-foreground/[0.08]">
          {Array.from({ length: 40 }).map((_, i) => (
            <div
              key={i}
              className="mx-auto my-3 h-3 w-4 rounded-sm border border-foreground/[0.08]"
            />
          ))}
        </div>
      </div>

      {/* Film strip decoration right */}
      <div className="absolute right-4 top-0 hidden h-full w-8 md:right-8 md:block">
        <div className="h-full w-full border-x border-foreground/[0.08]">
          {Array.from({ length: 40 }).map((_, i) => (
            <div
              key={i}
              className="mx-auto my-3 h-3 w-4 rounded-sm border border-foreground/[0.08]"
            />
          ))}
        </div>
      </div>

      <div
        className={`relative z-10 max-w-4xl text-center transition-all duration-1000 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
        }`}
      >
        {/* Icon */}
        <div className="mb-10 flex items-center justify-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-foreground bg-foreground">
            <Film className="h-7 w-7 text-background" />
          </div>
        </div>

        {/* Overline */}
        <div className="mb-6 flex items-center justify-center gap-4">
          <div className="h-px w-8 bg-foreground/20" />
          <p className="font-mono text-[10px] uppercase tracking-[0.5em] text-muted-foreground">
            Eine visuelle Chronik
          </p>
          <div className="h-px w-8 bg-foreground/20" />
        </div>

        {/* Title */}
        <h1 className="font-mono text-5xl font-bold leading-[1.1] tracking-tight text-foreground md:text-7xl lg:text-8xl">
          <span className="text-balance">
            Geschichte<br />
            der Animation
          </span>
        </h1>

        {/* Decorative divider */}
        <div className="mx-auto mt-8 flex items-center justify-center gap-3">
          <div className="h-px w-16 bg-foreground/20" />
          <div className="h-2 w-2 rotate-45 border border-foreground/30" />
          <div className="h-px w-16 bg-foreground/20" />
        </div>

        {/* Subtitle */}
        <p className="mx-auto mt-8 max-w-lg text-balance font-sans text-lg leading-relaxed text-muted-foreground">
          Vom optischen Spielzeug zur bewegten Projektion. Die Meilensteine
          einer Erfindung, die die Welt veraenderte.
        </p>

        {/* Year range */}
        <div className="mt-12 flex items-center justify-center gap-6">
          <span className="font-mono text-3xl font-bold tracking-tighter text-foreground md:text-4xl">
            1659
          </span>
          <div className="flex items-center gap-2">
            <div className="h-px w-8 bg-foreground/30" />
            <div className="h-1 w-1 rounded-full bg-foreground/40" />
            <div className="h-px w-8 bg-foreground/30" />
          </div>
          <span className="font-mono text-3xl font-bold tracking-tighter text-foreground md:text-4xl">
            1895
          </span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-12 transition-all delay-700 duration-1000 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
        }`}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
            Scrollen
          </span>
          <ChevronDown className="h-4 w-4 animate-bounce text-muted-foreground" />
        </div>
      </div>
    </section>
  )
}
