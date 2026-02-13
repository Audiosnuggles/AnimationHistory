"use client"

import { timelineEvents } from "@/lib/timeline-data"
import { TimelineEventCard } from "@/components/timeline-event"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

export function Timeline() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal(0.3)

  return (
    <section className="relative px-6 py-24">
      {/* Section header */}
      <div
        ref={headerRef}
        className={`relative mx-auto mb-32 max-w-3xl text-center transition-all duration-700 ${
          headerVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        <p className="font-mono text-[10px] uppercase tracking-[0.5em] text-muted-foreground">
          Zeitstrahl &middot; {timelineEvents.length} Meilensteine
        </p>
        <h2 className="mt-5 font-mono text-3xl text-foreground md:text-5xl">
          <span className="text-balance">Die Geburt des bewegten Bildes</span>
        </h2>
        <div className="mx-auto mt-6 flex items-center justify-center gap-3">
          <div className="h-px w-12 bg-foreground/15" />
          <div className="h-1.5 w-1.5 rounded-full bg-foreground" />
          <div className="h-px w-12 bg-foreground/15" />
        </div>
        <p className="mt-6 mx-auto max-w-lg font-sans text-base leading-relaxed text-muted-foreground">
          Jede Erfindung brachte die Menschheit einen Schritt naeher an die
          Illusion von Leben auf der Leinwand.
        </p>
      </div>

      {/* Desktop center line */}
      <div className="absolute left-1/2 top-48 hidden h-[calc(100%-16rem)] w-px -translate-x-1/2 bg-foreground/10 md:block" />

      {/* Timeline events */}
      <div className="relative mx-auto max-w-5xl">
        {timelineEvents.map((event, index) => (
          <TimelineEventCard
            key={event.id}
            event={event}
            index={index}
            total={timelineEvents.length}
            isLast={index === timelineEvents.length - 1}
          />
        ))}
      </div>
    </section>
  )
}
