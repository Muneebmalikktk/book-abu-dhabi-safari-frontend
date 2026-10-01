import { useEffect, useState } from "react";
import AdminSidebar from "./AdminSidebar.jsx";
import AdminHeader from "./AdminHeader.jsx";

export default function AdminLayout({ title, description, actions, children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  useEffect(() => {
    document.body.style.overflow = sidebarOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [sidebarOpen]);

  return (
    <div className="min-h-screen bg-admin-canvas font-sans text-admin-foreground">
      <AdminSidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="min-h-screen lg:pl-[17.5rem]">
        <AdminHeader title={title} onMenuOpen={() => setSidebarOpen(true)} />
        <main className="px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
          <div className="mx-auto max-w-[96rem]">
            {(description || actions) ? <div className="mb-7 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"><p className="max-w-2xl text-sm leading-6 text-admin-muted">{description}</p>{actions}</div> : null}
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
