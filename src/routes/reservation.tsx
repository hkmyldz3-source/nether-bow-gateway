import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/reservation")({
  head: () => ({
    meta: [
      { title: "Reservation — The Nether Bow Port" },
      {
        name: "description",
        content:
          "Reserve your passage. Tasting flights and bar-side service daily on the historic Royal Mile, Edinburgh.",
      },
      { property: "og:title", content: "Reservation — The Nether Bow Port" },
      { property: "og:description", content: "Reserve your passage at the historic gate." },
    ],
  }),
  component: ReservationPage,
});

function Field({ label, placeholder, type }: { label: string; placeholder: string; type: string }) {
  return (
    <label className="block">
      <span className="block text-[0.66rem] uppercase tracking-[0.32em] text-copper/80">{label}</span>
      <input
        type={type}
        placeholder={placeholder}
        className="mt-3 w-full border-0 border-b border-border bg-transparent pb-3 font-sans text-cream placeholder:text-muted-foreground/60 outline-none transition-colors focus:border-copper"
      />
    </label>
  );
}

function ReservationPage() {
  return (
    <section className="relative pt-40 pb-28 md:pt-48 md:pb-40">
      <div className="mx-auto max-w-[1100px] px-6 md:px-10">
        <div className="relative border border-copper/40 bg-ink p-8 md:p-16">
          <span className="absolute -left-px -top-px h-6 w-6 border-l border-t border-copper" />
          <span className="absolute -right-px -top-px h-6 w-6 border-r border-t border-copper" />
          <span className="absolute -bottom-px -left-px h-6 w-6 border-b border-l border-copper" />
          <span className="absolute -bottom-px -right-px h-6 w-6 border-b border-r border-copper" />

          <div className="mb-10 flex items-center gap-4">
            <span className="h-px w-14 bg-copper" />
            <span className="eyebrow">IV — Reservation</span>
          </div>
          <h1 className="font-display text-4xl font-medium uppercase leading-[1.05] text-cream md:text-6xl">
            Reserve your <span className="italic text-copper font-normal normal-case">passage.</span>
          </h1>
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
              <button type="submit" className="btn-outline-copper btn-outline-copper-hover">
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