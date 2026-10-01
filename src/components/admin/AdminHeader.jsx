import { useState } from "react";
import { ChevronDown, LogOut, Menu, UserRound } from "lucide-react";
import { useNavigate } from "react-router";

export default function AdminHeader({ title, onMenuOpen }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  async function handleLogout() {
    try {
      await fetch(`${import.meta.env.VITE_API_URL}/api/admin/logout`, {
        method: "POST",
        credentials: "include",
      });
    } finally {
      sessionStorage.removeItem("adminAuthenticated");
      navigate("/admin/login");
    }
  }

  return (
    <header className="sticky top-0 z-30 flex h-20 items-center justify-between border-b border-admin-border bg-admin-canvas/95 px-4 backdrop-blur-sm sm:px-6 lg:px-8">
      <div className="flex min-w-0 items-center gap-3">
        <button
          type="button"
          onClick={onMenuOpen}
          className="admin-icon-button lg:hidden"
          aria-label="Open navigation"
        >
          <Menu size={21} />
        </button>

        <div className="min-w-0">
          <p className="text-[0.62rem] font-medium uppercase tracking-[0.18em] text-admin-muted">
            Administration
          </p>

          <h1 className="truncate font-serif text-2xl leading-tight text-admin-foreground">
            {title}
          </h1>
        </div>
      </div>

      <div className="relative">
        <button
          type="button"
          onClick={() => setMenuOpen((value) => !value)}
          aria-expanded={menuOpen}
          className="flex min-h-11 items-center gap-3 border border-transparent px-2 transition-colors hover:border-admin-border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-admin-ring sm:px-3"
        >
          <span className="flex h-9 w-9 items-center justify-center bg-admin-accent-soft text-admin-accent">
            <UserRound size={17} />
          </span>

          <span className="hidden text-left sm:block">
            <span className="block text-sm font-medium text-admin-foreground">
              Administrator
            </span>

            <span className="block text-xs text-admin-muted">
              Operations
            </span>
          </span>

          <ChevronDown size={15} className="text-admin-muted" />
        </button>

        {menuOpen ? (
          <div className="absolute right-0 mt-2 w-52 border border-admin-border bg-admin-sidebar p-2 shadow-admin-md">
            <div className="border-b border-admin-sidebar-border px-3 py-2 sm:hidden">
              <p className="text-sm font-medium text-admin-sidebar-foreground">
                Administrator
              </p>

              <p className="text-xs text-admin-sidebar-muted">
                Operations
              </p>
            </div>

            <button
              type="button"
              onClick={handleLogout}
              className="mt-1 flex min-h-10 w-full items-center gap-2.5 px-3 text-left text-sm text-admin-sidebar-foreground transition-colors hover:bg-admin-sidebar-active"
            >
              <LogOut size={16} />
              Logout
            </button>
          </div>
        ) : null}
      </div>
    </header>
  );
}