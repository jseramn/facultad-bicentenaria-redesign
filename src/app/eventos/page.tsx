import type { Metadata } from "next";
import { PageHero, Container, SectionHeader, PhotoStrip } from "@/components/page-shell";
import { events, groupEventsByMonth } from "@/content/events";
import { images } from "@/content/images";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Eventos",
  description:
    "Agenda de referencia de la Facultad de Derecho y Ciencias Políticas. El mes del encabezado coincide con las fichas listadas.",
};

const grouped = groupEventsByMonth(events);

export default function EventosPage() {
  return (
    <main id="contenido-principal" className="min-w-0 overflow-x-clip">
      <PageHero
        kicker="Agenda"
        title="Eventos de la Facultad"
        description="Listado agrupado por el mes real de cada actividad. Si el título dice septiembre, las fichas de ese bloque son de septiembre — no de enero."
        image={images.graduation}
      />

      <section className="border-b border-border bg-sand/50 py-4 md:py-5" aria-label="Agenda académica">
        <Container>
          <PhotoStrip
            items={[
              images.graduation,
              images.lecture,
              images.studentsCampus,
              images.teamOffice,
            ]}
          />
        </Container>
      </section>
      <section className="py-14 md:py-16">
        <Container>
          <SectionHeader
            kicker="2026"
            title="Agenda por mes"
            description={`Solo aparecen los meses que tienen actividades en esta muestra. Calendario institucional: ${site.official.calendar.replace("https://", "")}.`}
          />

          <nav aria-label="Meses con eventos" className="mt-8 flex min-w-0 flex-wrap gap-2">
            {grouped.map((group) => (
              <a
                key={group.key}
                href={`#${group.key}`}
                className="rounded-full border border-navy/20 bg-card px-3 py-1.5 text-sm font-semibold text-navy hover:bg-sand"
              >
                {group.label}
              </a>
            ))}
          </nav>

          <div className="mt-10 space-y-12">
            {grouped.map((group) => (
              <section key={group.key} id={group.key} className="scroll-mt-28">
                <h2 className="font-serif text-2xl text-navy md:text-3xl">{group.label}</h2>
                <p className="mt-1 text-sm text-ink/70">
                  {group.items.length === 1
                    ? "Una actividad en este mes."
                    : `${group.items.length} actividades en este mes.`}
                </p>
                <ol className="mt-5 space-y-4">
                  {group.items.map((event) => (
                    <li
                      key={event.slug}
                      id={event.slug}
                      className="grid min-w-0 gap-4 rounded-xl border border-border bg-card p-5 md:grid-cols-[9.5rem_1fr]"
                    >
                      <div className="flex flex-col items-start justify-center rounded-lg bg-navy px-4 py-3 text-primary-foreground md:items-center md:text-center">
                        <span className="text-xs tracking-[0.14em] uppercase">{event.kind}</span>
                        <span className="mt-1 font-serif text-lg leading-tight">{event.dateLabel}</span>
                      </div>
                      <div className="min-w-0">
                        <h3 className="font-serif text-2xl text-navy text-balance">{event.title}</h3>
                        <p className="mt-1 text-sm text-blue">
                          {event.time} · {event.place}
                        </p>
                        <p className="mt-3 text-sm leading-relaxed text-ink/85">{event.summary}</p>
                        <p className="mt-2 text-sm leading-relaxed text-ink/80">{event.detail}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </section>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
