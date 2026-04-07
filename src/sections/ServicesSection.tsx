import { Container } from "../components/layout/Container";
import { SectionHeading } from "../components/ui/SectionHeading";
import { services } from "../data/siteContent";

export function ServicesSection() {
  return (
    <section
      className="scroll-mt-24 bg-[radial-gradient(circle_at_top_right,rgba(216,158,159,0.16),transparent_24%),rgba(255,251,249,0.8)] px-0 py-14 lg:scroll-mt-28 lg:py-[72px]"
      id="tratamentos"
    >
      <Container>
        <SectionHeading
          eyebrow="Tratamentos"
          title="Tratamentos realizados com qualidade, tecnologia e planejamento individual."
          description="A clínica reúne experiência, atendimento especializado e recursos modernos para cuidar do seu sorriso com segurança."
          align="center"
        />

        <div className="mt-[34px] grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="min-h-[220px] rounded-[24px] border border-brand-ink/10 bg-white/75 p-7 shadow-[0_24px_60px_rgba(120,72,79,0.14)] transition hover:-translate-y-1 hover:border-brand-rose-500/25"
            >
              <h3 className="mb-3 mt-0 text-[1.2rem] text-brand-ink">
                {service.title}
              </h3>
              <p className="mb-0 leading-8 text-brand-ink/75">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
