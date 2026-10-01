import { Eye } from "lucide-react";
import { Button } from "../ui/button";
import StatusBadge from "./StatusBadge.jsx";

export default function BookingTable({ bookings, onView, compact = false }) {
  return (
    <>
      <div className="hidden overflow-x-auto border border-admin-border bg-admin-surface shadow-admin-sm md:block">
        <table className="w-full min-w-[900px] border-collapse text-left">
          <thead><tr className="border-b border-admin-border bg-admin-canvas text-[0.65rem] uppercase tracking-[0.13em] text-admin-muted">
            <th className="px-5 py-3.5 font-medium">Customer</th><th className="px-5 py-3.5 font-medium">Phone</th>{!compact && <th className="px-5 py-3.5 font-medium">Email</th>}<th className="px-5 py-3.5 font-medium">Package</th><th className="px-5 py-3.5 font-medium">Date</th><th className="px-5 py-3.5 font-medium">Guests</th><th className="px-5 py-3.5 font-medium">Status</th><th className="px-5 py-3.5 font-medium">Created</th>{!compact && <th className="px-5 py-3.5 text-right font-medium">Actions</th>}
          </tr></thead>
          <tbody>{bookings.map((booking) => <tr key={booking.id} onClick={() => onView?.(booking)} className={`border-b border-admin-border last:border-b-0 ${onView ? "cursor-pointer transition-colors hover:bg-admin-canvas" : ""}`}>
            <td className="px-5 py-4"><p className="text-sm font-medium text-admin-foreground">{booking.name}</p><p className="mt-1 text-xs text-admin-muted">{booking.id}</p></td><td className="px-5 py-4 text-sm text-admin-muted">{booking.phone}</td>{!compact && <td className="px-5 py-4 text-sm text-admin-muted">{booking.email}</td>}<td className="max-w-[13rem] px-5 py-4 text-sm text-admin-foreground">{booking.package}</td><td className="whitespace-nowrap px-5 py-4 text-sm text-admin-muted">{booking.date}</td><td className="px-5 py-4 text-sm text-admin-foreground">{booking.guests}</td><td className="px-5 py-4"><StatusBadge status={booking.status} /></td><td className="whitespace-nowrap px-5 py-4 text-xs text-admin-muted">{booking.created}</td>{!compact && <td className="px-5 py-4 text-right"><Button type="button" variant="ghost" size="icon" onClick={(event) => { event.stopPropagation(); onView(booking); }} aria-label={`View booking from ${booking.name}`} className="text-admin-muted hover:bg-admin-canvas hover:text-admin-foreground"><Eye size={17} /></Button></td>}
          </tr>)}</tbody>
        </table>
      </div>
      <div className="grid gap-3 md:hidden">{bookings.map((booking) => <article key={booking.id} className="border border-admin-border bg-admin-surface p-5 shadow-admin-sm"><div className="flex items-start justify-between gap-3"><div><p className="text-sm font-medium text-admin-foreground">{booking.name}</p><p className="mt-1 text-xs text-admin-muted">{booking.id} · {booking.created}</p></div><StatusBadge status={booking.status} /></div><dl className="mt-5 grid grid-cols-2 gap-4 border-t border-admin-border pt-4 text-sm"><div><dt className="text-xs text-admin-muted">Package</dt><dd className="mt-1 text-admin-foreground">{booking.package}</dd></div><div><dt className="text-xs text-admin-muted">Preferred date</dt><dd className="mt-1 text-admin-foreground">{booking.date}</dd></div><div><dt className="text-xs text-admin-muted">Phone</dt><dd className="mt-1 text-admin-foreground">{booking.phone}</dd></div><div><dt className="text-xs text-admin-muted">Guests</dt><dd className="mt-1 text-admin-foreground">{booking.guests}</dd></div></dl>{onView ? <Button type="button" variant="outline" onClick={() => onView(booking)} className="mt-5 w-full rounded-none border-admin-border bg-admin-surface text-admin-foreground hover:bg-admin-canvas"><Eye size={16} /> View details</Button> : null}</article>)}</div>
    </>
  );
}
