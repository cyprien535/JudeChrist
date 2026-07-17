import { NAV_LINKS, WHATSAPP_URL } from "@/lib/site"

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary font-heading text-lg font-bold text-primary-foreground">
              JC
            </span>
            <span className="flex flex-col leading-none">
              <span className="font-heading text-sm font-bold tracking-tight">Jude Christ</span>
              <span className="text-xs text-accent">L&apos;Architecte Bleu</span>
            </span>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-2" aria-label="Navigation pied de page">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-accent transition-colors hover:text-foreground"
          >
            +229 68 90 84 73
          </a>
        </div>

        <div className="mt-8 border-t border-border/60 pt-8">
          <p className="text-center text-xs text-muted-foreground">
            © {new Date().getFullYear()} Jude Christ — L&apos;Architecte Bleu. Branding personnel
            &amp; optimisation de profils.
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-center text-[11px] leading-relaxed text-muted-foreground/70">
            Site développé par{" "}
            <a
              href="https://www.facebook.com/profile.php?id=61588131732811"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-accent transition-colors hover:text-foreground"
            >
              MEVI Cyprien
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
