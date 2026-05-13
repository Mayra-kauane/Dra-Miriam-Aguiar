import { contactCards } from "../data/siteContent";

export function ContactSection() {
  return (
    <section
      className="scroll-mt-24 bg-brand-rose-400 py-12 text-white lg:py-[52px]"
      id="contato"
    >
      <div className="mx-auto grid w-[min(1216px,calc(100vw-32px))] items-center gap-10 lg:grid-cols-[470px_1fr] lg:gap-[88px]">
        <div>
          <span className="block font-sans text-xs font-bold uppercase tracking-[0.1em] text-white/85">
            Contato
          </span>
          <h2 className="mt-3 max-w-[450px] font-display text-[2.45rem] leading-[1.02] tracking-[-0.035em] lg:text-[44px]">
            Agende sua consulta e venha conhecer a clínica da Dra. Miriam
            Aguiar.
          </h2>
          <p className="mt-6 max-w-[520px] text-[15px] leading-8 text-white/95">
            Entre em contato pelo WhatsApp ou telefone para receber orientações,
            agendar seu atendimento e iniciar o seu planejamento odontológico.
          </p>
        </div>

        <div className="grid w-full max-w-[540px] gap-4 lg:justify-self-end">
          {contactCards.map((card) => (
            <article
              key={card.title}
              className="rounded-[18px] bg-[#fbf0ee] px-6 py-5 text-brand-ink shadow-[0_18px_42px_rgba(120,72,79,0.12)]"
            >
              <span className="block text-xs font-bold uppercase tracking-[0.1em] text-brand-rose-500">
                {card.title}
              </span>
              <strong className="mt-3 block text-[19px] leading-6">
                {card.detail}
              </strong>
              <p className="mt-3 text-[14px] leading-5 text-[#6a6a6a]">
                {card.helper}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
