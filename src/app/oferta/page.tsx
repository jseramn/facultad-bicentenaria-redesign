import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero, Container, PhotoStrip } from "@/components/page-shell";
import { Button } from "@/components/ui/button";
import { images } from "@/content/images";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Oferta académica",
  description:
    "Pregrado en Derecho, posgrados, educación continua y cursos virtuales de la Facultad de Derecho y Ciencias Políticas.",
};

const hubs = [
  {
    href: "/oferta/pregrado",
    title: "Pregrado",
    kicker: "SNIES 740",
    text: "Derecho presencial, 160 créditos, diez semestres, jornadas diurna y vespertina. Sedes en Cartagena, Cereté y Magangué.",
    image: images.library,
  },
  {
    href: "/oferta/posgrados",
    title: "Posgrados",
    kicker: "Maestrías y especialización",
    text: "Maestría en Derecho, Maestría en Derecho Penal y Especialización en Derecho Penal. Inscripción en el portal oficial de la UdeC.",
    image: images.studyDesk,
  },
  {
    href: "/oferta/educacion-continua",
    title: "Educación continua",
    kicker: "Diplomados 2026",
    text: "Actualización profesional: derecho urbano, corporativo, riesgos y seguros, notariado y registro.",
    image: images.meeting,
  },
  {
    href: "/oferta/cursos-virtuales",
    title: "Cursos virtuales",
    kicker: "Modalidad a distancia",
    text: "Cursos cortos de competencias jurídicas. Calendario vigente: consultar con la Facultad.",
    image: images.studentsCollab,
  },
];

export default function OfertaPage() {
  return (
    <main id="contenido-principal" className="min-w-0 overflow-x-clip">
      <PageHero
        kicker="Oferta académica"
        title="Un mapa claro de programas"
        description="Cuatro puertas: pregrado, posgrados, educación continua y cursos virtuales. Cada ficha distingue lo verificado de lo que debe consultarse."
        image={images.classroom}
      />

      <section className="border-b border-border bg-sand/50 py-4 md:py-5" aria-label="Vida académica">
        <Container>
          <PhotoStrip
            items={[
              images.library,
              images.lecture,
              images.studentsCollab,
              images.studyDesk,
            ]}
          />
        </Container>
      </section>
      <section className="py-14 md:py-16">
        <Container>
          <div className="mb-8 flex min-w-0 flex-col gap-4 rounded-sm bg-sand p-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-xl text-sm leading-relaxed text-ink/85">
              La admisión la administra la Universidad de Cartagena. Esta sede
              digital orienta; no sustituye convocatorias ni derechos pecuniarios.
            </p>
            <Button asChild className="shrink-0 bg-gold text-navy hover:bg-gold-bright">
              <a href={site.official.admissions} target="_blank" rel="noopener noreferrer">
                Admisiones 2027-1
              </a>
            </Button>
          </div>
          <div className="grid min-w-0 gap-5 md:grid-cols-2">
            {hubs.map((hub) => (
              <Link key={hub.href} href={hub.href} className="group min-w-0">
                <article className="flex h-full min-w-0 flex-col overflow-hidden rounded-sm bg-card ring-1 ring-border transition-colors group-hover:ring-navy/30">
                  <div className="relative h-44">
                    <Image
                      src={hub.image.src}
                      alt={hub.image.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex min-w-0 flex-1 flex-col p-5">
                    <p className="text-xs font-semibold tracking-[0.16em] text-blue uppercase">
                      {hub.kicker}
                    </p>
                    <h2 className="mt-2 font-serif text-3xl text-navy text-balance">
                      {hub.title}
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed text-pretty text-ink/85">
                      {hub.text}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-blue">
                      Abrir ficha
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
