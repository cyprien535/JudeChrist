"use client"

import { MessageCircle } from "lucide-react"
import { motion } from "motion/react"
import { WHATSAPP_URL } from "@/lib/site"

export function FloatingWhatsApp() {
  return (
    <motion.a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contacter Jude sur WhatsApp"
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 260, damping: 18 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.94 }}
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-primary px-4 py-3.5 font-semibold text-primary-foreground shadow-lg shadow-primary/30 sm:bottom-6 sm:right-6"
    >
      <span className="relative flex h-6 w-6 items-center justify-center">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-foreground/40" />
        <MessageCircle className="relative h-6 w-6" />
      </span>
      <span className="hidden text-sm sm:inline">Écrivez-moi</span>
    </motion.a>
  )
}
