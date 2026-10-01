import { Eye, Star } from "lucide-react";
import { Button } from "../ui/button";
import StatusBadge from "./StatusBadge.jsx";

function Rating({ value }) {
  return <span className="flex gap-0.5" aria-label={`${value} out of 5 stars`}>{Array.from({ length: 5 }, (_, index) => <Star key={index} size={14} className={index < value ? "fill-admin-accent text-admin-accent" : "fill-admin-neutral-soft text-admin-neutral-soft"} aria-hidden="true" />)}</span>;
}

export default function ReviewTable({ reviews, onView, onStatusChange }) {
  return <div className="grid gap-3">{reviews.map((review) => <article key={review.id} className="border border-admin-border bg-admin-surface p-5 shadow-admin-sm sm:p-6"><div className="flex flex-col gap-5 lg:flex-row lg:items-start"><div className="min-w-0 flex-1"><div className="flex flex-wrap items-center gap-3"><h2 className="text-sm font-medium text-admin-foreground">{review.name}</h2><Rating value={review.rating} /><StatusBadge status={review.status} /></div><p className="mt-3 line-clamp-2 text-sm leading-6 text-admin-muted">“{review.message}”</p><p className="mt-3 text-xs text-admin-muted">{review.date} · {review.id}</p></div><div className="flex flex-wrap items-center gap-2 lg:justify-end"><Button type="button" variant="outline" size="sm" onClick={() => onStatusChange(review.id, "Approved")} disabled={review.status === "Approved"} className="rounded-none border-admin-border bg-admin-surface text-admin-success hover:bg-admin-success-soft">Approve</Button><Button type="button" variant="outline" size="sm" onClick={() => onStatusChange(review.id, "Rejected")} disabled={review.status === "Rejected"} className="rounded-none border-admin-border bg-admin-surface text-admin-danger hover:bg-admin-danger-soft">Reject</Button><Button type="button" variant="ghost" size="sm" onClick={() => onView(review)} className="rounded-none text-admin-foreground hover:bg-admin-canvas"><Eye size={15} /> View</Button></div></div></article>)}</div>;
}

export { Rating };
