import { trackEvent, PHONE } from "../lib/site";
export default function CallButton() {
  const phoneNumber = PHONE;

  return (
    <a
      href={`tel:${phoneNumber}`}
      id="call-float"
      data-cta="call-float"
      aria-label="Call us"
      onClick={() => trackEvent("call_click", { location: "floating_button" })}
      className="group fixed right-4 bottom-22 z-50 flex items-center gap-0 rounded-full bg-[#D9A441] py-3 pr-3 pl-3 text-white shadow-lg transition-all duration-300 hover:gap-3 hover:pl-5 sm:right-6 sm:bottom-24"
    >
      <span className="hidden max-w-0 overflow-hidden text-[0.72rem] tracking-[0.14em] whitespace-nowrap uppercase transition-all duration-300 group-hover:max-w-[220px] sm:inline">
        Call us
      </span>

      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 shrink-0 fill-current">
        <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.56 3.58.56a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.46.56 3.58a1 1 0 0 1-.25 1.01l-2.19 2.2z" />
      </svg>
    </a>
  );
}
