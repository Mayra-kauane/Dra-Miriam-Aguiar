import footerLogo from "../../assets/figma/header-logo.png";
import { navItems, services } from "../../data/siteContent";

const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=100070379141084",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/dra_miriamaguiarodontologia/",
  },
];

function SocialIcon({ label }: { label: string }) {
  if (label === "Facebook") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-current">
        <path d="M13.7 20v-7.28h2.44l.36-2.84h-2.8v-1.8c0-.82.23-1.38 1.4-1.38h1.5V4.16c-.26-.04-1.15-.12-2.18-.12-2.16 0-3.64 1.32-3.64 3.74v2.1H8.36v2.84h2.42V20h2.92Z" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-current">
      <path d="M8.3 5h7.4C17.52 5 19 6.48 19 8.3v7.4c0 1.82-1.48 3.3-3.3 3.3H8.3A3.3 3.3 0 0 1 5 15.7V8.3C5 6.48 6.48 5 8.3 5Zm0 1.55c-.97 0-1.75.78-1.75 1.75v7.4c0 .97.78 1.75 1.75 1.75h7.4c.97 0 1.75-.78 1.75-1.75V8.3c0-.97-.78-1.75-1.75-1.75H8.3Z" />
      <path d="M12 8.39A3.61 3.61 0 1 1 12 15.61 3.61 3.61 0 0 1 12 8.39Zm0 1.55A2.06 2.06 0 1 0 12 14.06 2.06 2.06 0 0 0 12 9.94Z" />
      <path d="M15.8 8.55a.94.94 0 1 0 0-1.88.94.94 0 0 0 0 1.88Z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#f8f3f1]">
      <div className="mx-auto grid w-[min(1216px,calc(100vw-32px))] gap-10 py-12 md:grid-cols-[1.1fr_0.9fr_1.25fr_1.2fr] lg:py-14">
        <div>
          <span
            aria-label="Dra. Miriam Aguiar Odontologia"
            className="block h-[66px] w-[190px] bg-brand-rose-500"
            role="img"
            style={{
              WebkitMask: `url("${footerLogo}") left center / contain no-repeat`,
              mask: `url("${footerLogo}") left center / contain no-repeat`,
            }}
          />
          <p className="mt-4 max-w-[280px] text-[14px] leading-6 text-brand-ink/70">
            Atendimento odontológico acolhedor, especializado e planejado para
            cuidar do seu sorriso.
          </p>
          <div className="mt-6 flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                target="_blank"
                rel="noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-rose-500 text-white transition duration-200 hover:-translate-y-0.5 hover:bg-[#bd797d]"
              >
                <SocialIcon label={social.label} />
              </a>
            ))}
          </div>
        </div>

        <div className="md:justify-self-center">
          <h3 className="text-xs font-bold uppercase tracking-[0.1em] text-brand-rose-500">
            Seções
          </h3>
          <ul className="mt-4 grid gap-2 text-[14px] text-brand-ink/70">
            {navItems.map((item) => (
              <li key={item.href}>
                <a className="transition hover:text-brand-rose-500" href={item.href}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:justify-self-center">
          <h3 className="text-xs font-bold uppercase tracking-[0.1em] text-brand-rose-500">
            Serviços
          </h3>
          <ul className="mt-4 grid gap-2 text-[14px] text-brand-ink/70">
            {services.slice(0, 5).map((service) => (
              <li key={service.title}>
                <a className="transition hover:text-brand-rose-500" href="/tratamentos">
                  {service.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:justify-self-end">
          <h3 className="text-xs font-bold uppercase tracking-[0.1em] text-brand-rose-500">
            Endereço
          </h3>
          <p className="mt-4 max-w-[260px] text-[14px] leading-6 text-brand-ink/70">
            Rua Intendente João Nunes Vieira, 1101 - Sala 07, Ingleses do Rio
            Vermelho, Florianópolis - SC.
          </p>
          <a
            className="mt-3 inline-block text-[14px] font-semibold text-brand-rose-500 transition hover:text-[#ad6a70]"
            href="/localizacao"
          >
            Ver localização
          </a>
        </div>
      </div>

      <div className="border-t border-brand-ink/10 py-4 text-center text-[13px] text-brand-ink/65">
        © 2026 Dra. Miriam Aguiar Odontologia - Todos os direitos reservados
      </div>
    </footer>
  );
}
