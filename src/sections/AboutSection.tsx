import checkIcon from "../assets/figma/icon-check.svg";
import dashboardIcon from "../assets/figma/icon-dashboard.svg";

function CardIcon({ src }: { src: string }) {
  return <img src={src} alt="" className="h-6 w-6 object-contain" />;
}

export function AboutSection() {
  return (
    <section
      className="scroll-mt-24 bg-white py-[72px] lg:h-[586px] lg:py-0"
      id="sobre"
    >
      <div className="mx-auto grid h-full w-[min(1216px,calc(100vw-32px))] items-center gap-[123px] lg:grid-cols-[574px_517px]">
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

        <div className="grid gap-[30px]">
          <article className="rounded-[24px] border border-brand-ink/10 bg-white/75 p-[29px] shadow-[0_24px_60px_rgba(120,72,79,0.14)]">
            <div className="flex items-center gap-4">
              <CardIcon src={checkIcon} />
              <h3 className="text-[20px] font-bold leading-[29px] text-brand-ink">
                Compromisso com excelência
              </h3>
            </div>
            <p className="mt-4 text-base leading-8 text-brand-ink/75">
              Meu compromisso é sempre entregar o melhor tratamento odontológico
              e um atendimento próximo, humano e acolhedor.
            </p>
          </article>

          <article className="rounded-[24px] border border-brand-ink/10 bg-white/75 p-[30px] shadow-[0_24px_60px_rgba(120,72,79,0.14)]">
            <div className="flex items-center gap-4">
              <CardIcon src={dashboardIcon} />
              <h3 className="text-[20px] font-bold leading-[29px] text-brand-ink">
                Evolução constante
              </h3>
            </div>
            <p className="mt-4 text-base leading-8 text-brand-ink/75">
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
