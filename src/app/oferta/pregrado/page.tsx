import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, Container, SectionHeader, PhotoStrip } from "@/components/page-shell";
import { Button } from "@/components/ui/button";
import { images } from "@/content/images";
import { pregrado, site } from "@/content/site";

export const metadata: Metadata = {
  title: "Pregrado en Derecho",
  description:
    "Programa de Derecho SNIES 740 de la Universidad de Cartagena: 160 créditos, presencial, jornadas diurna y vespertina.",
};

const facts = [
  { label: "Nombre", value: pregrado.name },
  { label: "Título", value: pregrado.title },
  { label: "Nivel", value: pregrado.level },
  { label: "SNIES", value: pregrado.snies },
  { label: "Créditos", value: String(pregrado.credits) },
  { label: "Semestres", value: String(pregrado.semesters) },
  { label: "Modalidad", value: pregrado.modality },
  { label: "Jornada", value: pregrado.schedules },
  { label: "Registro / acreditación", value: pregrado.qualifiedRegistry },
];

export default function PregradoPage() {
  return (
    <main id="contenido-principal" className="min-w-0 overflow-x-clip">
      <PageHero
        kicker="Pregrado"
        title="Programa de Derecho"
        description="Formación jurídica y humanística con énfasis investigativo, práctica en consultorio y mirada caribeña sobre el derecho."
        image={images.library}
      />

      <section className="border-b border-border bg-sand/50 py-4 md:py-5" aria-label="Ambiente académico">
        <Container>
          <PhotoStrip
            items={[
              images.library,
              images.classroom,
              images.studentsCollab,
              images.openBook,
            ]}
          />
        </Container>
      </section>


      <section className="py-16 md:py-20">
        <Container>
          <SectionHeader
            kicker="Ficha del programa"
            title="Datos verificados en fuentes oficiales"
            description={pregrado.campuses}
          />
          <dl className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {facts.map((fact) => (
              <div key={fact.label} className="rounded-sm border border-border bg-card p-5">
                <dt className="text-xs font-semibold tracking-[0.14em] text-blue uppercase">
                  {fact.label}
                </dt>
                <dd className="mt-2 font-serif text-lg text-navy">{fact.value}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-6 text-sm text-muted-foreground">{pregrado.tuitionNote}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild className="bg-gold text-navy hover:bg-gold-bright">
              <a href={site.official.admissions} target="_blank" rel="noopener noreferrer">
                Admisiones 2027-1
              </a>
            </Button>
            <Button asChild variant="outline">
              <a href={pregrado.studyPlanUrl} target="_blank" rel="noopener noreferrer">
                Plan de estudios (PDF institucional)
              </a>
            </Button>
            <Button asChild variant="ghost">
              <Link href="/oferta/posgrados">Ver posgrados</Link>
            </Button>
          </div>
        </Container>
      </section>

      <section className="bg-sand py-16 md:py-20">
        <Container className="grid gap-8 md:grid-cols-2">
          <article>
            <h2 className="font-serif text-2xl text-navy">Misión del programa</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">{pregrado.mission}</p>
          </article>
          <article>
            <h2 className="font-serif text-2xl text-navy">Visión del programa</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">{pregrado.vision}</p>
          </article>
        </Container>
      </section>

      <section className="py-16 md:py-20">
        <Container>
          <SectionHeader kicker="Aprendizaje" title="Objetivos y resultados" />
          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            <div>
              <h3 className="font-serif text-xl text-navy">Objetivos de aprendizaje</h3>
              <ul className="mt-4 space-y-4">
                {pregrado.learningObjectives.map((item) => (
                  <li key={item.id} className="text-sm leading-relaxed text-muted-foreground">
                    <span className="font-semibold text-navy">{item.id}. </span>
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy">Resultados de aprendizaje</h3>
              <ul className="mt-4 space-y-4">
                {pregrado.learningOutcomes.map((item) => (
                  <li key={item.id} className="text-sm leading-relaxed text-muted-foreground">
                    <span className="font-semibold text-navy">{item.id}. </span>
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-border py-16 md:py-20">
        <Container className="space-y-10">
          <SectionHeader kicker="Perfiles" title="Aspirante, egreso y ejercicio" />
          <div className="grid gap-8 lg:grid-cols-3">
            <article>
              <h3 className="font-serif text-xl text-navy">Aspirante</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {pregrado.applicantProfile}
              </p>
            </article>
            <article>
              <h3 className="font-serif text-xl text-navy">Egreso</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {pregrado.graduateProfile}
              </p>
            </article>
            <article>
              <h3 className="font-serif text-xl text-navy">Ocupacional</h3>
              <ul className="mt-3 list-disc space-y-2 pl-4 text-sm text-muted-foreground">
                {pregrado.occupationalProfile.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>
        </Container>
      </section>
    </main>
  );
}
