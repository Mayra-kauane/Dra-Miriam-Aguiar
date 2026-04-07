import { Container } from "../components/layout/Container";
import { SectionHeading } from "../components/ui/SectionHeading";

export function AboutSection() {
  return (
    <section
      className="scroll-mt-24 px-0 py-14 lg:scroll-mt-28 lg:py-[72px]"
      id="sobre"
    >
      <Container className="grid items-start gap-7 lg:grid-cols-[1fr_0.9fr]">
        <div>
          <SectionHeading
            eyebrow="Sobre a clínica"
            title="Sou cirurgiã-dentista e especialista em Implantodontia, com mais de 30 anos de experiência."
            description="Estou em constante aprimoramento e evolução para oferecer sempre o melhor tratamento odontológico e atendimento aos meus pacientes no Norte da Ilha."
          />
        </div>

        <div className="grid gap-[18px]">
          <div className="rounded-[24px] border border-brand-ink/10 bg-white/75 p-7 shadow-[0_24px_60px_rgba(120,72,79,0.14)]">
            <strong className="text-[1.2rem] text-brand-ink">
              Compromisso com excelência
            </strong>
            <p className="mb-0 mt-3 leading-8 text-brand-ink/75">
              Meu compromisso é sempre entregar o melhor tratamento odontológico
              e um atendimento próximo, humano e acolhedor.
            </p>
          </div>
          <div className="rounded-[24px] border border-brand-ink/10 bg-white/75 p-7 shadow-[0_24px_60px_rgba(120,72,79,0.14)]">
            <strong className="text-[1.2rem] text-brand-ink">
              Evolução constante
            </strong>
            <p className="mb-0 mt-3 leading-8 text-brand-ink/75">
              Cada paciente recebe um cuidado atualizado, com conhecimento
              técnico, atenção aos detalhes e busca contínua pelos melhores
              resultados.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
