"use client"

import { useScrollReveal } from "@/hooks/use-scroll-reveal"

interface EraDividerProps {
  label: string
  yearRange: string
}

export function EraDivider({ label, yearRange }: EraDividerProps) {
  const { ref, isVisible } = useScrollReveal(0.3)

  return (
    <div
      ref={ref}
      className={`relative mx-auto flex max-w-4xl items-center gap-6 px-6 py-20 transition-all duration-700 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="h-px flex-1 bg-foreground/15" />
      <div className="text-center">
        <div className="flex items-center justify-center gap-2 mb-2">
          <div className="h-1 w-1 rounded-full bg-foreground/30" />
          <div className="h-1 w-1 rounded-full bg-foreground/30" />
          <div className="h-1 w-1 rounded-full bg-foreground/30" />
        </div>
        <p className="font-mono text-xs uppercase tracking-[0.4em] text-foreground/60">
          {label}
        </p>
        <p className="mt-2 font-mono text-sm font-bold tracking-tight text-foreground/40">{yearRange}</p>
      </div>
      <div className="h-px flex-1 bg-foreground/15" />
    </div>
  )
}
