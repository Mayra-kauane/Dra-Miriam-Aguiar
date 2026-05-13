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
    >
      <div className="mx-auto grid w-[min(1216px,calc(100vw-32px))] items-center gap-[80px] lg:grid-cols-[552px_523px]">
        <div>
          <span className="block font-sans text-xs font-bold uppercase tracking-[0.1em] text-brand-rose-500">
            Diferenciais
          </span>
          <h2 className="mt-[14px] font-display text-[2.8rem] leading-[1.05] tracking-[-0.035em] text-brand-ink lg:text-[54.4px]">
            Por que escolher a Dra. Miriam Aguiar para cuidar do seu sorriso.
          </h2>
          <p className="mt-[20px] max-w-[472px] text-base leading-8 text-brand-ink/75">
            Atendimento de excelência, experiência de mercado e estrutura
            moderna em um consultório odontológico de fácil acesso em
            Florianópolis.
          </p>
          <img
            src={draPhoto}
            alt="Dra. Miriam Aguiar"
            className="mt-8 h-[340px] w-[500px] max-w-full rounded-[8px] object-cover object-[center_18%] shadow-[0_20px_46px_rgba(120,72,79,0.12)]"
          />
        </div>

        <div className="grid gap-6">
          {differentials.map((item, index) => (
            <article
              key={item.title}
              className="flex h-auto flex-col justify-center rounded-[18px] border border-brand-ink/10 bg-white px-[38px] py-8 shadow-[0_24px_60px_rgba(120,72,79,0.14)] lg:h-[190px]"
            >
              <div className="flex items-center gap-[18px]">
                <img src={icons[index]} alt="" className="h-6 w-6 object-contain" />
                <h3 className="text-[24px] font-bold leading-[29px] text-brand-ink">
                  {item.title}
                </h3>
              </div>
              <p className="mt-[18px] text-[16px] leading-[27px] text-[#6a6a6a]">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
