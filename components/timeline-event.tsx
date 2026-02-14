"use client"

import { useState, useEffect } from "react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import type { TimelineEvent } from "@/lib/data"
import {
  Sun,            // Für Laterna Magica (Licht)
  Repeat,         // Für Thaumatrop (Drehung)
  Settings,       // Für Faraday (Zahnrad)
  Disc,           // Für Stampfer (Scheibe)
  Eye,            // Für Phenakistiskop (Sehen)
  Orbit,          // Für Zoetrop (Kreislauf)
  Presentation,   // Für Uchatius (Leinwand)
  BookOpen,       // Für Daumenkino
  Gem,            // Für Praxinoskop (Spiegel-Prisma)
  Camera,         // Für Muybridge
  Crosshair,      // Für Marey
  Zap,            // Für Anschütz (Blitz/Elektrik)
  Film,           // Für Eastman
  Box,            // Für Kinetoskop (Guckkasten)
  Images,         // Für Mutoskop (Viele Bilder)
  Clapperboard,   // Für Lumière (Kino start)
  X,
  ZoomIn,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"

// Die neue, logischere Zuordnung
const iconMap = {
  sun: Sun,
  repeat: Repeat,
  gear: Settings,
  disc: Disc,
  eye: Eye,
  orbit: Orbit,
  presentation: Presentation,
  book: BookOpen,
  prism: Gem,
  camera: Camera,
  gun: Crosshair,
  flash: Zap,
  film: Film,
  box: Box,
  cards: Images,
  cinema: Clapperboard,
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
  
  // Icon laden (Fallback auf "sun", falls etwas nicht stimmt)
  const IconComponent = iconMap[event.icon as keyof typeof iconMap] || Sun
  
  const eventNumber = String(index + 1).padStart(2, "0")

  // State für die Lightbox
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  // Galerie-Liste erstellen
  const galleryImages = event.gallery && event.gallery.length > 0 
    ? event.gallery 
    : [event.imageUrl, event.personUrl].filter(Boolean) as string[]

  // Tastatursteuerung für die Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxIndex(null)
      if (e.key === "ArrowRight" && lightboxIndex !== null) {
        setLightboxIndex((prev) => (prev! + 1) % galleryImages.length)
      }
      if (e.key === "ArrowLeft" && lightboxIndex !== null) {
        setLightboxIndex((prev) => (prev! - 1 + galleryImages.length) % galleryImages.length)
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [lightboxIndex, galleryImages.length])

  // Das Hauptbild (Apparat) - clean, ohne Leiste
  const EventImage = () => (
    <div className="mb-6 overflow-hidden rounded-xl shadow-lg border border-border bg-muted flex items-center justify-center relative group cursor-zoom-in h-72"
         onClick={() => setLightboxIndex(0)}>
      <img 
        src={event.imageUrl} 
        alt={event.title}
        className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/60 text-white p-2 rounded-full transform translate-y-4 group-hover:translate-y-0">
           <ZoomIn className="w-6 h-6" />
        </div>
      </div>
    </div>
  )

  const PersonImage = () => (
    <div 
      className="relative w-16 h-16 shrink-0 overflow-hidden rounded-full border-2 border-primary/20 shadow-sm ml-4 bg-background cursor-zoom-in group"
      onClick={() => {
        const idx = galleryImages.indexOf(event.personUrl || "")
        setLightboxIndex(idx !== -1 ? idx : 0)
      }}
    >
      <img 
        src={event.personUrl} 
        alt={event.inventor}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        loading="lazy"
        referrerPolicy="no-referrer"
      />
    </div>
  )

  return (
    <>
      {/* LIGHTBOX MODAL */}
      {lightboxIndex !== null && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 animate-in fade-in duration-200"
          onClick={() => setLightboxIndex(null)}
        >
          {/* Close */}
          <button 
            className="absolute top-5 right-5 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full z-20"
            onClick={() => setLightboxIndex(null)}
          >
            <X className="w-8 h-8" />
          </button>

          {/* Previous */}
          {galleryImages.length > 1 && (
            <button 
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all z-20"
              onClick={(e) => {
                e.stopPropagation()
                setLightboxIndex((prev) => (prev! - 1 + galleryImages.length) % galleryImages.length)
              }}
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
          )}

          {/* Next */}
          {galleryImages.length > 1 && (
            <button 
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all z-20"
              onClick={(e) => {
                e.stopPropagation()
                setLightboxIndex((prev) => (prev! + 1) % galleryImages.length)
              }}
            >
              <ChevronRight className="w-8 h-8" />
            </button>
          )}

          {/* Image */}
          <img 
            src={galleryImages[lightboxIndex]} 
            alt="Detailansicht" 
            className="max-w-full max-h-[85vh] object-contain rounded-md shadow-2xl animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
            referrerPolicy="no-referrer"
          />
          
          <div className="absolute bottom-8 text-white/60 text-sm font-sans tracking-widest uppercase flex flex-col items-center gap-2">
            {galleryImages.length > 1 && (
              <span>Bild {lightboxIndex + 1} von {galleryImages.length}</span>
            )}
            <span className="text-xs opacity-50">ESC zum Schließen</span>
          </div>
        </div>
      )}

      {/* TIMELINE KARTE */}
      <div ref={ref} className="relative">
        {/* MOBILE */}
        <div className="relative md:hidden">
          {!isLast && (
            <div className="absolute left-6 top-12 h-[calc(100%-3rem)] w-px bg-foreground/10" />
          )}

          <div className="relative flex gap-5">
            <div className="relative z-10 flex flex-col items-center">
              <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 transition-all duration-700 ${isVisible ? "border-foreground bg-foreground text-background scale-100" : "border-foreground/20 bg-transparent text-foreground/30 scale-75"}`}>
                <IconComponent className="h-5 w-5" />
              </div>
            </div>

            <div className={`flex-1 pb-16 transition-all duration-700 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"}`}>
              {event.imageUrl && <EventImage />}

              <div className="relative mb-2">
                <span className="font-mono text-6xl font-bold leading-none tracking-tighter text-foreground">
                  {event.year}
                </span>
              </div>
              
              <h3 className="font-mono text-2xl font-bold text-foreground">
                {event.title}
              </h3>

              <div className="flex items-center mt-4 mb-4 p-3 bg-muted/30 rounded-lg">
                {event.personUrl && <PersonImage />}
                <p className="font-sans text-xs font-medium uppercase tracking-widest text-foreground/80 ml-3">
                  {event.inventor}
                </p>
              </div>

              <p className="mt-3 font-sans text-base leading-relaxed text-foreground/80 font-medium">
                {event.description}
              </p>
              <div className="mt-3 h-px w-8 bg-foreground/10" />
              <p className="mt-3 font-sans text-sm leading-relaxed text-foreground/60">
                {event.detail}
              </p>
            </div>
          </div>
        </div>

        {/* DESKTOP */}
        <div className="relative hidden md:block">
          <div className="flex items-start">
            <div className={`w-[calc(50%-2.5rem)] ${isLeft ? "pr-12" : ""}`}>
              {isLeft && (
                <div className={`relative text-right transition-all duration-700 delay-100 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-16 opacity-0"}`}>
                  {event.imageUrl && <EventImage />}
                  <span className="font-mono text-5xl font-bold leading-none tracking-tighter text-foreground lg:text-7xl">
                    {event.year}
                  </span>
                  <div className="mt-4 flex items-center justify-end gap-3">
                    <div className="h-px w-12 bg-foreground/10" />
                    <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
                      Nr. {eventNumber} / {String(total).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-4 font-mono text-3xl font-bold text-foreground">
                    {event.title}
                  </h3>
                  <div className="flex items-center justify-end mt-2 mb-4">
                    <p className="font-sans text-sm font-medium uppercase tracking-widest text-foreground/60">{event.inventor}</p>
                    {event.personUrl && <PersonImage />}
                  </div>
                  <div className="ml-auto mt-5 h-px w-16 bg-foreground/10" />
                  <p className="mt-5 font-sans text-lg leading-relaxed text-foreground/80 font-medium">
                    {event.description}
                  </p>
                  <p className="mt-3 font-sans text-sm leading-relaxed text-foreground/50">
                    {event.detail}
                  </p>
                </div>
              )}
            </div>

            <div className="relative z-10 flex w-20 shrink-0 justify-center">
              <div className={`flex h-14 w-14 items-center justify-center rounded-full border-2 transition-all duration-500 ${isVisible ? "border-foreground bg-foreground text-background scale-100" : "border-foreground/20 bg-transparent text-foreground/30 scale-50 opacity-0"}`}>
                <IconComponent className="h-6 w-6" />
              </div>
            </div>

            <div className={`w-[calc(50%-2.5rem)] ${!isLeft ? "pl-12" : ""}`}>
              {!isLeft && (
                <div className={`relative text-left transition-all duration-700 delay-100 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-16 opacity-0"}`}>
                  {event.imageUrl && <EventImage />}
                  <span className="font-mono text-5xl font-bold leading-none tracking-tighter text-foreground lg:text-7xl">
                    {event.year}
                  </span>
                  <div className="mt-4 flex items-center gap-3">
                    <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
                      Nr. {eventNumber} / {String(total).padStart(2, "0")}
                    </span>
                    <div className="h-px w-12 bg-foreground/10" />
                  </div>
                  <h3 className="mt-4 font-mono text-3xl font-bold text-foreground">
                    {event.title}
                  </h3>
                  <div className="flex items-center mt-2 mb-4">
                    {event.personUrl && <PersonImage />}
                    <p className="font-sans text-sm font-medium uppercase tracking-widest text-foreground/60 ml-3">{event.inventor}</p>
                  </div>
                  <div className="mt-5 h-px w-16 bg-foreground/10" />
                  <p className="mt-5 font-sans text-lg leading-relaxed text-foreground/80 font-medium">
                    {event.description}
                  </p>
                  <p className="mt-3 font-sans text-sm leading-relaxed text-foreground/50">
                    {event.detail}
                  </p>
                </div>
              )}
            </div>
          </div>
          <div className="h-40" />
        </div>
      </div>
    </>
  )
}