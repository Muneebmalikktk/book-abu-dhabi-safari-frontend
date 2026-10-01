import { Navigate, Outlet } from "react-router";

export default function AdminProtectedRoute() {
  const isAuthenticated = sessionStorage.getItem("adminAuthenticated");

  if (!isAuthenticated) {
    return <Navigate to="/admin/login" replace />;
  }

  return <Outlet />;
}