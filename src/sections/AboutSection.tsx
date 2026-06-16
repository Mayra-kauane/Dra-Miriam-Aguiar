import plusIcon from "../assets/figma/icon-plus.svg";
import teethIcon from "../assets/figma/icon-teeth.svg";

function CardIcon({ src }: { src: string }) {
  return (
    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#f7e9e7]">
      <span
        aria-hidden="true"
        className="h-5 w-5 bg-brand-rose-500"
        style={{
          WebkitMask: `url("${src}") center / contain no-repeat`,
          mask: `url("${src}") center / contain no-repeat`,
        }}
      />
    </span>
  );
}

export function AboutSection() {
  return (
    <section
      className="scroll-mt-24 bg-white py-[72px] lg:h-[586px] lg:py-0"
      id="sobre"
      aria-labelledby="sobre-heading"
    >
      <div className="mx-auto grid h-full w-[min(1216px,calc(100vw-32px))] items-center gap-8 lg:grid-cols-[574px_517px] lg:gap-[123px]">
        <div>
          <span className="block font-sans text-xs font-bold uppercase tracking-[0.1em] text-brand-rose-500">
            Sobre a clínica
          </span>
          <h2
            className="mt-[35px] font-display text-[2.8rem] font-normal leading-[1.05] tracking-[-0.035em] text-brand-ink lg:text-[54.4px]"
            id="sobre-heading"
          >
            Sou Cirurgiã Dentista nos Ingleses, especialista em Implante Dental
            em Florianópolis, com mais de 30 anos de experiência.
          </h2>
          <p className="mt-[35px] text-base leading-8 text-brand-ink/75">
            Além de implante dentário, atuamos com foco em: alinhador invisível
            Invisalign, facetas de resina, facetas de porcelana, tratamento de
            canal, próteses, clareamento dental e diversas especialidades.
          </p>
        </div>

        <div className="grid gap-4 lg:gap-[30px]">
          <article className="rounded-[18px] border border-brand-ink/10 bg-white px-5 py-5 shadow-[0_18px_42px_rgba(120,72,79,0.1)] lg:rounded-[24px] lg:p-[29px]">
            <div className="flex items-start gap-4 lg:items-center">
              <CardIcon src={teethIcon} />
              <div>
                <h3 className="text-[18px] font-bold leading-[24px] text-brand-ink lg:text-[20px] lg:leading-[29px]">
                  Cirurgião dentista
                </h3>
                <p className="mt-2 text-[15px] leading-7 text-brand-ink/75 lg:hidden">
                  Na clínica, o cuidado começa com uma avaliação detalhada e
                  segue com planejamento personalizado para cada necessidade do
                  seu sorriso.
                </p>
              </div>
            </div>
            <p className="mt-4 hidden text-base leading-8 text-brand-ink/75 lg:block">
              Na clínica, o cuidado começa com uma avaliação detalhada e segue
              com planejamento personalizado para cada necessidade do seu
              sorriso.
            </p>
          </article>

          <article className="rounded-[18px] border border-brand-ink/10 bg-white px-5 py-5 shadow-[0_18px_42px_rgba(120,72,79,0.1)] lg:rounded-[24px] lg:p-[30px]">
            <div className="flex items-start gap-4 lg:items-center">
              <CardIcon src={plusIcon} />
              <div>
                <h3 className="text-[18px] font-bold leading-[24px] text-brand-ink lg:text-[20px] lg:leading-[29px]">
                  Emergência odontológica
                </h3>
                <p className="mt-2 text-[15px] leading-7 text-brand-ink/75 lg:hidden">
                  Atendimento na clínica para dor, urgências e desconfortos
                  dentais, com orientação segura, acolhimento e conduta
                  adequada.
                </p>
              </div>
            </div>
            <p className="mt-4 hidden text-base leading-8 text-brand-ink/75 lg:block">
              Atendimento na clínica para dor, urgências e desconfortos dentais,
              com orientação segura, acolhimento e conduta adequada.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
