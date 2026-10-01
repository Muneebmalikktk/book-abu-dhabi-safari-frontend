import introImage from "../assets/images/intro-camels.jpg";
import Reveal from "./Reveal";

export default function Introduction() {
  return (
    <section id="about" className="px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-36">
      <div className="mx-auto grid max-w-[1400px] items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal className="order-1 overflow-hidden lg:order-none">
          <img
            src={introImage}
            alt="A guide leading a camel across the dunes near Abu Dhabi"
            loading="lazy"
            width={1024}
            height={1280}
            className="h-[60vw] max-h-[680px] w-full object-cover transition-transform duration-[1400ms] ease-out hover:scale-[1.03] sm:h-[520px] lg:h-[660px]"
          />
        </Reveal>

        <Reveal delay={120} className="order-2 lg:order-none lg:pl-6">
          <p className="eyebrow text-primary">The Experience</p>
          <h2 className="mt-6 text-[clamp(2rem,5.2vw,3.5rem)] leading-[1.05]">
            Beyond the dunes. Into the heart of Arabia.
          </h2>
          <p className="mt-7 max-w-xl text-[1.02rem] leading-[1.85] font-light text-muted-foreground">
            Leave the city behind and discover a different side of Abu Dhabi. From exhilarating dune
            drives and golden sunsets to traditional desert hospitality, we create experiences that
            bring you closer to the beauty and spirit of the Arabian desert.
          </p>
          <a
            href="#featured"
            data-cta="intro-story"
            className="mt-9 inline-flex items-center gap-3 border-b border-foreground/30 pb-2 text-[0.78rem] tracking-[0.16em] uppercase transition-colors hover:border-primary hover:text-primary"
          >
            Discover Our Story <span aria-hidden="true">→</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
