import { cn } from "@/lib/utils";

/** Marca: escudo tipográfico Claustro / Bicentenaria — no logo startup. */
export function BrandMark({
  className,
  compact = false,
}: {
  className?: string;
  compact?: boolean;
}) {
  return (
    <span className={cn("flex items-center gap-3", className)}>
      <svg
        viewBox="0 0 48 48"
        className="size-11 shrink-0"
        aria-hidden="true"
        role="img"
      >
        <rect width="48" height="48" fill="#06152b" />
        <rect x="3" y="3" width="42" height="42" fill="none" stroke="#c45c3e" strokeWidth="1.5" />
        <path
          d="M24 9 L36 16 V28 C36 34 30 38 24 40 C18 38 12 34 12 28 V16 Z"
          fill="none"
          stroke="#e0bc4a"
          strokeWidth="1.6"
        />
        <text
          x="24"
          y="27"
          textAnchor="middle"
          fill="#f3ebe0"
          fontFamily="Georgia, serif"
          fontSize="11"
          fontWeight="700"
        >
          1827
        </text>
      </svg>
      <span className="min-w-0 leading-tight">
        <span className="block truncate font-serif text-[0.95rem] font-semibold tracking-tight text-primary-foreground sm:text-base">
          Facultad Bicentenaria
        </span>
        {!compact ? (
          <span className="mt-0.5 hidden text-[0.68rem] font-medium tracking-[0.08em] text-primary-foreground/70 uppercase sm:block">
            Derecho · U. de Cartagena
          </span>
        ) : null}
      </span>
    </span>
  );
}
