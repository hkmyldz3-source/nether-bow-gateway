import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import heroEspresso from "@/assets/hero-espresso.jpg";
import heroStone from "@/assets/hero-stone.jpg";
import heroPour from "@/assets/hero-pour.jpg";

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
  component: HomePage,
});

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

function HomePage() {
  const [i, setI] = useState(0);
  const slide = HERO_SLIDES[i];

  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % HERO_SLIDES.length), 6500);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative h-[100svh] min-h-[680px] w-full overflow-hidden">
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

      <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/65 to-background/20" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />

      <div className="pointer-events-none absolute left-10 top-0 hidden h-full w-px bg-gradient-to-b from-transparent via-copper/40 to-transparent md:block" />
      <div className="pointer-events-none absolute right-10 top-0 hidden h-full w-px bg-gradient-to-b from-transparent via-copper/20 to-transparent md:block" />

      <div className="relative z-10 mx-auto flex h-full max-w-[1400px] flex-col justify-between px-6 pb-12 pt-32 md:px-10 md:pb-16 md:pt-40">
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
          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/reservation" className="btn-outline-copper btn-outline-copper-hover">
              Reserve a Table
              <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.5} />
            </Link>
            <Link to="/heritage" className="btn-outline-copper btn-outline-copper-hover">
              Discover the Heritage
              <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.5} />
            </Link>
          </div>
        </div>

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