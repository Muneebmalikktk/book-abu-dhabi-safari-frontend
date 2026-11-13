import { API_BASE_URL } from "../../lib/api.js";
import AdminLayout from "../../components/admin/AdminLayout.jsx";
import StatCard from "../../components/admin/StatCard.jsx";
import { useEffect, useState } from "react";
import { Link } from "react-router";

export default function AdminDashboard() {
  const [bookings, setBookings] = useState([]);
  const [reviews, setReviews] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchDashboardData() {
      try {
        const [bookingsResponse, reviewsResponse] = await Promise.all([
          fetch(`${API_BASE_URL}/api/admin/bookings`, {
            credentials: "include",
          }),
          fetch(`${API_BASE_URL}/api/admin/reviews`, {
            credentials: "include",
          }),
        ]);

        const bookingsData = await bookingsResponse.json();
        const reviewsData = await reviewsResponse.json();

        if (!bookingsResponse.ok) {
          throw new Error(
            bookingsData.message || "Failed to fetch bookings"
          );
        }

        if (!reviewsResponse.ok) {
          throw new Error(
            reviewsData.message || "Failed to fetch reviews"
          );
        }

        setBookings(bookingsData.bookings);
        setReviews(reviewsData.reviews);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchDashboardData();
  }, []);

  const totalBookings = bookings.length;

  const newBookings = bookings.filter(
    (booking) => booking.status === "new"
  ).length;

  const confirmedBookings = bookings.filter(
    (booking) => booking.status === "confirmed"
  ).length;

  const pendingReviews = reviews.filter(
    (review) => review.status === "pending"
  ).length;

  return (
    <AdminLayout
      title="Dashboard"
      description="Overview of your tourism enquiries and customer reviews."
    >
      {error && (
        <div className="mb-6 border border-admin-danger/20 bg-admin-danger-soft px-4 py-3 text-sm text-admin-danger">
          {error}
        </div>
      )}

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <Link to="/admin/bookings" className="block h-full rounded-sm transition-all duration-300 hover:-translate-y-1 hover:drop-shadow-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">
          <StatCard
            label="Total Bookings"
            value={loading ? "..." : totalBookings}
            change="All booking requests"
            tone="default"
          />
        </Link>

        <Link to="/admin/bookings" className="block h-full rounded-sm transition-all duration-300 hover:-translate-y-1 hover:drop-shadow-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">
          <StatCard
            label="New Bookings"
            value={loading ? "..." : newBookings}
            change="Awaiting attention"
            tone="accent"
          />
        </Link>

        <Link to="/admin/bookings" className="block h-full rounded-sm transition-all duration-300 hover:-translate-y-1 hover:drop-shadow-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">
          <StatCard
            label="Confirmed"
            value={loading ? "..." : confirmedBookings}
            change="Confirmed bookings"
            tone="success"
          />
        </Link>

        <Link to="/admin/reviews" className="block h-full rounded-sm transition-all duration-300 hover:-translate-y-1 hover:drop-shadow-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">
          <StatCard
            label="Pending Reviews"
            value={loading ? "..." : pendingReviews}
            change="Waiting for approval"
            tone="warning"
          />
        </Link>
      </section>
    </AdminLayout>
  );
}