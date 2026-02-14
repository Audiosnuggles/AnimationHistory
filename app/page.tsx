"use client"

import { useState } from "react"
import { TimelineEventCard } from "@/components/timeline-event"
import { getTimelineData, type Language } from "@/lib/data"
import { LanguageSwitcher } from "@/components/language-switcher"

export default function Home() {
  const [lang, setLang] = useState<Language>("de")
  
  // Daten basierend auf der aktuellen Sprache laden
  const { ui, events } = getTimelineData(lang)

  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary/20">
      
      {/* === SPRACHUMSCHALTER (OBEN RECHTS) === */}
      <div className="absolute top-6 right-6 z-50 md:top-10 md:right-10 mix-blend-difference text-white">
         <LanguageSwitcher currentLang={lang} onLangChange={setLang} />
      </div>

      {/* === HERO / INTRO (DUNKEL) === */}
      <section className="relative flex min-h-[85vh] flex-col justify-center px-6 py-20 md:px-12 lg:px-24 bg-foreground text-background overflow-hidden">
        
        {/* --- MUYBRIDGE GIF (DESKTOP) --- */}
        {/* Positioniert: Oben rechts, absolute. 
            Keine Filter (mix-blend/opacity) mehr -> Klares Bild. 
            Nur sichtbar ab LG (Desktop). */}
        <div className="absolute right-0 top-12 md:top-24 w-[500px] pointer-events-none hidden lg:block">
          <img 
            src="/muybridge.gif" 
            alt="The Horse in Motion" 
            className="w-full h-auto"
          />
        </div>

        <div className="max-w-4xl relative z-10">
          
          {/* --- MUYBRIDGE GIF (MOBILE) --- */}
          {/* Positioniert: Im Fluss über dem Text.
              Keine Filter.
              Größe: Volle Breite, aber maximal 400px -> Deutlich größer als vorher.
              Nur sichtbar bis LG (Mobile/Tablet). */}
          <div className="mb-8 lg:hidden w-full max-w-[400px]">
             <img 
              src="/muybridge.gif" 
              alt="The Horse in Motion" 
              className="w-full h-auto"
            />
          </div>

          {/* Subline */}
          <div className="mb-6 inline-block rounded-full border border-background/20 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-background/80">
            {ui.subline}
          </div>
          
          {/* Titel */}
          <h1 className="mb-8 font-mono text-5xl font-bold leading-tight tracking-tighter md:text-7xl lg:text-8xl">
            {ui.title1} <br />
            <span className="text-background/60">{ui.title2}</span>
          </h1>

          {/* Intro Text */}
          <p className="max-w-2xl font-sans text-lg leading-relaxed text-background/60 md:text-xl md:leading-8">
            {ui.intro}
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-6 animate-bounce md:left-12 lg:left-24">
          <span className="font-mono text-xs uppercase tracking-widest text-background/40">
            {ui.scroll}
          </span>
        </div>
      </section>


      {/* === TIMELINE (HELL) === */}
      <section className="relative px-6 pb-40 pt-40 md:px-12 lg:px-24">
        {/* Die vertikale Linie durch die Zeit */}
        <div className="absolute left-6 top-0 h-full w-px bg-foreground/10 md:left-1/2 md:-ml-px" />
        
        <div className="flex flex-col gap-24 md:gap-48">
          {events.map((event, index) => (
            <TimelineEventCard
              key={event.id}
              event={event}
              index={index}
              total={events.length}
              isLast={index === events.length - 1}
            />
          ))}
        </div>
      </section>


      {/* === OUTRO / FOOTER (DUNKEL) === */}
      <section className="bg-foreground text-background py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-3xl mx-auto text-center">
          {/* Outro Titel */}
          <h2 className="mb-8 font-mono text-3xl font-bold tracking-tighter md:text-5xl">
            {ui.outroTitle}
          </h2>
          
          {/* Outro Text */}
          <p className="font-sans text-lg leading-relaxed opacity-80 md:text-xl md:leading-8">
            {ui.outroText}
          </p>
          
          <div className="mt-20 h-px w-16 bg-background/20 mx-auto" />
          
          <p className="mt-8 font-mono text-xs uppercase tracking-[0.3em] opacity-40">
            {ui.footer}
          </p>
        </div>
      </section>

    </main>
  )
}