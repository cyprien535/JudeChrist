"use client"

import { Check, ArrowUpRight, Camera, Images, Rocket, type LucideIcon } from "lucide-react"
import { motion } from "motion/react"
import { PACKS, whatsappLink } from "@/lib/site"
import { Reveal, RevealGroup, RevealItem } from "@/components/reveal"

const ICONS: Record<string, LucideIcon> = {
  camera: Camera,
  images: Images,
  rocket: Rocket,
}

export function Pricing() {
  return (
    <section id="tarifs" className="scroll-mt-16 border-t border-border/60 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="font-heading text-sm font-semibold uppercase tracking-widest text-accent">
            Tarifs
          </span>
          <h2 className="mt-4 text-balance font-heading text-3xl font-bold tracking-tight sm:text-4xl">
            Choisissez votre pack
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Des prix pensés pour tous les budgets. Paiement unique, livraison en 24 à 72h.
          </p>
        </Reveal>

        <RevealGroup className="mt-12 grid items-start gap-6 lg:grid-cols-3">
          {PACKS.map((pack) => {
            const Icon = ICONS[pack.icon] ?? Camera
            return (
              <RevealItem key={pack.name} as="article">
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border bg-card p-7 ${
                    pack.featured
                      ? "border-primary shadow-[0_0_40px_-12px_var(--primary)]"
                      : "border-border"
                  }`}
                >
                  {/* Halo lumineux qui pulse */}
                  <motion.div
                    aria-hidden
                    animate={
                      pack.featured
                        ? { opacity: [0.35, 0.7, 0.35], scale: [1, 1.15, 1] }
                        : { opacity: [0.15, 0.35, 0.15], scale: [1, 1.1, 1] }
                    }
                    transition={{
                      duration: pack.featured ? 4 : 6,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                    className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-primary/30 blur-[70px]"
                  />

                  {/* Balayage lumineux au survol */}
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-accent/10 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full"
                  />

                  <div className="relative flex flex-col">
                    {pack.featured && pack.badge && (
                      <span className="absolute -right-1 -top-1 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground shadow-[0_0_20px_-2px_var(--primary)]">
                        {pack.badge}
                      </span>
                    )}

                    {/* Icône avec lueur */}
                    <motion.div
                      whileHover={{ rotate: -6, scale: 1.08 }}
                      transition={{ type: "spring", stiffness: 300, damping: 15 }}
                      className={`relative flex h-14 w-14 items-center justify-center rounded-2xl ${
                        pack.featured
                          ? "bg-primary text-primary-foreground shadow-[0_0_25px_-4px_var(--primary)]"
                          : "bg-primary/15 text-accent"
                      }`}
                    >
                      <Icon className="h-7 w-7" />
                    </motion.div>

                    <h3 className="mt-5 font-heading text-lg font-bold">{pack.name}</h3>
                    <p className="mt-1 text-xs text-muted-foreground">{pack.note}</p>

                    <div className="mt-5 flex items-end gap-2">
                      <span className="font-heading text-3xl font-bold text-foreground">
                        {pack.price}
                      </span>
                      {pack.oldPrice && (
                        <span className="mb-1 text-sm text-muted-foreground line-through">
                          {pack.oldPrice}
                        </span>
                      )}
                    </div>

                    <ul className="mt-6 flex flex-1 flex-col gap-3">
                      {pack.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                          <span className="text-sm leading-relaxed text-muted-foreground">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <motion.a
                      href={whatsappLink(pack.message)}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className={`group/btn mt-8 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors ${
                        pack.featured
                          ? "bg-primary text-primary-foreground hover:bg-primary/90"
                          : "border border-border bg-secondary/40 text-foreground hover:bg-secondary"
                      }`}
                    >
                      {pack.cta}
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </motion.a>
                  </div>
                </motion.div>
              </RevealItem>
            )
          })}
        </RevealGroup>
      </div>
    </section>
  )
}
