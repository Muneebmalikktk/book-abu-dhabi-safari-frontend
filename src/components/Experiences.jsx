import ExperienceCard from "./ExperienceCard";
import Reveal from "./Reveal";
import eveningImage from "../assets/images/evening-safari.jpg";
import morningImage from "../assets/images/morning-safari.jpg";
import privateImage from "../assets/images/private-safari.jpg";

const EXPERIENCES = [
  {
    title: "Evening Desert Safari",
    packageId: "evening-desert-safari",
    description:
      "Golden dunes, sunset views, traditional hospitality and an unforgettable evening beneath the Arabian sky.",
    meta: "4–6 Hours · Hotel Pickup",
    image: eveningImage,
    alt: "Safari vehicle on a dune crest during an Abu Dhabi desert sunset",
  },
  {
    title: "Morning Desert Safari",
    packageId: "morning-desert-safari",
    description:
      "Start your day surrounded by the quiet beauty of Abu Dhabi's desert, with adventure and breathtaking views.",
    meta: "3–4 Hours · Hotel Pickup",
    image: morningImage,
    alt: "Soft morning light across smooth Arabian sand dunes",
  },
  {
    title: "Private Desert Safari",
    packageId: "private-desert-safari",
    description:
      "A more personal journey through the desert, tailored around your time and preferences.",
    meta: "Private · Flexible",
    image: privateImage,
    alt: "Private Arabian desert camp with lanterns at dusk",
  },
];

export default function Experiences() {
  return (
    <section
      id="experiences"
      className="bg-secondary/55 px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-36"
    >
      <div className="mx-auto max-w-[1400px]">
        <Reveal className="max-w-2xl">
          <p className="eyebrow text-primary">Our Experiences</p>
          <h2 className="mt-6 text-[clamp(2rem,5.2vw,3.5rem)] leading-[1.05]">
            Choose your desert experience.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-12 sm:grid-cols-2 sm:gap-10 lg:mt-20 lg:grid-cols-3 lg:gap-12">
          {EXPERIENCES.map((experience, index) => (
            <ExperienceCard
              key={experience.title}
              delay={index * 110}
              {...experience}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
