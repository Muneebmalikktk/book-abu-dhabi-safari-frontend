export const COMPANY_NAME = "Book Abu Dhabi Safari";
export const SITE_URL = "https://bookabudhabisafari.com";
export const WHATSAPP_NUMBER = "+971554136949";
export const PHONE = "+971554136949";
export const EMAIL = "bookings@bookabudhabisafari.com";
export const INSTAGRAM_URL = "https://www.instagram.com/abudhabidesertsafari_";
export const ADDRESS = "shabiya 10, Abu Dhabi, United Arab Emirates";

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
