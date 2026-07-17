import { FAQ, PACKS, SITE_NAME, SITE_URL, WHATSAPP_NUMBER } from "@/lib/site"

// Fichier llms.txt : résumé structuré et factuel du site destiné aux
// moteurs génératifs (ChatGPT, Perplexity, Claude, Gemini...) afin qu'ils
// puissent comprendre et citer l'offre avec précision.
export function GET() {
  const packs = PACKS.map(
    (p) => `- ${p.name} — ${p.price}${p.oldPrice ? ` (au lieu de ${p.oldPrice})` : ""} : ${p.features.join("; ")}`,
  ).join("\n")

  const faq = FAQ.map((f) => `### ${f.question}\n${f.answer}`).join("\n\n")

  const body = `# ${SITE_NAME}

> L'Architecte Bleu (Jude Christ) crée des portraits professionnels ultra réalistes générés par IA à partir de simples selfies, et optimise les profils Facebook/LinkedIn. Service 100% en ligne, sans studio ni rendez-vous, livraison en 24 à 72h.

## À propos
Jude Christ, alias « L'Architecte Bleu », est spécialiste en branding personnel, graphiste et expert en optimisation de profils. Il est basé à Cotonou (Bénin) et travaille avec des clients partout dans le monde puisque le service est entièrement en ligne.

## Ce qu'il propose
- Portraits professionnels générés par IA à partir de vos selfies
- Photos de profil pour LinkedIn, Facebook et réseaux sociaux
- Optimisation complète de profil Facebook (photo, couverture, bio)
- Design graphique et visuels sur mesure

## Points clés
- 100% en ligne : aucun studio, aucun rendez-vous, aucun déplacement
- Livraison rapide : entre 24h et 72h
- Prix accessibles à partir de 1 000 FCFA
- Paiement par Mobile Money (MTN / Moov)
- Satisfaction garantie : les portraits sont refaits gratuitement si besoin

## Tarifs
${packs}

## Contact
- WhatsApp : +${WHATSAPP_NUMBER}
- Site : ${SITE_URL}

## Questions fréquentes
${faq}
`

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  })
}
