import { useState } from "react";

import teethIcon from "../assets/figma/icon-teeth.svg";
import plusIcon from "../assets/figma/icon-plus.svg";
import whatsappIcon from "../assets/figma/whatsapp.svg";

const questions = [
  {
    title: "Quais tratamentos são realizados na clínica?",
    answer:
      "Oferecemos tratamentos completos em odontologia estética, reabilitadora, preventiva e funcional. Veja todos os tratamentos na página específica.",
    icon: "tooth",
  },
  {
    title: "Como funciona a primeira consulta?",
    answer:
      "Avaliamos sua saúde bucal, entendemos suas necessidades e criamos um plano de tratamento personalizado para você.",
    icon: "user",
  },
  {
    title: "A clínica atende urgências?",
    answer:
      "Sim, atendemos urgências. Entre em contato pelo WhatsApp para avaliação e orientações rápidas.",
    icon: "clock",
  },
  {
    title: "Posso agendar pelo WhatsApp?",
    answer:
      "Sim! É rápido, prático e você escolhe o melhor dia e horário para sua consulta.",
    icon: "calendar",
  },
];

function QuestionIcon({ type }: { type: string }) {
  const common = "h-5 w-5 stroke-brand-rose-500";

  if (type === "tooth") {
    return (
      <span
        aria-hidden="true"
        className="h-5 w-5 bg-brand-rose-500 opacity-80"
        style={{
          WebkitMask: `url("${teethIcon}") center / contain no-repeat`,
          mask: `url("${teethIcon}") center / contain no-repeat`,
        }}
      />
    );
  }

  if (type === "user") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden="true">
        <path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" strokeWidth="1.8" />
        <path
          d="M4.8 20c1.1-3.2 3.6-5.1 7.2-5.1s6.1 1.9 7.2 5.1"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (type === "clock") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden="true">
        <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" strokeWidth="1.8" />
        <path d="M12 7.5V12l3 2" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden="true">
      <path
        d="M7 4v3M17 4v3M5 9h14M6.5 6h11A1.5 1.5 0 0 1 19 7.5v10A1.5 1.5 0 0 1 17.5 19h-11A1.5 1.5 0 0 1 5 17.5v-10A1.5 1.5 0 0 1 6.5 6Z"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

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
          {questions.map((question, index) => {
            const isOpen = openIndex === index;

            return (
              <article
                key={question.title}
                className="rounded-[14px] border border-brand-ink/10 bg-white px-5 py-4 shadow-[0_12px_28px_rgba(120,72,79,0.07)]"
              >
                <button
                  className="flex w-full items-center gap-4 text-left"
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#f7e9e7]">
                    <QuestionIcon type={question.icon} />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-sans text-[15px] font-semibold text-brand-ink">
                      {question.title}
                    </span>
                  </span>
                  <img
                    src={plusIcon}
                    alt=""
                    className={`h-5 w-5 object-contain opacity-80 transition duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  />
                </button>

                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="min-h-0 overflow-hidden">
                    <p className="pl-[60px] pt-2 text-[14px] leading-6 text-[#6a6a6a]">
                      {question.answer}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}

          <div className="mt-3 rounded-[16px] bg-[#f7e9e7] px-5 py-4 text-brand-ink">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#efd7d5] text-brand-rose-500">
                  <span
                    aria-hidden="true"
                    className="h-6 w-6 bg-current"
                    style={{
                      WebkitMask: `url("${whatsappIcon}") center / contain no-repeat`,
                      mask: `url("${whatsappIcon}") center / contain no-repeat`,
                    }}
                  />
                </span>
                <div>
                  <h3 className="font-display text-[23px] font-medium leading-tight text-brand-ink">
                    Ainda ficou com dúvidas?
                  </h3>
                  <p className="mt-1 font-sans text-[14px] leading-6 text-brand-ink/70">
                    Fale conosco pelo WhatsApp e nossa equipe terá o maior
                    prazer em ajudar você.
                  </p>
                </div>
              </div>
              <a
                className="inline-flex h-10 shrink-0 items-center justify-center rounded-[8px] bg-brand-rose-500 px-5 font-sans text-[14px] font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-[#bd797d] active:translate-y-0"
                href="https://wa.me/554833693265"
                target="_blank"
                rel="noreferrer"
              >
                Falar no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
