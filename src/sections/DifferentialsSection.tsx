import computerIcon from "../assets/figma/icon-computer.svg";
import mapHeartIcon from "../assets/figma/icon-map-heart.svg";
import timeIcon from "../assets/figma/icon-time.svg";
import draPhoto from "../assets/dramiriam2026 (61).jpg";
import { differentials } from "../data/siteContent";

const icons = [timeIcon, computerIcon, mapHeartIcon];

export function DifferentialsSection() {
  return (
    <section
      className="scroll-mt-24 bg-white py-[72px] lg:min-h-[714px]"
      id="diferenciais"
      aria-labelledby="diferenciais-heading"
    >
      <div className="mx-auto grid w-[min(1216px,calc(100vw-32px))] items-start gap-[80px] lg:grid-cols-[552px_523px]">
        <div>
          <span className="block font-sans text-xs font-bold uppercase tracking-[0.1em] text-brand-rose-500">
            Diferenciais
          </span>
          <h2
            className="mt-[14px] font-display text-[2.8rem] leading-[1.05] tracking-[-0.035em] text-brand-ink lg:text-[54.4px]"
            id="diferenciais-heading"
          >
            Por que escolher a Dra. Miriam Aguiar para cuidar do seu sorriso.
          </h2>
          <p className="mt-[20px] max-w-[472px] text-base leading-8 text-brand-ink/75">
            Atendimento de excelência, experiência de mercado e estrutura
            moderna em um consultório odontológico de fácil acesso em
            Florianópolis.
          </p>
          <img
            src={draPhoto}
            alt="Dra. Miriam Aguiar durante atendimento odontológico em Florianópolis"
            className="mt-8 h-[340px] w-[500px] max-w-full rounded-[8px] object-cover object-[center_18%] shadow-[0_20px_46px_rgba(120,72,79,0.12)]"
            loading="lazy"
            decoding="async"
          />
        </div>

        <div className="grid gap-6 lg:mt-[30px] lg:flex lg:h-[659px] lg:flex-col lg:justify-between lg:gap-0">
          {differentials.map((item, index) => (
            <article
              key={item.title}
              className="rounded-[18px] border border-brand-ink/10 bg-white px-5 py-5 shadow-[0_24px_60px_rgba(120,72,79,0.14)] lg:flex lg:h-[190px] lg:flex-col lg:justify-center lg:px-[38px] lg:py-8"
            >
              <div className="flex items-start gap-4 lg:items-center lg:gap-[18px]">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#f7e9e7]">
                  <img
                    src={icons[index]}
                    alt=""
                    className="h-5 w-5 object-contain lg:h-6 lg:w-6"
                    loading="lazy"
                    decoding="async"
                  />
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="text-[18px] font-bold leading-[24px] text-brand-ink lg:text-[24px] lg:leading-[29px]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[15px] leading-7 text-[#6a6a6a] lg:hidden">
                    {item.description}
                  </p>
                </div>
              </div>
              <p className="mt-[18px] hidden text-[16px] leading-[27px] text-[#6a6a6a] lg:block">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
