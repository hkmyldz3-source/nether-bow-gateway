import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { X, Instagram } from "lucide-react";
import gallery01 from "@/assets/gallery/gallery01.jpg";
import gallery02 from "@/assets/gallery/gallery02.jpg";
import gallery03 from "@/assets/gallery/gallery03.jpg";
import gallery04 from "@/assets/gallery/gallery04.jpg";
import gallery05 from "@/assets/gallery/gallery05.jpg";
import gallery06 from "@/assets/gallery/gallery06.jpg";
import gallery07 from "@/assets/gallery/gallery07.jpg";
import gallery08 from "@/assets/gallery/gallery08.jpg";
import gallery09 from "@/assets/gallery/gallery09.jpg";

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
      { property: "og:image", content: gallery01 },
    ],
  }),
  component: GalleryPage,
});

const GALLERY = [
  { img: gallery01, caption: "The Vault Room · Sandstone & Copper" },
  { img: gallery02, caption: "Copper Service Lines · Detail" },
  { img: gallery03, caption: "Marble Bar · Morning Light" },
  { img: gallery04, caption: "Lever Group · La Marzocco GS3" },
  { img: gallery05, caption: "The Royal Mile · Blue Hour" },
  { img: gallery06, caption: "Espresso Service · House Blend" },
  { img: gallery07, caption: "Barista at Work" },
  { img: gallery08, caption: "Latte Art Detail" },
  { img: gallery09, caption: "Evening Ambiance" },
];

function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<(typeof GALLERY)[0] | null>(null);

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
          <div className="flex items-center gap-6">
            <a href="#" className="copper-underline flex items-center gap-2 text-sm text-muted-foreground hover:text-cream">
              <Instagram className="h-4 w-4" strokeWidth={1.5} />
              @netherbowport
            </a>
          </div>
        </div>
      </div>

      <div className="mt-16 px-6 md:px-10">
        <div className="mx-auto grid max-w-[1400px] grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 lg:gap-4">
          {GALLERY.map((g, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setSelectedImage(g)}
              className="group relative aspect-square overflow-hidden border border-border transition-all hover:border-copper/60 focus:outline-none focus:ring-2 focus:ring-copper"
            >
              <img
                src={g.img}
                alt={g.caption}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-background/0 transition-colors group-hover:bg-background/20" />
            </button>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <button
            type="button"
            onClick={() => setSelectedImage(null)}
            aria-label="Close"
            className="absolute right-6 top-6 grid h-10 w-10 place-items-center border border-copper/50 text-cream transition-colors hover:bg-copper/15 hover:border-copper"
          >
            <X className="h-5 w-5" strokeWidth={1.5} />
          </button>
          <div
            className="relative max-h-[85vh] max-w-[90vw] md:max-w-[70vw] lg:max-w-[50vw]"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.img}
              alt={selectedImage.caption}
              className="max-h-[85vh] w-auto object-contain"
            />
            <div className="absolute -bottom-16 left-0 right-0 flex items-center justify-between px-4">
              <span className="text-[0.7rem] uppercase tracking-[0.28em] text-cream">{selectedImage.caption}</span>
              <a href="#" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-cream">
                <Instagram className="h-4 w-4" strokeWidth={1.5} />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}