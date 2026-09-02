interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  label,
  title,
  description,
  align = "left",
  className = "",
}: SectionHeadingProps) {
  return (
    <div
      className={`mb-12 md:mb-16 ${
        align === "center" ? "text-center" : ""
      } ${className}`}
    >
      {label && (
        <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-4">
          {label}
        </span>
      )}
      <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-text-primary leading-[1.1]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-text-muted text-base md:text-lg max-w-2xl leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
