// Vite substitutes this public value during the build, not when Nginx starts.
export const API_BASE_URL = (import.meta.env.VITE_API_URL || "")
  .trim()
  .replace(/\/+$/, "");
