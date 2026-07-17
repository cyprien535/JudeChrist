"use client"

import Image from "next/image"
import { ArrowUpRight, Sparkles, Clock, ShieldCheck } from "lucide-react"
import { motion } from "motion/react"
import { WHATSAPP_URL } from "@/lib/site"

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
}

const BADGES = [
  { value: "+50", label: "portraits livrés" },
  { value: "24h", label: "délai minimum" },
  { value: "72h", label: "délai garanti" },
  { value: "100%", label: "retouche si insatisfait" },
]

export function Hero() {
  return (
    <section id="accueil" className="relative overflow-hidden pt-16">
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        className="pointer-events-none absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-primary/20 blur-[120px]"
      />
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.2, 0.45, 0.2] }}
        transition={{ duration: 7, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
        className="pointer-events-none absolute -right-32 top-40 h-[400px] w-[400px] rounded-full bg-accent/10 blur-[120px]"
      />

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:py-24">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="relative z-10 order-2 flex flex-col items-center text-center lg:order-1 lg:items-start lg:text-left"
        >
          <motion.span
            variants={item}
            className="hidden items-center gap-2 rounded-full border border-border bg-secondary/60 px-4 py-1.5 text-xs font-medium text-accent lg:inline-flex"
          >
            <Sparkles className="h-3.5 w-3.5" />
            Portraits professionnels par IA
          </motion.span>

          <motion.h1
            variants={item}
            className="mt-6 hidden text-balance font-heading text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:block lg:text-[3.4rem]"
          >
            Des portraits pros <span className="text-accent">ultra réalistes</span>{" "}
            grâce à l&apos;IA.
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-md text-pretty leading-relaxed text-muted-foreground"
          >
            Sans studio, sans rendez-vous, sans dépenser une fortune. Je vous aide à passer au niveau
            supérieur avec des photos de profil uniques, alignées avec votre offre.
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <motion.a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Je transforme mon image maintenant
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </motion.a>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs text-muted-foreground lg:justify-start"
          >
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5 text-accent" /> En 24h
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Sparkles className="h-3.5 w-3.5 text-accent" /> 100% en ligne
            </span>
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="h-3.5 w-3.5 text-accent" /> Sans vous déplacer
            </span>
          </motion.div>

          <motion.dl
            variants={item}
            className="mt-12 grid w-full max-w-md grid-cols-2 gap-6 border-t border-border/60 pt-8 sm:grid-cols-4"
          >
            {BADGES.map((badge) => (
              <div key={badge.label}>
                <dt className="font-heading text-2xl font-bold text-foreground">{badge.value}</dt>
                <dd className="mt-1 text-xs leading-snug text-muted-foreground">{badge.label}</dd>
              </div>
            ))}
          </motion.dl>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 order-1 flex flex-col items-center lg:order-2"
        >
          <h1 className="mb-8 text-balance text-center font-heading text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:hidden">
            Des portraits pros <span className="text-accent">ultra réalistes</span>{" "}
            grâce à l&apos;IA.
          </h1>
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            className="relative mx-auto max-w-sm lg:max-w-none"
          >
            <div
              aria-hidden
              className="absolute -inset-4 rounded-[2rem] bg-gradient-to-b from-primary/30 to-transparent blur-xl"
            />
            <div className="relative overflow-hidden rounded-[1.75rem] border border-border/80 bg-card">
              <Image
                src="/jude-photo.jpg"
                alt="Jude Christ, l'Architecte Bleu, en costume bleu"
                width={602}
                height={752}
                priority
                fetchPriority="high"
                quality={80}
                sizes="(min-width: 1024px) 602px, (min-width: 640px) 384px, 100vw"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background via-background/40 to-transparent p-6 pt-16">
                <p className="font-heading text-lg font-bold">Jude Christ</p>
                <p className="text-sm text-accent">L&apos;Architecte Bleu</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
