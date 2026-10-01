import Reveal from "./Reveal";

const BENEFITS = [
  {
    title: "Local Expertise",
    copy: "Experience Abu Dhabi with people who know the desert.",
  },
  {
    title: "Professional Service",
    copy: "From pickup to return, every detail is handled with care.",
  },
  {
    title: "Comfort & Convenience",
    copy: "Enjoy a smooth experience from the city to the dunes and back.",
  },
  {
    title: "Memorable Experiences",
    copy: "More than a tour, an experience worth remembering.",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-36"
    >
      <div className="mx-auto max-w-[1400px]">
        <Reveal className="max-w-2xl">
          <p className="eyebrow text-primary">Why Choose Us</p>

          <h2 className="mt-6 text-[clamp(2rem,5.2vw,3.5rem)] leading-[1.05]">
            A desert experience, thoughtfully arranged.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-px border-t border-border sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
          {BENEFITS.map((benefit, index) => (
            <Reveal
              key={benefit.title}
              delay={index * 90}
              className="border-b border-border pt-8 pb-10 sm:pr-8"
            >
              <span className="font-display text-[1.05rem] text-primary">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3 className="mt-5 text-[1.35rem] leading-snug">
                {benefit.title}
              </h3>

              <p className="mt-3 text-[0.95rem] leading-[1.8] font-light text-muted-foreground">
                {benefit.copy}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
