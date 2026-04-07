import { useEffect, useState } from "react";
import { Container } from "../components/layout/Container";
import { SectionHeading } from "../components/ui/SectionHeading";
import { reviews } from "../data/siteContent";

function getInitials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");
}

function ArrowIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5 stroke-current"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {direction === "left" ? (
        <path d="M15 18l-6-6 6-6" />
      ) : (
        <path d="M9 18l6-6-6-6" />
      )}
    </svg>
  );
}

export function ReviewsSection() {
  const [visibleCards, setVisibleCards] = useState(3);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const updateVisibleCards = () => {
      if (window.innerWidth >= 1024) {
        setVisibleCards(3);
        return;
      }

      if (window.innerWidth >= 640) {
        setVisibleCards(2);
        return;
      }

      setVisibleCards(1);
    };

    updateVisibleCards();
    window.addEventListener("resize", updateVisibleCards);

    return () => window.removeEventListener("resize", updateVisibleCards);
  }, []);

  const maxIndex = Math.max(0, reviews.length - visibleCards);

  useEffect(() => {
    setCurrentIndex((prev) => Math.min(prev, maxIndex));
  }, [maxIndex]);

  useEffect(() => {
    if (reviews.length <= visibleCards) {
      return;
    }

    const interval = window.setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 5000);

    return () => window.clearInterval(interval);
  }, [maxIndex, visibleCards]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  return (
    <section className="px-0 py-14 lg:py-[72px]">
      <Container>
        <SectionHeading
          eyebrow="Nossas avaliações"
          title="A confiança dos pacientes também faz parte da história da clínica."
          description="Uma experiência acolhedora, cuidadosa e segura se reflete nos retornos de quem já passou pelo consultório."
          align="center"
        />

        <div className="mt-[34px]">
          <div className="mb-6 flex items-center justify-end gap-3">
            <button
              type="button"
              aria-label="Ver avaliações anteriores"
              onClick={goToPrevious}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-brand-ink/10 bg-white/80 text-brand-ink shadow-[0_18px_36px_rgba(201,131,136,0.14)] transition hover:-translate-y-0.5 hover:bg-brand-rose-100"
            >
              <ArrowIcon direction="left" />
            </button>

            <button
              type="button"
              aria-label="Ver próximas avaliações"
              onClick={goToNext}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-brand-ink/10 bg-white/80 text-brand-ink shadow-[0_18px_36px_rgba(201,131,136,0.14)] transition hover:-translate-y-0.5 hover:bg-brand-rose-100"
            >
              <ArrowIcon direction="right" />
            </button>
          </div>

          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`,
              }}
            >
              {reviews.map((review) => (
                <article
                  key={`${review.name}-${review.rating}`}
                  className="w-full shrink-0 px-2 sm:w-1/2 lg:w-1/3"
                >
                  <div className="h-full min-h-[290px] rounded-[24px] border border-brand-ink/10 bg-white/75 p-5 shadow-[0_24px_60px_rgba(120,72,79,0.14)]">
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-4">
                        {review.avatar ? (
                          <img
                            src={review.avatar}
                            alt={review.name}
                            className="h-12 w-12 rounded-full object-cover"
                          />
                        ) : (
                          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-rose-100 text-sm font-semibold text-brand-ink">
                            {getInitials(review.name)}
                          </div>
                        )}

                        <strong className="text-[1rem] leading-6 text-brand-ink">
                          {review.name}
                        </strong>
                      </div>

                      <span className="rounded-full bg-brand-rose-100 px-3 py-1 text-sm font-semibold text-brand-ink">
                        {review.rating}
                      </span>
                    </div>

                    <p className="mt-4 line-clamp-6 text-[0.98rem] leading-7 text-brand-ink/75">
                      {review.text}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
