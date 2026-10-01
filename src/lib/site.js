export const COMPANY_NAME = "Book Abu Dhabi Safari";
export const SITE_URL = "https://bookabudhabisafari.com";
// Temporary contact details. Replace these two values before launch.
export const WHATSAPP_NUMBER = "+971 58 138 9889";
export const PHONE = "+971 58 138 9889";
export const EMAIL = "bookings@bookabudhabisafari.com";
export const INSTAGRAM_URL = "https://www.instagram.com/abudhabidesertsafari_";
export const ADDRESS = "Musaffah 12, Abu Dhabi, United Arab Emirates";

export const WHATSAPP_MESSAGE =
  "Hi, I'd like to know more about your Abu Dhabi desert safari experiences.";

export const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE,
)}`;

/**
 * Analytics placeholder. Wire this to GTM / GA4 / Meta Pixel later, e.g.
 *   window.dataLayer?.push({ event: name, ...payload })
 *   window.fbq?.("trackCustom", name, payload)
 */
export function trackEvent(name, payload = {}) {
  if (typeof window === "undefined") return;
  if (Array.isArray(window.dataLayer)) {
    window.dataLayer.push({ event: name, ...payload });
  }
}
