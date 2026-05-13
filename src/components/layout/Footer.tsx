import footerLogo from "../../assets/figma/header-logo.png";
import { navItems, services } from "../../data/siteContent";

export function Footer() {
  return (
    <footer className="bg-[#f8f3f1]">
      <div className="mx-auto grid w-[min(1216px,calc(100vw-32px))] gap-10 py-12 md:grid-cols-[1.2fr_1fr_1fr_1.2fr] lg:py-14">
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
        </div>

        <div>
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

        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.1em] text-brand-rose-500">
            Serviços
          </h3>
          <ul className="mt-4 grid gap-2 text-[14px] text-brand-ink/70">
            {services.slice(0, 5).map((service) => (
              <li key={service.title}>
                <a className="transition hover:text-brand-rose-500" href="#tratamentos">
                  {service.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.1em] text-brand-rose-500">
            Endereço
          </h3>
          <p className="mt-4 max-w-[260px] text-[14px] leading-6 text-brand-ink/70">
            Rua R. Intendente João Nunes Vieira, 1101 - Sala 07, Ingleses do
            Rio Vermelho, Florianópolis - SC.
          </p>
          <a
            className="mt-3 inline-block text-[14px] font-semibold text-brand-rose-500 transition hover:text-[#ad6a70]"
            href="#localizacao"
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
