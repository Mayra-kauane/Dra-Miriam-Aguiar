import { useEffect, useMemo, useState } from "react";

import teethIcon from "../assets/figma/icon-teeth.svg";
import team6 from "../assets/Ericson.jpeg";
import team2 from "../assets/greicy.jpg";
import team4 from "../assets/juliana.jpg";
import team5 from "../assets/juliano.jpeg";
import team3 from "../assets/kaue.jpg";
import team1 from "../assets/miriam.jpg";

const team = [
  {
    name: "Miriam Aguiar Paes Da Silva",
    cargo: "Implantodontista",
    image: team1,
  },
  {
    name: "Greicy Kelly da Cruz",
    cargo: "Recepcionista e estudante de Odontologia",
    image: team2,
  },
  {
    name: "Kauê Vieira Zani",
    cargo: "Implantodontista",
    image: team3,
  },
  {
    name: "Juliana de Castro Cardoso",
    cargo: "Ortodontista / Harmonização facial",
    image: team4,
  },
  {
    name: "Juliano Costa Leite",
    cargo: "Endodontista",
    image: team5,
  },
  {
    name: "Ericson Faria Pessanha Neto",
    cargo: "Cirurgião-dentista",
    image: team6,
  },
];

export function TeamSection() {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const [visibleCards, setVisibleCards] = useState(1);

  useEffect(() => {
    const updateVisibleCards = () => {
      if (window.innerWidth >= 1280) {
        setVisibleCards(4);
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

  const loopedTeam = useMemo(
    () => [
      ...team.slice(-visibleCards),
      ...team,
      ...team.slice(0, visibleCards),
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

  const previousTeam = () => {
    setCurrentIndex((index) => index - 1);
  };

  const nextTeam = () => {
    setCurrentIndex((index) => index + 1);
  };

  const handleTransitionEnd = () => {
    if (currentIndex >= team.length + visibleCards) {
      resetCarouselPosition(visibleCards);
      return;
    }

    if (currentIndex < visibleCards) {
      resetCarouselPosition(team.length + currentIndex);
    }
  };

  return (
    <section
      className="scroll-mt-24 bg-brand-rose-400 py-12 text-white md:py-14 lg:min-h-[700px]"
      id="equipe"
      aria-labelledby="equipe-heading"
    >
      <div className="relative mx-auto w-[min(1216px,calc(100vw-32px))]">
        <div className="text-center">
          <span className="block font-sans text-xs font-bold uppercase tracking-[0.1em]">
            Nossa equipe
          </span>
          <h2
            className="mx-auto mt-4 max-w-[850px] font-display text-[2.45rem] leading-[1.05] tracking-[-0.02em] md:text-[3rem] lg:text-[50px]"
            id="equipe-heading"
          >
            Conheça a nossa equipe <br /> de especialistas
          </h2>
        </div>

        <div className="relative mt-10 overflow-hidden md:mt-11">
          <div
            className={`flex items-stretch ${
              transitionEnabled ? "transition-transform duration-500 ease-out" : ""
            }`}
            onTransitionEnd={handleTransitionEnd}
            style={{
              transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`,
            }}
          >
            {loopedTeam.map((member, index) => (
              <article
                key={`${member.name}-${index}`}
                className="min-w-full px-[9px] md:min-w-[50%] xl:min-w-[25%]"
              >
                <div className="h-full rounded-[18px] bg-[#fffaf7] p-[12px] text-brand-ink">
                  <div className="relative overflow-hidden rounded-[14px] bg-[#f3ebe6]">
                    <img
                      src={member.image}
                      alt={`${member.name}, ${member.cargo} da Dra. Miriam Aguiar Odontologia`}
                      className="h-[330px] w-full object-cover object-[center_18%] brightness-[0.94] contrast-[1.06] saturate-[0.92] md:h-[286px] md:object-top xl:h-[306px]"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(95,74,77,0.06),transparent_42%,rgba(95,74,77,0.08))]" />
                  </div>

                  <div className="px-1 pb-3 pt-4">
                    <div className="flex items-center gap-2">
                      <img
                        src={teethIcon}
                        alt=""
                        className="h-4 w-4 object-contain"
                        loading="lazy"
                        decoding="async"
                      />
                      <h3 className="text-[16px] font-bold leading-[22px]">
                        {member.name}
                      </h3>
                    </div>
                    <p className="mt-1 text-[14px] leading-[27px] text-[#6a6a6a]">
                      {member.cargo}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <button
            className="absolute left-0 top-[157px] flex h-10 w-10 items-center justify-center rounded-full bg-white text-2xl leading-none text-brand-rose-500 shadow-[0_12px_24px_rgba(120,72,79,0.18)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#fff4f1] hover:text-[#bd797d] active:translate-y-0 active:bg-[#f4dfdc] md:left-4 md:top-[135px] xl:top-[145px]"
            aria-label="Equipe anterior"
            type="button"
            onClick={previousTeam}
          >
            ‹
          </button>
          <button
            className="absolute right-0 top-[157px] flex h-10 w-10 items-center justify-center rounded-full bg-white text-2xl leading-none text-brand-rose-500 shadow-[0_12px_24px_rgba(120,72,79,0.18)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#fff4f1] hover:text-[#bd797d] active:translate-y-0 active:bg-[#f4dfdc] md:right-4 md:top-[135px] xl:top-[145px]"
            aria-label="Próxima equipe"
            type="button"
            onClick={nextTeam}
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}
