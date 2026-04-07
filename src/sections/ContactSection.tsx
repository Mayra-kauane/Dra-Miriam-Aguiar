import { Container } from "../components/layout/Container";
import { SectionHeading } from "../components/ui/SectionHeading";
import { contactCards } from "../data/siteContent";

const mapQuery =
  "Dra Miriam Aguiar Odontologia Rua Intendente João Nunes Vieira 1101 Sala 07 Ingleses Florianópolis SC";

export function ContactSection() {
  return (
    <section
      className="relative scroll-mt-24 px-0 py-14 lg:scroll-mt-28 lg:py-[72px]"
      id="contato"
    >
      <div className="absolute left-1/2 top-[26px] -z-10 h-[calc(100%-52px)] w-[min(1040px,calc(100vw-32px))] -translate-x-1/2 rounded-[40px] border border-white/80 bg-[linear-gradient(145deg,rgba(233,186,184,0.28),rgba(255,251,249,0.88)),rgba(255,255,255,0.65)]" />

      <Container className="grid items-start gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionHeading
            eyebrow="Contato"
            title="Agende sua consulta e venha conhecer a clínica da Dra. Miriam Aguiar."
            description="Entre em contato pelo WhatsApp ou telefone para receber orientações, agendar seu atendimento e iniciar o seu planejamento odontológico."
          />

          <a
            className="mt-2 inline-flex items-center justify-center rounded-full bg-gradient-to-br from-brand-rose-500 to-brand-rose-400 px-6 py-3.5 font-semibold text-white shadow-[0_18px_36px_rgba(201,131,136,0.28)] transition hover:-translate-y-0.5 hover:shadow-[0_22px_44px_rgba(201,131,136,0.34)]"
            href="https://wa.me/554833693265"
          >
            Agendar pelo WhatsApp
          </a>
        </div>

        <div className="grid gap-[18px]">
          {contactCards.map((card) => (
            <article
              key={card.title}
              className="rounded-[24px] border border-brand-ink/10 bg-white/75 p-7 shadow-[0_24px_60px_rgba(120,72,79,0.14)]"
            >
              <span className="block text-[0.85rem] font-bold uppercase tracking-[0.08em] text-brand-rose-500">
                {card.title}
              </span>
              <strong className="mt-3 block text-[1.3rem] text-brand-ink">
                {card.detail}
              </strong>
              <p className="mb-0 mt-3 leading-8 text-brand-ink/75">
                {card.helper}
              </p>
            </article>
          ))}
        </div>
      </Container>

      <Container className="mt-3 lg:mt-4">
        <article className="overflow-hidden rounded-[30px] border border-brand-ink/10 bg-white/75 shadow-[0_24px_60px_rgba(120,72,79,0.14)]">
          <div className="border-b border-brand-ink/10 px-7 py-5">
            <span className="block text-[0.85rem] font-bold uppercase tracking-[0.08em] text-brand-rose-500">
              Localização
            </span>
            <p className="mt-3 text-brand-ink/75">
              Rua R. Intendente João Nunes Vieira, 1101 - Sala 07, Ingleses do
              Rio Vermelho, Florianópolis - SC, 88058-100
            </p>
          </div>

          <div className="h-[380px] w-full bg-brand-rose-100/40 lg:h-[460px]">
            <iframe
              title="Mapa da clínica Dra. Miriam Aguiar"
              src={`https://maps.google.com/maps?q=${encodeURIComponent(mapQuery)}&t=&z=16&ie=UTF8&iwloc=&output=embed`}
              className="h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </article>
      </Container>
    </section>
  );
}
