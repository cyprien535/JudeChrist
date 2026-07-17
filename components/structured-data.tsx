import { FAQ, PACKS, SITE_NAME, SITE_URL, WHATSAPP_NUMBER } from "@/lib/site"

// Convertit "2 500 FCFA" -> "2500" pour les données structurées (devise XOF).
function parsePrice(price: string) {
  return price.replace(/[^\d]/g, "")
}

export function StructuredData() {
  const offers = PACKS.map((pack) => ({
    "@type": "Offer",
    name: pack.name,
    description: pack.features.join(". "),
    price: parsePrice(pack.price),
    priceCurrency: "XOF",
    availability: "https://schema.org/InStock",
    url: `${SITE_URL}/#tarifs`,
  }))

  const graph = [
    {
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}/#business`,
      name: SITE_NAME,
      alternateName: "L'Architecte Bleu",
      url: SITE_URL,
      image: `${SITE_URL}/og-image.png`,
      logo: `${SITE_URL}/icon.svg`,
      description:
        "Portraits professionnels ultra réalistes générés par IA à partir de vos selfies, et optimisation de profils. Sans studio, sans rendez-vous, livraison en 24 à 72h.",
      slogan: "Passez au niveau supérieur avec une image qui inspire confiance.",
      priceRange: "1000 FCFA - 15000 FCFA",
      currenciesAccepted: "XOF",
      paymentAccepted: "Mobile Money (MTN, Moov)",
      telephone: `+${WHATSAPP_NUMBER}`,
      areaServed: [
        { "@type": "Country", name: "Bénin" },
        { "@type": "Place", name: "International (100% en ligne)" },
      ],
      address: {
        "@type": "PostalAddress",
        addressCountry: "BJ",
        addressLocality: "Cotonou",
      },
      founder: {
        "@type": "Person",
        name: "Jude Christ",
        jobTitle: "Spécialiste en branding personnel",
      },
      knowsAbout: [
        "Portrait professionnel par IA",
        "Photo de profil LinkedIn",
        "Optimisation de profil Facebook",
        "Branding personnel",
        "Design graphique",
        "Image de marque",
      ],
      makesOffer: offers,
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5",
        reviewCount: "3",
        bestRating: "5",
        worstRating: "1",
      },
      sameAs: [`https://wa.me/${WHATSAPP_NUMBER}`],
    },
    {
      "@type": "Service",
      "@id": `${SITE_URL}/#service`,
      serviceType: "Portraits professionnels générés par IA",
      provider: { "@id": `${SITE_URL}/#business` },
      areaServed: [
        { "@type": "Country", name: "Bénin" },
        { "@type": "Place", name: "International (100% en ligne)" },
      ],
      description:
        "Transformez vos selfies en portraits professionnels ultra réalistes grâce à l'IA. Aucun studio ni rendez-vous : envoyez vos photos sur WhatsApp et recevez vos portraits en 24 à 72h.",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Packs de portraits IA et optimisation de profil",
        itemListElement: offers,
      },
    },
    {
      "@type": "HowTo",
      "@id": `${SITE_URL}/#methode`,
      name: "Comment obtenir des portraits professionnels par IA",
      description:
        "Le processus pour transformer vos selfies en portraits professionnels avec L'Architecte Bleu.",
      totalTime: "P3D",
      step: [
        {
          "@type": "HowToStep",
          position: 1,
          name: "Envoyez vos selfies",
          text: "Vous m'envoyez quelques selfies pris avec votre téléphone sur WhatsApp.",
        },
        {
          "@type": "HowToStep",
          position: 2,
          name: "Génération par IA",
          text: "Je génère des portraits professionnels ultra réalistes personnalisés selon votre offre.",
        },
        {
          "@type": "HowToStep",
          position: 3,
          name: "Livraison",
          text: "Vous recevez vos portraits finalisés en 24 à 72h, prêts pour tous vos profils.",
        },
      ],
    },
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#jude`,
      name: "Jude Christ",
      alternateName: "L'Architecte Bleu",
      jobTitle: "Spécialiste en branding personnel, graphiste et optimisation de profils",
      url: SITE_URL,
      image: `${SITE_URL}/jude-photo.jpg`,
      knowsAbout: [
        "Branding personnel",
        "Portrait professionnel par IA",
        "Design graphique",
        "Optimisation de profil Facebook et LinkedIn",
      ],
      worksFor: { "@id": `${SITE_URL}/#business` },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      inLanguage: "fr-FR",
      publisher: { "@id": `${SITE_URL}/#business` },
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/#faq`,
      mainEntity: FAQ.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
      speakable: {
        "@type": "SpeakableSpecification",
        cssSelector: ["#faq"],
      },
    },
  ]

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": graph,
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
