import doctorPhoto from "../assets/dramiriam2.png";
import { Container } from "../components/layout/Container";

export function HeroSection() {
  return (
    <section
      className="relative scroll-mt-24 overflow-x-clip px-0 pb-11 pt-4 lg:scroll-mt-28 lg:pt-6"
      id="inicio"
    >
      <div className="pointer-events-none absolute left-[-120px] top-10 h-[280px] w-[280px] rounded-full border-2 border-brand-rose-500/20" />
      <div className="pointer-events-none absolute bottom-0 right-[-100px] h-[320px] w-[320px] rounded-full bg-brand-rose-400/20" />
      <Container className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="max-w-[620px]">
          <h1 className="mt-0 max-w-[10ch] font-display text-[3.5rem] leading-[0.98] tracking-[-0.035em] text-brand-ink sm:text-[4.25rem] lg:text-[4.5rem]">
            A clínica odontológica nos Ingleses que devolve a confiança ao seu
            sorriso.
          </h1>
          <p className="mt-5 max-w-[54ch] text-[1rem] leading-7 text-brand-ink/75 sm:text-[1.04rem]">
            Tecnologia e cuidado para a sua saúde bucal no Norte da Ilha, com
            atendimento acolhedor, planejamento personalizado e foco em
            resultados de excelência.
          </p>

          <div className="mt-7 flex flex-wrap gap-3.5">
            <a
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-br from-brand-rose-500 to-brand-rose-400 px-6 py-3.5 font-semibold text-white shadow-[0_18px_36px_rgba(201,131,136,0.28)] transition hover:-translate-y-0.5 hover:shadow-[0_22px_44px_rgba(201,131,136,0.34)]"
              href="https://wa.me/554833693265"
            >
              Agende no WhatsApp
            </a>
            <a
              className="inline-flex items-center justify-center rounded-full border border-brand-ink/15 bg-white/60 px-6 py-3.5 font-semibold text-brand-ink transition hover:-translate-y-0.5"
              href="#tratamentos"
            >
              Ver tratamentos
            </a>
          </div>
        </div>

        <div className="relative min-h-[420px] lg:min-h-[560px]" aria-hidden="true">
          <div className="absolute inset-x-3 bottom-14 top-5 rounded-[36px] border border-white/70 bg-[linear-gradient(165deg,rgba(255,248,241,0.72),rgba(244,214,213,0.6)),linear-gradient(145deg,rgba(233,186,184,0.42),transparent)] shadow-[0_24px_60px_rgba(120,72,79,0.14)] lg:left-10 lg:right-6 lg:top-9">
            <div className="absolute inset-5 rounded-[30px] border border-[rgba(255,248,241,0.82)]" />
            <div className="absolute inset-[14px] flex items-center justify-center overflow-hidden rounded-[28px]">
              <img
                src={doctorPhoto}
                alt="Dra. Miriam Aguiar"
                className="h-auto w-[82%] max-w-[420px] object-contain object-center drop-shadow-[0_26px_34px_rgba(120,72,79,0.18)]"
              />
            </div>
          </div>

          <div className="absolute bottom-4 right-0 w-[82%] rounded-[28px] border border-white/80 bg-[rgba(255,250,248,0.94)] p-5 shadow-[0_24px_60px_rgba(120,72,79,0.14)] sm:w-[250px]">
            <p className="font-display text-[2rem] leading-none text-brand-ink">
              Dra. Miriam
            </p>
            <p className="mt-2 text-sm leading-6 text-brand-ink/75">
              Cirurgiã-dentista, especialista em Implantodontia e referência em
              atendimento odontológico nos Ingleses.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
