"use client"

import { MapPinOff, CalendarOff, PiggyBank } from "lucide-react"
import { motion } from "motion/react"
import { Reveal, RevealGroup, RevealItem } from "@/components/reveal"

const SOLUTIONS = [
  {
    icon: MapPinOff,
    title: "Pas de studio",
    description: "Aucun déplacement, aucune réservation. Vous restez chez vous.",
  },
  {
    icon: CalendarOff,
    title: "Pas de rendez-vous",
    description: "Tout se fait en ligne, à votre rythme, quand vous voulez.",
  },
  {
    icon: PiggyBank,
    title: "Pas de budget élevé",
    description: "Des portraits pro à partir de 1 000 FCFA seulement.",
  },
]

export function Solution() {
  return (
    <section id="solution" className="scroll-mt-16 border-t border-border/60 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="max-w-2xl">
          <span className="font-heading text-sm font-semibold uppercase tracking-widest text-accent">
            La solution
          </span>
          <h2 className="mt-4 text-balance font-heading text-3xl font-bold tracking-tight sm:text-4xl">
            Une nouvelle façon de transformer votre image
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Des portraits professionnels générés par IA à partir de simples selfies. Vous obtenez une
            image forte et crédible, sans les contraintes d&apos;un studio traditionnel.
          </p>
        </Reveal>

        <RevealGroup className="mt-12 grid gap-6 md:grid-cols-3">
          {SOLUTIONS.map((solution) => (
            <RevealItem key={solution.title} as="article">
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group flex h-full flex-col rounded-2xl border border-border bg-card p-7 transition-colors hover:border-primary/60"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 text-accent transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <solution.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-heading text-xl font-bold">{solution.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {solution.description}
                </p>
              </motion.div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}
