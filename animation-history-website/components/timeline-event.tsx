"use client"

import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import type { TimelineEvent } from "@/lib/timeline-data"
import {
  Disc,
  Eye,
  Clapperboard,
  Camera,
  Film,
  Projector,
  Zap,
  Layers,
  ScanLine,
  BookOpen,
  Aperture,
  Crosshair,
  Monitor,
  Sparkles,
  Flame,
} from "lucide-react"

const iconMap = {
  disc: Disc,
  eye: Eye,
  clapperboard: Clapperboard,
  camera: Camera,
  film: Film,
  projector: Projector,
  zap: Zap,
  layers: Layers,
  scan: ScanLine,
  "book-open": BookOpen,
  aperture: Aperture,
  crosshair: Crosshair,
  monitor: Monitor,
  sparkles: Sparkles,
  lantern: Flame,
}

interface TimelineEventCardProps {
  event: TimelineEvent
  index: number
  total: number
  isLast: boolean
}

export function TimelineEventCard({ event, index, total, isLast }: TimelineEventCardProps) {
  const { ref, isVisible } = useScrollReveal(0.15)
  const isLeft = index % 2 === 0
  const IconComponent = iconMap[event.icon]
  const eventNumber = String(index + 1).padStart(2, "0")

  return (
    <div ref={ref} className="relative">
      {/* MOBILE */}
      <div className="relative md:hidden">
        {/* Vertical connector */}
        {!isLast && (
          <div className="absolute left-6 top-12 h-[calc(100%-3rem)] w-px bg-foreground/10" />
        )}

        <div className="relative flex gap-5">
          {/* Node */}
          <div className="relative z-10 flex flex-col items-center">
            <div
              className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 transition-all duration-700 ${
                isVisible
                  ? "border-foreground bg-foreground text-background scale-100"
                  : "border-foreground/20 bg-transparent text-foreground/30 scale-75"
              }`}
            >
              <IconComponent className="h-5 w-5" />
            </div>
          </div>

          {/* Content */}
          <div
            className={`flex-1 pb-16 transition-all duration-700 ${
              isVisible ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
            }`}
          >
            {/* Giant year */}
            <div className="relative mb-2">
              <span className="font-mono text-6xl font-bold leading-none tracking-tighter text-foreground">
                {event.year}
              </span>
            </div>

            <div className="flex items-center gap-3 mb-2">
              <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
                Nr. {eventNumber} / {String(total).padStart(2, "0")}
              </span>
              <div className="h-px flex-1 bg-foreground/10" />
            </div>

            <h3 className="font-mono text-xl text-foreground">
              {event.title}
            </h3>
            <p className="mt-1 font-sans text-xs font-medium uppercase tracking-widest text-foreground/60">
              {event.inventor}
            </p>
            <p className="mt-3 font-sans text-sm leading-relaxed text-foreground/70">
              {event.description}
            </p>
            <div className="mt-3 h-px w-8 bg-foreground/10" />
            <p className="mt-3 font-sans text-xs leading-relaxed text-foreground/50">
              {event.detail}
            </p>
          </div>
        </div>
      </div>

      {/* DESKTOP */}
      <div className="relative hidden md:block">
        <div className="flex items-start">
          {/* Left column */}
          <div className={`w-[calc(50%-2.5rem)] ${isLeft ? "pr-12" : ""}`}>
            {isLeft && (
              <div
                className={`relative text-right transition-all duration-700 delay-100 ${
                  isVisible
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-16 opacity-0"
                }`}
              >
                <span className="font-mono text-5xl font-bold leading-none tracking-tighter text-foreground lg:text-7xl">
                  {event.year}
                </span>

                <div className="mt-4 flex items-center justify-end gap-3">
                  <div className="h-px w-12 bg-foreground/10" />
                  <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
                    Nr. {eventNumber} / {String(total).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="mt-4 font-mono text-2xl text-foreground lg:text-3xl">
                  {event.title}
                </h3>
                <p className="mt-1 font-sans text-xs font-medium uppercase tracking-widest text-foreground/60">
                  {event.inventor}
                </p>
                <div className="ml-auto mt-5 h-px w-16 bg-foreground/10" />
                <p className="mt-5 font-sans text-base leading-relaxed text-foreground/70">
                  {event.description}
                </p>
                <p className="mt-3 font-sans text-sm leading-relaxed text-foreground/50">
                  {event.detail}
                </p>
              </div>
            )}
          </div>

          {/* Center node */}
          <div className="relative z-10 flex w-20 shrink-0 justify-center">
            <div
              className={`flex h-14 w-14 items-center justify-center rounded-full border-2 transition-all duration-500 ${
                isVisible
                  ? "border-foreground bg-foreground text-background scale-100"
                  : "border-foreground/20 bg-transparent text-foreground/30 scale-50 opacity-0"
              }`}
            >
              <IconComponent className="h-6 w-6" />
            </div>
          </div>

          {/* Right column */}
          <div className={`w-[calc(50%-2.5rem)] ${!isLeft ? "pl-12" : ""}`}>
            {!isLeft && (
              <div
                className={`relative text-left transition-all duration-700 delay-100 ${
                  isVisible
                    ? "translate-x-0 opacity-100"
                    : "translate-x-16 opacity-0"
                }`}
              >
                <span className="font-mono text-5xl font-bold leading-none tracking-tighter text-foreground lg:text-7xl">
                  {event.year}
                </span>

                <div className="mt-4 flex items-center gap-3">
                  <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
                    Nr. {eventNumber} / {String(total).padStart(2, "0")}
                  </span>
                  <div className="h-px w-12 bg-foreground/10" />
                </div>

                <h3 className="mt-4 font-mono text-2xl text-foreground lg:text-3xl">
                  {event.title}
                </h3>
                <p className="mt-1 font-sans text-xs font-medium uppercase tracking-widest text-foreground/60">
                  {event.inventor}
                </p>
                <div className="mt-5 h-px w-16 bg-foreground/10" />
                <p className="mt-5 font-sans text-base leading-relaxed text-foreground/70">
                  {event.description}
                </p>
                <p className="mt-3 font-sans text-sm leading-relaxed text-foreground/50">
                  {event.detail}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Spacer */}
        <div className="h-40" />
      </div>
    </div>
  )
}
