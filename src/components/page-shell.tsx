import Image from "next/image";
import { type StockImage } from "@/content/images";
import { cn } from "@/lib/utils";

export function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto w-full min-w-0 max-w-6xl px-4", className)}>
      {children}
    </div>
  );
}

export function PageHero({
  kicker,
  title,
  description,
  image,
}: {
  kicker: string;
  title: string;
  description: string;
  image: StockImage;
}) {
  return (
    <section className="relative isolate min-h-[min(52svh,26rem)] overflow-hidden bg-navy text-primary-foreground md:min-h-[min(48svh,30rem)]">
      <Image
        src={image.src}
        alt={image.alt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-[center_30%]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/75 to-navy/25" />
      <div className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-navy/95 via-navy/55 to-transparent md:w-[70%]" />
      <Container className="relative z-10 flex min-h-[min(52svh,26rem)] flex-col justify-end py-12 md:min-h-[min(48svh,30rem)] md:py-16">
        <p className="inline-flex w-fit border border-coral/50 bg-navy/35 px-3 py-1 text-[0.7rem] font-semibold tracking-[0.18em] text-gold-bright uppercase backdrop-blur-sm">
          {kicker}
        </p>
        <h1 className="mt-4 max-w-3xl font-serif text-4xl leading-[1.1] text-balance md:text-5xl">
          {title}
        </h1>
        <div className="gold-rule mt-5" />
        <p className="mt-4 max-w-2xl text-base text-pretty text-primary-foreground/90 md:text-lg">
          {description}
        </p>
      </Container>
    </section>
  );
}

export function SectionHeader({
  kicker,
  title,
  description,
  id,
}: {
  kicker?: string;
  title: string;
  description?: string;
  id?: string;
}) {
  return (
    <div className="max-w-3xl">
      {kicker ? (
        <p className="text-xs font-semibold tracking-[0.16em] text-coral uppercase">
          {kicker}
        </p>
      ) : null}
      <h2
        id={id}
        className="mt-2 font-serif text-3xl text-navy text-balance md:text-4xl"
      >
        {title}
      </h2>
      <div className="gold-rule mt-4" />
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-pretty text-ink/85">
          {description}
        </p>
      ) : null}
    </div>
  );
}

/** Franja de 3–4 fotos del set Cartagena / comunidad. */
export function PhotoStrip({
  items,
  className,
}: {
  items: StockImage[];
  className?: string;
}) {
  return (
    <div
      className={cn(
        "grid min-w-0 grid-cols-2 gap-2 md:grid-cols-4 md:gap-3",
        className,
      )}
    >
      {items.map((img) => (
        <figure
          key={img.src + img.alt}
          className="relative aspect-[4/3] min-w-0 overflow-hidden bg-sand"
        >
          <Image
            src={img.src}
            alt={img.alt}
            fill
            sizes="(max-width: 768px) 50vw, 25vw"
            className="object-cover"
          />
        </figure>
      ))}
    </div>
  );
}
