import heroImage from "../assets/images/hero-dunes-optimized.webp";
import { trackEvent } from "../lib/site";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[92vh] items-end overflow-hidden sm:min-h-screen"
    >
      <img
        src={heroImage}
        alt="Golden sand dunes of the Abu Dhabi desert at sunset"
        width={1920}
        height={1088}
        fetchPriority="high"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-ink/35 to-ink/80" />

      <div className="relative mx-auto w-full max-w-[1400px] px-5 pt-32 pb-16 sm:px-8 sm:pb-24 lg:px-12 lg:pb-28">
        <div className="max-w-3xl">
          <p className="eyebrow text-ink-foreground/80">
            Abu Dhabi · United Arab Emirates
          </p>
          <h1 className="font-display mt-6 text-[clamp(2.75em,7vw,6.5rem)] leading-[0.95] text-ink-foreground">
            Experience the
            <br />
            Arabian Desert
          </h1>
          <p className="mt-7 max-w-xl text-[clamp(1rem,2.4vw,1.15rem)] leading-relaxed font-light text-ink-foreground/85">
            Discover Abu Dhabi's golden dunes through unforgettable desert
            experiences.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            <a
              href="#experiences"
              id="hero-cta-explore"
              data-cta="hero-explore"
              onClick={() =>
                trackEvent("hero_cta_click", { label: "Explore Our Safaris" })
              }
              className="inline-flex items-center justify-center bg-ink-foreground px-9 py-4 text-[0.75rem] tracking-[0.18em] text-ink uppercase transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              Explore Our Safaris
            </a>
            <a
              href="#booking"
              id="hero-cta-book"
              data-cta="hero-book"
              onClick={() =>
                trackEvent("hero_cta_click", { label: "Book Your Safari" })
              }
              className="inline-flex items-center justify-center border border-ink-foreground/60 px-9 py-4 text-[0.75rem] tracking-[0.18em] text-ink-foreground uppercase transition-colors hover:bg-ink-foreground/10"
            >
              Book Your Safari
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
