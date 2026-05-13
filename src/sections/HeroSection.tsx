import heroBackground from "../assets/dramiriam2026 (45).jpg";

const imageMask =
  "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.08) 8%, rgba(0,0,0,0.24) 16%, rgba(0,0,0,0.48) 25%, rgba(0,0,0,0.72) 34%, rgba(0,0,0,0.9) 43%, black 52%, black 100%)";

export function HeroSection() {
  return (
    <section
      className="relative min-h-[620px] scroll-mt-20 overflow-hidden bg-[#F6E6E2] sm:min-h-[600px] lg:h-[560px] lg:min-h-[560px] lg:scroll-mt-24"
      id="inicio"
      aria-labelledby="hero-heading"
    >
      <div
        className="absolute inset-0 bg-cover bg-[68%_center] opacity-70 lg:hidden"
        style={{
          backgroundImage: `url("${heroBackground}")`,
          WebkitMaskImage:
            "linear-gradient(to bottom, rgba(0,0,0,0.72) 0%, black 36%, black 100%)",
          maskImage:
            "linear-gradient(to bottom, rgba(0,0,0,0.72) 0%, black 36%, black 100%)",
        }}
        aria-hidden="true"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-[#f3e7e5]/82 via-[#f3e7e5]/68 to-[#f3e7e5]/52 lg:hidden" />

      <div
        className="absolute inset-y-0 right-0 hidden h-full w-[62%] overflow-visible lg:block"
        aria-hidden="true"
      >
        <img
          src={heroBackground}
          alt=""
          className="absolute right-0 top-0 h-full w-auto max-w-none object-contain object-right-top"
          decoding="async"
          fetchPriority="high"
          style={{
            WebkitMaskImage: imageMask,
            maskImage: imageMask,
          }}
        />
      </div>

      <div className="relative mx-auto flex min-h-[620px] w-[min(1224px,calc(100vw-32px))] items-center py-10 sm:min-h-[600px] lg:h-full lg:min-h-0 lg:py-0">
        <div className="w-full max-w-[590px]">
          <h1
            className="max-w-[11ch] font-display text-[2.7rem] font-medium leading-[1.08] tracking-[-0.01em] text-brand-rose-400 sm:max-w-[12ch] sm:text-[3.25rem] lg:max-w-none lg:text-[56px]"
            id="hero-heading"
          >
            Seu sorriso merece mais do que tratamento, merece excelência.
          </h1>

          <p className="mt-5 max-w-[32ch] text-[15.5px] leading-7 text-[#5f5a56] sm:max-w-[42ch] sm:text-[16px] lg:mt-6 lg:max-w-[510px]">
            Tecnologia e cuidado para a sua saúde bucal no Norte da Ilha, com
            atendimento acolhedor, planejamento personalizado e foco em
            resultados de excelência.
          </p>

          <div className="mx-auto mt-7 flex w-full max-w-[340px] flex-col items-center gap-3 sm:mx-0 sm:max-w-none sm:flex-row sm:flex-wrap sm:items-start">
            <a
              className="inline-flex h-[52px] w-full items-center justify-center rounded-full border border-white bg-white px-7 font-sans text-base font-semibold text-brand-ink shadow-[0_14px_30px_rgba(126,91,76,0.1)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#fff8f6] hover:text-brand-rose-500 hover:shadow-[0_18px_36px_rgba(126,91,76,0.16)] active:translate-y-0 active:bg-[#f5e2df] sm:w-auto"
              href="#tratamentos"
            >
              Ver tratamentos
            </a>

            <a
              className="inline-flex h-[52px] w-full items-center justify-center rounded-full bg-[#d28f94] px-7 font-sans text-base font-semibold text-white shadow-[0_18px_32px_rgba(201,131,136,0.24)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#c98388] hover:shadow-[0_22px_42px_rgba(201,131,136,0.32)] active:translate-y-0 active:bg-[#b9757a] sm:w-auto"
              href="https://wa.me/554833693265?text=Ol%C3%A1%2C%20gostaria%20de%20marcar%20uma%20consulta%20com%20a%20Dra.%20Miriam"
              target="_blank"
              rel="noreferrer"
            >
              Agende no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
