import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Clock, Instagram, Facebook } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — The Nether Bow Port" },
      {
        name: "description",
        content:
          "Find the Port: 43 High Street, on the historic Royal Mile, directly opposite the old high street cross. Edinburgh EH1 1SR.",
      },
      { property: "og:title", content: "Contact — The Nether Bow Port" },
      { property: "og:description", content: "Find the Port on Edinburgh's Royal Mile." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <section className="relative pt-40 pb-28 md:pt-48 md:pb-40">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="mb-10 flex items-center gap-4">
          <span className="h-px w-14 bg-copper" />
          <span className="eyebrow">V — Contact</span>
        </div>
        <h1 className="font-display text-5xl font-medium uppercase leading-[1.05] text-cream md:text-7xl">
          Find the <span className="italic text-copper font-normal normal-case">Port.</span>
        </h1>

        <div className="mt-16 grid gap-14 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="eyebrow flex items-center gap-2">
              <MapPin className="h-3 w-3" strokeWidth={1.5} /> Location
            </div>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              43 High Street, on the historic Royal Mile,
              <br />
              <span className="text-cream">directly opposite the old high street cross.</span>
              <br />
              Edinburgh EH1 1SR · Scotland
            </p>
            <div className="mt-8 space-y-3 text-sm text-muted-foreground">
              <a href="mailto:hello@netherbowport.co" className="copper-underline flex items-center gap-2 hover:text-cream">
                <Mail className="h-3.5 w-3.5" strokeWidth={1.5} /> hello@netherbowport.co
              </a>
              <a href="tel:+441310000000" className="copper-underline flex items-center gap-2 hover:text-cream">
                <Phone className="h-3.5 w-3.5" strokeWidth={1.5} /> +44 131 000 0000
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

          <div className="md:col-span-4">
            <div className="eyebrow flex items-center gap-2">
              <Clock className="h-3 w-3" strokeWidth={1.5} /> Hours
            </div>
            <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
              <li className="flex justify-between gap-4"><span>Mon — Thu</span><span className="text-cream">07 — 19</span></li>
              <li className="flex justify-between gap-4"><span>Fri — Sat</span><span className="text-cream">07 — 22</span></li>
              <li className="flex justify-between gap-4"><span>Sunday</span><span className="text-cream">08 — 18</span></li>
              <li className="flex justify-between gap-4 border-t border-border pt-3"><span>Festival hours</span><span className="text-copper">06 — 24</span></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <div className="eyebrow">For Travellers</div>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              Five minutes from Waverley Station. Step-free entrance from High Street.
              Group bookings welcome with 48 hours' notice.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}