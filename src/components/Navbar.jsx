import { useEffect, useState } from "react";
import { Link } from "react-router";
import { COMPANY_NAME, trackEvent } from "../lib/site";
import logoBlack from "../assets/images/logo-black.svg";
import logoWhite from "../assets/images/logo-white.svg";

const LINKS = [
  { label: "Home", to: "/" },
  { label: "Packages", to: "/packages" },
  { label: "Why Us", to: "/why-us" },
  { label: "Reviews", to: "/reviews" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const shell = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        shell
          ? "bg-background/92 border-b border-border backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-[1400px] items-center justify-between gap-4 px-5 py-4 sm:px-8 lg:px-12">
        <Link to="/" className="flex min-w-0 items-center">
          <img
            src={scrolled ? logoBlack : logoWhite}
            alt={COMPANY_NAME}
            className="h-10 w-auto sm:h-11"
          />
        </Link>

        <div className="hidden items-center gap-9 lg:flex">
          {LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-[0.78rem] tracking-[0.14em] uppercase transition-opacity hover:opacity-60 ${
                shell ? "text-foreground" : "text-ink-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}

          <Link
            to="/book"
            id="nav-cta-book"
            data-cta="nav-book"
            onClick={() =>
              trackEvent("cta_click", {
                location: "navbar",
                label: "Book Your Safari",
              })
            }
            className={`border px-6 py-3 text-[0.72rem] tracking-[0.18em] uppercase transition-colors ${
              shell
                ? "border-foreground text-foreground hover:bg-foreground hover:text-background"
                : "border-ink-foreground/60 text-ink-foreground hover:bg-ink-foreground hover:text-ink"
            }`}
          >
            Book Your Safari
          </Link>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className={`flex h-10 w-10 shrink-0 flex-col items-center justify-center gap-[6px] lg:hidden ${
            shell ? "text-foreground" : "text-ink-foreground"
          }`}
        >
          <span
            className={`block h-px w-6 bg-current transition-transform duration-300 ${
              open ? "translate-y-[3.5px] rotate-45" : ""
            }`}
          />

          <span
            className={`block h-px w-6 bg-current transition-transform duration-300 ${
              open ? "-translate-y-[3.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      <div
        className={`overflow-hidden border-t border-border bg-background transition-[max-height,opacity] duration-500 lg:hidden ${
          open ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-1 px-5 py-6 sm:px-8">
          {LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className="font-display border-b border-border/60 py-4 text-2xl text-foreground"
            >
              {link.label}
            </Link>
          ))}

          <Link
            to="/book"
            id="nav-cta-book-mobile"
            data-cta="nav-book-mobile"
            onClick={() => {
              setOpen(false);
              trackEvent("cta_click", {
                location: "navbar_mobile",
                label: "Book Your Safari",
              });
            }}
            className="mt-6 bg-foreground px-6 py-4 text-center text-[0.75rem] tracking-[0.18em] text-background uppercase"
          >
            Book Your Safari
          </Link>
        </div>
      </div>
    </header>
  );
}