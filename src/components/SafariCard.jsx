import { Link } from "react-router";
import { WHATSAPP_NUMBER } from "../lib/site.js";

function packageWhatsappHref(title) {
  const message = `Hi, I am interested in the ${title}. Please provide more details.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function CheckIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="none"
      className="mt-1 h-4 w-4 shrink-0 text-accent"
    >
      <circle
        cx="10"
        cy="10"
        r="9"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity="0.35"
      />
      <path
        d="M6 10.2l2.6 2.6L14 7.4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4"
    >
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.9-4.45 9.9-9.91A9.85 9.85 0 0 0 12.04 2Zm0 18.15h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24a8.2 8.2 0 0 1 8.24 8.24c0 4.55-3.7 8.24-8.24 8.24Zm4.52-6.16c-.25-.13-1.47-.72-1.69-.8-.23-.09-.4-.13-.56.12-.17.25-.64.8-.78.97-.15.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.43-.06-.13-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.13.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.16-.48-.29Z" />
    </svg>
  );
}

export default function SafariCard({ packageData }) {
  const { id, title, image, prices = [], features = [] } = packageData;
  const detailUrl = `/packages/${id}`;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-md bg-card shadow-[0_18px_50px_-24px_rgba(28,27,24,0.35)] ring-1 ring-foreground/8 transition-shadow duration-500 hover:shadow-[0_28px_60px_-24px_rgba(28,27,24,0.45)]">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Link
          to={detailUrl}
          aria-label={`View details for ${title}`}
          className="block h-full"
        >
          <img
            src={image}
            alt={title}
            width={960}
            height={720}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.035]"
          />
        </Link>

        <div className="pointer-events-none absolute top-4 left-4 flex flex-wrap gap-2">
          {prices.map((price) => (
            <span
              key={price.label}
              className="rounded-sm bg-foreground/85 px-3 py-2 text-[0.7rem] tracking-[0.14em] text-background uppercase backdrop-blur-sm"
            >
              {price.label}{" "}
              <span className="ml-1 font-medium text-accent">
                {price.amount}
              </span>
            </span>
          ))}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <h3 className="font-serif text-2xl leading-snug">
          <Link to={detailUrl} className="transition-colors hover:text-primary">
            {title}
          </Link>
        </h3>

        <ul className="mt-5 flex-1 space-y-2.5 border-t border-border pt-5">
          {features.map((feature) => (
            <li
              key={feature}
              className="flex items-start gap-2.5 text-sm text-muted-foreground"
            >
              <CheckIcon />
              <span className="leading-relaxed">{feature}</span>
            </li>
          ))}
        </ul>

        <Link
          to={detailUrl}
          className="mt-7 flex w-full items-center justify-center border border-foreground bg-foreground px-4 py-3 text-sm font-medium text-background transition-colors hover:bg-primary hover:text-primary-foreground"
        >
          View Package Details{" "}
          <span className="ml-2" aria-hidden="true">
            →
          </span>
        </Link>

        <a
          href={packageWhatsappHref(title)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:text-primary"
          aria-label={`Ask about ${title} on WhatsApp`}
        >
          <WhatsAppIcon />
          Ask on WhatsApp
        </a>
      </div>
    </article>
  );
}
