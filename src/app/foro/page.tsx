import type { Metadata } from "next";
import Link from "next/link";
import { DemoNotice } from "@/components/demo-notice";
import { PageHero, Container, SectionHeader, PhotoStrip } from "@/components/page-shell";
import { Button } from "@/components/ui/button";
import { forumThreads } from "@/content/forum";
import { images } from "@/content/images";

export const metadata: Metadata = {
  title: "Foro académico",
  description:
    "Foro de la comunidad de la Facultad de Derecho. Hilos de muestra; el acceso institucional real aún es un prototipo.",
};

export default function ForoPage() {
  return (
    <main id="contenido-principal">
      <PageHero
        kicker="Comunidad académica · demostración"
        title="Foro de la Facultad"
        description="Espacio de muestra para orientar trámites, práctica y vida universitaria. Los hilos visibles no están ligados a un directorio real."
        image={images.lecture}
      />

      <section className="border-b border-border bg-sand/50 py-4 md:py-5" aria-label="Foro académico">
        <Container>
          <PhotoStrip
            items={[
              images.lecture,
              images.studentsCollab,
              images.meeting,
              images.openBook,
            ]}
          />
        </Container>
      </section>
      <section className="py-16 md:py-20">
        <Container>
          <DemoNotice className="mb-10">
            El foro académico es una demostración de interfaz: los hilos son de
            muestra y no hay envío real de mensajes. Para trámites, escriba a la
            Facultad o use los sistemas de la Universidad de Cartagena.
          </DemoNotice>
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <SectionHeader
              kicker="Hilos abiertos (muestra)"
              title="Conversaciones de orientación"
            />
            <Button asChild variant="outline">
              <Link href="/iniciar-sesion">Iniciar sesión (demo)</Link>
            </Button>
          </div>

          {forumThreads.length === 0 ? (
            <div className="mt-10 rounded-xl border border-dashed border-border bg-card p-10 text-center">
              <h2 className="font-serif text-2xl text-navy">Aún no hay hilos publicados</h2>
              <p className="mx-auto mt-3 max-w-lg text-sm text-muted-foreground">
                Cuando la moderación habilite el foro institucional, los temas
                aparecerán aquí. Mientras tanto puede escribir a la Facultad.
              </p>
              <Button asChild className="mt-6 bg-navy text-primary-foreground hover:bg-navy-mid">
                <Link href="/contacto">Ir a contacto</Link>
              </Button>
            </div>
          ) : (
            <ul className="mt-10 divide-y divide-border overflow-hidden rounded-xl border border-border bg-card">
              {forumThreads.map((thread) => (
                <li key={thread.id}>
                  <Link
                    href={`/foro/${thread.id}`}
                    className="flex flex-col gap-2 p-5 transition-colors hover:bg-sand/60 sm:flex-row sm:items-center sm:justify-between"
                  >
                    <div>
                      <p className="text-xs text-muted-foreground">
                        {thread.role} · {thread.author} · {thread.dateLabel}
                      </p>
                      <h2 className="mt-1 font-serif text-xl text-navy">{thread.title}</h2>
                      <p className="mt-1 text-sm text-muted-foreground">{thread.excerpt}</p>
                      <ul className="mt-2 flex flex-wrap gap-2">
                        {thread.tags.map((tag) => (
                          <li
                            key={tag}
                            className="rounded-full bg-secondary px-2 py-0.5 text-xs font-medium text-navy"
                          >
                            {tag}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <p className="shrink-0 text-sm font-semibold text-blue">
                      {thread.replies}{" "}
                      {thread.replies === 1 ? "respuesta" : "respuestas"}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </Container>
      </section>
    </main>
  );
}
