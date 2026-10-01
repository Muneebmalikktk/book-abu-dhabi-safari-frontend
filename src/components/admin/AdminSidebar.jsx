import { useNavigate, useLocation, Link } from "react-router";
import {
  CalendarDays,
  LayoutDashboard,
  LogOut,
  MessageSquareText,
  X,
} from "lucide-react";

const navigation = [
  { label: "Dashboard", to: "/admin/dashboard", icon: LayoutDashboard },
  { label: "Bookings", to: "/admin/bookings", icon: CalendarDays },
  { label: "Reviews", to: "/admin/reviews", icon: MessageSquareText },
];

export default function AdminSidebar({ open, onClose }) {
  const location = useLocation();
  const navigate = useNavigate();

  const pathname = location.pathname;

  async function handleLogout() {
    try {
      await fetch(`${import.meta.env.VITE_API_URL}/api/admin/logout`, {
        method: "POST",
        credentials: "include",
      });
    } finally {
      sessionStorage.removeItem("adminAuthenticated");
      onClose();
      navigate("/admin/login");
    }
  }

  return (
    <>
      <div
        className={`fixed inset-0 z-40 bg-admin-overlay transition-opacity lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-[17.5rem] flex-col bg-admin-sidebar text-admin-sidebar-foreground transition-transform duration-300 lg:translate-x-0 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
        aria-label="Admin navigation"
      >
        <div className="flex h-20 items-center justify-between border-b border-admin-sidebar-border px-6">
          <Link
            to="/admin/dashboard"
            onClick={onClose}
            className="min-w-0"
          >
            <span className="block font-serif text-xl leading-none">
              True Desert
            </span>

            <span className="mt-1.5 block text-[0.62rem] uppercase tracking-[0.24em] text-admin-sidebar-muted">
              Tourism · Admin
            </span>
          </Link>

          <button
            type="button"
            onClick={onClose}
            className="admin-icon-button text-admin-sidebar-foreground lg:hidden"
            aria-label="Close navigation"
          >
            <X size={20} />
          </button>
        </div>

        <nav className="flex-1 px-4 py-8">
          <p className="px-3 text-[0.62rem] font-medium uppercase tracking-[0.2em] text-admin-sidebar-muted">
            Workspace
          </p>

          <ul className="mt-4 space-y-1.5">
            {navigation.map(({ label, to, icon: Icon }) => {
              const active = pathname === to;

              return (
                <li key={to}>
                  <Link
                    to={to}
                    onClick={onClose}
                    aria-current={active ? "page" : undefined}
                    className={`flex min-h-11 items-center gap-3 border-l-2 px-3 text-sm transition-colors ${
                      active
                        ? "border-admin-accent bg-admin-sidebar-active text-admin-sidebar-foreground"
                        : "border-transparent text-admin-sidebar-muted hover:bg-admin-sidebar-active hover:text-admin-sidebar-foreground"
                    }`}
                  >
                    <Icon size={18} aria-hidden="true" />
                    <span>{label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="border-t border-admin-sidebar-border p-4">
          <button
            type="button"
            onClick={handleLogout}
            className="flex min-h-11 w-full items-center gap-3 px-3 text-left text-sm text-admin-sidebar-muted transition-colors hover:bg-admin-sidebar-active hover:text-admin-sidebar-foreground"
          >
            <LogOut size={18} aria-hidden="true" />
            Logout
          </button>
        </div>
      </aside>
    </>
  );
}