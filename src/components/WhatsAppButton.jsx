import { trackEvent, whatsappHref } from "../lib/site";

export default function WhatsAppButton() {
  return (
    <a
      href={whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      id="whatsapp-float"
      data-cta="whatsapp-float"
      aria-label="Chat with us on WhatsApp"
      onClick={() => trackEvent("whatsapp_click", { location: "floating_button" })}
      className="group fixed right-4 bottom-4 z-50 flex items-center gap-0 rounded-full bg-ink py-3 pr-3 pl-3 text-ink-foreground shadow-lg transition-all duration-300 hover:gap-3 hover:pl-5 sm:right-6 sm:bottom-6"
    >
      <span className="hidden max-w-0 overflow-hidden text-[0.72rem] tracking-[0.14em] whitespace-nowrap uppercase transition-all duration-300 group-hover:max-w-[220px] sm:inline">
        Chat with us on WhatsApp
      </span>
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 shrink-0 fill-current">
        <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.05-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37s-1.04 1.01-1.04 2.47 1.07 2.86 1.22 3.06c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.75-.71 2-1.4.25-.69.25-1.28.17-1.4-.07-.13-.27-.2-.57-.35zM12.05 21.5h-.01a9.4 9.4 0 0 1-4.79-1.31l-.34-.2-3.56.93.95-3.47-.22-.36a9.38 9.38 0 0 1-1.44-5.01c0-5.18 4.22-9.4 9.42-9.4a9.35 9.35 0 0 1 6.65 2.76 9.32 9.32 0 0 1 2.75 6.65c0 5.18-4.22 9.4-9.41 9.4zm8-17.4A11.32 11.32 0 0 0 12.04.75C5.8.75.73 5.82.73 12.05c0 1.99.52 3.94 1.51 5.66L.64 23.25l5.68-1.49a11.29 11.29 0 0 0 5.72 1.55h.01c6.23 0 11.3-5.07 11.3-11.3 0-3.02-1.18-5.86-3.31-7.99z" />
      </svg>
    </a>
  );
}
