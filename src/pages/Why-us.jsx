import Navbar from "../components/Navbar.jsx";
import PageHero from "../components/PageHero.jsx";
import Footer from "../components/Footer.jsx";
import { Link } from "react-router";
import WhatsAppButton from "../components/WhatsAppButton";
import { Helmet } from "react-helmet-async";

const reasons = [
  [
    "Curated Desert Experiences",
    "We focus on experiences that capture the best of the Abu Dhabi desert, from unforgettable sunsets to peaceful moments beneath the stars.",
  ],
  [
    "Comfort From Start to Finish",
    "From pickup to return, we aim to make every part of your journey smooth, comfortable and easy.",
  ],
  [
    "Personal Service",
    "We believe good travel is personal. Our team is here to answer your questions, understand your plans and help you choose the right experience.",
  ],
  [
    "Transparent Pricing",
    "What you see is what you get. Our packages are clearly presented so you can choose your experience with confidence.",
  ],
  [
    "Local Abu Dhabi Experience",
    "Based in Abu Dhabi, we understand the destination and the experiences travelers come here to discover.",
  ],
  [
    "Memories Worth Taking Home",
    "Whether it is your first time in the desert or your next adventure, our goal is to create an experience you will remember long after the journey ends.",
  ],
];

export default function WhyUsPage() {
  return (
    <div className="bg-background">
      <Helmet>
        <title>Why Choose Book Abu Dhabi Safari | Abu Dhabi Desert Safari</title>

        <meta
          name="description"
          content="Discover why travelers choose Book Abu Dhabi Safari for Abu Dhabi desert safaris, with comfortable experiences, personal service, transparent pricing and local expertise."
        />

        <link rel="canonical" href="https://bookabudhabisafari.com/why-us" />
      </Helmet>

      <Navbar />

      <main>
        {/* Page hero */}
        <PageHero
          eyebrow="Why Book Abu Dhabi Safari"
          title="A desert experience, thoughtfully arranged"
          description="From hotel pickup to the final moments beneath the desert sky, we make your Abu Dhabi safari smooth, comfortable and memorable."
          compact={false}
        />

        {/* Why Book Abu Dhabi Safari */}
        <section className="mx-auto max-w-[92rem] px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-28">
          <p className="eyebrow text-accent">Why Book Abu Dhabi Safari</p>

          <dl className="mt-12 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {reasons.map(([reasonTitle, text], i) => (
              <div
                key={reasonTitle}
                className="border-t border-foreground/15 pt-6"
              >
                <span className="eyebrow text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <dt className="mt-4 font-serif text-2xl leading-snug">
                  {reasonTitle}
                </dt>

                <dd className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {text}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        {/* The Book Abu Dhabi Safari Difference */}
        <section className="bg-sand py-16 sm:py-20 lg:py-28">
          <div className="mx-auto max-w-[92rem] px-5 sm:px-8 lg:px-14">
            <div className="max-w-3xl">
              <p className="eyebrow text-accent">
                The Book Abu Dhabi Safari Difference
              </p>

              <h2 className="display-lg mt-6">More Than a Safari</h2>

              <p className="body-lg mt-6 text-muted-foreground">
                A desert safari is more than a drive into the dunes. It is the
                changing light across the sand, the quiet of the desert at
                sunset, the warmth of Arabic hospitality and the moments shared
                along the way. At Book Abu Dhabi Safari, we bring these details
                together to create experiences that feel effortless and
                memorable.
              </p>
            </div>

            <div className="mt-14 flex flex-col items-start gap-6 border-t border-foreground/15 pt-10 sm:flex-row sm:items-center sm:justify-between">
              <h3 className="font-serif text-3xl leading-snug sm:text-4xl">
                Ready to experience the desert?
              </h3>

              <Link to="/book" className="btn btn-solid w-full sm:w-auto">
                Book Your Safari
              </Link>
            </div>
          </div>
        </section>

        <WhatsAppButton />
      </main>

      <Footer />
    </div>
  );
}
