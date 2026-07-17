"use client"

import { Check } from "lucide-react"
import { Reveal, RevealGroup, RevealItem } from "@/components/reveal"

const POINTS = [
  "Vous êtes entrepreneur, coach ou freelance et votre photo ne reflète pas votre niveau actuel.",
  "Vous voulez être pris au sérieux en ligne sans passer par un studio coûteux.",
  "Vous lancez votre activité et avez besoin d'une image forte dès le départ.",
  "Votre offre est belle mais personne ne vous contacte.",
  "Vous en avez marre de vous cacher derrière un logo ou une photo floue.",
]

export function Audience() {
  return (
    <section className="border-t border-border/60 py-20 lg:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <Reveal className="max-w-2xl">
          <span className="font-heading text-sm font-semibold uppercase tracking-widest text-accent">
            Pour qui&nbsp;?
          </span>
          <h2 className="mt-4 text-balance font-heading text-3xl font-bold tracking-tight sm:text-4xl">
            Cela vous concerne si…
          </h2>
        </Reveal>

        <RevealGroup as="ul" className="mt-10 flex flex-col gap-3">
          {POINTS.map((point) => (
            <RevealItem
              key={point}
              as="li"
              className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5"
            >
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Check className="h-4 w-4" />
              </span>
              <span className="text-sm leading-relaxed text-foreground sm:text-base">{point}</span>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}
