import { Container } from "../components/layout/Container";
import { SectionHeading } from "../components/ui/SectionHeading";
import { differentials } from "../data/siteContent";

export function DifferentialsSection() {
  return (
    <section
      className="scroll-mt-24 px-0 py-14 lg:scroll-mt-28 lg:py-[72px]"
      id="diferenciais"
    >
      <Container className="grid gap-7 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionHeading
            eyebrow="Diferenciais"
            title="Por que escolher a Dra. Miriam Aguiar para cuidar do seu sorriso."
            description="Atendimento de excelência, experiência de mercado e estrutura moderna em um consultório odontológico de fácil acesso em Florianópolis."
          />
        </div>

        <div className="grid gap-[18px]">
          {differentials.map((item) => (
            <article
              key={item.title}
              className="rounded-[24px] border border-brand-ink/10 bg-white/75 p-7 shadow-[0_24px_60px_rgba(120,72,79,0.14)]"
            >
              <h3 className="mb-3 mt-0 text-[1.2rem] text-brand-ink">
                {item.title}
              </h3>
              <p className="mb-0 leading-8 text-brand-ink/75">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
