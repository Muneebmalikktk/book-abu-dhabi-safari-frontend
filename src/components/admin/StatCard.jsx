import { ArrowUpRight } from "lucide-react";

const toneClasses = {
  default: "bg-admin-surface text-admin-foreground",
  accent: "bg-admin-accent-soft text-admin-accent",
  success: "bg-admin-success-soft text-admin-success",
  warning: "bg-admin-warning-soft text-admin-warning",
};

export default function StatCard({ label, value, change, tone = "default" }) {
  return (
    <article className="border border-admin-border bg-admin-surface p-5 shadow-admin-sm sm:p-6">
      <div className="flex items-start justify-between gap-4">
        <p className="text-xs font-medium uppercase tracking-[0.16em] text-admin-muted">{label}</p>
        <span className={`flex h-8 w-8 items-center justify-center ${toneClasses[tone]}`} aria-hidden="true">
          <ArrowUpRight size={15} />
        </span>
      </div>
      <p className="mt-6 font-serif text-4xl leading-none text-admin-foreground">{value}</p>
      <p className="mt-3 text-xs text-admin-muted">{change}</p>
    </article>
  );
}
