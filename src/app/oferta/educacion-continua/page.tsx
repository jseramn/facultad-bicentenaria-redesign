import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, Container, SectionHeader, PhotoStrip } from "@/components/page-shell";
import { Button } from "@/components/ui/button";
import { diplomados, site } from "@/content/site";
import { images } from "@/content/images";

export const metadata: Metadata = {
  title: "Educación continua",
  description:
    "Diplomados de la Facultad de Derecho con inicio previsto en septiembre de 2026: urbano, corporativo, riesgos y seguros, notariado.",
};

export default function EducacionContinuaPage() {
  return (
    <main id="contenido-principal">
      <PageHero
        kicker="Educación continua"
        title="Actualización para el ejercicio profesional"
        description="Diplomados de muestra con inicio previsto en septiembre de 2026. Cupos, docentes, horarios y valores se confirman con la Facultad; no se publican tarifas no verificadas."
        image={images.teamOffice}
      />

      <section className="border-b border-border bg-sand/50 py-4 md:py-5" aria-label="Ambiente académico">
        <Container>
          <PhotoStrip
            items={[
              images.teamOffice,
              images.meeting,
              images.documents,
              images.studyDesk,
            ]}
          />
        </Container>
      </section>

      <section className="py-16 md:py-20">
        <Container>
          <SectionHeader
            kicker="Cohorte septiembre 2026"
            title="Diplomados anunciados"
            description="Si necesita una cotización o carta de contenido, escriba a fderecho@unicartagena.edu.co. Los cursos virtuales cortos tienen página propia."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {diplomados.map((item) => (
              <article
                key={item.slug}
                className="flex flex-col rounded-sm border border-border bg-card p-6"
              >
                <p className="text-xs font-semibold tracking-[0.16em] text-gold uppercase">
                  Diplomado · {item.start}
                </p>
                <h2 className="mt-3 font-serif text-2xl text-navy">{item.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {item.summary}
                </p>
                <p className="mt-4 text-sm text-navy">
                  Inscripción: consultar con la Facultad. No hay formulario de pago en este sitio.
                </p>
              </article>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button asChild className="bg-gold text-navy hover:bg-gold-bright">
              <Link href="/contacto">Pedir orientación</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/oferta/cursos-virtuales">Cursos virtuales</Link>
            </Button>
            <Button asChild variant="ghost">
              <a href={`mailto:${site.emails.facultad}`}>{site.emails.facultad}</a>
            </Button>
          </div>
        </Container>
      </section>
    </main>
  );
}
