import aparelhoIcon from "../assets/icon/aparelho.svg";
import canalIcon from "../assets/icon/canal.svg";
import clareamentoDentalIcon from "../assets/icon/clareamento-dental.png";
import clareamentoIcon from "../assets/icon/clareamento.svg";
import whatsappIcon from "../assets/figma/whatsapp.svg";
import harmonizacaoIcon from "../assets/icon/harmonizacao.svg";
import implanteIcon from "../assets/icon/implante.svg";
import proteseIcon from "../assets/icon/protese.svg";
import { services } from "../data/siteContent";
import { trackWhatsAppClick } from "../lib/analytics";

const icons = [
  implanteIcon,
  clareamentoDentalIcon,
  clareamentoIcon,
  proteseIcon,
  aparelhoIcon,
  canalIcon,
  harmonizacaoIcon,
];

export function ServicesSection() {
  return (
    <section
      className="scroll-mt-24 bg-[#f8f3f1] py-14 lg:py-[58px]"
      id="tratamentos"
      aria-labelledby="tratamentos-heading"
    >
      <div className="mx-auto w-[min(1216px,calc(100vw-32px))]">
        <div className="mx-auto max-w-[776px] text-left md:text-center">
          <span className="font-sans text-xs font-bold uppercase tracking-[0.1em] text-brand-rose-500">
            Tratamentos
          </span>
          <h2
            className="mt-[14px] font-display text-[2.65rem] leading-[1.05] tracking-[-0.035em] text-brand-ink lg:text-[54px]"
            id="tratamentos-heading"
          >
            Tratamentos odontológicos com qualidade, tecnologia e planejamento
            individual.
          </h2>
          <p className="mx-auto mt-4 max-w-[614px] text-[15px] leading-8 text-brand-ink/70">
            A clínica reúne experiência, atendimento especializado e recursos
            modernos para cuidar do seu sorriso com segurança.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:mt-[42px] xl:grid-cols-3">
          {services.map((service, index) => (
            <a
              key={service.title}
              className="flex min-h-[304px] flex-col items-center justify-center rounded-[18px] border border-white/80 bg-white px-8 py-10 text-center shadow-[0_20px_46px_rgba(120,72,79,0.09)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_26px_56px_rgba(120,72,79,0.13)]"
              href={service.href ?? "/tratamentos"}
            >
              <img
                src={icons[index]}
                alt=""
                className="mb-6 h-[58px] w-[104px] object-contain"
                loading="lazy"
                decoding="async"
              />
              <h3 className="text-[17px] font-bold leading-[25px] text-brand-ink">
                {service.title}
              </h3>
              <p className="mt-4 max-w-[286px] text-[14px] leading-[26px] text-[#7f7472]">
                {service.description}
              </p>
            </a>
          ))}

          <div className="flex min-h-[180px] items-center rounded-[18px] bg-[#f7e9e7] px-6 py-6 text-brand-ink shadow-[0_20px_46px_rgba(120,72,79,0.09)] md:col-span-2 lg:px-8 xl:col-span-2">
            <div className="flex w-full flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#efd7d5] text-brand-rose-500">
                  <span
                    aria-hidden="true"
                    className="h-6 w-6 bg-current"
                    style={{
                      WebkitMask: `url("${whatsappIcon}") center / contain no-repeat`,
                      mask: `url("${whatsappIcon}") center / contain no-repeat`,
                    }}
                  />
                </span>
                <div>
                  <h3 className="font-display text-[25px] font-medium leading-tight text-brand-ink">
                    Quer saber qual tratamento é ideal para você?
                  </h3>
                  <p className="mt-1 max-w-[520px] text-[14px] leading-6 text-brand-ink/70">
                    Fale com nossa equipe pelo WhatsApp e receba orientação para
                    agendar sua avaliação.
                  </p>
                </div>
              </div>
              <a
                className="inline-flex h-11 shrink-0 items-center justify-center rounded-[8px] bg-brand-rose-500 px-5 font-sans text-[14px] font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-[#bd797d] active:translate-y-0"
                href="https://wa.me/554833693265?text=Ol%C3%A1%2C%20vim%20do%20google%20e%20gostaria%20de%20marcar%20uma%20consulta%20com%20a%20Dra.%20Miriam"
                target="_blank"
                rel="noreferrer"
                onClick={trackWhatsAppClick}
              >
                Falar no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
