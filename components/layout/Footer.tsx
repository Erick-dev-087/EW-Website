import Link from "next/link";
import Image from "next/image";
import logoImage from "@/media/logo.png";
import { NAV_LINKS, CONTACT_INFO, WHATSAPP_URL_WITH_MESSAGE, SITE_CONFIG } from "@/lib/constants";
import { services } from "@/lib/data";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-bg-secondary border-t border-border/50">
      {/* Main Footer Content */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-16 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block mb-5 group">
              <Image
                src={logoImage}
                alt="E&W Software Agency"
                width={48}
                height={48}
                className="transition-transform duration-300 group-hover:scale-105"
              />
            </Link>
            <p className="text-text-muted text-sm leading-relaxed max-w-[280px]">
              {SITE_CONFIG.tagline}
            </p>
          </div>

          {/* Navigation Column */}
          <div>
            <h4 className="font-heading text-xs font-semibold tracking-[0.15em] uppercase text-text-primary mb-5">
              Navigation
            </h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-muted transition-colors duration-250 hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="font-heading text-xs font-semibold tracking-[0.15em] uppercase text-text-primary mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {services.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services#${service.id}`}
                    className="text-sm text-text-muted transition-colors duration-250 hover:text-accent"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-heading text-xs font-semibold tracking-[0.15em] uppercase text-text-primary mb-5">
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={WHATSAPP_URL_WITH_MESSAGE}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-text-muted transition-colors duration-250 hover:text-accent"
                >
                  {/* WhatsApp Icon */}
                  <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  {CONTACT_INFO.phone}
                </a>
              </li>
              <li>
                <span className="flex items-center gap-2 text-sm text-text-muted">
                  <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 0115 0z" />
                  </svg>
                  {CONTACT_INFO.location}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border/30">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-dim">
            © {currentYear} {SITE_CONFIG.name}. All rights reserved.
          </p>
          <p className="text-xs text-text-dim">
            Built with intention.
          </p>
        </div>
      </div>
    </footer>
  );
}
