import Navbar from "../components/Navbar.jsx";
import PageHero from "../components/PageHero.jsx";
import Footer from "../components/Footer.jsx";
import BookingForm from "../components/BookingForm.jsx";
import { useReveal } from "../hooks/useReveal.js";
import WhatsAppButton from "../components/WhatsAppButton";
import { Helmet } from "react-helmet-async";
import { whatsappHref } from "../lib/site.js";

const steps = [
  {
    step: "01",
    title: "Send your request",
    text: "Choose a package, a date and your group size.",
  },
  {
    step: "02",
    title: "We confirm",
    text: "We reply on WhatsApp or email within a few hours.",
  },
  {
    step: "03",
    title: "Enjoy the desert",
    text: "Pickup from your hotel or meeting point in Abu Dhabi.",
  },
];

export default function BookPage() {
  const { ref: formRef, visible } = useReveal();

  return (
    <div className="bg-background">
      <Helmet>
        <title>
          Book Abu Dhabi Desert Safari | true desert Tourism Abu Dhabi
        </title>
        <meta
          name="description"
          content="Book your Abu Dhabi desert safari with Book Abu Dhabi Safari. Choose your preferred package, date and group size, and let our team arrange the experience."
        />
        <link rel="canonical" href="https://bookabudhabisafari.com/book" />
      </Helmet>

      <Navbar />

      <main>
        {/* Page hero */}
        <PageHero
          eyebrow="Plan Your Desert Experience"
          title="Book your Abu Dhabi desert safari"
          description="Tell us your preferred date, package and group size. Our team will confirm availability and help arrange the rest."
          compact={true}
        />

        {/* Booking form */}
        <section className="mx-auto max-w-[92rem] px-5 py-10 sm:px-8 sm:py-12 lg:px-14">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
            <aside className="mt-0 lg:col-span-4">
              <p className="text-[0.6875rem] font-normal uppercase tracking-[0.22em] text-accent">
                How it works
              </p>

              <ol className="mt-8 space-y-8">
                {steps.map((item) => (
                  <li key={item.step} className="flex gap-6">
                    <span className="font-serif text-lg text-accent">
                      {item.step}
                    </span>

                    <div>
                      <h3 className="font-serif text-xl">{item.title}</h3>

                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {item.text}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>

              <div className="mt-12 border-t border-border pt-8">
                <p className="text-[0.6875rem] font-normal uppercase tracking-[0.22em] text-muted-foreground">
                  Prefer to talk?
                </p>

                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center justify-center border border-foreground px-6 py-3 text-[0.72rem] font-medium uppercase tracking-[0.18em] text-foreground transition-colors hover:bg-foreground hover:text-background"
                >
                  WhatsApp Us
                </a>
              </div>
            </aside>

            <div
              ref={formRef}
              data-visible={visible ? "true" : "false"}
              className="reveal lg:col-span-8 [&_#booking]:py-0"
            >
              <BookingForm showBackHome />
            </div>
          </div>
        </section>

        <WhatsAppButton />
      </main>

      <Footer />
    </div>
  );
}
