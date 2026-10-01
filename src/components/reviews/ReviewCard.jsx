function Stars({ rating }) {
  return (
    <span
      aria-label={`${rating} out of 5 stars`}
      className="flex items-center gap-1 text-accent"
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          aria-hidden="true"
          className={`h-3.5 w-3.5 ${i < rating ? "fill-current" : "fill-current opacity-25"}`}
        >
          <path d="M10 1.6l2.47 5.35 5.83.68-4.33 3.96 1.16 5.74L10 14.44l-5.13 2.89 1.16-5.74L1.7 7.63l5.83-.68L10 1.6z" />
        </svg>
      ))}
    </span>
  );
}

export default function ReviewCard({ review }) {
  return (
    <figure className="flex h-full flex-col border border-border bg-card p-7 sm:p-9">
      {review.rating ? <Stars rating={review.rating} /> : null}
      <blockquote className="mt-6 font-serif text-xl leading-relaxed sm:text-2xl">
        “{review.message}”
      </blockquote>
      <figcaption className="mt-auto pt-7 text-sm text-muted-foreground">
        <span className="block text-[0.72rem] uppercase tracking-[0.18em] text-foreground">
          {review.name}
        </span>
        {review.location ? <span className="mt-1 block">{review.location}</span> : null}
      </figcaption>
    </figure>
  );
}
