import { useEffect, useState } from "react";

import Navbar from "../components/Navbar.jsx";
import PageHero from "../components/PageHero.jsx";
import Footer from "../components/Footer.jsx";
import WhatsAppButton from "../components/WhatsAppButton";
import ReviewCard from "../components/reviews/ReviewCard.jsx";
import ReviewForm from "../components/reviews/ReviewForm.jsx";
import { Helmet } from "react-helmet-async";
import { sampleReviews } from "../data/reviews.js";

const title = "Guest Reviews | Book Abu Dhabi Safari Abu Dhabi Desert Safari";
const description =
  "Read what travelers say about their Abu Dhabi desert safari with Book Abu Dhabi Safari — sunsets over the dunes, smooth hotel pickups and warm Arabic hospitality.";

export default function ReviewsPage() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchReviews() {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/api/reviews`,
        );

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "Failed to fetch reviews");
        }

        const formattedReviews = data.reviews.map((review) => ({
          id: review._id,
          name: review.name,
          rating: review.rating,
          message: review.message,
          date: new Date(review.createdAt).toLocaleDateString(),
        }));

        setReviews(formattedReviews);
      } catch (error) {
        console.error("Reviews could not be loaded:", error);
        setReviews(sampleReviews);
        setError("");
      } finally {
        setLoading(false);
      }
    }

    fetchReviews();
  }, []);

  return (
    <div className="bg-background">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />

        <link rel="canonical" href="https://bookabudhabisafari.com/reviews" />
      </Helmet>

      <Navbar />

      <main>
        {/* Page hero */}
        <PageHero
          eyebrow="Guest Experiences"
          title="Stories from the Abu Dhabi desert"
          description="Read what guests share about the sunsets, hospitality and memorable moments that make every desert journey unique."
          compact={false}
        />

        {/* Reviews */}
        <section className="mx-auto max-w-[92rem] px-5 py-14 sm:px-8 sm:py-20 lg:px-14 lg:py-24">
          <div className="mb-10 sm:mb-12">
            <p className="text-[0.65rem] uppercase tracking-[0.2em] text-accent sm:text-[0.6875rem] sm:tracking-[0.22em]">
              Guest Experiences
            </p>

            <h2 className="mt-4 font-serif text-3xl font-light leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              What our guests say
            </h2>
          </div>

          {loading && (
            <p className="text-sm text-muted-foreground">Loading reviews...</p>
          )}

          {!loading && error && (
            <p className="text-sm text-destructive">
              Failed to load reviews: {error}
            </p>
          )}

          {!loading && !error && reviews.length === 0 && (
            <p className="text-sm text-muted-foreground">
              No reviews available yet.
            </p>
          )}

          {!loading && !error && reviews.length > 0 && (
            <div className="grid gap-5 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 xl:gap-10">
              {reviews.map((review) => (
                <div key={review.id} className="h-full">
                  <ReviewCard review={review} />
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Leave a Review */}
        <section className="bg-sand py-14 sm:py-20 lg:py-28">
          <div className="mx-auto max-w-[92rem] px-5 sm:px-8 lg:px-14">
            <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-4">
                <p className="text-[0.65rem] uppercase tracking-[0.2em] text-accent sm:text-[0.6875rem] sm:tracking-[0.22em]">
                  Leave a Review
                </p>

                <h2 className="mt-4 font-serif text-4xl font-light leading-[1.05] tracking-tight sm:mt-5 sm:text-5xl lg:text-6xl">
                  Share Your Experience
                </h2>

                <p className="mt-5 max-w-md text-sm leading-[1.8] text-muted-foreground">
                  Have you experienced the desert with "Book Abu Dhabi Safari"?
                  We'd love to hear about your journey.
                </p>
              </div>

              <div className="lg:col-span-8">
                <ReviewForm />
              </div>
            </div>
          </div>
        </section>

        <WhatsAppButton />
      </main>

      <Footer />
    </div>
  );
}
