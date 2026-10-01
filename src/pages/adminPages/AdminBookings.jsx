import { useEffect, useState } from "react";
import AdminLayout from "../../components/admin/AdminLayout";
import BookingTable from "../../components/admin/BookingTable.jsx";
import BookingDetails from "../../components/admin/BookingDetails.jsx";


function formatDate(date) {
  return new Date(date).toLocaleDateString();
}

function formatStatus(status) {
  return status.charAt(0).toUpperCase() + status.slice(1);
}

function normalizeStatus(status) {
  return status.toLowerCase();
}

export default function AdminBookings() {
  const [bookings, setBookings] = useState([]);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [detailsOpen, setDetailsOpen] = useState(false);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchBookings() {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/api/admin/bookings`,
          {
            credentials: "include",
          }
        );

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "Failed to fetch bookings");
        }

        const formattedBookings = data.bookings.map((booking) => ({
          id: booking._id,
          name: booking.name,
          phone: booking.phone,
          email: booking.email,
          package: booking.package,
          date: formatDate(booking.date),
          guests: booking.guests,
          status: formatStatus(booking.status),
          created: formatDate(booking.createdAt),
          message: booking.message || "No message provided",
        }));

        setBookings(formattedBookings);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchBookings();
  }, []);

  function handleViewBooking(booking) {
    setSelectedBooking(booking);
    setDetailsOpen(true);
  }

  async function handleStatusChange(bookingId, newStatus) {
    try {
      setError("");

      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/admin/bookings/${bookingId}/status`,
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
        throw new Error(data.message || "Failed to update booking status");
      }

      const updatedBooking = {
        id: data.booking._id,
        name: data.booking.name,
        phone: data.booking.phone,
        email: data.booking.email,
        package: data.booking.package,
        date: formatDate(data.booking.date),
        guests: data.booking.guests,
        status: formatStatus(data.booking.status),
        created: formatDate(data.booking.createdAt),
        message: data.booking.message || "No message provided",
      };

      setBookings((currentBookings) =>
        currentBookings.map((booking) =>
          booking.id === updatedBooking.id ? updatedBooking : booking
        )
      );

      setSelectedBooking(updatedBooking);
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <AdminLayout
      title="Bookings"
      description="View and manage booking requests submitted through the website."
    >
      {error && (
        <div className="mb-6 border border-admin-danger/20 bg-admin-danger-soft px-4 py-3 text-sm text-admin-danger">
          {error}
        </div>
      )}

      {loading ? (
        <div className="border border-admin-border bg-admin-surface p-8 text-center text-sm text-admin-muted">
          Loading bookings...
        </div>
      ) : bookings.length === 0 ? (
        <div className="border border-admin-border bg-admin-surface p-8 text-center text-sm text-admin-muted">
          No bookings found.
        </div>
      ) : (
        <BookingTable
          bookings={bookings}
          onView={handleViewBooking}
        />
      )}

      <BookingDetails
        booking={selectedBooking}
        open={detailsOpen}
        onOpenChange={setDetailsOpen}
        onStatusChange={handleStatusChange}
      />
    </AdminLayout>
  );
}