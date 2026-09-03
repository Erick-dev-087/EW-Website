// ──────────────────────────────────────────────
// Constants — WhatsApp, Navigation, Contact
// ──────────────────────────────────────────────

export const WHATSAPP_NUMBER = "254113141243";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;
export const WHATSAPP_MESSAGE = "Hello E&W! I'd like to discuss a project.";
export const WHATSAPP_URL_WITH_MESSAGE = `${WHATSAPP_URL}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/#selected-work" },
  { label: "Services", href: "/#services" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#cta" },
] as const;

export const CONTACT_INFO = {
  phone: "+254 113 141 243",
  email: "hello@ewsoftware.agency",
  location: "Nairobi, Kenya",
} as const;

export const SITE_CONFIG = {
  name: "E&W Software Agency",
  tagline: "Software agency that solves business problems.",
  description:
    "E&W is a software agency that helps ambitious businesses solve real problems with the right technology. Websites, automation, custom software, and mobile apps, all built around your needs.",
  url: "https://ewsoftware.agency",
} as const;

