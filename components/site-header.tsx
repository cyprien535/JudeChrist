"use client"

import { useEffect, useLayoutEffect, useRef, useState } from "react"
import { ChevronDown } from "lucide-react"
import { NAV_LINKS, WHATSAPP_URL } from "@/lib/site"

export function SiteHeader() {
  const navRef = useRef<HTMLElement>(null)
  const itemRefs = useRef<Array<HTMLLIElement | null>>([])
  const moreRef = useRef<HTMLLIElement>(null)
  const [visibleCount, setVisibleCount] = useState(NAV_LINKS.length)
  const [menuOpen, setMenuOpen] = useState(false)

  // Recompute how many links fit whenever the nav container resizes.
  useLayoutEffect(() => {
    const nav = navRef.current
    if (!nav) return

    const GAP = 24 // matches gap-6 between nav items

    const compute = () => {
      const available = nav.clientWidth
      const widths = itemRefs.current.map((el) => el?.offsetWidth ?? 0)
      const moreWidth = moreRef.current?.offsetWidth ?? 0

      // First, check if everything fits without a "Plus" button.
      const total = widths.reduce((sum, w) => sum + w, 0) + GAP * (widths.length - 1)
      if (total <= available) {
        setVisibleCount(NAV_LINKS.length)
        return
      }

      // Otherwise reserve room for the "Plus" button and fit what we can.
      let used = moreWidth
      let count = 0
      for (let i = 0; i < widths.length; i++) {
        const next = used + GAP + widths[i]
        if (next <= available) {
          used = next
          count++
        } else {
          break
        }
      }
      setVisibleCount(count)
    }

    compute()
    const observer = new ResizeObserver(compute)
    observer.observe(nav)
    return () => observer.disconnect()
  }, [])

  // Close the overflow dropdown when clicking outside.
  useEffect(() => {
    if (!menuOpen) return
    const onClick = (e: MouseEvent) => {
      if (moreRef.current && !moreRef.current.contains(e.target as Node)) {
        setMenuOpen(false)
      }
    }
    document.addEventListener("click", onClick)
    return () => document.removeEventListener("click", onClick)
  }, [menuOpen])

  const hiddenLinks = NAV_LINKS.slice(visibleCount)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-4 px-4 sm:px-6">
        <a href="#accueil" className="flex shrink-0 items-center gap-2.5" aria-label="Jude Christ, l'Architecte Bleu">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary font-heading text-lg font-bold text-primary-foreground">
            JC
          </span>
          <span className="hidden flex-col leading-none sm:flex">
            <span className="font-heading text-sm font-bold tracking-tight">Jude Christ</span>
            <span className="text-xs text-accent">L&apos;Architecte Bleu</span>
          </span>
        </a>

        <nav ref={navRef} className="min-w-0 flex-1" aria-label="Navigation principale">
          <ul className="flex items-center gap-6">
            {NAV_LINKS.map((link, i) => (
              <li
                key={link.href}
                ref={(el) => {
                  itemRefs.current[i] = el
                }}
                className={i < visibleCount ? "shrink-0" : "pointer-events-none absolute opacity-0"}
                aria-hidden={i >= visibleCount}
              >
                <a
                  href={link.href}
                  tabIndex={i < visibleCount ? undefined : -1}
                  className="whitespace-nowrap text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}

            <li
              ref={moreRef}
              className={`relative shrink-0 ${hiddenLinks.length > 0 ? "" : "pointer-events-none absolute opacity-0"}`}
              aria-hidden={hiddenLinks.length === 0}
            >
              <button
                type="button"
                onClick={() => setMenuOpen((v) => !v)}
                tabIndex={hiddenLinks.length > 0 ? undefined : -1}
                className="inline-flex items-center gap-1 whitespace-nowrap text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                aria-expanded={menuOpen}
                aria-label="Plus de liens"
              >
                Plus
                <ChevronDown className={`h-4 w-4 transition-transform ${menuOpen ? "rotate-180" : ""}`} />
              </button>

              {menuOpen && hiddenLinks.length > 0 && (
                <div className="absolute right-0 top-full mt-2 min-w-40 rounded-xl border border-border/60 bg-background p-1.5 shadow-lg">
                  {hiddenLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className="block rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              )}
            </li>
          </ul>
        </nav>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 items-center rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 sm:px-5"
        >
          Me contacter
        </a>
      </div>
    </header>
  )
}
