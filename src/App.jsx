import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import Packages from "./pages/Packages";
import Book from "./pages/Book";
import Reviews from "./pages/Reviews";
import WhyUs from "./pages/Why-us";
import PackageDetail from "./pages/PackageDetail";
import NotFound from "./pages/NotFound";
import AdminLogin from "./pages/adminPages/AdminLogin";
import AdminDashboard from "./pages/adminPages/AdminDashboard";
import AdminBookings from "./pages/adminPages/AdminBookings";
import AdminReviews from "./pages/adminPages/AdminReviews";
import AdminProtectedRoute from "./components/admin/AdminProtectedRoute";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/packages/:packageId" element={<PackageDetail />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/why-us" element={<WhyUs />} />
        <Route path="/book" element={<Book />} />

        <Route path="/admin/login" element={<AdminLogin />} />

        <Route element={<AdminProtectedRoute />}>
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/bookings" element={<AdminBookings />} />
          <Route path="/admin/reviews" element={<AdminReviews />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
