import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

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
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    toast.success("Message received — we'll write back within a day.");
    (e.currentTarget as HTMLFormElement).reset();
  };

  return (
    <section className="relative pt-40 pb-28 md:pt-48 md:pb-40">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="mb-10 flex items-center gap-4">
          <span className="h-px w-14 bg-copper" />
          <span className="eyebrow">V — Contact</span>
        </div>
        <h1 className="font-display text-5xl font-medium uppercase leading-[1.05] text-cream md:text-7xl">
          Write to the <span className="italic text-copper font-normal normal-case">porter.</span>
        </h1>
        <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground">
          Press, private hire, supplier enquiries, or simply a question about the
          house — leave a note and we'll reply within one working day.
        </p>

        <div className="mt-16 grid gap-14 md:grid-cols-12">
          <div className="md:col-span-7">
            <form onSubmit={onSubmit} className="space-y-10">
              <div className="grid gap-10 md:grid-cols-2">
                <Field label="Name" name="name" required />
                <Field label="Email" name="email" type="email" required />
              </div>
              <div className="grid gap-10 md:grid-cols-2">
                <Field label="Subject" name="subject" required />
                <Field label="Phone (optional)" name="phone" type="tel" />
              </div>
              <div>
                <label className="eyebrow block text-muted-foreground">Message</label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  className="mt-3 w-full resize-none border-0 border-b border-copper/40 bg-transparent py-3 text-sm text-cream placeholder:text-muted-foreground focus:border-copper focus:outline-none focus:ring-0"
                  placeholder="Tell us what you have in mind…"
                />
              </div>
              <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                <span className="text-[0.68rem] uppercase tracking-[0.28em] text-muted-foreground">
                  {sent ? "Sent — thank you." : "We read every note ourselves."}
                </span>
                <button type="submit" className="btn-outline-copper btn-outline-copper-hover">
                  Send message
                  <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.5} />
                </button>
              </div>
            </form>
          </div>

          <div className="md:col-span-5 md:pl-6">
            <div className="eyebrow flex items-center gap-2">
              <Mail className="h-3 w-3" strokeWidth={1.5} /> Direct lines
            </div>
            <ul className="mt-5 space-y-4 text-sm text-muted-foreground">
              <li>
                <span className="block text-[0.68rem] uppercase tracking-[0.28em] text-muted-foreground/70">General</span>
                <a href="mailto:hello@netherbowport.co" className="copper-underline mt-1 inline-block hover:text-cream">hello@netherbowport.co</a>
              </li>
              <li>
                <span className="block text-[0.68rem] uppercase tracking-[0.28em] text-muted-foreground/70">Press &amp; private hire</span>
                <a href="mailto:press@netherbowport.co" className="copper-underline mt-1 inline-block hover:text-cream">press@netherbowport.co</a>
              </li>
              <li className="flex items-center gap-2 pt-2">
                <Phone className="h-3.5 w-3.5 text-copper" strokeWidth={1.5} />
                <a href="tel:+441310000000" className="hover:text-cream">+44 131 000 0000</a>
              </li>
            </ul>

            <div className="mt-10 border-t border-border pt-8">
              <div className="eyebrow flex items-center gap-2">
                <MapPin className="h-3 w-3" strokeWidth={1.5} /> Travellers' note
              </div>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                Five minutes from Waverley Station. Step-free entrance from
                High Street. Group bookings welcome with 48 hours' notice —
                full address and hours in the footer below.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="eyebrow text-muted-foreground">{label}</span>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-3 block w-full border-0 border-b border-copper/40 bg-transparent py-3 text-sm text-cream placeholder:text-muted-foreground focus:border-copper focus:outline-none focus:ring-0"
      />
    </label>
  );
}