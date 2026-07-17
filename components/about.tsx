import Image from "next/image"
import { CheckCircle2 } from "lucide-react"
import { Reveal, RevealGroup, RevealItem } from "@/components/reveal"

const POINTS = [
  "Une image qui inspire confiance dès le premier regard",
  "Un positionnement clair qui attire les bonnes opportunités",
  "Des profils cohérents sur tous vos canaux digitaux",
  "Des visuels sur mesure grâce à mes compétences de graphiste",
  "Un accompagnement stratégique de bout en bout",
]

export function About() {
  return (
    <section id="a-propos" className="scroll-mt-16 border-t border-border/60 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal direction="right">
            <span className="font-heading text-sm font-semibold uppercase tracking-widest text-accent">
              À propos
            </span>
            <h2 className="mt-4 text-balance font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              Je suis Jude Christ, l&apos;Architecte Bleu
            </h2>
            <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
              Spécialiste en branding personnel, graphiste et expert en optimisation de profils,
              j&apos;aide entrepreneurs, créateurs de contenu et professionnels à construire une
              image qui inspire confiance et attire les bonnes opportunités. Portraits
              professionnels, identité visuelle, design graphique, optimisation de profil : je
              transforme des profils ordinaires en véritables vitrines digitales.
            </p>
            <RevealGroup as="ul" className="mt-8 flex flex-col gap-4">
              {POINTS.map((point) => (
                <RevealItem key={point} as="li" direction="left" className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <span className="text-sm leading-relaxed text-foreground">{point}</span>
                </RevealItem>
              ))}
            </RevealGroup>
          </Reveal>

          <Reveal direction="left" delay={0.15} className="relative overflow-hidden rounded-2xl">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-6 -top-6 h-32 w-32 rounded-full bg-primary/25 blur-3xl"
            />
            <div className="relative overflow-hidden rounded-2xl border border-border bg-card">
              <Image
                src="/jude-photo.jpg"
                alt="Jude Christ, l'Architecte Bleu, en costume bleu"
                width={602}
                height={752}
                loading="lazy"
                quality={80}
                sizes="(min-width: 1024px) 602px, (min-width: 640px) 384px, 100vw"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background via-background/60 to-transparent p-6 pt-20">
                <blockquote>
                  <p className="font-heading text-lg font-medium leading-relaxed text-foreground sm:text-xl">
                    &laquo; Votre image est votre premier argument. Avant même de parler, elle décide
                    si l&apos;on vous fait confiance. &raquo;
                  </p>
                  <footer className="mt-4 flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary font-heading text-xs font-bold text-primary-foreground">
                      JC
                    </span>
                    <span>
                      <span className="block font-heading text-sm font-bold">Jude Christ</span>
                      <span className="block text-xs text-accent">L&apos;Architecte Bleu</span>
                    </span>
                  </footer>
                </blockquote>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
