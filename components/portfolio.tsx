"use client"

import { useCallback, useEffect, useState } from "react"
import Image from "next/image"
import useEmblaCarousel from "embla-carousel-react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { motion } from "motion/react"
import { Reveal } from "@/components/reveal"

type Category = "graphisme" | "retouche"

const CATEGORIES: { id: Category; label: string }[] = [
  { id: "graphisme", label: "Graphisme" },
  { id: "retouche", label: "Retouche photo" },
]

const WORKS: { src: string; name: string; role: string; category: Category }[] = [
  { src: "/graphisme/graphisme-1.jpg", name: "Formation e-commerce", role: "Flyer promotionnel", category: "graphisme" },
  { src: "/graphisme/graphisme-2.jpg", name: "Optimise ton profil", role: "Flyer formation", category: "graphisme" },
  { src: "/graphisme/graphisme-3.jpg", name: "Nuit Saint Esprit", role: "Affiche événement", category: "graphisme" },
  { src: "/graphisme/graphisme-4.jpg", name: "L'Architecte Bleu", role: "Visuel félicitations", category: "graphisme" },
  { src: "/graphisme/graphisme-5.jpg", name: "Les délices de Merveille", role: "Visuel produit", category: "graphisme" },
  { src: "/graphisme/graphisme-6.jpg", name: "Gloria Aminou — 10K", role: "Visuel célébration", category: "graphisme" },
  { src: "/graphisme/graphisme-7.jpg", name: "3000 Followers", role: "Visuel célébration", category: "graphisme" },
  { src: "/graphisme/graphisme-8.jpg", name: "Birthday Wilenock", role: "Affiche anniversaire", category: "graphisme" },
  { src: "/graphisme/graphisme-9.jpg", name: "Ornel Agnikpe", role: "Affiche anniversaire", category: "graphisme" },
  { src: "/graphisme/graphisme-10.jpg", name: "Axel Merryl", role: "Affiche anniversaire", category: "graphisme" },
  { src: "/graphisme/graphisme-11.jpg", name: "Sauces Béninoises", role: "Visuel lancement", category: "graphisme" },
  { src: "/graphisme/graphisme-12.jpg", name: "Sauces Béninoises", role: "Mockup flyer", category: "graphisme" },
  { src: "/graphisme/graphisme-13.jpg", name: "Visitation Angélique", role: "Affiche événement", category: "graphisme" },
  { src: "/graphisme/graphisme-14.jpg", name: "Kiri-Kiri Immobilier", role: "Flyer commercial", category: "graphisme" },
  { src: "/graphisme/graphisme-15.jpg", name: "Merveille Cook", role: "Mockup panneau", category: "graphisme" },
  { src: "/retouche/retouche-1.png", name: "Portrait studio orange", role: "Retouche & optimisation", category: "retouche" },
  { src: "/retouche/retouche-2.png", name: "Portrait studio bleu", role: "Retouche & optimisation", category: "retouche" },
  { src: "/retouche/retouche-3.png", name: "Portrait studio rouge", role: "Retouche & optimisation", category: "retouche" },
  { src: "/retouche/retouche-4.png", name: "Portrait studio ocre", role: "Retouche & optimisation", category: "retouche" },
  { src: "/retouche/retouche-5.png", name: "Portrait studio nuit", role: "Retouche & optimisation", category: "retouche" },
  { src: "/retouche/retouche-6.png", name: "Portrait studio vert", role: "Retouche & optimisation", category: "retouche" },
  { src: "/retouche/retouche-7.png", name: "Portrait costume vert", role: "Retouche & optimisation", category: "retouche" },
  { src: "/retouche/retouche-8.png", name: "Portrait studio ambré", role: "Retouche & optimisation", category: "retouche" },
]

export function Portfolio() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    dragFree: false,
  })
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])
  const [category, setCategory] = useState<Category>("graphisme")

  const filteredWorks = WORKS.filter((w) => w.category === category)

  useEffect(() => {
    if (!emblaApi) return
    emblaApi.reInit()
    emblaApi.scrollTo(0, true)
  }, [emblaApi, category])

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])
  const scrollTo = useCallback((i: number) => emblaApi?.scrollTo(i), [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap())
    setScrollSnaps(emblaApi.scrollSnapList())
    onSelect()
    emblaApi.on("select", onSelect)
    emblaApi.on("reInit", onSelect)
    return () => {
      emblaApi.off("select", onSelect)
      emblaApi.off("reInit", onSelect)
    }
  }, [emblaApi])

  // Autoplay
  useEffect(() => {
    if (!emblaApi) return
    const id = setInterval(() => {
      if (emblaApi.canScrollNext()) emblaApi.scrollNext()
      else emblaApi.scrollTo(0)
    }, 3500)
    return () => clearInterval(id)
  }, [emblaApi])

  return (
    <section id="realisations" className="scroll-mt-16 border-t border-border/60 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <span className="font-heading text-sm font-semibold uppercase tracking-widest text-accent">
              Réalisations
            </span>
            <h2 className="mt-4 text-balance font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              Des visuels qui font vendre et marquent les esprits
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
            Flyers, affiches événementielles, visuels produits et célébrations : chaque design est
            pensé pour capter l&apos;attention. Le prochain pourrait être le vôtre.
          </p>
        </Reveal>

        <Reveal delay={0.05} className="mt-8 flex flex-wrap items-center gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setCategory(cat.id)}
              aria-pressed={category === cat.id}
              className={`rounded-full border px-5 py-2 font-heading text-sm font-semibold transition-colors ${
                category === cat.id
                  ? "border-accent bg-accent text-accent-foreground"
                  : "border-border bg-secondary/40 text-muted-foreground hover:border-accent/60 hover:text-foreground"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </Reveal>

        <Reveal delay={0.1} className="relative mt-8">
          {/* Carousel viewport */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex touch-pan-y">
              {filteredWorks.map((work) => (
                <div
                  key={work.src}
                  className="min-w-0 shrink-0 grow-0 basis-4/5 pl-4 first:pl-0 sm:basis-1/2 lg:basis-1/3"
                >
                  <figure className="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-border bg-card">
                    <Image
                      src={work.src || "/placeholder.svg"}
                      alt={`${work.role} — ${work.name}, réalisation de Jude-Christ Exaucé`}
                      fill
                      quality={80}
                      loading="lazy"
                      sizes="(max-width: 640px) 80vw, (max-width: 1024px) 50vw, 33vw"
                      className={`transition-transform duration-700 group-hover:scale-105 ${
                        work.category === "retouche" ? "object-cover" : "object-contain"
                      }`}
                    />
                    <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent p-5 pt-14">
                      <p className="font-heading text-base font-bold text-foreground">{work.name}</p>
                      <p className="text-xs text-accent">{work.role}</p>
                    </figcaption>
                  </figure>
                </div>
              ))}
            </div>
          </div>

          {/* Controls */}
          <div className="mt-8 flex items-center justify-between">
            <div className="flex items-center gap-2">
              {scrollSnaps.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => scrollTo(i)}
                  aria-label={`Aller au portrait ${i + 1}`}
                  className="h-2 rounded-full transition-all duration-300"
                  style={{
                    width: i === selectedIndex ? 28 : 8,
                    backgroundColor:
                      i === selectedIndex ? "var(--accent)" : "var(--border)",
                  }}
                />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <motion.button
                type="button"
                onClick={scrollPrev}
                whileTap={{ scale: 0.9 }}
                aria-label="Portrait précédent"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-secondary/40 text-foreground transition-colors hover:border-primary/60 hover:bg-secondary"
              >
                <ChevronLeft className="h-5 w-5" />
              </motion.button>
              <motion.button
                type="button"
                onClick={scrollNext}
                whileTap={{ scale: 0.9 }}
                aria-label="Portrait suivant"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-secondary/40 text-foreground transition-colors hover:border-primary/60 hover:bg-secondary"
              >
                <ChevronRight className="h-5 w-5" />
              </motion.button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
