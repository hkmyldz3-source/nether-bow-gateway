import { createFileRoute } from "@tanstack/react-router";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import heroEspresso from "@/assets/hero-espresso.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — The Nether Bow Port" },
      {
        name: "description",
        content:
          "Inside the Port: sandstone vaults, copper service lines and marble bar — a study in brass & brick on Edinburgh's Royal Mile.",
      },
      { property: "og:title", content: "Gallery — The Nether Bow Port" },
      { property: "og:description", content: "A study in brass & brick." },
      { property: "og:image", content: gallery1 },
    ],
  }),
  component: GalleryPage,
});

const GALLERY = [
  { img: gallery1, caption: "The Vault Room · Sandstone & Copper" },
  { img: gallery2, caption: "Copper Service Lines · Detail" },
  { img: gallery3, caption: "Marble Bar · Morning Light" },
  { img: gallery4, caption: "Lever Group · La Marzocco GS3" },
  { img: gallery5, caption: "The Royal Mile · Blue Hour" },
  { img: heroEspresso, caption: "Espresso Service · House Blend" },
];

function GalleryPage() {
  return (
    <section className="relative pt-40 pb-28 md:pt-48 md:pb-40">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <div>
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-14 bg-copper" />
              <span className="eyebrow">III — Inside the Port</span>
            </div>
            <h1 className="font-display max-w-3xl text-5xl font-medium uppercase leading-[1.05] text-cream md:text-7xl">
              A study in <span className="italic text-copper font-normal normal-case">brass &amp; brick.</span>
            </h1>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            Scroll the room — interiors, surfaces, and the slow theatre of service.
          </p>
        </div>
      </div>

      <div className="mt-16 overflow-x-auto pb-6 [scrollbar-color:var(--copper)_transparent]">
        <div className="flex gap-5 px-6 md:px-10">
          {GALLERY.map((g, idx) => (
            <figure key={idx} className="relative flex-shrink-0 overflow-hidden" style={{ width: "clamp(280px, 32vw, 460px)", height: "clamp(380px, 60vh, 580px)" }}>
              <img src={g.img} alt={g.caption} loading="lazy" className="h-full w-full object-cover transition-transform duration-[1200ms] hover:scale-[1.04]" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-background/10 to-transparent" />
              <figcaption className="absolute bottom-5 left-5 right-5 flex items-end justify-between text-cream">
                <span className="text-[0.68rem] uppercase tracking-[0.28em]">{g.caption}</span>
                <span className="font-display text-sm text-copper">{String(idx + 1).padStart(2, "0")}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}