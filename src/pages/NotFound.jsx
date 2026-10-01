import { Link } from "react-router";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import PageHero from "../components/PageHero.jsx";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <PageHero
          eyebrow="Page Not Found"
          title="This path has disappeared into the dunes."
          description="The page may have moved. Explore our safari packages or return to the homepage."
          compact
        />
        <div className="mx-auto flex max-w-[1400px] flex-wrap gap-4 px-5 py-12 sm:px-8 lg:px-12">
          <Link
            to="/packages"
            className="bg-foreground px-7 py-4 text-sm text-background"
          >
            View Safari Packages
          </Link>
          <Link
            to="/"
            className="border border-foreground px-7 py-4 text-sm text-foreground"
          >
            Return Home
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
