import logo from "../../assets/icon.webp";
import { navItems } from "../../data/siteContent";
import { Container } from "./Container";

function WhatsAppIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M19.05 4.91A9.82 9.82 0 0 0 12.03 2c-5.46 0-9.9 4.44-9.9 9.9 0 1.74.46 3.45 1.32 4.95L2 22l5.3-1.38a9.85 9.85 0 0 0 4.72 1.2h.01c5.46 0 9.9-4.44 9.9-9.9 0-2.64-1.03-5.13-2.88-7.01Zm-7.02 15.23h-.01a8.2 8.2 0 0 1-4.18-1.14l-.3-.18-3.15.82.84-3.07-.2-.31a8.18 8.18 0 0 1-1.26-4.36c0-4.52 3.68-8.2 8.21-8.2 2.19 0 4.25.85 5.8 2.4a8.15 8.15 0 0 1 2.4 5.8c0 4.52-3.68 8.2-8.2 8.2Zm4.5-6.15c-.25-.13-1.47-.73-1.7-.82-.23-.08-.39-.12-.56.13-.16.25-.64.82-.78.99-.14.16-.29.18-.54.06-.25-.13-1.05-.39-2-1.24-.74-.66-1.24-1.47-1.39-1.72-.15-.25-.02-.38.11-.5.12-.12.25-.29.37-.43.12-.15.16-.25.25-.41.08-.17.04-.31-.02-.44-.06-.12-.56-1.34-.77-1.84-.2-.48-.41-.41-.56-.42h-.48c-.16 0-.43.06-.66.31-.23.25-.87.85-.87 2.08 0 1.22.89 2.41 1.01 2.58.12.17 1.75 2.68 4.23 3.76.59.26 1.06.42 1.42.54.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.17.21-.58.21-1.07.15-1.17-.06-.11-.22-.17-.46-.29Z" />
    </svg>
  );
}

export function HeaderWhatsAppIcon({ className = "" }: { className?: string }) {
  return <WhatsAppIcon className={className} />;
}

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/40 bg-[rgba(255,248,244,0.72)] backdrop-blur-xl">
      <Container className="flex min-h-[76px] items-center gap-4 py-3 lg:min-h-[88px]">
        <a
          className="flex min-w-0 items-center gap-3"
          href="#inicio"
          aria-label="Miriam Aguiar Odontologia"
        >
          <img
            src={logo}
            alt="Miriam Aguiar Odontologia"
            className="h-12 w-12 shrink-0 rounded-[14px] object-cover sm:h-14 sm:w-14"
          />
          <div className="min-w-0 py-1.5">
            <strong className="block font-display text-[1.25rem] leading-[1.2] text-brand-ink sm:text-[1.55rem]">
              Miriam Aguiar Odontologia
            </strong>
          </div>
        </a>

        <nav
          className="ml-auto hidden items-center gap-6 pr-5 text-[0.96rem] text-brand-ink/75 lg:flex"
          aria-label="Navegação principal"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition hover:text-brand-ink focus-visible:text-brand-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          className="ml-2 hidden items-center gap-2 rounded-full bg-gradient-to-br from-brand-rose-500 to-brand-rose-400 px-5 py-3 text-sm font-semibold text-white shadow-[0_18px_36px_rgba(201,131,136,0.28)] transition hover:-translate-y-0.5 hover:shadow-[0_22px_44px_rgba(201,131,136,0.34)] md:inline-flex"
          href="https://wa.me/554833693265"
        >
          <HeaderWhatsAppIcon className="h-4 w-4" />
          Agendar
        </a>
      </Container>
    </header>
  );
}
