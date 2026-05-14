import { useState } from "react";

import consultorio from "../assets/consultorio.jpg";
import consultorio1 from "../assets/consultorio1.jpg";
import consultorio2 from "../assets/consultorio2.jpg";
import consultorio3 from "../assets/consultorio3.jpg";

const mapQuery =
  "Dra Miriam Aguiar Odontologia Rua Intendente Joao Nunes Vieira 1101 Sala 07 Ingleses Florianopolis SC";

const clinicImages = [
  {
    src: consultorio1,
    alt: "Recepcao da Dra. Miriam Aguiar Odontologia",
    position: "object-[center_44%]",
  },
  {
    src: consultorio3,
    alt: "Consultorio odontologico preparado para atendimento",
    position: "object-[center_45%]",
  },
  {
    src: consultorio,
    alt: "Sala odontologica equipada da clinica",
    position: "object-[center_42%]",
  },
  {
    src: consultorio2,
    alt: "Cadeira odontologica e ambiente de atendimento",
    position: "object-[center_43%]",
  },
];

const accessItems = [
  {
    title: "Fácil acesso",
    text: "Próximo à Rod. Armando Calil Bulos (SC-406)",
    icon: "car",
  },
  {
    title: "Estacionamento",
    text: "Estacionamento disponível no local",
    icon: "parking",
  },
  {
    title: "Acessibilidade",
    text: "Ambiente acessível e preparado para você",
    icon: "accessibility",
  },
  {
    title: "Atendimento",
    text: "Segunda a sexta, 09h às 12h e 13h30 às 17h30",
    icon: "clock",
  },
];

type AccessIconName = (typeof accessItems)[number]["icon"];

function AccessIcon({ name }: { name: AccessIconName }) {
  const iconProps = {
    "aria-hidden": true,
    className: "h-9 w-9 fill-none stroke-current",
    viewBox: "0 0 32 32",
  };

  if (name === "car") {
    return (
      <svg {...iconProps}>
        <path
          d="M7.5 17.5h17l2 5.5H5.5l2-5.5Z"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2.3"
        />
        <path
          d="M10.5 17.5 12.3 11h7.4l1.8 6.5M8 23v3M24 23v3"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2.3"
        />
        <circle cx="10.5" cy="23" r="1.7" strokeWidth="2.3" />
        <circle cx="21.5" cy="23" r="1.7" strokeWidth="2.3" />
      </svg>
    );
  }

  if (name === "parking") {
    return (
      <svg {...iconProps}>
        <circle cx="16" cy="16" r="12" strokeWidth="2.3" />
        <path
          d="M13 23V9h5.1a4.4 4.4 0 0 1 0 8.8H13"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2.3"
        />
      </svg>
    );
  }

  if (name === "accessibility") {
    return (
      <svg {...iconProps}>
        <circle cx="16" cy="6.5" r="2.2" strokeWidth="2.3" />
        <path
          d="M16 10v7.2h5.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2.3"
        />
        <path
          d="M13.7 13.8a6.7 6.7 0 1 0 8.5 8.3M21.4 17.2l2.9 6.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2.3"
        />
      </svg>
    );
  }

  return (
    <svg {...iconProps}>
      <circle cx="16" cy="16" r="11" strokeWidth="2.3" />
      <path
        d="M16 9.8v6.6l4.4 2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.3"
      />
    </svg>
  );
}

export function LocationSection() {
  const [activeImage, setActiveImage] = useState(0);
  const selectedImage = clinicImages[activeImage];

  const showPreviousImage = () => {
    setActiveImage((index) =>
      index === 0 ? clinicImages.length - 1 : index - 1,
    );
  };

  const showNextImage = () => {
    setActiveImage((index) =>
      index === clinicImages.length - 1 ? 0 : index + 1,
    );
  };

  return (
    <section
      className="scroll-mt-24 bg-white py-8 lg:py-12"
      id="localizacao"
      aria-labelledby="localizacao-heading"
    >
      <div className="mx-auto w-[min(1216px,calc(100vw-32px))]">
        <div className="mx-auto max-w-[720px] text-left md:text-center">
          <h2
            className="font-display text-[2.6rem] leading-[1.02] tracking-[-0.035em] text-brand-ink sm:text-[3.2rem] lg:text-[64px]"
            id="localizacao-heading"
          >
            Conheça nosso espaço
          </h2>
          <p className="mx-auto mt-4 max-w-[600px] text-[15px] leading-7 text-brand-ink/70 sm:text-base">
            Estamos nos Ingleses, em Florianópolis, com acesso prático para
            receber você com conforto e cuidado.
          </p>
        </div>

        <article
          className="mt-7 overflow-hidden rounded-[18px] border border-brand-ink/10 bg-white shadow-[0_24px_64px_rgba(120,72,79,0.1)]"
          id="mapa"
        >
          <div className="grid gap-3 bg-brand-rose-400 px-5 py-3 text-white md:grid-cols-[190px_1fr] md:items-center md:px-7">
            <div className="flex items-center gap-4 md:border-r md:border-white/45 md:pr-7">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-brand-rose-500">
                <svg
                  aria-hidden="true"
                  className="h-6 w-6 fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.7a7.2 7.2 0 0 0-7.2 7.2c0 5.3 7.2 11.4 7.2 11.4s7.2-6.1 7.2-11.4A7.2 7.2 0 0 0 12 2.7Zm0 10.1a2.9 2.9 0 1 1 0-5.8 2.9 2.9 0 0 1 0 5.8Z" />
                </svg>
              </span>
              <span className="text-sm font-bold uppercase tracking-[0.08em]">
                Localização
              </span>
            </div>
            <p className="text-[14px] leading-6 md:text-base">
              Rua Intendente João Nunes Vieira, 1101 - Sala 07, Ingleses do Rio
              Vermelho, Florianópolis - SC, 88058-100
            </p>
          </div>

          <div className="grid gap-6 px-5 py-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-7">
            <div className="min-h-[412px] overflow-hidden rounded-[12px] bg-[#f8f3f1] lg:h-[480px]">
              <iframe
                title="Mapa da clínica Dra. Miriam Aguiar"
                src={`https://maps.google.com/maps?q=${encodeURIComponent(mapQuery)}&t=&z=16&ie=UTF8&iwloc=&output=embed`}
                className="h-full min-h-[412px] w-full border-0 lg:min-h-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div>
              <div className="relative overflow-hidden rounded-[12px] bg-[#f8f3f1]">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className={`h-[320px] w-full object-cover ${selectedImage.position} lg:h-[388px]`}
                  loading="lazy"
                  decoding="async"
                />
                <button
                  type="button"
                  className="absolute left-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-3xl leading-none text-brand-ink shadow-[0_12px_24px_rgba(95,74,77,0.2)] transition hover:scale-105 hover:bg-[#fff8f6]"
                  aria-label="Imagem anterior do consultório"
                  onClick={showPreviousImage}
                >
                  <svg
                    aria-hidden="true"
                    className="h-5 w-5 fill-none stroke-current"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M15 18 9 12l6-6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.4"
                    />
                  </svg>
                </button>
                <button
                  type="button"
                  className="absolute right-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-3xl leading-none text-brand-ink shadow-[0_12px_24px_rgba(95,74,77,0.2)] transition hover:scale-105 hover:bg-[#fff8f6]"
                  aria-label="Próxima imagem do consultório"
                  onClick={showNextImage}
                >
                  <svg
                    aria-hidden="true"
                    className="h-5 w-5 fill-none stroke-current"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="m9 6 6 6-6 6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.4"
                    />
                  </svg>
                </button>
              </div>

              <div className="mt-3 grid grid-cols-4 gap-2">
                {clinicImages.map((image, index) => (
                  <button
                    key={image.src}
                    type="button"
                    className={`overflow-hidden rounded-[8px] border transition ${
                      activeImage === index
                        ? "border-brand-rose-500"
                        : "border-transparent opacity-80 hover:opacity-100"
                    }`}
                    aria-label={`Ver imagem ${index + 1} do consultório`}
                    onClick={() => setActiveImage(index)}
                  >
                    <img
                      src={image.src}
                      alt=""
                      className={`h-16 w-full object-cover ${image.position} sm:h-20`}
                      loading="lazy"
                      decoding="async"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-brand-ink/10 bg-white px-5 py-6 lg:px-8">
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
            {accessItems.map((item) => (
              <div
                key={item.title}
                className="flex min-h-[96px] items-start gap-4 lg:border-r lg:border-brand-ink/10 lg:px-8 first:lg:pl-0 last:lg:border-r-0 last:lg:pr-0"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center overflow-visible text-brand-rose-500">
                  <AccessIcon name={item.icon} />
                </span>
                <div className="min-w-0">
                  <h3 className="text-[13px] font-bold uppercase tracking-[0.04em] text-brand-rose-500">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[14px] leading-6 text-brand-ink/75">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
