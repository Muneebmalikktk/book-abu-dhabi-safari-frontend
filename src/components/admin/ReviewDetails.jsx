

import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { Button } from "../ui/button";
import StatusBadge from "./StatusBadge.jsx";
import { Rating } from "./ReviewTable.jsx";

export default function ReviewDetails({
  review,
  open,
  onOpenChange,
  onStatusChange,
}) {
  if (!review) return null;

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-admin-overlay" />

        <Dialog.Content className="fixed left-1/2 top-1/2 z-50 w-[calc(100%-2rem)] max-w-xl -translate-x-1/2 -translate-y-1/2 bg-white p-6 shadow-admin-lg focus:outline-none sm:p-8">
          <div className="flex items-start justify-between gap-5">
            <div>
              <p className="text-[0.65rem] uppercase tracking-[0.18em] text-admin-muted">
                Review {review.id}
              </p>

              <Dialog.Title className="mt-2 font-serif text-3xl text-admin-foreground">
                {review.name}
              </Dialog.Title>

              <Dialog.Description className="sr-only">
                Review moderation details
              </Dialog.Description>
            </div>

            <Dialog.Close asChild>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Close review details"
                className="text-admin-muted hover:bg-admin-canvas"
              >
                <X size={20} />
              </Button>
            </Dialog.Close>
          </div>

          <div className="mt-6 flex items-center justify-between border-y border-admin-border py-4">
            <Rating value={review.rating} />
            <StatusBadge status={review.status} />
          </div>

          <blockquote className="mt-6 font-serif text-2xl leading-9 text-admin-foreground">
            “{review.message}”
          </blockquote>

          <p className="mt-5 text-xs text-admin-muted">
            Submitted {review.date}
          </p>

          <div className="mt-8 flex flex-col gap-2 border-t border-admin-border pt-6 sm:flex-row sm:justify-end">
            <Button
              type="button"
              variant="outline"
              onClick={() => onStatusChange(review.id, "Rejected")}
              className="rounded-none border-admin-border bg-white text-admin-danger hover:bg-admin-danger-soft"
            >
              Reject review
            </Button>

            <Button
              type="button"
              onClick={() => onStatusChange(review.id, "Approved")}
              className="rounded-none bg-admin-sidebar text-admin-sidebar-foreground hover:bg-admin-accent"
            >
              Approve review
            </Button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}