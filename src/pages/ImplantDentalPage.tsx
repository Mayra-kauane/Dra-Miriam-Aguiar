import { useEffect, useMemo, useState } from "react";

import heroBackground from "../assets/dramiriam2026 (45).jpg";
import teamImage from "../assets/dramiriam2026 (50) semcai.jpg";
import planningImage from "../assets/dramiriam2026 (61).jpg";
import miriamPortrait from "../assets/miriam.jpg";
import solutionImage from "../assets/consultorio3.jpg";
import technologyImage from "../assets/imagem 2.jpg";
import facadeImage from "../assets/fachada.jpg";
import implantCase1After from "../assets/implante1.1.jpeg";
import implantCase1Before from "../assets/implante1.jpeg";
import implantCase2After from "../assets/implante2.2.jpeg";
import implantCase2Before from "../assets/implante2.jpeg";
import implantCase3After from "../assets/implante3.3.jpeg";
import implantCase3Before from "../assets/implante3.jpeg";
import implantCase4After from "../assets/implante4.4.jpeg";
import implantCase4Before from "../assets/implante4.jpeg";
import implantCase5After from "../assets/implante5.5.jpeg";
import implantCase5Before from "../assets/implante5.jpeg";
import implantCase6After from "../assets/implante6.6.jpeg";
import implantCase6Before from "../assets/implante6.jpeg";
import implantCase7After from "../assets/implante7.7.jpeg";
import implantCase7Before from "../assets/implante7.jpeg";
import implantCase8After from "../assets/implante8.8.jpeg";
import implantCase8Before from "../assets/implante8.jpeg";
import implantIcon from "../assets/icon/implante.svg";
import checkIcon from "../assets/figma/icon-check.svg";
import mapHeartIcon from "../assets/figma/icon-map-heart.svg";
import plusIcon from "../assets/figma/icon-plus.svg";
import teethIcon from "../assets/figma/icon-teeth.svg";
import whatsappIcon from "../assets/figma/whatsapp.svg";
import { Footer } from "../components/layout/Footer";
import { Header, HeaderWhatsAppIcon } from "../components/layout/Header";
import { FloatingWhatsAppButton } from "../components/ui/FloatingWhatsAppButton";
import { contactCards } from "../data/siteContent";
import { trackWhatsAppClick } from "../lib/analytics";
import { LocationSection } from "../sections/LocationSection";
import { ReviewsSection } from "../sections/ReviewsSection";

const whatsappHref =
  "https://wa.me/554833693265?text=Ol%C3%A1%2C%20vim%20do%20Google%20e%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20para%20implante%20dent%C3%A1rio%20com%20a%20Dra.%20Miriam.";

const implantPagePath = "/tratamentos/implante-dentario";

const implantNavItems = [
  { label: "Início", href: `${implantPagePath}#inicio` },
  { label: "Implantes", href: `${implantPagePath}#implantes` },
  { label: "Como funciona", href: `${implantPagePath}#como-funciona` },
  { label: "Diferenciais", href: `${implantPagePath}#diferenciais` },
  { label: "Casos reais", href: `${implantPagePath}#casos-reais` },
  { label: "Contato", href: `${implantPagePath}#contato` },
];

const heroImageMask =
  "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.08) 8%, rgba(0,0,0,0.24) 16%, rgba(0,0,0,0.48) 25%, rgba(0,0,0,0.72) 34%, rgba(0,0,0,0.9) 43%, black 52%, black 100%)";

const painPoints = [
  "Dificuldade para comer alimentos mais firmes",
  "Medo de sorrir em fotos ou conversar em público",
  "Próteses móveis machucando ou saindo do lugar",
  "Perda de autoestima e insegurança no dia a dia",
  "Preocupação com aparência, fala e saúde bucal",
];

const solutionBenefits = [
  "Devolve função mastigatória e conforto para comer",
  "Aparência natural e harmonia com o sorriso",
  "Mais autoestima e confiança na rotina",
  "Não depende de próteses móveis instáveis",
  "Ajuda a preservar a saúde bucal e a estrutura óssea",
];

const steps = [
  {
    title: "Avaliação inicial",
    description:
      "A equipe entende sua queixa, avalia sua saúde bucal e solicita os exames necessários para um diagnóstico seguro.",
  },
  {
    title: "Planejamento personalizado",
    description:
      "O caso é planejado considerando quantidade de dentes perdidos, estética, função, mordida e condição óssea.",
  },
  {
    title: "Procedimento com cuidado",
    description:
      "A instalação do implante é realizada com técnica, anestesia e orientações claras para o pós-operatório.",
  },
  {
    title: "Prótese e manutenção",
    description:
      "Após a etapa de integração, a prótese é planejada para devolver naturalidade, conforto e segurança ao sorriso.",
  },
];

const differentials = [
  {
    image: technologyImage,
    imageClassName: "object-[center_72%]",
    title: "Planejamento com tecnologia",
    description:
      "Avaliação detalhada para definir a melhor conduta e reduzir inseguranças antes do tratamento.",
  },
  {
    image: miriamPortrait,
    imageClassName: "object-[center_30%]",
    title: "Equipe experiente",
    description:
      "Atendimento conduzido por profissionais preparados e em constante atualização.",
  },
  {
    image: planningImage,
    imageClassName: "object-[center_48%]",
    title: "Atendimento humanizado",
    description:
      "Escuta ativa, acolhimento e acompanhamento próximo em todas as etapas.",
  },
  {
    image: facadeImage,
    imageClassName: "object-[center_48%]",
    title: "Referência nos Ingleses",
    description:
      "Consultório de fácil acesso no Norte da Ilha, em Florianópolis.",
  },
];

const casePlaceholders = [
  {
    beforeImage: implantCase1Before,
    afterImage: implantCase1After,
    beforeImageClassName: "scale-[1.05] object-[center_58%]",
    afterImageClassName: "scale-[1.28] object-[center_64%]",
    title: "Caso real 01",
    description: "Antes e depois de reabilitação com implante dentário.",
  },
  {
    beforeImage: implantCase2Before,
    afterImage: implantCase2After,
    beforeImageClassName: "scale-[1.05] object-[center_56%]",
    afterImageClassName: "scale-[1.2] object-[center_62%]",
    title: "Caso real 02",
    description: "Resultado após planejamento para recuperar o sorriso.",
  },
  {
    beforeImage: implantCase3Before,
    afterImage: implantCase3After,
    beforeImageClassName: "scale-[1.24] object-[center_84%]",
    afterImageClassName: "translate-y-[-16%] scale-[1.55] object-[center_66%]",
    title: "Caso real 03",
    description: "Caso acompanhado para devolver estética e confiança.",
  },
  {
    beforeImage: implantCase4Before,
    afterImage: implantCase4After,
    beforeImageClassName: "scale-[1.08] object-[center_58%]",
    afterImageClassName: "scale-[1.25] object-[center_62%]",
    title: "Caso real 04",
    description: "Evolução do sorriso após tratamento reabilitador.",
  },
  {
    beforeImage: implantCase6Before,
    afterImage: implantCase6After,
    beforeImageClassName: "scale-[1.08] object-[center_57%]",
    afterImageClassName: "translate-y-[-6%] scale-[1.48] object-[center_66%]",
    title: "Caso real 05",
    description: "Antes e depois com foco em função e naturalidade.",
  },
  {
    beforeImage: implantCase7Before,
    afterImage: implantCase7After,
    beforeImageClassName: "scale-[1.08] object-[center_56%]",
    afterImageClassName: "translate-y-[-8%] scale-[1.48] object-[center_66%]",
    title: "Caso real 06",
    description: "Planejamento para recuperar harmonia e segurança ao sorrir.",
  },
  {
    beforeImage: implantCase8Before,
    afterImage: implantCase8After,
    beforeImageClassName: "scale-[1.1] object-[center_58%]",
    afterImageClassName: "scale-[1.28] object-[center_64%]",
    title: "Caso real 07",
    description: "Resultado final após reabilitação odontológica planejada.",
  },
];

const faqs = [
  {
    question: "Implante dentário dói?",
    answer:
      "O procedimento é feito com anestesia e planejamento. No pós-operatório, a equipe orienta medicação, alimentação e cuidados para uma recuperação mais tranquila.",
  },
  {
    question: "Quem pode fazer implante dentário?",
    answer:
      "A indicação depende de avaliação clínica, exames, saúde bucal e condição óssea. Em alguns casos, pode ser necessário preparar a região antes do implante.",
  },
  {
    question: "Quanto tempo dura o tratamento com implante?",
    answer:
      "O prazo varia conforme cada caso, quantidade de implantes, necessidade de enxerto e período de integração. O tempo estimado é explicado após a avaliação.",
  },
  {
    question: "O implante fica com aparência natural?",
    answer:
      "O planejamento busca recuperar função e estética com próteses compatíveis com formato, cor, mordida e características do sorriso do paciente.",
  },
  {
    question: "Posso trocar uma prótese móvel por implantes?",
    answer:
      "Muitos pacientes procuram implantes para ganhar mais estabilidade e conforto. A possibilidade depende da avaliação da gengiva, ossos e saúde geral.",
  },
];

function WhatsAppCta({
  children,
  variant = "primary",
  className = "",
}: {
  children: string;
  variant?: "primary" | "light";
  className?: string;
}) {
  const classes =
    variant === "light"
      ? "inline-flex h-[52px] items-center justify-center gap-2 rounded-full bg-white px-7 font-sans text-base font-semibold text-brand-rose-500 shadow-[0_18px_32px_rgba(120,72,79,0.12)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#fff8f6] active:translate-y-0"
      : "inline-flex h-[52px] items-center justify-center gap-2 rounded-full bg-brand-rose-500 px-7 font-sans text-base font-semibold text-white shadow-[0_18px_32px_rgba(201,131,136,0.24)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#bd797d] active:translate-y-0";

  return (
    <a
      className={`${classes} ${className}`}
      href={whatsappHref}
      target="_blank"
      rel="noreferrer"
      onClick={trackWhatsAppClick}
    >
      <HeaderWhatsAppIcon className="h-4 w-4" />
      {children}
    </a>
  );
}

function SectionEyebrow({ children }: { children: string }) {
  return (
    <span className="font-sans text-xs font-bold uppercase tracking-[0.1em] text-brand-rose-500">
      {children}
    </span>
  );
}

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

function StructuredData() {
  useEffect(() => {
    const id = "implant-dental-page-schema";
    const previousSchema = document.getElementById(id);
    previousSchema?.remove();

    const script = document.createElement("script");
    script.id = id;
    script.type = "application/ld+json";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "MedicalWebPage",
          "@id":
            "https://dentistadramiriamaguiar.com/tratamentos/implante-dentario#webpage",
          url: "https://dentistadramiriamaguiar.com/tratamentos/implante-dentario",
          name: "Implante Dentário em Florianópolis | Dra. Miriam Aguiar Odontologia",
          description:
            "Landing page sobre implante dentário nos Ingleses, Florianópolis, com benefícios, etapas do tratamento, diferenciais da clínica e agendamento pelo WhatsApp.",
          about: {
            "@type": "MedicalProcedure",
            name: "Implante dentário",
            bodyLocation: "Boca",
          },
          provider: {
            "@id": "https://dentistadramiriamaguiar.com/#dentist",
          },
          inLanguage: "pt-BR",
        },
        {
          "@type": "FAQPage",
          "@id":
            "https://dentistadramiriamaguiar.com/tratamentos/implante-dentario#faq",
          mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
        },
      ],
    });

    document.head.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  return null;
}

function ImplantHeroSection() {
  return (
    <section
      className="relative min-h-[610px] scroll-mt-24 overflow-hidden bg-[#F6E6E2] sm:min-h-[590px] lg:h-[540px] lg:min-h-[540px]"
      id="inicio"
      aria-labelledby="implante-hero-heading"
    >
      <div
        className="absolute inset-0 bg-cover bg-[68%_center] opacity-70 lg:hidden"
        style={{
          backgroundImage: `url("${heroBackground}")`,
          WebkitMaskImage:
            "linear-gradient(to bottom, rgba(0,0,0,0.72) 0%, black 36%, black 100%)",
          maskImage:
            "linear-gradient(to bottom, rgba(0,0,0,0.72) 0%, black 36%, black 100%)",
        }}
        aria-hidden="true"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-[#f3e7e5]/82 via-[#f3e7e5]/68 to-[#f3e7e5]/52 lg:hidden" />

      <div
        className="absolute inset-y-0 right-0 hidden h-full w-[62%] overflow-visible lg:block"
        aria-hidden="true"
      >
        <img
          src={heroBackground}
          alt=""
          className="absolute right-0 top-0 h-full w-auto max-w-none object-contain object-right-top"
          decoding="async"
          fetchPriority="high"
          style={{
            WebkitMaskImage: heroImageMask,
            maskImage: heroImageMask,
          }}
        />
      </div>

      <div className="absolute bottom-8 right-[min(7vw,96px)] z-10 hidden h-[112px] w-[112px] items-center justify-center rounded-full border border-brand-rose-200 bg-white text-center shadow-[0_18px_38px_rgba(120,72,79,0.16)] lg:flex">
        <p className="px-5 font-display text-[28px] font-semibold leading-none text-brand-rose-500">
          +30
          <span className="mt-1 block font-sans text-[11px] font-bold uppercase leading-4 tracking-[0.1em] text-brand-ink/70">
            anos de experiência
          </span>
        </p>
      </div>

      <div className="relative mx-auto flex min-h-[610px] w-[min(1224px,calc(100vw-32px))] items-center py-10 sm:min-h-[590px] lg:h-full lg:min-h-0 lg:py-0">
        <div className="w-full max-w-[590px]">
          <p className="mb-4 flex w-fit max-w-[292px] items-center justify-center gap-2 rounded-full border border-brand-rose-200 bg-white/55 px-4 py-2 text-center font-sans text-[12px] font-bold leading-none text-brand-rose-500 shadow-[0_10px_24px_rgba(126,91,76,0.08)] sm:max-w-[36ch] sm:text-[14px] lg:max-w-[520px]">
            <img src={implantIcon} alt="" className="h-5 w-5 shrink-0 object-contain" />
            <span className="whitespace-nowrap sm:hidden">Implante dentário nos Ingleses</span>
            <span className="hidden whitespace-nowrap sm:inline">
              Implante dentário nos Ingleses, Florianópolis
            </span>
          </p>
          <h1
            className="max-w-[620px] font-display text-[2.7rem] font-medium leading-[1.08] text-[#b9757a] sm:text-[3.25rem] lg:max-w-[720px] lg:text-[52px]"
            id="implante-hero-heading"
          >
            Recupere&nbsp;seu sorriso.{" "}
            <span className="text-brand-rose-500">Recupere&nbsp;sua confiança.</span>
          </h1>
          <p className="mt-5 max-w-[42ch] text-[16px] font-semibold leading-8 text-[#5f5a56] lg:mt-6 lg:max-w-[540px]">
            Implantes dentários nos Ingleses com planejamento, tecnologia e
            acolhimento.
          </p>
          <p className="mt-4 max-w-[42ch] text-[15px] leading-8 text-[#5f5a56] lg:max-w-[520px]">
            Na clínica da Dra. Miriam Aguiar, o tratamento é pensado para
            devolver mastigação, estética, segurança e qualidade de vida.
          </p>
          <div className="mx-auto mt-7 flex w-full max-w-[340px] flex-col items-center gap-3 sm:mx-0 sm:max-w-none sm:flex-row sm:flex-wrap sm:items-start">
            <WhatsAppCta className="w-full sm:w-auto">Agendar avaliação</WhatsAppCta>
            <a
              className="inline-flex h-[52px] w-full items-center justify-center rounded-full border border-white bg-white px-7 font-sans text-base font-semibold text-brand-ink shadow-[0_14px_30px_rgba(126,91,76,0.1)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#fff8f6] hover:text-brand-rose-500 hover:shadow-[0_18px_36px_rgba(126,91,76,0.16)] active:translate-y-0 active:bg-[#f5e2df] sm:w-auto sm:min-w-[204px]"
              href="#casos-reais"
            >
              Ver casos reais
            </a>
          </div>
        </div>
      </div>

    </section>
  );
}

function PainSection() {
  return (
    <section
      className="scroll-mt-24 bg-white py-10 lg:py-12"
      id="sobre"
      aria-labelledby="dor-heading"
    >
      <div className="mx-auto grid w-[min(1216px,calc(100vw-32px))] items-center gap-10 lg:grid-cols-[0.96fr_1.04fr]">
        <div>
          <SectionEyebrow>Talvez você se identifique</SectionEyebrow>
          <h2
            className="mt-3 max-w-[560px] font-display text-[2.45rem] leading-[1.05] tracking-[-0.035em] text-brand-ink lg:text-[46px]"
            id="dor-heading"
          >
            Você evita sorrir? Sente vergonha ou desconforto?
          </h2>
          <p className="mt-5 max-w-[520px] text-[14px] leading-7 text-brand-ink/70">
            A falta de dentes ou o uso de próteses móveis pode afetar muito
            mais do que a estética: prejudica mastigação, fala, autoestima e
            segurança emocional.
          </p>

          <ul className="mt-6 grid gap-3">
            {painPoints.map((point) => (
              <li key={point} className="flex gap-3 text-[14px] leading-6 text-brand-ink/75">
                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-ink/80 text-[12px] font-bold text-white">
                  ×
                </span>
                {point}
              </li>
            ))}
          </ul>

        </div>

        <div className="grid items-center gap-4 sm:grid-cols-[1.08fr_0.92fr]">
          <div className="rounded-[18px] bg-[#f8f3f1] p-3 shadow-[0_18px_42px_rgba(120,72,79,0.1)]">
            <img
              src={implantCase2Before}
              alt="Caso antes do tratamento com implante dentário"
              className="h-[300px] w-full rounded-[12px] object-cover object-center"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="grid gap-3">
            <div className="rounded-[18px] bg-[#f8f3f1] p-3 shadow-[0_18px_42px_rgba(120,72,79,0.1)]">
              <img
                src={implantCase1Before}
                alt="Detalhe de sorriso antes do implante dentário"
                className="h-[145px] w-full rounded-[12px] object-cover object-center"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="rounded-[16px] border border-brand-ink/10 bg-white px-5 py-4 shadow-[0_16px_36px_rgba(120,72,79,0.08)]">
              <div className="flex items-center gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f7e9e7]">
                  <span
                    aria-hidden="true"
                    className="h-5 w-5 bg-brand-rose-500"
                    style={{
                      WebkitMask: `url("${teethIcon}") center / contain no-repeat`,
                      mask: `url("${teethIcon}") center / contain no-repeat`,
                    }}
                  />
                </span>
                <h3 className="text-[18px] font-bold leading-6 text-brand-ink">
                  Existe solução
                </h3>
              </div>
              <p className="mt-3 text-[14px] leading-6 text-brand-ink/70">
                A avaliação mostra o melhor caminho para recuperar seu sorriso
                com segurança.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SolutionSection() {
  return (
    <section
      className="scroll-mt-24 bg-[#f8f3f1] py-14 lg:py-[72px]"
      id="implantes"
      aria-labelledby="solucao-heading"
    >
      <div className="mx-auto grid w-[min(1216px,calc(100vw-32px))] items-center gap-10 lg:grid-cols-[0.92fr_1.08fr]">
        <div className="rounded-[18px] border border-brand-ink/10 bg-white p-4 shadow-[0_24px_60px_rgba(120,72,79,0.12)]">
          <div className="grid gap-4">
            {[
              { label: "Antes", image: implantCase5Before },
              { label: "Depois", image: implantCase5After },
            ].map((item) => (
              <div
                key={item.label}
                className="relative min-h-[210px] overflow-hidden rounded-[14px] bg-white lg:min-h-[235px]"
              >
                <img
                  src={item.image}
                  alt={`Foto ${item.label.toLowerCase()} do caso de implante dentário`}
                  className="h-full min-h-[210px] w-full object-cover lg:min-h-[235px]"
                  loading="lazy"
                  decoding="async"
                />
                <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[12px] font-bold uppercase tracking-[0.1em] text-brand-rose-500 shadow-[0_8px_18px_rgba(120,72,79,0.12)]">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
          <p className="mt-4 text-center text-[13px] leading-6 text-brand-ink/60">
            Caso real de antes e depois do implante dentário.
          </p>
        </div>

        <div>
          <SectionEyebrow>A solução que transforma</SectionEyebrow>
          <h2
            className="mt-3 max-w-[680px] font-display text-[2.45rem] leading-[1.05] tracking-[-0.035em] text-brand-ink lg:text-[46px]"
            id="solucao-heading"
          >
            Implante dentário: para voltar a viver sem limitações.
          </h2>
          <p className="mt-5 max-w-[620px] text-[15px] leading-8 text-brand-ink/70">
            O implante dentário é uma solução moderna, segura e duradoura para
            substituir dentes perdidos e recuperar conforto, função e confiança.
          </p>

          <ul className="mt-7 grid gap-3">
            {solutionBenefits.map((benefit) => (
              <li key={benefit} className="flex gap-3 text-[15px] leading-6 text-brand-ink">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-rose-500">
                  <img src={checkIcon} alt="" className="h-3.5 w-3.5 object-contain" />
                </span>
                {benefit}
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <WhatsAppCta>Quero avaliar meu caso</WhatsAppCta>
          </div>
        </div>
      </div>
    </section>
  );
}

function TreatmentStepsSection() {
  return (
    <section
      className="scroll-mt-24 bg-white py-14 lg:py-[72px]"
      id="como-funciona"
      aria-labelledby="como-funciona-heading"
    >
      <div className="mx-auto w-[min(1216px,calc(100vw-32px))]">
        <div className="mx-auto max-w-[760px] text-left md:text-center">
          <SectionEyebrow>Como funciona</SectionEyebrow>
          <h2
            className="mt-3 font-display text-[2.45rem] leading-[1.05] tracking-[-0.035em] text-brand-ink lg:text-[46px]"
            id="como-funciona-heading"
          >
            Um tratamento planejado etapa por etapa.
          </h2>
          <p className="mx-auto mt-3 max-w-[620px] text-[14px] leading-7 text-brand-ink/70">
            Cada caso é avaliado individualmente para definir a conduta mais
            adequada, com orientação clara desde a primeira consulta.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step, index) => (
            <article
              key={step.title}
              className="flex gap-4 rounded-[16px] border border-brand-ink/10 bg-white px-5 py-5 shadow-[0_16px_34px_rgba(120,72,79,0.08)]"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-rose-500 font-sans text-[15px] font-bold leading-none text-white">
                {index + 1}
              </span>
              <div>
                <h3 className="text-[16px] font-bold leading-6 text-brand-ink">
                  {step.title}
                </h3>
                <p className="mt-2 text-[13px] leading-6 text-[#6a6a6a]">
                  {step.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ImplantDifferentialsSection() {
  return (
    <section
      className="scroll-mt-24 bg-[#f8f3f1] py-14 lg:py-[72px]"
      id="diferenciais"
      aria-labelledby="implante-diferenciais-heading"
    >
      <div className="mx-auto w-[min(1216px,calc(100vw-32px))]">
        <div className="mx-auto max-w-[820px] text-left md:text-center">
          <SectionEyebrow>Diferenciais</SectionEyebrow>
          <h2
            className="mt-3 font-display text-[2.35rem] leading-[1.05] tracking-[-0.035em] text-brand-ink lg:text-[42px]"
            id="implante-diferenciais-heading"
          >
            Por que escolher a Dra. Miriam Aguiar?
          </h2>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {differentials.map((item) => (
            <article key={item.title} className="text-center">
              <img
                src={item.image}
                alt=""
                className={`h-[156px] w-full rounded-[14px] object-cover shadow-[0_16px_34px_rgba(120,72,79,0.12)] ${item.imageClassName}`}
                loading="lazy"
                decoding="async"
              />
              <h3 className="mt-5 text-[15px] font-extrabold uppercase leading-5 text-brand-ink">
                {item.title}
              </h3>
              <p className="mx-auto mt-3 max-w-[260px] text-[14px] leading-6 text-brand-ink/70">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function BeforeAfterCasesSection() {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const [visibleCards, setVisibleCards] = useState(1);

  useEffect(() => {
    const updateVisibleCards = () => {
      if (window.innerWidth >= 1024) {
        setVisibleCards(2);
        return;
      }

      if (window.innerWidth >= 768) {
        setVisibleCards(2);
        return;
      }

      setVisibleCards(1);
    };

    updateVisibleCards();
    window.addEventListener("resize", updateVisibleCards);

    return () => window.removeEventListener("resize", updateVisibleCards);
  }, []);

  const loopedCases = useMemo(
    () => [
      ...casePlaceholders.slice(-visibleCards),
      ...casePlaceholders,
      ...casePlaceholders.slice(0, visibleCards),
    ],
    [visibleCards],
  );

  const resetCarouselPosition = (index: number) => {
    setTransitionEnabled(false);
    setCurrentIndex(index);

    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => setTransitionEnabled(true));
    });
  };

  useEffect(() => {
    resetCarouselPosition(visibleCards);
  }, [visibleCards]);

  const previousCase = () => {
    setCurrentIndex((index) => index - 1);
  };

  const nextCase = () => {
    setCurrentIndex((index) => index + 1);
  };

  const handleTransitionEnd = () => {
    if (currentIndex >= casePlaceholders.length + visibleCards) {
      resetCarouselPosition(visibleCards);
      return;
    }

    if (currentIndex < visibleCards) {
      resetCarouselPosition(casePlaceholders.length + currentIndex);
    }
  };

  return (
    <section
      className="scroll-mt-24 bg-white py-14 lg:py-[72px]"
      id="casos-reais"
      aria-labelledby="casos-heading"
    >
      <div className="mx-auto w-[min(1216px,calc(100vw-16px))] md:w-[min(1216px,calc(100vw-32px))]">
        <div className="mx-auto max-w-[760px] px-2 text-left md:px-0 md:text-center">
          <SectionEyebrow>Casos reais</SectionEyebrow>
          <h2
            className="mt-3 font-display text-[2.45rem] leading-[1.05] tracking-[-0.035em] text-brand-ink lg:text-[46px]"
            id="casos-heading"
          >
            Resultados reais de transformação do sorriso.
          </h2>
          <p className="mx-auto mt-4 max-w-[650px] text-[15px] leading-8 text-brand-ink/70">
            Veja exemplos de antes e depois de tratamentos planejados para
            recuperar estética, mastigação e confiança.
          </p>
        </div>

        <div className="relative mt-8 pt-4 lg:mt-9 lg:pt-5">
          <div className="overflow-hidden pb-1">
            <div
              className={`flex items-stretch ${
                transitionEnabled ? "transition-transform duration-500 ease-out" : ""
              }`}
              onTransitionEnd={handleTransitionEnd}
              style={{
                transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`,
              }}
            >
              {loopedCases.map((item, index) => (
                <article
                  key={`${item.title}-${index}`}
                  className="min-w-full px-1 md:min-w-[50%] md:px-3"
                >
                  <div className="h-full overflow-hidden rounded-[18px] border border-brand-ink/10 bg-[#fff8f5] shadow-[0_20px_46px_rgba(120,72,79,0.09)]">
                    <div className="grid grid-cols-2">
                      <div className="relative aspect-[4/3.45] overflow-hidden border-r border-brand-ink/10 bg-white md:aspect-[4/3.15]">
                        <img
                          src={item.beforeImage}
                          alt={`${item.title} antes do implante dentário`}
                          className={`h-full w-full object-cover brightness-[1.14] contrast-[1.04] saturate-[1.05] ${item.beforeImageClassName}`}
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                      <div className="relative aspect-[4/3.45] overflow-hidden bg-white md:aspect-[4/3.15]">
                        <img
                          src={item.afterImage}
                          alt={`${item.title} depois do implante dentário`}
                          className={`h-full w-full object-cover brightness-[1.14] contrast-[1.04] saturate-[1.05] ${item.afterImageClassName}`}
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <button
            className="absolute -left-1 top-[56%] z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-[#fff7f5] text-2xl leading-none text-[#9f5960] shadow-[0_12px_24px_rgba(120,72,79,0.16)] transition duration-200 hover:bg-[#f4dfdc] hover:text-[#7f4248] active:bg-[#ead0cc] md:-left-3 lg:-left-5 xl:-left-7"
            aria-label="Caso anterior"
            type="button"
            onClick={previousCase}
          >
            ‹
          </button>
          <button
            className="absolute -right-1 top-[56%] z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-[#fff7f5] text-2xl leading-none text-[#9f5960] shadow-[0_12px_24px_rgba(120,72,79,0.16)] transition duration-200 hover:bg-[#f4dfdc] hover:text-[#7f4248] active:bg-[#ead0cc] md:-right-3 lg:-right-5 xl:-right-7"
            aria-label="Próximo caso"
            type="button"
            onClick={nextCase}
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}

function ImplantFaqSection() {
  const [openIndex, setOpenIndex] = useState(0);
  const questionIconTypes = ["tooth", "user", "clock", "tooth", "tooth"];

  return (
    <section
      className="scroll-mt-24 bg-[#f8f3f1] py-12 lg:py-14"
      id="duvidas"
      aria-labelledby="implante-faq-heading"
    >
      <div className="mx-auto grid w-[min(1216px,calc(100vw-32px))] items-start gap-8 lg:grid-cols-[360px_1fr]">
        <div>
          <SectionEyebrow>FAQ</SectionEyebrow>
          <h2
            className="mt-3 font-display text-[2.35rem] leading-[1.05] tracking-[-0.035em] text-brand-ink lg:text-[38px]"
            id="implante-faq-heading"
          >
            Perguntas frequentes sobre implante dentário
          </h2>
        </div>

        <div className="ml-auto grid w-full max-w-[720px] gap-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <article
                key={faq.question}
                className="rounded-[14px] border border-brand-ink/10 bg-white px-5 py-4 shadow-[0_12px_28px_rgba(120,72,79,0.07)]"
              >
                <button
                  className="flex w-full items-center gap-4 text-left"
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#f7e9e7]">
                    <QuestionIcon type={questionIconTypes[index] ?? "tooth"} />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-sans text-[15px] font-semibold text-brand-ink">
                      {faq.question}
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
                      {faq.answer}
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
                    Fale conosco pelo WhatsApp e nossa equipe ajuda você a
                    entender o melhor caminho para o seu caso.
                  </p>
                </div>
              </div>
              <a
                className="inline-flex h-10 shrink-0 items-center justify-center rounded-[8px] bg-brand-rose-500 px-5 font-sans text-[14px] font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-[#bd797d] active:translate-y-0"
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                onClick={trackWhatsAppClick}
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

function FinalCtaSection() {
  return (
    <section
      className="scroll-mt-24 bg-brand-rose-400 py-14 text-white lg:py-[72px]"
      id="contato"
    >
      <div className="mx-auto grid w-[min(1216px,calc(100vw-32px))] items-center gap-8 lg:grid-cols-[1fr_460px]">
        <div>
          <span className="block font-sans text-xs font-bold uppercase tracking-[0.1em] text-white/85">
            Contato
          </span>
          <h2 className="mt-3 max-w-[720px] font-display text-[2.45rem] leading-[1.04] tracking-[-0.035em] lg:text-[46px]">
            Seu novo sorriso começa com uma decisão.
          </h2>
          <p className="mt-5 max-w-[640px] text-[15px] leading-8 text-white/95">
            Agende sua avaliação e descubra o plano ideal para transformar seu
            sorriso com segurança, tecnologia e acolhimento.
          </p>
        </div>
        <div className="w-full rounded-[18px] border border-white/30 bg-white/10 px-5 py-5 shadow-[0_22px_50px_rgba(95,74,77,0.18)] sm:px-6 sm:py-6">
          <div className="flex justify-center">
            <WhatsAppCta variant="light">Agendar avaliação via WhatsApp</WhatsAppCta>
          </div>
          <div className="mt-5 grid gap-3">
            {contactCards.map((card) => (
              <article
                key={card.title}
                className="rounded-[14px] bg-white/92 px-4 py-3 text-brand-ink shadow-[0_12px_24px_rgba(95,74,77,0.12)]"
              >
                <span className="block text-[11px] font-bold uppercase tracking-[0.09em] text-brand-rose-500">
                  {card.title}
                </span>
                <strong className="mt-1 block text-[15px] leading-5">
                  {card.detail}
                </strong>
                <p className="mt-1 text-[12px] leading-5 text-brand-ink/65">
                  {card.helper}
                </p>
              </article>
            ))}
            <p className="flex items-center gap-2 px-1 text-[13px] leading-5 text-white/90">
              <img src={mapHeartIcon} alt="" className="h-4 w-4 object-contain" />
              Atendimento em Florianópolis, nos Ingleses
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ImplantDentalPage() {
  return (
    <div className="site-shell">
      <StructuredData />
      <Header
        items={implantNavItems}
        logoHref={`${implantPagePath}#inicio`}
        ctaHref={whatsappHref}
      />
      <main>
        <ImplantHeroSection />
        <PainSection />
        <SolutionSection />
        <TreatmentStepsSection />
        <ImplantDifferentialsSection />
        <BeforeAfterCasesSection />
        <ReviewsSection />
        <ImplantFaqSection />
        <FinalCtaSection />
        <LocationSection />
      </main>
      <Footer />
      <FloatingWhatsAppButton />
    </div>
  );
}
