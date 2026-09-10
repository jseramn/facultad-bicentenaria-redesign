import type { ReactNode } from "react";
import { PageHero, Container } from "@/components/page-shell";
import { type StockImage } from "@/content/images";

export function LegalPage({
  kicker,
  title,
  description,
  image,
  children,
}: {
  kicker: string;
  title: string;
  description: string;
  image: StockImage;
  children: ReactNode;
}) {
  return (
    <main id="contenido-principal">
      <PageHero
        kicker={kicker}
        title={title}
        description={description}
        image={image}
      />
      <section className="py-16 md:py-20">
        <Container className="max-w-3xl space-y-10">{children}</Container>
      </section>
    </main>
  );
}

export function LegalSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section>
      <h2 className="font-serif text-2xl text-navy">{title}</h2>
      <div className="mt-3 space-y-3 text-sm leading-relaxed text-muted-foreground">
        {children}
      </div>
    </section>
  );
}
