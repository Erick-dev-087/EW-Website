// ──────────────────────────────────────────────
// Constants — WhatsApp, Navigation, Contact
// ──────────────────────────────────────────────

export const WHATSAPP_NUMBER = "254113141243";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;
export const WHATSAPP_MESSAGE = "Hello E&W! I'd like to discuss a project.";
export const WHATSAPP_URL_WITH_MESSAGE = `${WHATSAPP_URL}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

export const NAV_LINKS = [
  { label: "Work", href: "#selected-work" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#cta" },
] as const;

export const CONTACT_INFO = {
  phone: "+254 113 141 243",
  email: "hello@ewsoftware.agency",
  location: "Nairobi, Kenya",
} as const;

export const SITE_CONFIG = {
  name: "E&W Software Agency",
  tagline: "Software agency building digital products.",
  description:
    "E&W is a premium software agency that designs and builds modern digital products for ambitious businesses. Web applications, mobile apps, custom software, and automation.",
  url: "https://ewsoftware.agency",
} as const;

