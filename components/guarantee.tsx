"use client"

import { ShieldCheck } from "lucide-react"
import { Reveal } from "@/components/reveal"

export function Guarantee() {
  return (
    <section className="border-t border-border/60 py-20 lg:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <Reveal className="relative overflow-hidden rounded-3xl border border-primary/40 bg-card p-8 text-center sm:p-12">
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-0 h-48 w-48 -translate-x-1/2 rounded-full bg-primary/20 blur-[90px]"
          />
          <div className="relative flex flex-col items-center">
            <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/15 text-accent">
              <ShieldCheck className="h-8 w-8" />
            </span>
            <h2 className="mt-6 text-balance font-heading text-2xl font-bold tracking-tight sm:text-3xl">
              Ma garantie satisfaction
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-pretty leading-relaxed text-muted-foreground">
              Si vos portraits ne vous plaisent pas, je les refais intégralement et gratuitement.
              Vous ne payez que quand vous êtes réellement satisfait de votre image.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
