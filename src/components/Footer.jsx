import { Link } from "react-router";
import {
  COMPANY_NAME,
  EMAIL,
  INSTAGRAM_URL,
  PHONE,
  ADDRESS,
  trackEvent,
  whatsappHref,
} from "../lib/site";

const NAV = [
  { label: "Home", to: "/" },
  { label: "Safari Packages", to: "/packages" },
  { label: "Why Choose Us", to: "/why-us" },
  { label: "Guest Reviews", to: "/reviews" },
  { label: "Book & Contact", to: "/book" },
];

export default function Footer() {
  return (
    <footer className="bg-ink px-5 py-16 text-ink-foreground sm:px-8 sm:py-20 lg:px-12">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid gap-12 md:grid-cols-3 lg:gap-20">
          <div>
            <p className="font-display text-xl tracking-[0.18em] uppercase">
              {COMPANY_NAME}
            </p>

            <p className="mt-5 max-w-xs text-[0.95rem] leading-[1.8] font-light text-ink-foreground/65">
              Desert experiences in Abu Dhabi, designed to be remembered.
            </p>
          </div>

          <nav aria-label="Footer">
            <p className="eyebrow text-ink-foreground/50">Navigation</p>

            <ul className="mt-6 space-y-3">
              {NAV.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    className="text-[0.95rem] font-light text-ink-foreground/80 transition-colors hover:text-primary"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="eyebrow text-ink-foreground/50">Contact</p>

            <ul className="mt-6 space-y-3 text-[0.95rem] font-light text-ink-foreground/80">
              <li>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cta="whatsapp-footer"
                  onClick={() =>
                    trackEvent("whatsapp_click", {
                      location: "footer",
                    })
                  }
                  className="transition-colors hover:text-primary"
                >
                  WhatsApp
                </a>
              </li>

              <li>
                <a
                  href={`tel:${PHONE}`}
                  data-cta="phone-footer"
                  onClick={() =>
                    trackEvent("phone_click", {
                      location: "footer",
                    })
                  }
                  className="transition-colors hover:text-primary"
                >
                  {PHONE}
                </a>
              </li>

              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  data-cta="email-footer"
                  onClick={() =>
                    trackEvent("email_click", {
                      location: "footer",
                    })
                  }
                  className="break-all transition-colors hover:text-primary"
                >
                  {EMAIL}
                </a>
              </li>

              <li>{ADDRESS}</li>

              <li>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cta="instagram-footer"
                  onClick={() =>
                    trackEvent("instagram_click", {
                      location: "footer",
                    })
                  }
                  className="transition-colors hover:text-primary"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p className="mt-16 border-t border-ink-foreground/15 pt-6 text-[0.78rem] font-light text-ink-foreground/45">
          © {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}