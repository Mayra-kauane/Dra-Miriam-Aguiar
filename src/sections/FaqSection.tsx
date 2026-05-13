import plusIcon from "../assets/figma/icon-plus.svg";

const questions = [
  "Quais tratamentos são realizados?",
  "Como funciona a primeira consulta?",
  "A clínica atende urgências?",
  "Posso agendar pelo WhatsApp?",
];

export function FaqSection() {
  return (
    <section className="bg-[#f8f3f1] py-12 lg:py-14">
      <div className="mx-auto grid w-[min(1216px,calc(100vw-32px))] items-start gap-8 lg:grid-cols-[360px_1fr]">
        <div>
          <span className="font-sans text-xs font-bold uppercase tracking-[0.1em] text-brand-rose-500">
            Ajuda
          </span>
          <h2 className="mt-3 font-display text-[2.35rem] leading-[1.05] tracking-[-0.035em] text-brand-ink lg:text-[38px]">
            Perguntas Frequentes
          </h2>
        </div>

        <div className="ml-auto grid w-full max-w-[720px] gap-3">
          {questions.map((question, index) => (
            <details
              key={question}
              className="group rounded-[14px] border border-brand-ink/10 bg-white px-5 py-4 shadow-[0_12px_28px_rgba(120,72,79,0.07)]"
              open={index === 1}
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-sans text-[15px] font-semibold text-brand-ink">
                {question}
                <img
                  src={plusIcon}
                  alt=""
                  className="h-4 w-4 object-contain transition group-open:rotate-45"
                />
              </summary>
              <p className="mt-3 text-[14px] leading-6 text-[#6a6a6a]">
                Entre em contato para receber uma orientação inicial e entender
                qual caminho faz mais sentido para o seu caso.
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
