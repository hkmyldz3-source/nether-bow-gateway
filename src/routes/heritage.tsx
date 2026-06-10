import { createFileRoute } from "@tanstack/react-router";
import heritageOld from "@/assets/heritage-old.jpg";
import heritageNew from "@/assets/heritage-new.jpg";

export const Route = createFileRoute("/heritage")({
  head: () => ({
    meta: [
      { title: "Heritage — The Nether Bow Port" },
      {
        name: "description",
        content:
          "The story of Edinburgh's lost city gate (1380–1764) and the coffee house built upon its stones on the Royal Mile.",
      },
      { property: "og:title", content: "Heritage — The Nether Bow Port" },
      {
        property: "og:description",
        content: "Where the city began. Eight centuries of stone, bell and threshold.",
      },
      { property: "og:image", content: heritageOld },
    ],
  }),
  component: HeritagePage,
});

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div>
      <div className="font-display text-3xl text-copper md:text-4xl">{n}</div>
      <div className="mt-1 text-[0.7rem] uppercase tracking-[0.28em] text-muted-foreground">{label}</div>
    </div>
  );
}

function HeritagePage() {
  return (
    <section className="relative pt-40 pb-28 md:pt-48 md:pb-40">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-6 lg:pt-12">
            <div className="mb-8 flex items-center gap-4">
              <span className="h-px w-14 bg-copper" />
              <span className="eyebrow">I — Heritage</span>
            </div>
            <h1 className="font-display text-5xl font-medium uppercase leading-[1.05] tracking-[0.01em] text-cream md:text-7xl">
              Where the
              <br />
              <span className="italic text-copper font-normal normal-case">city began.</span>
            </h1>

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

          <div className="lg:col-span-6">
            <div className="grid grid-cols-2 gap-3 md:gap-5">
              <div className="relative aspect-[3/5] overflow-hidden">
                <img src={heritageOld} alt="Historical etching of the Netherbow Port gate" loading="lazy" className="h-full w-full object-cover grayscale-[0.3] sepia-[0.4]" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />
                <span className="absolute bottom-4 left-4 eyebrow text-cream/80">c. 1450</span>
              </div>
              <div className="relative aspect-[3/5] translate-y-12 overflow-hidden md:translate-y-20">
                <img src={heritageNew} alt="Modern brass espresso bar interior" loading="lazy" className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                <span className="absolute bottom-4 left-4 eyebrow text-cream/80">Today</span>
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