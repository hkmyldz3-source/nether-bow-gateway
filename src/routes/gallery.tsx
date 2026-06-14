import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { X, Instagram } from "lucide-react";

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
    ],
  }),
  component: GalleryPage,
});

// Instagram-style images from Pexels (placeholder URLs - in production these would come from Instagram API)
const GALLERY = [
  { img: "https://images.pexels.com/photos/1493370/pexels-photo-1493370.jpeg?auto=compress&cs=tinysrgb&w=600", caption: "The Vault Room · Sandstone & Copper" },
  { img: "https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg?auto=compress&cs=tinysrgb&w=600", caption: "Copper Service Lines · Detail" },
  { img: "https://images.pexels.com/photos/2192805/pexels-photo-2192805.jpeg?auto=compress&cs=tinysrgb&w=600", caption: "Marble Bar · Morning Light" },
  { img: "https://images.pexels.com/photos/2394/pexels-photo-2394.jpeg?auto=compress&cs=tinysrgb&w=600", caption: "Lever Group · La Marzocco GS3" },
  { img: "https://images.pexels.com/photos/323682/pexels-photo-323682.jpeg?auto=compress&cs=tinysrgb&w=600", caption: "The Royal Mile · Blue Hour" },
  { img: "https://images.pexels.com/photos/1251175/pexels-photo-1251175.jpeg?auto=compress&cs=tinysrgb&w=600", caption: "Espresso Service · House Blend" },
  { img: "https://images.pexels.com/photos/1415555/pexels-photo-1415555.jpeg?auto=compress&cs=tinysrgb&w=600", caption: "Barista at Work" },
  { img: "https://images.pexels.com/photos/2064312/pexels-photo-2064312.jpeg?auto=compress&cs=tinysrgb&w=600", caption: "Latte Art Detail" },
  { img: "https://images.pexels.com/photos/1509062/pexels-photo-1509062.jpeg?auto=compress&cs=tinysrgb&w=600", caption: "Evening Ambiance" },
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
              src={selectedImage.img.replace("w=600", "w=1200")}
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