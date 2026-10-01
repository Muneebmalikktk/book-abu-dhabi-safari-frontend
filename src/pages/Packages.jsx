import Navbar from "../components/Navbar.jsx";
import PageHero from "../components/PageHero.jsx";
import Footer from "../components/Footer.jsx";
import SafariCard from "../components/SafariCard.jsx";
import Reveal from "../components/Reveal.jsx";
import { safariPackages } from "../data/safariPackages.js";
import WhatsAppButton from "../components/WhatsAppButton";
import { Helmet } from "react-helmet-async";

export default function PackagesPage() {
  return (
    <div className="bg-background">
      <Helmet>
        <title>Desert Safari Packages in Abu Dhabi | Book Abu Dhabi Safari</title>

        <meta
          name="description"
          content="Explore Abu Dhabi desert safari packages, including evening, luxury, private, VIP, quad bike, dune buggy and overnight desert safari experiences."
        />

        <link rel="canonical" href="https://bookabudhabisafari.com/packages" />
      </Helmet>

      <Navbar />

      <main>
        {/* Page hero */}
        <PageHero
          eyebrow="Abu Dhabi · United Arab Emirates"
          title="Abu Dhabi Desert Safari Packages"
          description="From classic evening safaris to private escapes and off-road adventures, choose a professionally arranged experience with clear pricing and convenient pickup."
          compact={false}
        />

        {/* Package grid */}
        <section className="mx-auto max-w-[92rem] px-5 py-16 sm:px-8 sm:py-20 lg:px-14">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:gap-10">
            {safariPackages.map((packageData, index) => (
              <Reveal
                key={packageData.id}
                delay={(index % 3) * 90}
                className="h-full"
              >
                <SafariCard packageData={packageData} />
              </Reveal>
            ))}
          </div>
        </section>

        <WhatsAppButton />
      </main>

      <Footer />
    </div>
  );
}
