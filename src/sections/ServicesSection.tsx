import aparelhoIcon from "../assets/icon/aparelho.svg";
import canalIcon from "../assets/icon/canal.svg";
import clareamentoIcon from "../assets/icon/clareamento.svg";
import harmonizacaoIcon from "../assets/icon/harmonizacao.svg";
import implanteIcon from "../assets/icon/implante.svg";
import proteseIcon from "../assets/icon/protese.svg";
import { services } from "../data/siteContent";

const icons = [
  implanteIcon,
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
    >
      <div className="mx-auto w-[min(1216px,calc(100vw-32px))]">
        <div className="mx-auto max-w-[776px] text-center">
          <span className="font-sans text-xs font-bold uppercase tracking-[0.1em] text-brand-rose-500">
            Tratamentos
          </span>
          <h2 className="mt-[14px] font-display text-[2.65rem] leading-[1.05] tracking-[-0.035em] text-brand-ink lg:text-[54px]">
            Tratamentos realizados com qualidade, tecnologia e planejamento
            individual.
          </h2>
          <p className="mx-auto mt-4 max-w-[614px] text-[15px] leading-8 text-brand-ink/70">
            A clínica reúne experiência, atendimento especializado e recursos
            modernos para cuidar do seu sorriso com segurança.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:mt-[42px] xl:grid-cols-3">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="flex min-h-[304px] flex-col items-center justify-center rounded-[18px] border border-white/80 bg-white px-8 py-10 text-center shadow-[0_20px_46px_rgba(120,72,79,0.09)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_26px_56px_rgba(120,72,79,0.13)]"
            >
              <img
                src={icons[index]}
                alt=""
                className="mb-6 h-[58px] w-[104px] object-contain"
              />
              <h3 className="text-[17px] font-bold leading-[25px] text-brand-ink">
                {service.title}
              </h3>
              <p className="mt-4 max-w-[286px] text-[14px] leading-[26px] text-[#7f7472]">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
