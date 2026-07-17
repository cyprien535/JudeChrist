"use client"

import { useCallback, useEffect, useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Reveal } from "@/components/reveal"

const REVIEWS = [
  { src: "/testimonials/review-1.png", alt: "Avis client capture d'écran 1" },
  { src: "/testimonials/review-2.png", alt: "Avis client capture d'écran 2" },
  { src: "/testimonials/review-3.png", alt: "Avis client capture d'écran 3" },
]

export function Testimonials() {
  const [current, setCurrent] = useState(0)

  const next = useCallback(() => setCurrent((c) => (c + 1) % REVIEWS.length), [])
  const prev = useCallback(() => setCurrent((c) => (c - 1 + REVIEWS.length) % REVIEWS.length), [])

  useEffect(() => {
    const id = setInterval(next, 4000)
    return () => clearInterval(id)
  }, [next])

  return (
    <section className="border-t border-border/60 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="max-w-2xl">
          <span className="font-heading text-sm font-semibold uppercase tracking-widest text-accent">
            Témoignages
          </span>
          <h2 className="mt-4 text-balance font-heading text-3xl font-bold tracking-tight sm:text-4xl">
            Ils ont transformé leur image
          </h2>
        </Reveal>

        <Reveal className="mt-12">
          <div className="relative mx-auto max-w-2xl">
            <div className="overflow-hidden rounded-2xl border border-border bg-card">
              <div
                className="flex transition-transform duration-700 ease-out"
                style={{ transform: `translateX(-${current * 100}%)` }}
              >
                {REVIEWS.map((r, i) => (
                  <div key={r.src} className="w-full shrink-0 p-4 sm:p-8">
                    <Image
                      src={r.src || "/placeholder.svg"}
                      alt={r.alt}
                      width={800}
                      height={600}
                      quality={80}
                      loading={i === 0 ? "eager" : "lazy"}
                      sizes="(max-width: 640px) 100vw, 640px"
                      className="mx-auto h-auto w-full rounded-lg object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>

            <button
              type="button"
              onClick={prev}
              aria-label="Témoignage précédent"
              className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-border bg-card p-2 text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Témoignage suivant"
              className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 rounded-full border border-border bg-card p-2 text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            <div className="mt-6 flex justify-center gap-2">
              {REVIEWS.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setCurrent(i)}
                  aria-label={`Aller au témoignage ${i + 1}`}
                  className={`h-2 rounded-full transition-all ${
                    i === current ? "w-6 bg-accent" : "w-2 bg-border"
                  }`}
                />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
