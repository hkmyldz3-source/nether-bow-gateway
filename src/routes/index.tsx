import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Instagram,
  Facebook,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Clock,
  Mail,
  Phone,
} from "lucide-react";
import heroEspresso from "@/assets/hero-espresso.jpg";
import heroStone from "@/assets/hero-stone.jpg";
import heroPour from "@/assets/hero-pour.jpg";
import heritageOld from "@/assets/heritage-old.jpg";
import heritageNew from "@/assets/heritage-new.jpg";
import menuPastry from "@/assets/menu-pastry.jpg";
import menuEspresso from "@/assets/menu-espresso.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Nether Bow Port — Edinburgh's Heritage Coffee House" },
      {
        name: "description",
        content:
          "Specialty espresso, artisan pastries, and elite industrial heritage on the Royal Mile — built upon the site of Edinburgh's lost city gate.",
      },
      { property: "og:title", content: "The Nether Bow Port" },
      {
        property: "og:description",
        content: "Where the city began — a heritage coffee house on Edinburgh's Royal Mile.",
      },
      { property: "og:image", content: heroEspresso },
      { name: "twitter:image", content: heroEspresso },
    ],
  }),
  component: Index,
});

const NAV = [
  { id: "heritage", label: "Heritage" },
  { id: "menu", label: "Menu" },
  { id: "gallery", label: "Gallery" },
  { id: "reservation", label: "Reservation" },
  { id: "contact", label: "Contact" },
];

const HERO_SLIDES = [
  {
    img: heroEspresso,
    eyebrow: "Est. on Ancient Stone",
    title: "The historic gateway to Edinburgh's coffee culture.",
    caption: "Brushed copper. Slow extraction. A welcome eight centuries in the making.",
  },
  {
    img: heroStone,
    eyebrow: "Built Upon History",
    title: "Where every cup is poured against the weight of the Old Town.",
    caption: "The stones remember. The roast carries the memory forward.",
  },
  {
    img: heroPour,
    eyebrow: "Crafted in Copper",
    title: "A pour-over ritual, performed inside Edinburgh's lost city gate.",
    caption: "Single-origin lots, hand-selected for the traveller's pause.",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Heritage />
        <Menu />
        <Gallery />
        <Reservation />
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl bg-background/85 border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 md:px-10 md:py-6">
        <a href="#top" className="font-display text-[0.78rem] md:text-sm font-semibold tracking-[0.28em] text-cream">
          THE NETHER BOW PORT
        </a>
        <nav className="hidden items-center gap-9 lg:flex">
          {NAV.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="copper-underline text-[0.72rem] uppercase tracking-[0.28em] text-muted-foreground transition-colors hover:text-cream"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href="#reservation"
          className="btn-outline-copper btn-outline-copper-hover hidden md:inline-flex"
        >
          Enter the Port
          <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.5} />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  const [i, setI] = useState(0);
  const slide = HERO_SLIDES[i];

  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % HERO_SLIDES.length), 6500);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="top" className="relative h-[100svh] min-h-[680px] w-full overflow-hidden">
      {/* Background image stack */}
      {HERO_SLIDES.map((s, idx) => (
        <div
          key={s.img}
          className={`absolute inset-0 transition-opacity duration-[1400ms] ${
            idx === i ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={s.img}
            alt=""
            className="h-full w-full object-cover"
            fetchPriority={idx === 0 ? "high" : "auto"}
          />
        </div>
      ))}

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/65 to-background/20" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />

      {/* Vertical hairline accents */}
      <div className="pointer-events-none absolute left-10 top-0 hidden h-full w-px bg-gradient-to-b from-transparent via-copper/40 to-transparent md:block" />
      <div className="pointer-events-none absolute right-10 top-0 hidden h-full w-px bg-gradient-to-b from-transparent via-copper/20 to-transparent md:block" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-[1400px] flex-col justify-between px-6 pb-12 pt-32 md:px-10 md:pb-16 md:pt-40">
        {/* Left column */}
        <div className="max-w-3xl">
          <div className="mb-7 flex items-center gap-4">
            <span className="h-px w-14 bg-copper" />
            <span className="eyebrow">{slide.eyebrow} · Edinburgh · MCCCLXXX</span>
          </div>
          <h1 className="font-display text-[2.6rem] font-medium uppercase leading-[1.02] tracking-[0.02em] text-cream md:text-[5rem] lg:text-[6rem]">
            {slide.title.split(" ").slice(0, 3).join(" ")}
            <br />
            <span className="text-copper italic font-normal normal-case tracking-normal">
              {slide.title.split(" ").slice(3).join(" ")}
            </span>
          </h1>
          <p className="mt-8 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
            {slide.caption}
          </p>
        </div>

        {/* Bottom row: slide controls + meta */}
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="hidden flex-col gap-2 md:flex">
            <span className="eyebrow">Royal Mile</span>
            <span className="text-xs text-muted-foreground tracking-widest">
              55.9508° N / 3.1839° W
            </span>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3 font-display text-cream">
              <span className="text-2xl tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="h-px w-10 bg-copper" />
              <span className="text-xs tabular-nums text-muted-foreground">
                {String(HERO_SLIDES.length).padStart(2, "0")}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <button
                aria-label="Previous"
                onClick={() => setI((p) => (p - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)}
                className="grid h-11 w-11 place-items-center border border-copper/60 text-cream transition-colors hover:bg-copper/15 hover:border-copper"
              >
                <ChevronLeft className="h-4 w-4" strokeWidth={1.5} />
              </button>
              <button
                aria-label="Next"
                onClick={() => setI((p) => (p + 1) % HERO_SLIDES.length)}
                className="grid h-11 w-11 place-items-center border border-copper/60 text-cream transition-colors hover:bg-copper/15 hover:border-copper"
              >
                <ChevronRight className="h-4 w-4" strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Heritage() {
  return (
    <section id="heritage" className="relative py-28 md:py-40">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
          {/* Text column */}
          <div className="lg:col-span-6 lg:pt-12">
            <div className="mb-8 flex items-center gap-4">
              <span className="h-px w-14 bg-copper" />
              <span className="eyebrow">I — Heritage</span>
            </div>
            <h2 className="font-display text-5xl font-medium uppercase leading-[1.05] tracking-[0.01em] text-cream md:text-7xl">
              Where the
              <br />
              <span className="italic text-copper font-normal normal-case">city began.</span>
            </h2>

            <div className="mt-10 space-y-6 text-[0.95rem] leading-[1.85] text-muted-foreground">
              <p>
                In 1380, the Netherbow Port stood guard at the foot of the Royal Mile — a
                stone gate, a porter's bell, a threshold between the burgh of Edinburgh
                and the burgh of the Canongate. Travellers paid their toll. Merchants
                announced their wares. Heads of traitors looked down from its spikes.
              </p>
              <p>
                The gate was demolished in 1764. Its bell still hangs nearby. Its brass
                outline is set in cobblestones at our front door.
              </p>
              <p className="border-l border-copper/70 pl-6 italic text-cream/90">
                "Though the stone gate is gone, the spirit of welcoming travellers
                remains — only now we serve them coffee instead of charging a toll."
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-x-10 gap-y-8 border-t border-border pt-10">
              <Stat n="1380" label="Original gate erected" />
              <Stat n="1764" label="Stone removed" />
              <Stat n="2019" label="The Port reopened" />
              <Stat n="14" label="Single-origin lots" />
            </div>
          </div>

          {/* Image column - vertical split */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-2 gap-3 md:gap-5">
              <div className="relative aspect-[3/5] overflow-hidden">
                <img
                  src={heritageOld}
                  alt="Historical etching of the Netherbow Port gate"
                  loading="lazy"
                  className="h-full w-full object-cover grayscale-[0.3] sepia-[0.4]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />
                <span className="absolute bottom-4 left-4 eyebrow text-cream/80">
                  c. 1450
                </span>
              </div>
              <div className="relative aspect-[3/5] translate-y-12 overflow-hidden md:translate-y-20">
                <img
                  src={heritageNew}
                  alt="Modern brass espresso bar interior"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                <span className="absolute bottom-4 left-4 eyebrow text-cream/80">
                  Today
                </span>
              </div>
            </div>

            <div className="mt-16 hidden border-l border-copper/40 pl-6 md:block">
              <span className="eyebrow">Curator's note</span>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Our interiors preserve the exposed sandstone of the 18th-century
                merchant's house — refit with brushed brass, blackened steel and
                an Italian La Marzocco copper-clad lever group.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div>
      <div className="font-display text-3xl text-copper md:text-4xl">{n}</div>
      <div className="mt-1 text-[0.7rem] uppercase tracking-[0.28em] text-muted-foreground">
        {label}
      </div>
    </div>
  );
}

const MENU_ITEMS = [
  {
    no: "01",
    name: "Canongate Espresso",
    origin: "Ethiopia · Yirgacheffe — Washed",
    notes:
      "A short, sovereign cup. Bergamot oil, dark stone fruit, the faint copper of a struck bell.",
    price: "£3.20",
  },
  {
    no: "02",
    name: "The Porter's Pour-Over",
    origin: "Colombia · Huila — Honey Process",
    notes:
      "Three minutes of attention, performed at the bar. Brown sugar, blood orange, a long terracotta finish.",
    price: "£5.40",
  },
  {
    no: "03",
    name: "Tollkeeper's Flat White",
    origin: "House Blend — Edinburgh Roast",
    notes:
      "Two ristretto shots, micro-foamed Ayrshire whole milk. The currency of a working morning.",
    price: "£4.10",
  },
  {
    no: "04",
    name: "Royal Mile Cortado",
    origin: "Guatemala · Antigua — Natural",
    notes:
      "Equal parts steel and sweetness. Toasted hazelnut, milk chocolate, a structural finish.",
    price: "£3.90",
  },
];

function Menu() {
  return (
    <section id="menu" className="relative border-t border-border py-28 md:py-40">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="mb-8 flex items-center gap-4">
              <span className="h-px w-14 bg-copper" />
              <span className="eyebrow">II — Portfolio of Flavours</span>
            </div>
            <h2 className="font-display text-5xl font-medium uppercase leading-[1.05] text-cream md:text-7xl">
              A short
              <br />
              roast of <span className="italic text-copper font-normal normal-case">consequence.</span>
            </h2>
            <p className="mt-8 max-w-md text-[0.95rem] leading-[1.85] text-muted-foreground">
              We list four programs at a time. Each lot is sourced direct, roasted in
              Leith on a 1956 Probat L12, and rested for ten days before service.
            </p>

            <a
              href="#reservation"
              className="btn-outline-copper btn-outline-copper-hover mt-10"
            >
              Explore Full Menu
              <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.5} />
            </a>

            {/* Overlapping editorial imagery */}
            <div className="relative mt-20 hidden h-[420px] lg:block">
              <img
                src={menuPastry}
                alt="Artisan pastry on slate"
                loading="lazy"
                className="absolute left-0 top-0 h-[320px] w-[60%] object-cover"
              />
              <img
                src={menuEspresso}
                alt="Espresso in copper cup"
                loading="lazy"
                className="absolute bottom-0 right-0 h-[300px] w-[55%] border-[6px] border-background object-cover"
              />
            </div>
          </div>

          {/* Right column - list */}
          <div className="lg:col-span-7 lg:pt-14">
            <ul className="divide-y divide-border">
              {MENU_ITEMS.map((m) => (
                <li key={m.no} className="group grid grid-cols-12 gap-6 py-10 first:pt-0">
                  <div className="col-span-2 font-display text-2xl text-copper md:text-3xl">
                    {m.no}
                  </div>
                  <div className="col-span-7">
                    <h3 className="font-display text-xl uppercase tracking-wide text-cream md:text-2xl">
                      {m.name}
                    </h3>
                    <div className="mt-1 text-[0.68rem] uppercase tracking-[0.28em] text-copper/80">
                      {m.origin}
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {m.notes}
                    </p>
                  </div>
                  <div className="col-span-3 text-right font-display text-xl text-cream md:text-2xl">
                    {m.price}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

const GALLERY = [
  { img: gallery1, caption: "The Vault Room · Sandstone & Copper" },
  { img: gallery2, caption: "Copper Service Lines · Detail" },
  { img: gallery3, caption: "Marble Bar · Morning Light" },
  { img: gallery4, caption: "Lever Group · La Marzocco GS3" },
  { img: gallery5, caption: "The Royal Mile · Blue Hour" },
  { img: heroEspresso, caption: "Espresso Service · House Blend" },
];

function Gallery() {
  return (
    <section id="gallery" className="relative border-t border-border py-28 md:py-40">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <div>
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-14 bg-copper" />
              <span className="eyebrow">III — Inside the Port</span>
            </div>
            <h2 className="font-display max-w-3xl text-5xl font-medium uppercase leading-[1.05] text-cream md:text-7xl">
              A study in <span className="italic text-copper font-normal normal-case">brass &amp; brick.</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            Scroll the room — interiors, surfaces, and the slow theatre of service.
          </p>
        </div>
      </div>

      <div className="mt-16 overflow-x-auto pb-6 [scrollbar-color:var(--copper)_transparent]">
        <div className="flex gap-5 px-6 md:px-10">
          {GALLERY.map((g, idx) => (
            <figure
              key={idx}
              className="relative flex-shrink-0 overflow-hidden"
              style={{ width: "clamp(280px, 32vw, 460px)", height: "clamp(380px, 60vh, 580px)" }}
            >
              <img
                src={g.img}
                alt={g.caption}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1200ms] hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-background/10 to-transparent" />
              <figcaption className="absolute bottom-5 left-5 right-5 flex items-end justify-between text-cream">
                <span className="text-[0.68rem] uppercase tracking-[0.28em]">{g.caption}</span>
                <span className="font-display text-sm text-copper">
                  {String(idx + 1).padStart(2, "0")}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Reservation() {
  return (
    <section id="reservation" className="relative border-t border-border py-28 md:py-40">
      <div className="mx-auto max-w-[1100px] px-6 md:px-10">
        <div className="relative border border-copper/40 bg-ink p-8 md:p-16">
          {/* Corner accents */}
          <span className="absolute -left-px -top-px h-6 w-6 border-l border-t border-copper" />
          <span className="absolute -right-px -top-px h-6 w-6 border-r border-t border-copper" />
          <span className="absolute -bottom-px -left-px h-6 w-6 border-b border-l border-copper" />
          <span className="absolute -bottom-px -right-px h-6 w-6 border-b border-r border-copper" />

          <div className="mb-10 flex items-center gap-4">
            <span className="h-px w-14 bg-copper" />
            <span className="eyebrow">IV — Reservation</span>
          </div>
          <h2 className="font-display text-4xl font-medium uppercase leading-[1.05] text-cream md:text-6xl">
            Reserve your <span className="italic text-copper font-normal normal-case">passage.</span>
          </h2>
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground">
            Tasting flights and bar-side service available daily. A reservation is
            recommended for parties of three or more, particularly during Festival
            season.
          </p>

          <form
            className="mt-14 grid gap-10 md:grid-cols-2"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thank you — we will confirm your reservation by email.");
            }}
          >
            <Field label="Full Name" placeholder="Robert L. Stevenson" type="text" />
            <Field label="Email" placeholder="you@domain.com" type="email" />
            <Field label="Date" placeholder="DD / MM / YYYY" type="date" />
            <Field label="Guests" placeholder="2" type="number" />
            <div className="md:col-span-2">
              <Field label="A note for the porter" placeholder="Window table, if possible" type="text" />
            </div>
            <div className="md:col-span-2 mt-2 flex flex-wrap items-center justify-between gap-6 border-t border-border pt-8">
              <span className="text-[0.68rem] uppercase tracking-[0.28em] text-muted-foreground">
                Confirmation within the hour
              </span>
              <button
                type="submit"
                className="btn-outline-copper btn-outline-copper-hover"
              >
                Reserve a Table
                <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.5} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  placeholder,
  type,
}: {
  label: string;
  placeholder: string;
  type: string;
}) {
  return (
    <label className="block">
      <span className="block text-[0.66rem] uppercase tracking-[0.32em] text-copper/80">
        {label}
      </span>
      <input
        type={type}
        placeholder={placeholder}
        className="mt-3 w-full border-0 border-b border-border bg-transparent pb-3 font-sans text-cream placeholder:text-muted-foreground/60 outline-none transition-colors focus:border-copper"
      />
    </label>
  );
}

function Footer() {
  return (
    <footer id="contact" className="border-t border-border bg-ink/60">
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
              <li className="flex justify-between gap-4">
                <span>Mon — Thu</span>
                <span className="text-cream">07 — 19</span>
              </li>
              <li className="flex justify-between gap-4">
                <span>Fri — Sat</span>
                <span className="text-cream">07 — 22</span>
              </li>
              <li className="flex justify-between gap-4">
                <span>Sunday</span>
                <span className="text-cream">08 — 18</span>
              </li>
              <li className="flex justify-between gap-4 border-t border-border pt-3">
                <span>Festival hours</span>
                <span className="text-copper">06 — 24</span>
              </li>
            </ul>
          </div>

          <div className="md:col-span-5">
            <div className="eyebrow flex items-center gap-2">
              <MapPin className="h-3 w-3" strokeWidth={1.5} /> Find the Port
            </div>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              43 High Street, on the historic Royal Mile,
              <br />
              <span className="text-cream">directly opposite the old high street cross.</span>
              <br />
              Edinburgh EH1 1SR · Scotland
            </p>
            <div className="mt-6 flex items-center gap-6 text-sm text-muted-foreground">
              <a href="mailto:hello@netherbowport.co" className="copper-underline flex items-center gap-2 hover:text-cream">
                <Mail className="h-3.5 w-3.5" strokeWidth={1.5} /> hello@netherbowport.co
              </a>
              <a href="tel:+441310000000" className="copper-underline flex items-center gap-2 hover:text-cream">
                <Phone className="h-3.5 w-3.5" strokeWidth={1.5} /> +44 131 000 0000
              </a>
            </div>
            <div className="mt-8 flex items-center gap-3">
              <a
                aria-label="Instagram"
                href="#"
                className="grid h-10 w-10 place-items-center border border-copper/50 text-cream transition-colors hover:bg-copper/15 hover:border-copper"
              >
                <Instagram className="h-4 w-4" strokeWidth={1.5} />
              </a>
              <a
                aria-label="Facebook"
                href="#"
                className="grid h-10 w-10 place-items-center border border-copper/50 text-cream transition-colors hover:bg-copper/15 hover:border-copper"
              >
                <Facebook className="h-4 w-4" strokeWidth={1.5} />
              </a>
            </div>
          </div>
        </div>

        <div className="hairline mt-16" />

        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 text-[0.68rem] uppercase tracking-[0.28em] text-muted-foreground">
          <span>Copyright © 2026 The Nether Bow Port. Crafted for modern travellers.</span>
          <span>Royal Mile · Edinburgh</span>
        </div>
      </div>
    </footer>
  );
}
