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
    align === "center" ? "mx-auto max-w-[720px] text-center" : "max-w-[720px]";

  return (
    <div className={alignment}>
      <span className="mb-3.5 inline-block text-xs font-bold uppercase tracking-[0.1em] text-brand-rose-500">
        {eyebrow}
      </span>
      <h2 className="font-display text-4xl leading-[1.05] tracking-[-0.035em] text-brand-ink sm:text-5xl lg:text-[3.4rem]">
        {title}
      </h2>
      <p className="mt-[18px] leading-8 text-brand-ink/75">{description}</p>
    </div>
  );
}
