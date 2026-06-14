import { Instagram, Facebook, Clock, MapPin, Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-ink/60">
      <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-28">
        <div className="grid gap-14 md:grid-cols-12">
          <div className="md:col-span-4">
            <div className="font-display text-sm font-semibold tracking-[0.28em] text-cream">
              THE NETHER BOW
              <br />
              PORT · MMXXVI
            </div>
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-muted-foreground">
              An elite industrial coffee house built on the site of Edinburgh's lost
              city gate. Open to travellers, locals, and the simply curious.
            </p>
          </div>

          <div className="md:col-span-3">
            <div className="eyebrow flex items-center gap-2">
              <Clock className="h-3 w-3" strokeWidth={1.5} /> Hours
            </div>
            <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
              <li className="flex justify-between gap-4"><span>Mon — Sun</span><span className="text-cream">07 — 22</span></li>
              <li className="flex justify-between gap-4 border-t border-border pt-3"><span>Festival hours</span><span className="text-copper">07 — 24</span></li>
            </ul>
          </div>

          <div className="md:col-span-5">
            <div className="eyebrow flex items-center gap-2">
              <MapPin className="h-3 w-3" strokeWidth={1.5} /> Find the Port
            </div>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              12 High Street, on the historic Royal Mile,
              <br />
              <span className="text-cream">directly opposite the old high street cross.</span>
              <br />
              Edinburgh EH1 1TB · Scotland
            </p>
            <div className="mt-6 flex items-center gap-6 text-sm text-muted-foreground">
              <a href="mailto:hello@netherbowport.co" className="copper-underline flex items-center gap-2 hover:text-cream">
                <Mail className="h-3.5 w-3.5" strokeWidth={1.5} />
                <span>hello@thenetherbowport.com</span>
              </a>
              <a href="tel:+441310000000" className="copper-underline flex items-center gap-2 hover:text-cream">
                <Phone className="h-3.5 w-3.5" strokeWidth={1.5} />
                <span>+44 131 629 2680</span>
              </a>
            </div>
            <div className="mt-8 flex items-center gap-3">
              <a aria-label="Instagram" href="#" className="grid h-10 w-10 place-items-center border border-copper/50 text-cream transition-colors hover:bg-copper/15 hover:border-copper">
                <Instagram className="h-4 w-4" strokeWidth={1.5} />
              </a>
              <a aria-label="Facebook" href="#" className="grid h-10 w-10 place-items-center border border-copper/50 text-cream transition-colors hover:bg-copper/15 hover:border-copper">
                <Facebook className="h-4 w-4" strokeWidth={1.5} />
              </a>
            </div>
          </div>
        </div>

        <div className="hairline mt-16" />

        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 text-[0.68rem] uppercase tracking-[0.28em] text-muted-foreground">
          <span>Copyright © 2026 The Nether Bow Port.</span>
          <span>Royal Mile · Edinburgh</span>
        </div>
      </div>
    </footer>
  );
}