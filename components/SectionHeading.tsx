type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center"
}: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="text-sm font-bold uppercase tracking-[0.18em] text-leaf">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-bold leading-tight text-navy md:text-4xl">{title}</h2>
      {description ? (
        <p className="mt-4 text-base leading-7 text-graphite/80 md:text-lg">{description}</p>
      ) : null}
    </div>
  );
}
