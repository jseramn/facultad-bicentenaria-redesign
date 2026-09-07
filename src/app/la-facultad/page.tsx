import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero, Container, SectionHeader, PhotoStrip } from "@/components/page-shell";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { facultyCopy, site } from "@/content/site";
import { images } from "@/content/images";

export const metadata: Metadata = {
  title: "La Facultad",
  description:
    "Historia, misión, visión 2027, sede en el Claustro de San Agustín y trámites frecuentes de la Facultad de Derecho y Ciencias Políticas.",
};

const timeline = [
  {
    year: "1827",
    title: "Fundación republicana",
    text: "La Facultad nace con la Universidad de Cartagena, en el proyecto impulsado por Simón Bolívar y Francisco de Paula Santander.",
  },
  {
    year: "1958",
    title: "Reorganización de estudios",
    text: "Bajo el rectorado de Juan Ignacio Gómez Naar y el decanato de Mario Alario Di Filippo se crean departamentos de preespecialización.",
  },
  {
    year: "1990",
    title: "Énfasis investigativo",
    text: "El currículo del pregrado incorpora de manera más nítida la investigación formativa que hoy orienta objetivos y resultados de aprendizaje.",
  },
  {
    year: "2027",
    title: "Bicentenario UdeC",
    text: "La Facultad se alinea con la visión institucional de consolidar posgrados y una investigación que beneficie al Caribe. Las metas numéricas se consultan con Decanatura.",
  },
];

export default function LaFacultadPage() {
  return (
    <main id="contenido-principal" className="min-w-0 overflow-x-clip">
      <PageHero
        kicker="La Facultad"
        title="Casi dos siglos formando juristas en Cartagena"
        description="Unidad académica fundacional de la Universidad de Cartagena, con sede en el Claustro de San Agustín, en el corazón del Centro Histórico."
        image={images.cartagenaWalls}
      />

      <section className="border-y border-border bg-sand/60 py-4 md:py-5" aria-label="Cartagena y el Claustro">
        <Container>
          <PhotoStrip
            items={[
              images.cartagenaStreet,
              images.cartagenaBalcony,
              images.cartagenaDoor,
              images.cartagenaDetail,
            ]}
          />
        </Container>
      </section>

      <section className="py-14 md:py-16">
        <Container className="grid min-w-0 gap-10 lg:grid-cols-2">
          <div className="min-w-0">
            <SectionHeader kicker="Historia" title="Desde 1827" />
            <p className="mt-6 text-lg leading-relaxed text-navy">{facultyCopy.historyLead}</p>
            {facultyCopy.historyBody.map((paragraph) => (
              <p
                key={paragraph.slice(0, 40)}
                className="mt-4 leading-relaxed text-ink/85"
              >
                {paragraph}
              </p>
            ))}
          </div>
          <div className="relative min-h-[320px] overflow-hidden rounded-sm">
            <Image
              src={images.cartagenaColor.src}
              alt={images.cartagenaColor.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </Container>
      </section>

      <section className="bg-navy py-14 text-primary-foreground md:py-16">
        <Container>
          <p className="text-xs font-semibold tracking-[0.2em] text-gold-bright uppercase">
            Línea de tiempo
          </p>
          <h2 className="mt-2 font-serif text-3xl md:text-4xl">Hitos verificados</h2>
          <ol className="mt-8 grid min-w-0 gap-5 md:grid-cols-2 lg:grid-cols-4">
            {timeline.map((item) => (
              <li key={item.year} className="border-t border-gold pt-4">
                <p className="font-serif text-2xl text-gold-bright">{item.year}</p>
                <h3 className="mt-2 font-serif text-xl">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-primary-foreground/85">
                  {item.text}
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="bg-sand py-14 md:py-16">
        <Container className="grid min-w-0 gap-8 md:grid-cols-2">
          <article className="rounded-sm bg-card p-8 ring-1 ring-border">
            <p className="text-xs font-semibold tracking-[0.2em] text-blue uppercase">Misión</p>
            <h2 className="mt-3 font-serif text-2xl text-navy">Formar con rigor y sentido público</h2>
            <p className="mt-4 leading-relaxed text-ink/85">{facultyCopy.facultyMission}</p>
          </article>
          <article className="rounded-sm bg-card p-8 ring-1 ring-border">
            <p className="text-xs font-semibold tracking-[0.2em] text-blue uppercase">
              Visión 2027
            </p>
            <h2 className="mt-3 font-serif text-2xl text-navy">
              Bicentenario universitario, facultad de posgrados y territorio
            </h2>
            <p className="mt-4 leading-relaxed text-ink/85">{facultyCopy.vision2027}</p>
          </article>
        </Container>
      </section>

      <section className="py-14 md:py-16">
        <Container className="grid min-w-0 gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="min-w-0">
            <SectionHeader
              kicker="Sede"
              title="Claustro de San Agustín"
              description={`${site.address.street}, ${site.address.district}, ${site.address.city}. El claustro es el campus histórico de la Universidad y la casa de la Facultad.`}
            />
            <ul className="mt-6 space-y-2 text-sm text-ink/85">
              <li>Teléfono: {site.phones.switchboard}, extensiones {site.phones.facultyExt}</li>
              <li>Correo de la Facultad: {site.emails.facultad}</li>
              <li>Correo del programa: {site.emails.derecho}</li>
              <li>{site.hours.weekdays}</li>
              <li>{site.hours.timezone}</li>
            </ul>
            <Button asChild className="mt-6 bg-navy text-primary-foreground hover:bg-navy-mid">
              <Link href="/contacto">Cómo llegar y escribir</Link>
            </Button>
          </div>
          <div className="relative min-h-[260px] overflow-hidden rounded-sm">
            <Image
              src={images.heroCartagena.src}
              alt={images.heroCartagena.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
        </Container>
      </section>

      <section className="border-t border-border py-14 md:py-16">
        <Container>
          <SectionHeader
            kicker="Trámites frecuentes"
            title="Orientación, no ventanilla virtual"
            description="Los efectos administrativos se surten en los sistemas de la Universidad. Esta guía indica el canal correcto."
          />
          <Accordion
            type="single"
            collapsible
            className="mt-8 rounded-sm border border-border bg-card px-4"
          >
            {facultyCopy.tramites.map((item) => (
              <AccordionItem key={item.title} value={item.title}>
                <AccordionTrigger className="font-serif text-lg text-navy">
                  {item.title}
                </AccordionTrigger>
                <AccordionContent className="text-ink/85">
                  {item.body}{" "}
                  {item.title === "Admisión a pregrado" ? (
                    <Link href={site.official.applicants} className="text-blue underline">
                      Portal de aspirantes
                    </Link>
                  ) : null}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Container>
      </section>
    </main>
  );
}
