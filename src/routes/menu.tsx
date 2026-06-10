import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import menuPastry from "@/assets/menu-pastry.jpg";
import menuEspresso from "@/assets/menu-espresso.jpg";

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
      { property: "og:image", content: menuEspresso },
    ],
  }),
  component: MenuPage,
});

const MENU_ITEMS = [
  { no: "01", name: "Canongate Espresso", origin: "Ethiopia · Yirgacheffe — Washed", notes: "A short, sovereign cup. Bergamot oil, dark stone fruit, the faint copper of a struck bell.", price: "£3.20" },
  { no: "02", name: "The Porter's Pour-Over", origin: "Colombia · Huila — Honey Process", notes: "Three minutes of attention, performed at the bar. Brown sugar, blood orange, a long terracotta finish.", price: "£5.40" },
  { no: "03", name: "Tollkeeper's Flat White", origin: "House Blend — Edinburgh Roast", notes: "Two ristretto shots, micro-foamed Ayrshire whole milk. The currency of a working morning.", price: "£4.10" },
  { no: "04", name: "Royal Mile Cortado", origin: "Guatemala · Antigua — Natural", notes: "Equal parts steel and sweetness. Toasted hazelnut, milk chocolate, a structural finish.", price: "£3.90" },
];

function MenuPage() {
  return (
    <section className="relative pt-40 pb-28 md:pt-48 md:pb-40">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="mb-8 flex items-center gap-4">
              <span className="h-px w-14 bg-copper" />
              <span className="eyebrow">II — Portfolio of Flavours</span>
            </div>
            <h1 className="font-display text-5xl font-medium uppercase leading-[1.05] text-cream md:text-7xl">
              A short
              <br />
              roast of <span className="italic text-copper font-normal normal-case">consequence.</span>
            </h1>
            <p className="mt-8 max-w-md text-[0.95rem] leading-[1.85] text-muted-foreground">
              We list four programs at a time. Each lot is sourced direct, roasted in
              Leith on a 1956 Probat L12, and rested for ten days before service.
            </p>

            <Link to="/reservation" className="btn-outline-copper btn-outline-copper-hover mt-10">
              Reserve a Tasting
              <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.5} />
            </Link>

            <div className="relative mt-20 hidden h-[420px] lg:block">
              <img src={menuPastry} alt="Artisan pastry on slate" loading="lazy" className="absolute left-0 top-0 h-[320px] w-[60%] object-cover" />
              <img src={menuEspresso} alt="Espresso in copper cup" loading="lazy" className="absolute bottom-0 right-0 h-[300px] w-[55%] border-[6px] border-background object-cover" />
            </div>
          </div>

          <div className="lg:col-span-7 lg:pt-14">
            <ul className="divide-y divide-border">
              {MENU_ITEMS.map((m) => (
                <li key={m.no} className="group grid grid-cols-12 gap-6 py-10 first:pt-0">
                  <div className="col-span-2 font-display text-2xl text-copper md:text-3xl">{m.no}</div>
                  <div className="col-span-7">
                    <h3 className="font-display text-xl uppercase tracking-wide text-cream md:text-2xl">{m.name}</h3>
                    <div className="mt-1 text-[0.68rem] uppercase tracking-[0.28em] text-copper/80">{m.origin}</div>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{m.notes}</p>
                  </div>
                  <div className="col-span-3 text-right font-display text-xl text-cream md:text-2xl">{m.price}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}