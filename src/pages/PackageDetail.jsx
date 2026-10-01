import { Link, Navigate, useParams } from "react-router";
import { Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import WhatsAppButton from "../components/WhatsAppButton.jsx";
import { safariPackages } from "../data/safariPackages.js";
import { WHATSAPP_NUMBER } from "../lib/site.js";

function CheckIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="none"
      className="mt-1 h-5 w-5 shrink-0 text-primary"
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

function packageFacts(packageData) {
  const id = packageData.id;
  if (id.includes("overnight"))
    return {
      duration: "Evening to morning",
      pickup: "Private location pickup",
    };
  if (id.includes("morning"))
    return {
      duration: "Approximately 3–4 hours",
      pickup: "Abu Dhabi pickup included",
    };
  if (id.includes("buggy") || id.includes("quad") || id.includes("atv"))
    return {
      duration: "Approximately 4–6 hours",
      pickup: "See package inclusions",
    };
  return {
    duration: "Approximately 4–6 hours",
    pickup: "See package inclusions",
  };
}

export default function PackageDetail() {
  const { packageId } = useParams();
  const packageData = safariPackages.find((item) => item.id === packageId);

  if (!packageData) return <Navigate to="/packages" replace />;

  const { title, image, prices, features } = packageData;
  const facts = packageFacts(packageData);
  const bookingUrl = `/book?package=${encodeURIComponent(packageData.id)}`;
  const message = `Hi, I am interested in the ${title}. Please share availability and booking details.`;
  const packageWhatsApp = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  const canonical = `https://bookabudhabisafari.com/packages/${packageData.id}`;

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{title} | Book Abu Dhabi Safari</title>
        <meta
          name="description"
          content={`View prices, inclusions and booking details for ${title}. Request availability for your Abu Dhabi desert experience.`}
        />
        <link rel="canonical" href={canonical} />
      </Helmet>

      <Navbar />
      <main>
        <section className="relative isolate flex min-h-[72vh] items-end overflow-hidden text-ink-foreground">
          <img
            src={image}
            alt={title}
            width={1280}
            height={1600}
            fetchPriority="high"
            className="absolute inset-0 -z-20 h-full w-full object-cover"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink/90 via-ink/65 to-ink/20" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink/70 via-transparent to-ink/35" />

          <div className="mx-auto w-full max-w-[1400px] px-5 pb-16 pt-36 sm:px-8 sm:pb-20 lg:px-12 lg:pb-24">
            <Link
              to="/packages"
              className="eyebrow inline-flex items-center gap-3 text-ink-foreground/75 transition-colors hover:text-primary"
            >
              <span aria-hidden="true">←</span> All Safari Packages
            </Link>
            <h1 className="mt-6 max-w-4xl text-[clamp(3rem,7vw,5.5rem)] leading-[0.98] text-balance">
              {title}
            </h1>
            <div className="mt-8 flex flex-wrap gap-3">
              {prices.map((price) => (
                <span
                  key={price.label}
                  className="border border-ink-foreground/35 bg-ink/35 px-4 py-3 text-sm backdrop-blur-sm"
                >
                  <span className="text-ink-foreground/70">{price.label}</span>{" "}
                  <strong className="ml-1 font-medium text-ink-foreground">
                    {price.amount}
                  </strong>
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 py-16 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
          <div className="mx-auto grid max-w-[1400px] gap-14 lg:grid-cols-[minmax(0,1fr)_22rem] lg:gap-20">
            <div>
              <p className="eyebrow text-primary">Package Details</p>
              <h2 className="mt-5 text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.05]">
                What your experience includes
              </h2>
              <p className="mt-6 max-w-3xl text-lg leading-[1.8] font-light text-muted-foreground">
                Enjoy a carefully arranged Abu Dhabi desert experience with
                clear inclusions and personal booking support. Our team will
                confirm timing, pickup details and availability before your
                tour.
              </p>

              <ul className="mt-10 grid gap-4 border-t border-border pt-8 sm:grid-cols-2 sm:gap-x-10">
                {features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-[0.98rem] leading-relaxed text-foreground/80"
                  >
                    <CheckIcon />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <aside className="h-fit border border-border bg-secondary/45 p-7 sm:p-8 lg:sticky lg:top-28">
              <p className="eyebrow text-primary">Plan Your Safari</p>
              <dl className="mt-6 space-y-5 border-y border-border py-6">
                <div>
                  <dt className="eyebrow text-muted-foreground">Duration</dt>
                  <dd className="mt-2">{facts.duration}</dd>
                </div>
                <div>
                  <dt className="eyebrow text-muted-foreground">Pickup</dt>
                  <dd className="mt-2">{facts.pickup}</dd>
                </div>
                <div>
                  <dt className="eyebrow text-muted-foreground">
                    Confirmation
                  </dt>
                  <dd className="mt-2">Subject to availability</dd>
                </div>
              </dl>

              <Link
                to={bookingUrl}
                className="mt-7 flex w-full items-center justify-center bg-foreground px-6 py-4 text-[0.75rem] tracking-[0.18em] text-background uppercase transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                Request Availability
              </Link>
              <a
                href={packageWhatsApp}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 flex w-full items-center justify-center border border-foreground px-6 py-4 text-[0.75rem] tracking-[0.18em] uppercase transition-colors hover:bg-foreground hover:text-background"
              >
                Ask on WhatsApp
              </a>
              <p className="mt-5 text-xs leading-relaxed text-muted-foreground">
                No payment is taken on this page. Our team will confirm the
                details with you first.
              </p>
            </aside>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
