import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/page-shell";
import { Button } from "@/components/ui/button";
import { forumThreads, getThreadById } from "@/content/forum";

type Props = { params: Promise<{ id: string }> };

export function generateStaticParams() {
  return forumThreads.map((thread) => ({ id: thread.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const thread = getThreadById(id);
  if (!thread) {
    return { title: "Hilo no encontrado" };
  }
  return { title: thread.title, description: thread.excerpt };
}

export default async function ForoThreadPage({ params }: Props) {
  const { id } = await params;
  const thread = getThreadById(id);
  if (!thread) notFound();

  return (
    <main id="contenido-principal" className="py-12 md:py-16">
      <Container className="max-w-3xl">
        <p className="text-xs font-semibold tracking-[0.18em] text-blue uppercase">
          Foro académico
        </p>
        <h1 className="mt-3 font-serif text-3xl text-navy md:text-4xl">
          {thread.title}
        </h1>
        <p className="mt-3 text-sm text-muted-foreground">
          {thread.author} · {thread.role} · {thread.dateLabel}
        </p>
        <article className="mt-8 rounded-xl border border-border bg-card p-6 leading-relaxed text-navy">
          {thread.body}
        </article>
        <section className="mt-10" aria-label="Respuestas">
          <h2 className="font-serif text-2xl text-navy">Respuestas</h2>
          {thread.answers.length === 0 ? (
            <p className="mt-4 rounded-xl border border-dashed border-border p-6 text-sm text-muted-foreground">
              Nadie ha respondido todavía. El envío de mensajes requiere el
              acceso institucional, aún en prototipo.
            </p>
          ) : (
            <ul className="mt-4 space-y-4">
              {thread.answers.map((answer) => (
                <li
                  key={answer.body.slice(0, 24)}
                  className="rounded-xl border border-border bg-sand/50 p-5"
                >
                  <p className="text-xs text-muted-foreground">
                    {answer.author} · {answer.role} · {answer.dateLabel}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-navy">{answer.body}</p>
                </li>
              ))}
            </ul>
          )}
        </section>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild variant="outline">
            <Link href="/foro">Volver al listado</Link>
          </Button>
          <Button asChild className="bg-navy text-primary-foreground hover:bg-navy-mid">
            <Link href="/iniciar-sesion">Responder (requiere demo de acceso)</Link>
          </Button>
        </div>
      </Container>
    </main>
  );
}
