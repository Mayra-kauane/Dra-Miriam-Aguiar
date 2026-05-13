const mapQuery =
  "Dra Miriam Aguiar Odontologia Rua Intendente Joao Nunes Vieira 1101 Sala 07 Ingleses Florianopolis SC";

export function LocationSection() {
  return (
    <section
      className="scroll-mt-24 bg-white py-14 lg:py-20"
      id="localizacao"
    >
      <div className="mx-auto w-[min(1216px,calc(100vw-32px))]">
        <div className="mx-auto max-w-[640px] text-center">
          <h2 className="font-display text-[2.35rem] leading-[1.05] tracking-[-0.035em] text-brand-ink lg:text-[44px]">
            Conheça nosso espaço
          </h2>
          <p className="mx-auto mt-3 max-w-[460px] text-[14px] leading-6 text-brand-ink/70">
            Estamos nos Ingleses, em Florianópolis, com acesso prático para
            receber você com conforto e cuidado.
          </p>
        </div>

        <article
          className="mx-auto mt-10 w-[min(1024px,100%)] overflow-hidden rounded-[18px] border border-brand-ink/10 bg-white shadow-[0_24px_64px_rgba(120,72,79,0.1)]"
          id="mapa"
        >
          <div className="px-6 py-5">
            <span className="block text-xs font-bold uppercase tracking-[0.1em] text-brand-rose-500">
              Localização
            </span>
            <p className="mt-3 text-[14px] leading-6 text-brand-ink/70">
              Rua R. Intendente João Nunes Vieira, 1101 - Sala 07, Ingleses do
              Rio Vermelho, Florianópolis - SC, 88058-100
            </p>
          </div>
          <div className="h-[320px] lg:h-[388px]">
            <iframe
              title="Mapa da clínica Dra. Miriam Aguiar"
              src={`https://maps.google.com/maps?q=${encodeURIComponent(mapQuery)}&t=&z=16&ie=UTF8&iwloc=&output=embed`}
              className="h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </article>
      </div>
    </section>
  );
}
