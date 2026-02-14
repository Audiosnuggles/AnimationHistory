"use client"

import { Button } from "@/components/ui/button"
import type { Language } from "@/lib/data"

interface LanguageSwitcherProps {
  currentLang: Language
  onLangChange: (lang: Language) => void
}

export function LanguageSwitcher({ currentLang, onLangChange }: LanguageSwitcherProps) {
  const languages: { code: Language; label: string }[] = [
    { code: "de", label: "DE" },
    { code: "en", label: "EN" },
    { code: "fr", label: "FR" },
    { code: "es", label: "ES" },
  ]

  return (
    <div className="flex gap-2">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => onLangChange(lang.code)}
          className={`text-xs font-mono font-bold transition-opacity hover:opacity-100 ${
            currentLang === lang.code ? "opacity-100 underline decoration-2 underline-offset-4" : "opacity-40"
          }`}
        >
          {lang.label}
        </button>
      ))}
    </div>
  )
}