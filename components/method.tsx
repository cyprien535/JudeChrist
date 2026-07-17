"use client"

import { Reveal, RevealGroup, RevealItem } from "@/components/reveal"

const STEPS = [
  {
    number: "01",
    title: "Envoyez vos selfies",
    description:
      "Quelques photos simples prises avec votre téléphone. Aucun matériel ni studio nécessaire.",
  },
  {
    number: "02",
    title: "Je crée vos portraits",
    description:
      "Génération par IA à partir de vos selfies, dans un style aligné avec votre offre.",
  },
  {
    number: "03",
    title: "Je peaufine chaque détail",
    description:
      "Retouche soignée pour un rendu naturel, professionnel et fidèle à vous-même.",
  },
  {
    number: "04",
    title: "Recevez en 24 à 72h",
    description:
      "Vos portraits vous sont livrés, prêts à être utilisés sur tous vos profils.",
  },
]

export function Method() {
  return (
    <section id="methode" className="scroll-mt-16 border-t border-border/60 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="max-w-2xl">
          <span className="font-heading text-sm font-semibold uppercase tracking-widest text-accent">
            Ma méthode
          </span>
          <h2 className="mt-4 text-balance font-heading text-3xl font-bold tracking-tight sm:text-4xl">
            Votre transformation en 4 étapes
          </h2>
        </Reveal>

        <RevealGroup as="ol" className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step) => (
            <RevealItem
              key={step.number}
              as="li"
              className="relative rounded-2xl border border-border bg-card p-6"
            >
              <span className="font-heading text-4xl font-bold text-primary/40">{step.number}</span>
              <h3 className="mt-4 font-heading text-lg font-bold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}
