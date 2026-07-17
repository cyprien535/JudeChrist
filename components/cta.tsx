"use client"

import { MessageCircle, ArrowUpRight } from "lucide-react"
import { motion } from "motion/react"
import { WHATSAPP_URL } from "@/lib/site"

export function Cta() {
  return (
    <section className="border-t border-border/60 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-3xl border border-primary/40 bg-card px-6 py-14 text-center sm:px-12"
        >
          <motion.div
            aria-hidden
            animate={{ opacity: [0.4, 0.75, 0.4], scale: [1, 1.15, 1] }}
            transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            className="pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-primary/25 blur-[100px]"
          />
          <div className="relative">
            <h2 className="mx-auto max-w-2xl text-balance font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              Prêt à transformer votre image dès maintenant&nbsp;?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-pretty leading-relaxed text-muted-foreground">
              Discutons de votre projet. Écrivez-moi directement sur WhatsApp et faisons de votre
              image un véritable levier de croissance.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <motion.a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                <MessageCircle className="h-4 w-4" />
                Contacter sur WhatsApp
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </motion.a>
              <span className="text-sm text-muted-foreground">+229 68 90 84 73</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
