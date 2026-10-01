import { useRef, useState } from "react";
import { useNavigate, useSearchParams } from "react-router";
import Reveal from "./Reveal";
import { trackEvent } from "../lib/site";
import { safariPackage } from "../data/formSeletionData.js";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

const FIELD =
  "w-full border-b border-border bg-transparent py-3 text-[0.95rem] text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary";

const LABEL = "eyebrow block text-muted-foreground";

export default function BookingForm({ showBackHome = false }) {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [phone, setPhone] = useState("");
  const started = useRef(false);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const selectedPackage =
    safariPackage.find((item) => item.id === searchParams.get("package"))
      ?.title || "";

  const handleStart = () => {
    if (started.current) return;

    started.current = true;

    trackEvent("booking_form_start", {
      location: "booking_form",
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setSubmitting(true);
    setSubmitError("");

    const data = Object.fromEntries(
      new FormData(event.currentTarget).entries(),
    );

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/bookings`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: data.name,
            phone: phone,
            email: data.email,
            package: data.package,
            date: data.date,
            guests: Number(data.guests),
            message: data.message,
          }),
        },
      );

      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(
          result.message ||
            "We could not send your request. Please try again or contact us on WhatsApp.",
        );
      }

      trackEvent("booking_form_submit", {
        location: "booking_form",
        package: data.package,
      });

      setSubmitted(true);
    } catch (error) {
      console.error("Booking submission failed:", error);

      trackEvent("booking_submission_error", {
        location: "booking_form",
      });

      setSubmitError(
        error.message ||
          "We could not send your request. Please try again or contact us on WhatsApp.",
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="booking"
      className="px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-36"
    >
      <div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-14">
        <Reveal>
          <p className="eyebrow text-primary">Plan Your Desert Experience</p>

          <h2 className="mt-6 text-[clamp(2rem,5.2vw,3.5rem)] leading-[1.05]">
            Ready to discover the desert?
          </h2>

          <p className="mt-7 max-w-md text-[1.02rem] leading-[1.85] font-light text-muted-foreground">
            Tell us a little about your trip and our team will help you choose
            the right experience.
          </p>
        </Reveal>

        <Reveal delay={120}>
          {submitted ? (
            <div
              id="booking-confirmation"
              role="status"
              className="flex min-h-[320px] flex-col justify-center border border-border bg-secondary/50 p-8 sm:p-12"
            >
              <p className="eyebrow text-primary">Request Received</p>

              <p className="font-display mt-6 text-[1.75rem] leading-snug sm:text-[2.1rem]">
                Thank you. We've received your request. Our team will contact
                you shortly.
              </p>

              {showBackHome && (
                <button
                  type="button"
                  onClick={() => navigate("/")}
                  className="mt-8 w-fit bg-foreground px-9 py-4 text-[0.75rem] tracking-[0.18em] text-background uppercase transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  Back to Home
                </button>
              )}
            </div>
          ) : (
            <form
              id="booking-form"
              data-form="enquiry"
              noValidate={false}
              onSubmit={handleSubmit}
              onFocusCapture={handleStart}
              className="grid gap-7 sm:grid-cols-2"
            >
              <div className="sm:col-span-1">
                <label className={LABEL} htmlFor="fullName">
                  Full Name
                </label>

                <input
                  id="fullName"
                  name="name"
                  type="text"
                  required
                  className={FIELD}
                />
              </div>

              <div className="sm:col-span-1">
                <label className={LABEL} htmlFor="phone">
                  WhatsApp / Phone
                </label>

                <PhoneInput
                  id="phone"
                  international
                  defaultCountry="AE"
                  placeholder="Enter phone number"
                  value={phone}
                  onChange={setPhone}
                  required
                />
              </div>

              <div className="sm:col-span-1">
                <label className={LABEL} htmlFor="email">
                  Email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className={FIELD}
                />
              </div>

              <div className="sm:col-span-1">
                <label className={LABEL} htmlFor="package">
                  Package
                </label>

                <select
                  id="package"
                  name="package"
                  defaultValue={selectedPackage}
                  required
                  className={FIELD}
                >
                  <option value="" disabled>
                    Select an experience
                  </option>

                  {safariPackage.map((safari) => (
                    <option key={safari.id} value={safari.title}>
                      {safari.title}
                    </option>
                  ))}
                </select>
              </div>

              <div className="sm:col-span-1">
                <label className={LABEL} htmlFor="date">
                  Preferred Date
                </label>

                <input
                  id="date"
                  name="date"
                  type="date"
                  min={new Date().toISOString().split("T")[0]}
                  required
                  className={FIELD}
                />
              </div>

              <div className="sm:col-span-1">
                <label className={LABEL} htmlFor="guests">
                  Number of Guests
                </label>

                <input
                  id="guests"
                  name="guests"
                  type="number"
                  min="1"
                  defaultValue="2"
                  required
                  className={FIELD}
                />
              </div>

              <div className="sm:col-span-2">
                <label className={LABEL} htmlFor="message">
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  className={`${FIELD} resize-none`}
                />
              </div>

              {submitError && (
                <div
                  role="alert"
                  className="sm:col-span-2 border border-destructive/35 bg-destructive/8 px-4 py-3 text-sm leading-relaxed text-destructive"
                >
                  {submitError}
                </div>
              )}

              <div className="sm:col-span-2">
                <button
                  type="submit"
                  id="booking-submit"
                  data-cta="booking-submit"
                  disabled={submitting}
                  className="w-full bg-foreground px-9 py-4 text-[0.75rem] tracking-[0.18em] text-background uppercase transition-colors hover:bg-primary hover:text-primary-foreground disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
                >
                  {submitting ? "Sending Request…" : "Request Availability"}
                </button>
              </div>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}