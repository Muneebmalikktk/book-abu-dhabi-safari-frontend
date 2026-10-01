import heroImage from "../assets/images/hero-dunes-optimized.webp";

export default function PageHero({
  eyebrow,
  title,
  description,
  compact = false,
}) {
  return (
    <section
      className={`relative isolate overflow-hidden text-ink-foreground ${compact ? "min-h-[28rem]" : "min-h-[34rem]"}`}
    >
      <img
        src={heroImage}
        alt=""
        aria-hidden="true"
        width={1920}
        height={1080}
        className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink/90 via-ink/65 to-ink/25" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink/55 via-transparent to-ink/30" />

      <div
        className={`mx-auto flex max-w-[92rem] items-end px-5 sm:px-8 lg:px-14 ${compact ? "min-h-[28rem] pb-14 pt-32" : "min-h-[34rem] pb-16 pt-40 sm:pb-20 lg:pt-48"}`}
      >
        <div className="max-w-3xl">
          <p className="eyebrow text-ink-foreground/75">{eyebrow}</p>
          <h1 className="mt-5 text-[clamp(3rem,7vw,5.25rem)] font-light leading-[0.98] tracking-[-0.02em] text-balance">
            {title}
          </h1>
          {description && (
            <p className="mt-6 max-w-2xl text-[clamp(1rem,2vw,1.2rem)] leading-[1.75] font-light text-ink-foreground/82">
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
