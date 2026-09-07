import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero, Container, PhotoStrip } from "@/components/page-shell";
import { images } from "@/content/images";
import { newsPosts } from "@/content/news";

export const metadata: Metadata = {
  title: "Noticias",
  description:
    "Avisos de la Facultad de Derecho y Ciencias Políticas de la Universidad de Cartagena.",
};

export default function NoticiasPage() {
  return (
    <main id="contenido-principal">
      <PageHero
        kicker="Actualidad"
        title="Noticias de la Facultad"
        description="Comunicados de orientación académica y de servicio. No sustituyen el boletín de Rectoría ni las resoluciones."
        image={images.lecture}
      />

      <section className="border-b border-border bg-sand/50 py-4 md:py-5" aria-label="Noticias">
        <Container>
          <PhotoStrip
            items={[
              images.lecture,
              images.library,
              images.studentsCampus,
              images.documents,
            ]}
          />
        </Container>
      </section>
      <section className="py-16 md:py-20">
        <Container>
          <ul className="grid gap-8 lg:grid-cols-3">
            {newsPosts.map((post) => {
              const image = images[post.imageKey];
              return (
                <li key={post.slug}>
                  <article className="flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card">
                    <div className="relative h-44">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 33vw"
                        className="object-cover"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-5">
                      <p className="text-xs text-muted-foreground">
                        {post.dateLabel} · {post.category}
                      </p>
                      <h2 className="mt-2 font-serif text-xl text-navy">
                        <Link href={`/noticias/${post.slug}`} className="hover:underline">
                          {post.title}
                        </Link>
                      </h2>
                      <p className="mt-2 flex-1 text-sm text-muted-foreground">
                        {post.excerpt}
                      </p>
                      <Link
                        href={`/noticias/${post.slug}`}
                        className="mt-4 text-sm font-semibold text-blue hover:underline"
                      >
                        Leer nota
                      </Link>
                    </div>
                  </article>
                </li>
              );
            })}
          </ul>
        </Container>
      </section>
    </main>
  );
}
