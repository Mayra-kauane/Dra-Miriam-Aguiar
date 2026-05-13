type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignment =
    align === "center" ? "mx-auto max-w-[760px] text-center" : "max-w-[720px]";

  return (
    <div className={alignment}>
      <span className="mb-3 inline-block text-xs font-bold uppercase tracking-[0.14em] text-brand-sage">
        {eyebrow}
      </span>
      <h2 className="font-display text-[2.35rem] leading-[1.05] text-brand-ink sm:text-[3rem] lg:text-[3.35rem]">
        {title}
      </h2>
      <p className="mt-5 text-[1rem] leading-8 text-brand-ink/72">
        {description}
      </p>
    </div>
  );
}
