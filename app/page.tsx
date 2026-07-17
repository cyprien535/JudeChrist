import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { Problem } from "@/components/problem"
import { Solution } from "@/components/solution"
import { Method } from "@/components/method"
import { Portfolio } from "@/components/portfolio"
import { Audience } from "@/components/audience"
import { About } from "@/components/about"
import { Testimonials } from "@/components/testimonials"
import { Pricing } from "@/components/pricing"
import { Guarantee } from "@/components/guarantee"
import { Faq } from "@/components/faq"
import { Cta } from "@/components/cta"
import { SiteFooter } from "@/components/site-footer"
import { FloatingWhatsApp } from "@/components/floating-whatsapp"

export default function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Method />
        <Portfolio />
        <Audience />
        <About />
        <Testimonials />
        <Pricing />
        <Guarantee />
        <Faq />
        <Cta />
      </main>
      <SiteFooter />
      <FloatingWhatsApp />
    </div>
  )
}
