export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://architecte-bleu.vercel.app"
).replace(/\/$/, "")

export const SITE_NAME = "Jude Christ — L'Architecte Bleu"

export const WHATSAPP_NUMBER = "22968908473"

export function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

export const WHATSAPP_URL = whatsappLink(
  "Bonjour Jude, je veux transformer mon image avec des portraits professionnels IA. Pouvez-vous m'en dire plus ?",
)

export const NAV_LINKS = [
  { label: "Le problème", href: "#probleme" },
  { label: "Méthode", href: "#methode" },
  { label: "Réalisations", href: "#realisations" },
  { label: "Tarifs", href: "#tarifs" },
  { label: "FAQ", href: "#faq" },
]

export const PACKS = [
  {
    name: "1 Photo IA",
    icon: "camera",
    price: "1 000 FCFA",
    oldPrice: "2 000 FCFA",
    note: "Paiement unique",
    featured: false,
    features: [
      "1 photo professionnelle générée par IA",
      "Style personnalisé selon votre offre",
      "Retouches légères incluses",
      "Livraison en 24 à 72h",
    ],
    cta: "Je commande 1 photo",
    message:
      "Bonjour Jude, je veux commander le pack 1 Photo IA à 1 000 FCFA. Comment procéder ?",
  },
  {
    name: "Pack 3 Photos",
    icon: "images",
    price: "2 500 FCFA",
    oldPrice: "5 000 FCFA",
    note: "Paiement unique",
    featured: true,
    badge: "Le plus populaire",
    features: [
      "3 photos IA aux styles variés",
      "Style personnalisé selon votre offre",
      "Retouches légères incluses",
      "Livraison en 24 à 72h",
      "Bonus : optimisation profil Facebook à 12 000 FCFA (-20%)",
    ],
    cta: "Je choisis le pack 3",
    message:
      "Bonjour Jude, je veux commander le Pack 3 Photos à 2 500 FCFA. Comment procéder ?",
  },
  {
    name: "Optimisation Facebook",
    icon: "rocket",
    price: "15 000 FCFA",
    oldPrice: null,
    note: "Intervention complète",
    featured: false,
    features: [
      "Analyse complète de votre profil",
      "Photo de profil + couverture",
      "Bio optimisée pour convertir",
      "Audit + mise en place",
      "-20% (12 000 FCFA) avec le Pack 3 Photos",
    ],
    cta: "J'optimise mon profil",
    message:
      "Bonjour Jude, je veux l'Optimisation Facebook à 15 000 FCFA. Comment procéder ?",
  },
]

export const FAQ = [
  {
    question: "Combien de temps pour recevoir mes portraits ?",
    answer:
      "Entre 24h et 72h maximum après réception de vos selfies. Le délai minimum est de 24h, et je garantis une livraison sous 72h.",
  },
  {
    question: "Dois-je me déplacer ou prendre rendez-vous ?",
    answer:
      "Non, tout se fait 100% en ligne. Aucun studio, aucun déplacement, aucun rendez-vous. Vous m'envoyez simplement quelques selfies depuis votre téléphone.",
  },
  {
    question: "Quelles photos dois-je envoyer ?",
    answer:
      "Quelques selfies simples pris avec votre téléphone, sous différents angles et avec une bonne lumière. Je m'occupe de tout le reste.",
  },
  {
    question: "Êtes-vous basé à Cotonou / au Bénin ?",
    answer:
      "Oui, je suis basé au Bénin, mais je travaille avec des clients partout puisque le service est entièrement en ligne.",
  },
  {
    question: "Comment se passe le paiement ?",
    answer:
      "Le paiement se fait par Mobile Money (MTN / Moov) ou selon ce qui vous arrange. On en discute directement sur WhatsApp avant de démarrer.",
  },
  {
    question: "Et si les portraits ne me plaisent pas ?",
    answer:
      "Je les refais intégralement et gratuitement. Vous ne payez que quand vous êtes réellement satisfait de votre image.",
  },
]
