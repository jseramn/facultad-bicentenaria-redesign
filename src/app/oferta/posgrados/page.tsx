import type { Metadata } from "next";
import { PageHero, Container, SectionHeader, PhotoStrip } from "@/components/page-shell";
import { Button } from "@/components/ui/button";
import { images } from "@/content/images";
import { posgrados, site } from "@/content/site";

export const metadata: Metadata = {
  title: "Posgrados",
  description:
    "Maestría en Derecho, Maestría en Derecho Penal y Especialización en Derecho Penal de la Universidad de Cartagena.",
};

export default function PosgradosPage() {
  return (
    <main id="contenido-principal" className="min-w-0 overflow-x-clip">
      <PageHero
        kicker="Posgrados"
        title="Profundice el oficio jurídico"
        description="La inscripción, los pagos y las entrevistas se realizan en los flujos oficiales de posgrado de la Universidad de Cartagena. Aquí solo se resume lo publicado en ficha."
        image={images.lecture}
      />

      <section className="border-b border-border bg-sand/50 py-4 md:py-5" aria-label="Ambiente académico">
        <Container>
          <PhotoStrip
            items={[
              images.lecture,
              images.studyDesk,
              images.oldBooks,
              images.research,
            ]}
          />
        </Container>
      </section>

      <section className="py-16 md:py-20">
        <Container>
          <SectionHeader
            kicker="Oferta publicada"
            title="Tres programas adscritos a la Facultad"
            description="Si un dato (SNIES, créditos, matrícula) no aparece, no está inventado: debe consultarse en la ficha institucional o con la coordinación del programa."
          />
          <div className="mt-10 space-y-6">
            {posgrados.map((program) => (
              <article
                key={program.slug}
                className="rounded-sm border border-border bg-card p-6 md:p-8"
              >
                <p className="text-xs font-semibold tracking-[0.16em] text-gold uppercase">
                  {program.kind} · {program.status}
                </p>
                <h2 className="mt-2 font-serif text-3xl text-navy">{program.name}</h2>
                <p className="mt-3 max-w-3xl text-muted-foreground">{program.summary}</p>
                {program.facts.length > 0 ? (
                  <dl className="mt-6 grid gap-4 sm:grid-cols-2">
                    {program.facts.map((fact) => (
                      <div key={fact.label}>
                        <dt className="text-xs font-semibold tracking-wide text-blue uppercase">
                          {fact.label}
                        </dt>
                        <dd className="mt-1 text-sm text-navy">{fact.value}</dd>
                      </div>
                    ))}
                  </dl>
                ) : (
                  <p className="mt-4 text-sm text-muted-foreground">
                    Consultar con la facultad y con la ficha oficial del programa
                    para SNIES, créditos, jornada y derechos pecuniarios.
                  </p>
                )}
                <Button asChild className="mt-6 bg-navy text-primary-foreground hover:bg-navy-mid">
                  <a href={program.href} target="_blank" rel="noopener noreferrer">
                    Ir a la ficha oficial UdeC
                  </a>
                </Button>
              </article>
            ))}
          </div>
          <p className="mt-8 text-sm text-muted-foreground">
            Portal de posgrados:{" "}
            <a
              className="text-blue underline"
              href={site.official.posgrados}
              target="_blank"
              rel="noopener noreferrer"
            >
              unicartagena.edu.co — oferta de posgrados
            </a>
            .
          </p>
        </Container>
      </section>
    </main>
  );
}
