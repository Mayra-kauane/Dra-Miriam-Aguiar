import { useEffect, useMemo, useState } from "react";

import starIcon from "../assets/figma/icon-star.svg";
import review1 from "../assets/review1.png";
import review2 from "../assets/review2.png";
import review3 from "../assets/review3.png";
import review4 from "../assets/review4.png";
import review5 from "../assets/review5.png";

const reviews = [
  {
    name: "Denise Prieto Kappel",
    avatar: review1,
    text: "Excelente atendimento, da recepção aos profissionais. Dra. Miriam atende toda a minha família há 25 anos. Maravilhoso trabalho, carisma e acolhimento.",
  },
  {
    name: "Talita Matos",
    avatar: review2,
    text: "Dentista precisa ser de confiança e a experiência tem que ser boa. A Miriam é maravilhosa nos detalhes e faz com que a experiência seja a melhor possível. Super recomendo!",
  },
  {
    name: "Lucas Gauterio",
    avatar: review3,
    text: "Ótimo atendimento. Profissionais excelentes. Estou muito feliz com os resultados do tratamento com Invisalign.",
  },
  {
    name: "Felipe Radin",
    avatar: review4,
    text: "Ótimo atendimento da equipe, e estrutura do local, recomendo muito!",
  },
  {
    name: "Maria Collares",
    avatar: review5,
    text: "A Dra. Miriam é uma profissional séria, nossa futura dentista Greicy atende muito bem, a Dra. Juliana também é ótima, e a clínica tem um cafezinho maravilhoso.",
  },
];

function Stars() {
  return (
    <div className="flex justify-center gap-1" aria-label="Avaliação 5 estrelas">
      {Array.from({ length: 5 }).map((_, index) => (
        <img
          key={index}
          src={starIcon}
          alt=""
          className="h-5 w-5 object-contain md:h-6 md:w-6"
          loading="lazy"
          decoding="async"
        />
      ))}
    </div>
  );
}

export function ReviewsSection() {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const [visibleCards, setVisibleCards] = useState(1);

  useEffect(() => {
    const updateVisibleCards = () => {
      if (window.innerWidth >= 1024) {
        setVisibleCards(3);
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

  const loopedReviews = useMemo(
    () => [
      ...reviews.slice(-visibleCards),
      ...reviews,
      ...reviews.slice(0, visibleCards),
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

  const previousReview = () => {
    setCurrentIndex((index) => index - 1);
  };

  const nextReview = () => {
    setCurrentIndex((index) => index + 1);
  };

  const handleTransitionEnd = () => {
    if (currentIndex >= reviews.length + visibleCards) {
      resetCarouselPosition(visibleCards);
      return;
    }

    if (currentIndex < visibleCards) {
      resetCarouselPosition(reviews.length + currentIndex);
    }
  };

  return (
    <section
      className="bg-brand-rose-400 py-10 lg:min-h-[500px] lg:py-12"
      aria-labelledby="avaliacoes-heading"
    >
      <div className="mx-auto w-[min(1216px,calc(100vw-32px))]">
        <div className="mx-auto max-w-[760px] text-left text-white md:text-center">
          <span className="block font-sans text-xs font-bold uppercase tracking-[0.1em]">
            Nossas avaliações
          </span>
          <h2
            className="mx-auto mt-3 max-w-[820px] font-display text-[2.25rem] leading-[1.05] tracking-[-0.035em] lg:text-[44px]"
            id="avaliacoes-heading"
          >
            A confiança dos pacientes também faz parte da história da clínica.
          </h2>
          <p className="mx-auto mt-4 max-w-[614px] text-[15px] leading-7">
            Uma experiência acolhedora, cuidadosa e segura se reflete nos
            retornos de quem já passou pelo consultório.
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
              {loopedReviews.map((review, index) => (
                <article
                  key={`${review.name}-${index}`}
                  className="min-w-full px-3 pt-10 md:min-w-[50%] md:pt-11 lg:min-w-[33.333%]"
                >
                  <div className="relative flex h-full flex-col rounded-[16px] bg-white px-5 pb-5 pt-[54px] text-center md:px-6 md:pt-[58px]">
                    <img
                      src={review.avatar}
                      alt={`Foto de ${review.name}`}
                      className="absolute left-1/2 top-0 h-[76px] w-[76px] -translate-x-1/2 -translate-y-1/2 rounded-full object-cover md:h-[80px] md:w-[80px]"
                      loading="lazy"
                      decoding="async"
                    />
                    <Stars />
                    <strong className="mt-3 block text-[16px] leading-6 text-brand-ink">
                      {review.name}
                    </strong>
                    <p className="mt-3 text-[13px] leading-6 text-[#6a6a6a] md:text-[14px]">
                      “{review.text}”
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <button
            className="absolute -left-1 top-[64%] z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-[#fff7f5] text-2xl leading-none text-[#9f5960] shadow-[0_12px_24px_rgba(120,72,79,0.16)] transition duration-200 hover:bg-[#f4dfdc] hover:text-[#7f4248] active:bg-[#ead0cc] md:-left-3 lg:-left-5 xl:-left-7"
            aria-label="Avaliação anterior"
            type="button"
            onClick={previousReview}
          >
            ‹
          </button>
          <button
            className="absolute -right-1 top-[64%] z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-[#fff7f5] text-2xl leading-none text-[#9f5960] shadow-[0_12px_24px_rgba(120,72,79,0.16)] transition duration-200 hover:bg-[#f4dfdc] hover:text-[#7f4248] active:bg-[#ead0cc] md:-right-3 lg:-right-5 xl:-right-7"
            aria-label="Próxima avaliação"
            type="button"
            onClick={nextReview}
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}
