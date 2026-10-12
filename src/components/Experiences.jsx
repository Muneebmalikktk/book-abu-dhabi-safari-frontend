import SafariCard from "./SafariCard";
import Reveal from "./Reveal";
import { safariPackages } from "../data/safariPackages.js";

export default function Experiences() {
  const featuredPackages = safariPackages;

  return (
    <section
      id="experiences"
      className="bg-secondary/55 px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-36"
    >
      <div className="mx-auto max-w-[1400px]">
        <Reveal className="max-w-2xl">
          <p className="eyebrow text-primary">Our Experiences</p>
          <h2 className="mt-6 text-[clamp(2rem,5.2vw,3.5rem)] leading-[1.05]">
            Explore Desert Safari Packages
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3 xl:gap-10">
          {featuredPackages.map((packageData, index) => (
            <Reveal
              key={packageData.id}
              delay={(index % 3) * 90}
              className="h-full"
            >
              <SafariCard packageData={packageData} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
