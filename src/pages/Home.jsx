import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Introduction from "../components/Introduction";
import Experiences from "../components/Experiences";
import FeaturedExperience from "../components/FeaturedExperience";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../components/Testimonials";
import BookingForm from "../components/BookingForm";
import WhatsAppButton from "../components/WhatsAppButton";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet-async";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: "Book Abu Dhabi Safari",
  url: "https://bookabudhabisafari.com/",
  telephone: "+971 50 000 0000",
  description:
    "Book Abu Dhabi Safari offers Abu Dhabi desert safari experiences, including evening, luxury, private and adventure desert tours.",
  areaServed: {
    "@type": "City",
    name: "Abu Dhabi",
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Abu Dhabi Desert Safari | Book Abu Dhabi Safari</title>

        <meta
          name="description"
          content="Experience unforgettable Abu Dhabi desert safaris with Book Abu Dhabi Safari, from evening and luxury safaris to private desert adventures, quad biking and more."
        />

        <link rel="canonical" href="https://bookabudhabisafari.com/" />

        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <Navbar />

      <main>
        <Hero />
        <Introduction />
        <Experiences />
        <FeaturedExperience />
        <WhyChooseUs />
        <Testimonials />
        <BookingForm />
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
