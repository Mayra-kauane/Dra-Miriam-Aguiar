import checkIcon from "../assets/figma/icon-check.svg";
import dashboardIcon from "../assets/figma/icon-dashboard.svg";

function CardIcon({ src }: { src: string }) {
  return (
    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#f7e9e7]">
      <img src={src} alt="" className="h-5 w-5 object-contain" />
    </span>
  );
}

export function AboutSection() {
  return (
    <section
      className="scroll-mt-24 bg-white py-[72px] lg:h-[586px] lg:py-0"
      id="sobre"
    >
      <div className="mx-auto grid h-full w-[min(1216px,calc(100vw-32px))] items-center gap-8 lg:grid-cols-[574px_517px] lg:gap-[123px]">
        <div>
          <span className="block font-sans text-xs font-bold uppercase tracking-[0.1em] text-brand-rose-500">
            Sobre a clínica
          </span>
          <h2 className="mt-[35px] font-display text-[2.8rem] font-normal leading-[1.05] tracking-[-0.035em] text-brand-ink lg:text-[54.4px]">
            Sou cirurgiã-dentista e especialista em Implantodontia, com mais de
            30 anos de experiência.
          </h2>
          <p className="mt-[35px] text-base leading-8 text-brand-ink/75">
            Estou em constante aprimoramento e evolução para oferecer sempre o
            melhor tratamento odontológico e atendimento aos meus pacientes no
            Norte da Ilha.
          </p>
        </div>

        <div className="grid gap-4 lg:gap-[30px]">
          <article className="rounded-[18px] border border-brand-ink/10 bg-white px-5 py-5 shadow-[0_18px_42px_rgba(120,72,79,0.1)] lg:rounded-[24px] lg:p-[29px]">
            <div className="flex items-start gap-4 lg:items-center">
              <CardIcon src={checkIcon} />
              <div>
                <h3 className="text-[18px] font-bold leading-[24px] text-brand-ink lg:text-[20px] lg:leading-[29px]">
                  Compromisso com excelência
                </h3>
                <p className="mt-2 text-[15px] leading-7 text-brand-ink/75 lg:hidden">
                  Meu compromisso é sempre entregar o melhor tratamento
                  odontológico e um atendimento próximo, humano e acolhedor.
                </p>
              </div>
            </div>
            <p className="mt-4 hidden text-base leading-8 text-brand-ink/75 lg:block">
              Meu compromisso é sempre entregar o melhor tratamento odontológico
              e um atendimento próximo, humano e acolhedor.
            </p>
          </article>

          <article className="rounded-[18px] border border-brand-ink/10 bg-white px-5 py-5 shadow-[0_18px_42px_rgba(120,72,79,0.1)] lg:rounded-[24px] lg:p-[30px]">
            <div className="flex items-start gap-4 lg:items-center">
              <CardIcon src={dashboardIcon} />
              <div>
                <h3 className="text-[18px] font-bold leading-[24px] text-brand-ink lg:text-[20px] lg:leading-[29px]">
                  Evolução constante
                </h3>
                <p className="mt-2 text-[15px] leading-7 text-brand-ink/75 lg:hidden">
                  Cada paciente recebe um cuidado atualizado, com conhecimento
                  técnico, atenção aos detalhes e busca contínua pelos melhores
                  resultados.
                </p>
              </div>
            </div>
            <p className="mt-4 hidden text-base leading-8 text-brand-ink/75 lg:block">
              Cada paciente recebe um cuidado atualizado, com conhecimento
              técnico, atenção aos detalhes e busca contínua pelos melhores
              resultados.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
