import { useState } from "react";
import { trackEvent } from "../../lib/site";

const inputClass =
  "w-full border border-input bg-background px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none transition-colors duration-300";

const labelClass = "eyebrow mb-2 block text-muted-foreground";

function StarSelector({ rating, onChange, error }) {
  return (
    <div
      role="radiogroup"
      aria-label="Star rating"
      aria-invalid={Boolean(error)}
      className={`inline-flex items-center gap-2 border border-input bg-background px-4 py-3 ${
        error ? "border-destructive" : ""
      }`}
    >
      {[1, 2, 3, 4, 5].map((value) => (
        <button
          key={value}
          type="button"
          role="radio"
          aria-checked={rating === value}
          aria-label={`${value} star${value > 1 ? "s" : ""}`}
          onClick={() => onChange(value)}
          className="p-1 transition-transform duration-200 hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          <svg
            viewBox="0 0 20 20"
            aria-hidden="true"
            className={`h-6 w-6 ${
              value <= rating
                ? "fill-accent text-accent"
                : "fill-transparent text-foreground/30"
            } transition-colors duration-200`}
          >
            <path
              stroke="currentColor"
              strokeWidth="1.2"
              d="M10 1.6l2.47 5.35 5.83.68-4.33 3.96 1.16 5.74L10 14.44l-5.13 2.89 1.16-5.74L1.7 7.63l5.83-.68L10 1.6z"
            />
          </svg>
        </button>
      ))}
    </div>
  );
}

export default function ReviewForm({ onPosted }) {
  const [form, setForm] = useState({
    name: "",
    message: "",
  });

  const [rating, setRating] = useState(0);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [posted, setPosted] = useState(false);

  const update = (field) => (e) => {
    const value = e.target.value;

    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [field]: undefined,
      submit: undefined,
    }));

    setPosted(false);
  };

  const validate = () => {
    const next = {};

    if (!form.name.trim()) {
      next.name = "Please enter your full name.";
    } else if (form.name.trim().length > 80) {
      next.name = "Please use 80 characters or fewer.";
    }

    if (!rating) {
      next.rating = "Please select a star rating before posting.";
    }

    if (!form.message.trim()) {
      next.message = "Please write a short review.";
    } else if (form.message.trim().length > 1000) {
      next.message = "Please use 1000 characters or fewer.";
    }

    return next;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const next = validate();

    setErrors(next);

    if (Object.keys(next).length) {
      return;
    }

    setSubmitting(true);
    setPosted(false);
    setErrors({});

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/reviews`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: form.name.trim(),
            rating,
            message: form.message.trim(),
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to submit review.");
      }

      onPosted?.(data.review);

      trackEvent("review_submitted", {
        location: "review_form",
        rating,
      });

      setForm({
        name: "",
        message: "",
      });

      setRating(0);
      setPosted(true);
    } catch (error) {
      trackEvent("review_submission_error", {
        location: "review_form",
      });

      setErrors({
        submit:
          error.message || "Something went wrong. Please try again.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="border border-border bg-card p-6 sm:p-10 lg:p-12"
    >
      <div className="grid gap-7">
        <div>
          <label htmlFor="review-name" className={labelClass}>
            Full name
          </label>

          <input
            id="review-name"
            type="text"
            maxLength={80}
            value={form.name}
            onChange={update("name")}
            aria-invalid={Boolean(errors.name)}
            placeholder="Your name"
            className={`${inputClass} ${
              errors.name ? "border-destructive" : ""
            }`}
          />

          {errors.name ? (
            <p className="mt-2 text-xs text-destructive">
              {errors.name}
            </p>
          ) : null}
        </div>

        <div>
          <label id="review-rating-label" className={labelClass}>
            Star rating
          </label>

          <StarSelector
            rating={rating}
            onChange={(value) => {
              setRating(value);

              setErrors((prev) => ({
                ...prev,
                rating: undefined,
                submit: undefined,
              }));

              setPosted(false);
            }}
            error={errors.rating}
          />

          <span className="sr-only" aria-live="polite">
            {rating
              ? `${rating} of 5 stars selected`
              : "No rating selected yet"}
          </span>

          {errors.rating ? (
            <p className="mt-2 text-xs text-destructive">
              {errors.rating}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="review-message" className={labelClass}>
            Message
          </label>

          <textarea
            id="review-message"
            rows="5"
            maxLength={1000}
            value={form.message}
            onChange={update("message")}
            aria-invalid={Boolean(errors.message)}
            placeholder="Tell us about your desert experience…"
            className={`${inputClass} resize-none ${
              errors.message ? "border-destructive" : ""
            }`}
          />

          {errors.message ? (
            <p className="mt-2 text-xs text-destructive">
              {errors.message}
            </p>
          ) : null}
        </div>
      </div>

      {errors.submit ? (
        <p className="mt-5 text-xs text-destructive" role="alert">
          {errors.submit}
        </p>
      ) : null}

      <div className="mt-9 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:justify-between">
        <p
          aria-live="polite"
          className="max-w-sm text-xs leading-relaxed text-muted-foreground"
        >
          {posted
            ? "Thank you. Your review has been submitted and is awaiting approval."
            : "Your review will be reviewed before appearing publicly."}
        </p>

        <button
          type="submit"
          disabled={submitting}
          className="btn btn-solid w-full disabled:opacity-60 sm:w-auto"
        >
          {submitting ? "Submitting…" : "Post Review"}
        </button>
      </div>
    </form>
  );
}