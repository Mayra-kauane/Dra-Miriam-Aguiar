import facebookIcon from "../../assets/figma/facebook.svg";
import headerLogo from "../../assets/figma/header-logo.png";
import instagramIcon from "../../assets/figma/instagram.svg";
import whatsappIcon from "../../assets/figma/whatsapp.svg";
import { navItems } from "../../data/siteContent";

function SocialIcon({ label, src }: { label: string; src: string }) {
  return (
    <a
      aria-label={label}
      className="flex h-6 w-6 items-center justify-center rounded bg-brand-rose-400 transition hover:-translate-y-0.5 hover:bg-brand-rose-500"
      href="#inicio"
    >
      <img src={src} alt="" className="h-3 w-3 object-contain" />
    </a>
  );
}

function LinkedInIcon() {
  return (
    <a
      aria-label="LinkedIn"
      className="flex h-6 w-6 items-center justify-center rounded bg-brand-rose-400 text-white transition hover:-translate-y-0.5 hover:bg-brand-rose-500"
      href="#inicio"
    >
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current">
        <path d="M6.94 8.98H3.82V19h3.12V8.98ZM5.38 7.61c1 0 1.8-.81 1.8-1.81S6.38 4 5.38 4s-1.8.8-1.8 1.8.8 1.81 1.8 1.81ZM20.42 13.51c0-3.02-1.61-4.42-3.77-4.42-1.74 0-2.52.96-2.95 1.63V8.98h-3.12V19h3.12v-5.58c0-1.49.28-2.94 2.13-2.94 1.82 0 1.85 1.71 1.85 3.04V19h3.12v-5.49h-.38Z" />
      </svg>
    </a>
  );
}

export function HeaderWhatsAppIcon({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`inline-block shrink-0 bg-current ${className}`}
      style={{
        WebkitMask: `url("${whatsappIcon}") center / contain no-repeat`,
        mask: `url("${whatsappIcon}") center / contain no-repeat`,
      }}
    />
  );
}

export function Header() {
  return (
    <header className="relative z-50">
      <div className="hidden h-8 items-center bg-white lg:flex">
        <div className="mx-auto flex w-[1216px] justify-end">
          <div className="flex gap-4">
            <SocialIcon label="Facebook" src={facebookIcon} />
            <SocialIcon label="Instagram" src={instagramIcon} />
            <LinkedInIcon />
          </div>
        </div>
      </div>

      <div className="bg-brand-rose-400">
        <div className="mx-auto flex h-[80px] w-[min(1216px,calc(100vw-32px))] items-center gap-6">
          <a
            className="flex h-[54px] w-[176px] shrink-0 items-center"
            href="#inicio"
            aria-label="Dra. Miriam Aguiar Odontologia"
          >
            <img
              src={headerLogo}
              alt="Dra. Miriam Aguiar Odontologia"
              className="h-[54px] w-[176px] object-contain"
            />
          </a>

          <nav
            className="ml-auto hidden items-center gap-6 font-nav text-base text-white lg:flex"
            aria-label="Navegação principal"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="transition hover:-translate-y-0.5 hover:text-white/80"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            className="ml-auto inline-flex h-11 items-center gap-2 rounded-full bg-white px-5 font-sans text-sm font-semibold text-brand-rose-400 shadow-[0_18px_18px_rgba(201,131,136,0.22)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#fff3f0] hover:text-[#bd797d] hover:shadow-[0_20px_32px_rgba(201,131,136,0.28)] active:translate-y-0 active:bg-[#f4dfdc] active:text-[#ad6a70] lg:ml-2"
            href="https://wa.me/554833693265"
          >
            <HeaderWhatsAppIcon className="h-4 w-4" />
            Agendar
          </a>
        </div>
      </div>
    </header>
  );
}
