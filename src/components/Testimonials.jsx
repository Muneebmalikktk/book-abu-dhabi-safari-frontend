import Reveal from "./Reveal";
import { sampleReviews } from "../data/reviews";

export default function Testimonials() {
  return (
    <section
      id="reviews"
      className="bg-secondary/55 px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-36"
    >
      <div className="mx-auto max-w-[1400px]">
        <Reveal className="max-w-2xl">
          <p className="eyebrow text-primary">Guest Experiences</p>
          <h2 className="mt-6 text-[clamp(2rem,5.2vw,3.5rem)] leading-[1.05]">
            Stories from the desert.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-10 md:grid-cols-3 lg:mt-20 lg:gap-14">
          {sampleReviews.slice(0, 3).map((review, index) => (
            <Reveal
              key={review.id}
              delay={index * 110}
              as="figure"
              className="flex flex-col"
            >
              <blockquote className="text-[1.3rem] leading-[1.55] font-light lg:text-[1.45rem]">
                “{review.message}”
              </blockquote>
              <figcaption className="mt-7 border-t border-border pt-5">
                <span className="block text-[0.85rem] tracking-[0.06em]">
                  {review.name}
                </span>
                <span className="mt-1 block text-[0.8rem] font-light text-muted-foreground">
                  {review.country}
                </span>
              </figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
