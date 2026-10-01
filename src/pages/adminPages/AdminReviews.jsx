import { useEffect, useState } from "react";
import AdminLayout from "../../components/admin/AdminLayout.jsx";
import ReviewTable from "../../components/admin/ReviewTable.jsx";
import ReviewDetails from "../../components/admin/ReviewDetails.jsx";

function formatDate(date) {
  return new Date(date).toLocaleDateString();
}

function formatStatus(status) {
  return status.charAt(0).toUpperCase() + status.slice(1);
}

function normalizeStatus(status) {
  return status.toLowerCase();
}

export default function AdminReviews() {
  const [reviews, setReviews] = useState([]);
  const [selectedReview, setSelectedReview] = useState(null);
  const [detailsOpen, setDetailsOpen] = useState(false);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchReviews() {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/api/admin/reviews`,
          {
            credentials: "include",
          }
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
          status: formatStatus(review.status),
          date: formatDate(review.createdAt),
        }));

        setReviews(formattedReviews);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchReviews();
  }, []);

  function handleViewReview(review) {
    setSelectedReview(review);
    setDetailsOpen(true);
  }

  async function handleStatusChange(reviewId, newStatus) {
    try {
      setError("");

      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/admin/reviews/${reviewId}/status`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({
            status: normalizeStatus(newStatus),
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Failed to update review status"
        );
      }

      const updatedReview = {
        id: data.review._id,
        name: data.review.name,
        rating: data.review.rating,
        message: data.review.message,
        status: formatStatus(data.review.status),
        date: formatDate(data.review.createdAt),
      };

      setReviews((currentReviews) =>
        currentReviews.map((review) =>
          review.id === updatedReview.id ? updatedReview : review
        )
      );

      setSelectedReview(updatedReview);
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <AdminLayout
      title="Reviews"
      description="Review customer feedback and manage which reviews appear publicly."
    >
      {error && (
        <div className="mb-6 border border-admin-danger/20 bg-admin-danger-soft px-4 py-3 text-sm text-admin-danger">
          {error}
        </div>
      )}

      {loading ? (
        <div className="border border-admin-border bg-admin-surface p-8 text-center text-sm text-admin-muted">
          Loading reviews...
        </div>
      ) : reviews.length === 0 ? (
        <div className="border border-admin-border bg-admin-surface p-8 text-center text-sm text-admin-muted">
          No reviews found.
        </div>
      ) : (
        <ReviewTable
          reviews={reviews}
          onView={handleViewReview}
          onStatusChange={handleStatusChange}
        />
      )}

      <ReviewDetails
        review={selectedReview}
        open={detailsOpen}
        onOpenChange={setDetailsOpen}
        onStatusChange={handleStatusChange}
      />
    </AdminLayout>
  );
}