import facebookIcon from "../../assets/figma/facebook.svg";
import headerLogo from "../../assets/figma/header-logo.png";
import instagramIcon from "../../assets/figma/instagram.svg";
import whatsappIcon from "../../assets/figma/whatsapp.svg";
import { navItems } from "../../data/siteContent";

function SocialIcon({
  label,
  src,
  href = "/inicio",
}: {
  label: string;
  src: string;
  href?: string;
}) {
  const isExternal = href.startsWith("http");

  return (
    <a
      aria-label={label}
      className="flex h-6 w-6 items-center justify-center rounded bg-brand-rose-400 transition hover:-translate-y-0.5 hover:bg-brand-rose-500"
      href={href}
      rel={isExternal ? "noreferrer" : undefined}
      target={isExternal ? "_blank" : undefined}
    >
      <img src={src} alt="" className="h-4 w-4 object-contain" />
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
            <SocialIcon
              label="Facebook"
              src={facebookIcon}
              href="https://www.facebook.com/profile.php?id=100070379141084"
            />
            <SocialIcon
              label="Instagram"
              src={instagramIcon}
              href="https://www.instagram.com/dra_miriamaguiarodontologia/"
            />
          </div>
        </div>
      </div>

      <div className="bg-brand-rose-400">
        <div className="mx-auto flex h-[80px] w-[min(1216px,calc(100vw-32px))] items-center gap-6">
          <a
            className="flex h-[54px] w-[176px] shrink-0 items-center"
            href="/inicio"
            aria-label="Dra. Miriam Aguiar Odontologia"
          >
            <img
              src={headerLogo}
              alt="Dra. Miriam Aguiar Odontologia"
              className="h-[54px] w-[176px] object-contain"
              decoding="async"
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
            href="https://wa.me/554833693265?text=Ol%C3%A1%2C%20gostaria%20de%20marcar%20uma%20consulta%20com%20a%20Dra.%20Miriam"
            target="_blank"
            rel="noreferrer"
          >
            <HeaderWhatsAppIcon className="h-4 w-4" />
            Agendar
          </a>
        </div>
      </div>
    </header>
  );
}
