import { useState } from "react";
import { useNavigate } from "react-router";

export default function AdminLogin() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    setError("");
    setLoading(true);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/admin/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      sessionStorage.setItem("adminAuthenticated", "true");
navigate("/admin/dashboard");
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-admin-canvas px-4">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <h1 className="font-serif text-3xl text-admin-foreground">
            True Desert
          </h1>

          <p className="mt-2 text-sm uppercase tracking-[0.2em] text-admin-muted">
            Tourism · Admin
          </p>
        </div>

        <div className="border border-admin-border bg-admin-surface p-6 shadow-admin-md sm:p-8">
          <div className="mb-6">
            <h2 className="font-serif text-2xl text-admin-foreground">
              Welcome back
            </h2>

            <p className="mt-2 text-sm text-admin-muted">
              Sign in to manage bookings and reviews.
            </p>
          </div>

          {error && (
            <div className="mb-5 border border-admin-danger/20 bg-admin-danger-soft px-4 py-3 text-sm text-admin-danger">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-admin-foreground"
              >
                Email
              </label>

              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                autoComplete="email"
                className="w-full border border-admin-border bg-admin-canvas px-3 py-3 text-sm text-admin-foreground outline-none transition-colors focus:border-admin-accent focus:ring-2 focus:ring-admin-ring"
                placeholder="admin@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-medium text-admin-foreground"
              >
                Password
              </label>

              <input
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                required
                autoComplete="current-password"
                className="w-full border border-admin-border bg-admin-canvas px-3 py-3 text-sm text-admin-foreground outline-none transition-colors focus:border-admin-accent focus:ring-2 focus:ring-admin-ring"
                placeholder="Enter your password"
              />
            </div>

            <button
  type="submit"
  disabled={loading}
  className="flex min-h-11 w-full items-center justify-center bg-black px-4 text-sm font-medium text-white transition-opacity hover:bg-black/90 disabled:cursor-not-allowed disabled:opacity-60"
>
  {loading ? "Signing in..." : "Sign in"}
</button>
          </form>
        </div>
      </div>
    </main>
  );
}