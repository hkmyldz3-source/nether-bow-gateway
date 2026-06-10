import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

const NAV = [
  { to: "/heritage", label: "Heritage" },
  { to: "/menu", label: "Menu" },
  { to: "/gallery", label: "Gallery" },
  { to: "/reservation", label: "Reservation" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
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
        <Link
          to="/"
          className="font-display text-[0.78rem] md:text-sm font-semibold tracking-[0.28em] text-cream"
        >
          THE NETHER BOW PORT
        </Link>
        <nav className="hidden items-center gap-9 lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeProps={{ className: "text-copper" }}
              className="copper-underline text-[0.72rem] uppercase tracking-[0.28em] text-muted-foreground transition-colors hover:text-cream"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          to="/reservation"
          className="btn-outline-copper btn-outline-copper-hover hidden md:inline-flex"
        >
          Enter the Port
          <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.5} />
        </Link>
      </div>
    </header>
  );
}