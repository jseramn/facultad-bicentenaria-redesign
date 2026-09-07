import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/page-shell";
import { Button } from "@/components/ui/button";
import { images } from "@/content/images";
import { getNewsBySlug, newsPosts } from "@/content/news";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return newsPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getNewsBySlug(slug);
  if (!post) return { title: "Noticia no encontrada" };
  return { title: post.title, description: post.excerpt };
}

export default async function NewsArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = getNewsBySlug(slug);
  if (!post) notFound();
  const image = images[post.imageKey];

  return (
    <main id="contenido-principal">
      <article>
        <div className="relative isolate min-h-[320px] overflow-hidden bg-navy text-primary-foreground">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-45"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/75 to-navy/30" />
          <Container className="relative z-10 flex min-h-[320px] flex-col justify-end py-12">
            <p className="text-xs font-semibold tracking-[0.18em] text-gold uppercase">
              {post.category} · {post.dateLabel}
            </p>
            <h1 className="mt-3 max-w-3xl font-serif text-4xl text-balance md:text-5xl">
              {post.title}
            </h1>
          </Container>
        </div>
        <Container className="max-w-3xl py-12 md:py-16">
          {post.body.map((paragraph) => (
            <p key={paragraph.slice(0, 48)} className="mt-4 text-base leading-relaxed text-navy">
              {paragraph}
            </p>
          ))}
          <Button asChild variant="outline" className="mt-10">
            <Link href="/noticias">Volver a noticias</Link>
          </Button>
        </Container>
      </article>
    </main>
  );
}
