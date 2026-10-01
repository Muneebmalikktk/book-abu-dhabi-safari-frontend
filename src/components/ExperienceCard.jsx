import Reveal from "./Reveal";
import { Link } from "react-router";
import { trackEvent } from "../lib/site";

export default function ExperienceCard({
  title,
  description,
  meta,
  image,
  alt,
  packageId,
  delay = 0,
}) {
  return (
    <Reveal
      as="article"
      delay={delay}
      className="group flex flex-col"
      data-experience={title}
    >
      <Link
        to={`/packages/${packageId}`}
        data-cta="experience-card"
        onClick={() => trackEvent("safari_card_click", { experience: title })}
        className="flex h-full flex-col"
      >
        <div className="overflow-hidden bg-secondary">
          <img
            src={image}
            alt={alt}
            loading="lazy"
            width={1280}
            height={1600}
            className="h-[68vw] max-h-[560px] w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.05] sm:h-[440px] lg:h-[520px]"
          />
        </div>

        <div className="flex flex-1 flex-col pt-7">
          <h3 className="text-[1.6rem] leading-tight sm:text-[1.8rem]">
            {title}
          </h3>
          <p className="mt-4 text-[0.98rem] leading-[1.8] font-light text-muted-foreground">
            {description}
          </p>
          <p className="eyebrow mt-6 text-muted-foreground">{meta}</p>
          <span className="mt-6 inline-flex items-center gap-3 text-[0.75rem] tracking-[0.16em] uppercase transition-colors group-hover:text-primary">
            Explore Experience <span aria-hidden="true">→</span>
          </span>
        </div>
      </Link>
    </Reveal>
  );
}
