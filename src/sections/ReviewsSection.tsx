import starIcon from "../assets/figma/icon-star.svg";
import review1 from "../assets/review1.png";
import review2 from "../assets/review2.png";
import review3 from "../assets/review3.png";

const reviews = [
  {
    name: "Denise Prieto Kappel",
    avatar: review1,
    text: "Excelente atendimento, da recepção aos profissionais. Dra Miriam atende toda a minha família a 25 anos. Maravilhoso trabalho, carisma e acolhimento.",
  },
  {
    name: "Talita Matos",
    avatar: review2,
    text: "Dentista precisa ser de confiança e a experiência tem que ser boa. A a Miriam é maravilhosa nos detalhes e faz com que a experiência seja a melhor possível. Super recomendo!!",
  },
  {
    name: "Lucas Gauterio",
    avatar: review3,
    text: "Ótimo atendimento. Profissionais excelentes. Estou muito feliz com os resultados do tratamento com Invisalign 😁",
  },
];

function Stars() {
  return (
    <div className="flex justify-center gap-1">
      {Array.from({ length: 5 }).map((_, index) => (
        <img
          key={index}
          src={starIcon}
          alt=""
          className="h-7 w-7 object-contain"
        />
      ))}
    </div>
  );
}

export function ReviewsSection() {
  return (
    <section className="bg-brand-rose-400 py-12 lg:min-h-[560px] lg:py-14">
      <div className="mx-auto w-[min(1216px,calc(100vw-32px))]">
        <div className="mx-auto max-w-[760px] text-center text-white">
          <span className="block font-sans text-xs font-bold uppercase tracking-[0.1em]">
            Nossas avaliações
          </span>
          <h2 className="mx-auto mt-3 max-w-[820px] font-display text-[2.5rem] leading-[1.05] tracking-[-0.035em] lg:text-[48px]">
            A confiança dos pacientes também faz parte da história da clínica.
          </h2>
          <p className="mx-auto mt-4 max-w-[614px] text-[15px] leading-7">
            Uma experiência acolhedora, cuidadosa e segura se reflete nos
            retornos de quem já passou pelo consultório.
          </p>
        </div>

        <div className="mt-9 grid gap-7 md:grid-cols-3 lg:mt-10">
          {reviews.map((review) => (
            <article key={review.name} className="relative pt-8">
              <div className="rounded-[18px] bg-white px-6 pb-7 pt-[96px] text-center shadow-[0_18px_42px_rgba(120,72,79,0.12)]">
                <Stars />
                <p className="mt-4 text-[14px] leading-6 text-[#6a6a6a]">
                  “{review.text}”
                </p>
                <strong className="mt-4 block text-[18px] leading-6 text-brand-ink">
                  “{review.name}”
                </strong>
              </div>
              <img
                src={review.avatar}
                alt={review.name}
                className="absolute left-1/2 top-0 h-[112px] w-[112px] -translate-x-1/2 rounded-full border-[4px] border-white object-cover"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
