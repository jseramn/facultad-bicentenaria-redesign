import { cn } from "@/lib/utils";

/** Wordmark tipográfico institucional. Sin escudo ni crest inventados. */
export function BrandMark({
  className,
  compact = false,
}: {
  className?: string;
  compact?: boolean;
}) {
  return (
    <span className={cn("flex min-w-0 flex-col justify-center", className)}>
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
