import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { Button } from "../../components/ui/button";
import StatusBadge from "./StatusBadge.jsx";

const bookingStatuses = [
  "New",
  "Contacted",
  "Confirmed",
  "Completed",
  "Cancelled",
];

const fields = [
  ["Full Name", "name"], ["Phone / WhatsApp", "phone"], ["Email", "email"],
  ["Package", "package"], ["Preferred Date", "date"], ["Number of Guests", "guests"],
  ["Created Date", "created"],
];

export default function BookingDetails({ booking, open, onOpenChange, onStatusChange }) {
  if (!booking) return null;
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-admin-overlay" />
       <Dialog.Content className="fixed inset-y-0 right-0 z-[60] flex w-full max-w-xl flex-col overflow-y-auto bg-white shadow-admin-lg focus:outline-none">
          <div className="flex items-start justify-between border-b border-admin-border px-5 py-6 sm:px-8">
            <div><p className="text-[0.65rem] uppercase tracking-[0.18em] text-admin-muted">Booking {booking.id}</p><Dialog.Title className="mt-2 font-serif text-3xl text-admin-foreground">Booking details</Dialog.Title><Dialog.Description className="mt-2 text-sm text-admin-muted">Review the guest request and manage its booking status.</Dialog.Description></div>
            <Dialog.Close asChild><Button variant="ghost" size="icon" aria-label="Close booking details" className="shrink-0 text-admin-muted hover:bg-admin-canvas hover:text-admin-foreground"><X size={20} /></Button></Dialog.Close>
          </div>
          <div className="flex-1 px-5 py-7 sm:px-8">
            <div className="grid gap-x-7 gap-y-6 sm:grid-cols-2">
              {fields.map(([label, key]) => <div key={key} className={key === "package" ? "sm:col-span-2" : ""}><dt className="text-[0.65rem] font-medium uppercase tracking-[0.14em] text-admin-muted">{label}</dt><dd className="mt-1.5 text-sm leading-6 text-admin-foreground">{booking[key]}</dd></div>)}
              <div><dt className="text-[0.65rem] font-medium uppercase tracking-[0.14em] text-admin-muted">Status</dt><dd className="mt-2"><StatusBadge status={booking.status} /></dd></div>
            </div>
            <div className="mt-8 border-t border-admin-border pt-7"><p className="text-[0.65rem] font-medium uppercase tracking-[0.14em] text-admin-muted">Message</p><p className="mt-3 bg-admin-canvas p-4 text-sm leading-7 text-admin-foreground">{booking.message}</p></div>
            <fieldset className="mt-8"><legend className="text-sm font-medium text-admin-foreground">Change booking status</legend><div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3">{bookingStatuses.map((status) => <Button key={status} type="button" variant="outline" onClick={() => onStatusChange(booking.id, status)} className={`min-h-10 rounded-none border-admin-border text-xs ${booking.status === status ? "bg-admin-sidebar text-admin-sidebar-foreground hover:bg-admin-sidebar hover:text-admin-sidebar-foreground" : "bg-admin-surface text-admin-foreground hover:bg-admin-canvas"}`} aria-pressed={booking.status === status}>{status}</Button>)}</div></fieldset>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
