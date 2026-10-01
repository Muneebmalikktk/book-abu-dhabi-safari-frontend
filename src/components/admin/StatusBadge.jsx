const statusClasses = {
  New: "bg-admin-info-soft text-admin-info",
  Contacted: "bg-admin-warning-soft text-admin-warning",
  Confirmed: "bg-admin-success-soft text-admin-success",
  Completed: "bg-admin-neutral-soft text-admin-neutral",
  Cancelled: "bg-admin-danger-soft text-admin-danger",
  Pending: "bg-admin-warning-soft text-admin-warning",
  Approved: "bg-admin-success-soft text-admin-success",
  Rejected: "bg-admin-danger-soft text-admin-danger",
};

export default function StatusBadge({ status }) {
  return (
    <span className={`inline-flex min-h-6 items-center px-2.5 text-[0.68rem] font-medium uppercase tracking-[0.12em] ${statusClasses[status] || statusClasses.Completed}`}>
      {status}
    </span>
  );
}
