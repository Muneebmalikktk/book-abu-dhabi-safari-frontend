import featuredImage from "../assets/images/featured-sunset.jpg";
import Reveal from "./Reveal";
import { trackEvent } from "../lib/site";

const JOURNEY = [
  "Hotel Pickup",
  "Dune Bashing",
  "Sunset",
  "Camel Ride",
  "Desert Camp",
  "Dinner",
];

export default function FeaturedExperience() {
  return (
    <section id="featured" className="relative overflow-hidden bg-ink text-ink-foreground">
      <img
        src={featuredImage}
        alt="Travellers walking along a dune ridge at sunset"
        loading="lazy"
        width={1920}
        height={1088}
        className="absolute inset-0 h-full w-full object-cover opacity-45"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/45" />

      <div className="relative mx-auto max-w-[1400px] px-5 py-24 sm:px-8 sm:py-32 lg:px-12 lg:py-40">
        <Reveal className="max-w-2xl">
          <p className="eyebrow text-primary">The Signature Experience</p>
          <h2 className="mt-6 text-[clamp(2rem,5.4vw,3.75rem)] leading-[1.05] text-ink-foreground">
            Chase the sunset across the dunes.
          </h2>
          <p className="mt-7 text-[1.02rem] leading-[1.85] font-light text-ink-foreground/80">
            From the thrill of dune bashing to the calm of the desert at sunset, experience an
            evening filled with adventure, Arabian hospitality and unforgettable moments.
          </p>
        </Reveal>

        <Reveal delay={140} className="mt-12">
          <ol className="flex flex-wrap items-center gap-x-4 gap-y-3">
            {JOURNEY.map((step, index) => (
              <li key={step} className="flex items-center gap-4">
                <span className="text-[0.72rem] tracking-[0.16em] text-ink-foreground/85 uppercase">
                  {step}
                </span>
                {index < JOURNEY.length - 1 && (
                  <span aria-hidden="true" className="text-primary">
                    /
                  </span>
                )}
              </li>
            ))}
          </ol>
        </Reveal>

        <Reveal delay={220}>
          <a
            href="#booking"
            data-cta="featured-evening"
            onClick={() => trackEvent("safari_card_click", { experience: "Evening Desert Safari (featured)" })}
            className="mt-12 inline-flex items-center justify-center bg-ink-foreground px-9 py-4 text-[0.75rem] tracking-[0.18em] text-ink uppercase transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            Explore Evening Safari
          </a>
        </Reveal>
      </div>
    </section>
  );
}
