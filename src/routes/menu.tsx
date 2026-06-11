import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import menuData from "@/data/menu.json";
import { useMemo, useState } from "react";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — The Nether Bow Port" },
      {
        name: "description",
        content:
          "A short roast of consequence: four single-origin programs, roasted in Leith on a 1956 Probat L12 and rested for ten days before service.",
      },
      { property: "og:title", content: "Menu — The Nether Bow Port" },
      {
        property: "og:description",
        content: "Specialty espresso, pour-over and milk service on the Royal Mile.",
      },
    ],
  }),
  component: MenuPage,
});

type Item = {
  name: string;
  price?: number;
  description?: string;
  options?: string[];
  tags?: string[];
  extras?: string;
};
type Section = { manuName: string; content: Record<string, Item[]> };

const SECTIONS = (menuData as { menu: Section[] }).menu.filter(
  (s) => s.content && Object.keys(s.content).length > 0,
);

const formatCategory = (key: string) =>
  key.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

const formatPrice = (p?: number) =>
  typeof p === "number" ? `£${p.toFixed(2)}` : "";

function MenuPage() {
  const [active, setActive] = useState(SECTIONS[0]?.manuName ?? "");
  const current = useMemo(
    () => SECTIONS.find((s) => s.manuName === active) ?? SECTIONS[0],
    [active],
  );

  return (
    <section className="relative pt-40 pb-28 md:pt-48 md:pb-32">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        <div className="mb-10 flex items-center gap-4">
          <span className="h-px w-14 bg-copper" />
          <span className="eyebrow">II — The Carte</span>
        </div>
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <h1 className="font-display text-5xl font-medium uppercase leading-[1.05] text-cream md:text-6xl">
            The full <span className="italic text-copper font-normal normal-case">carte.</span>
          </h1>
          <Link to="/reservation" className="btn-outline-copper btn-outline-copper-hover self-start md:self-auto">
            Reserve a Table
            <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.5} />
          </Link>
        </div>

        <div className="mt-12 flex flex-wrap gap-2 border-y border-border py-4">
          {SECTIONS.map((s) => {
            const isActive = s.manuName === current?.manuName;
            return (
              <button
                key={s.manuName}
                type="button"
                onClick={() => setActive(s.manuName)}
                className={`px-5 py-2 text-[0.7rem] uppercase tracking-[0.28em] transition-colors ${
                  isActive
                    ? "bg-copper/15 text-copper border border-copper/60"
                    : "border border-transparent text-muted-foreground hover:text-cream"
                }`}
              >
                {s.manuName}
              </button>
            );
          })}
        </div>

        <div className="mt-16 space-y-20">
          {current &&
            Object.entries(current.content).map(([category, items]) => (
              <div key={category}>
                <div className="mb-8 flex items-baseline gap-4">
                  <h2 className="font-display text-xl uppercase tracking-[0.25em] text-copper md:text-2xl">
                    {formatCategory(category)}
                  </h2>
                  <span className="h-px flex-1 bg-border" />
                  <span className="font-display text-xs text-muted-foreground">
                    {String(items.length).padStart(2, "0")}
                  </span>
                </div>
                <ul className="divide-y divide-border/60">
                  {items.map((item, idx) => (
                    <li key={`${item.name}-${idx}`} className="grid grid-cols-12 gap-4 py-6">
                      <div className="col-span-9">
                        <div className="flex items-center gap-3">
                          <h3 className="font-display text-base uppercase tracking-wide text-cream md:text-lg">
                            {item.name}
                          </h3>
                          {item.tags?.map((t) => (
                            <span
                              key={t}
                              className="border border-copper/50 px-1.5 py-0.5 text-[0.55rem] uppercase tracking-[0.2em] text-copper"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                        {item.description && (
                          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                            {item.description}
                          </p>
                        )}
                        {item.options && (
                          <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                            {item.options.map((o) => (
                              <li key={o} className="before:mr-2 before:text-copper before:content-['—']">
                                {o}
                              </li>
                            ))}
                          </ul>
                        )}
                        {item.extras && (
                          <p className="mt-2 text-[0.7rem] uppercase tracking-[0.2em] text-copper/80">
                            {item.extras}
                          </p>
                        )}
                      </div>
                      <div className="col-span-3 text-right font-display text-base text-cream md:text-lg">
                        {formatPrice(item.price)}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}