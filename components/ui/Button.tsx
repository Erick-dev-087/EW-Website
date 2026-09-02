import Link from "next/link";

interface ButtonProps {
  href?: string;
  variant?: "primary" | "secondary";
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  external?: boolean;
}

export function Button({
  href,
  variant = "primary",
  children,
  className = "",
  onClick,
  type = "button",
  external = false,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center gap-2.5 font-medium text-sm tracking-wide transition-all duration-300 group";

  const variants = {
    primary: `${baseStyles} border border-border rounded-lg px-6 py-3
              text-text-primary
              hover:border-accent hover:text-accent
              hover:shadow-[0_0_25px_rgba(214,83,22,0.12)]
              focus-visible:outline-2 focus-visible:outline-accent`,
    secondary: `${baseStyles} text-text-muted hover:text-accent`,
  };

  const arrowIcon = (
    <svg
      className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17 8l4 4m0 0l-4 4m4-4H3"
      />
    </svg>
  );

  const content = (
    <>
      {children}
      {arrowIcon}
    </>
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`${variants[variant]} ${className}`}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={`${variants[variant]} ${className}`}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${variants[variant]} ${className}`}
    >
      {content}
    </button>
  );
}
