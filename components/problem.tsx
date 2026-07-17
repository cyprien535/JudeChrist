"use client"

import { UserX, Eye, Wallet } from "lucide-react"
import { Reveal, RevealGroup, RevealItem } from "@/components/reveal"

const PAINS = [
  {
    icon: UserX,
    title: "Mauvaise première impression",
    description:
      "Une photo peu valorisante, et le prospect passe au suivant sans même vous lire.",
  },
  {
    icon: Eye,
    title: "Votre photo parle avant vous",
    description:
      "LinkedIn, WhatsApp, Instagram : votre image est vue bien avant vos mots.",
  },
  {
    icon: Wallet,
    title: "Studio coûteux et lent",
    description:
      "Payer un photographe à chaque mise à jour de profil : trop cher, trop lent.",
  },
]

export function Problem() {
  return (
    <section id="probleme" className="scroll-mt-16 border-t border-border/60 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="max-w-2xl">
          <span className="font-heading text-sm font-semibold uppercase tracking-widest text-accent">
            Le vrai problème
          </span>
          <h2 className="mt-4 text-balance font-heading text-3xl font-bold tracking-tight sm:text-4xl">
            Votre photo de profil vous coûte des ventes
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Combien de clients ont vu votre photo… et sont partis&nbsp;? Une image amateur envoie un
            signal immédiat&nbsp;: «&nbsp;je ne suis pas encore sérieux.&nbsp;» Résultat, les portes se
            ferment avant même que vous ayez pu parler.
          </p>
        </Reveal>

        <RevealGroup className="mt-12 grid gap-6 md:grid-cols-3">
          {PAINS.map((pain) => (
            <RevealItem key={pain.title} as="article">
              <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-7">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-destructive/15 text-destructive">
                  <pain.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-heading text-xl font-bold">{pain.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {pain.description}
                </p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}
