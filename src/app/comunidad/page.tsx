import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero, Container, SectionHeader, PhotoStrip } from "@/components/page-shell";
import { Button } from "@/components/ui/button";
import { images } from "@/content/images";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Comunidad",
  description:
    "Estudiantes, egresados y docentes de la Facultad de Derecho y Ciencias Políticas de la Universidad de Cartagena.",
};

const hubs = [
  {
    title: "Estudiantes",
    image: images.afroStudent,
    text: "Pregrado, práctica en consultorio, foro académico y orientación de trámites. El calendario de clases y las notas viven en los sistemas de la Universidad.",
    links: [
      { href: "/oferta/pregrado", label: "Programa de Derecho" },
      { href: "/consultorio-juridico", label: "Consultorio jurídico" },
      { href: "/foro", label: "Foro académico" },
    ],
  },
  {
    title: "Egresados",
    image: images.afroColleague,
    text: "Red de abogadas y abogados formados en el Claustro. Posgrados, educación continua y encuentros de comunidad. No hay directorio público de diplomas en este sitio.",
    links: [
      { href: "/oferta/posgrados", label: "Posgrados" },
      { href: "/oferta/educacion-continua", label: "Educación continua" },
      { href: "/eventos", label: "Agenda" },
    ],
  },
  {
    title: "Docentes",
    image: images.afroProfessor,
    text: "Cuerpo académico de la Facultad. Convocatorias docentes, investigación y extensión se rigen por la Universidad. Consulte con Decanatura las plazas vigentes.",
    links: [
      { href: "/investigacion", label: "Investigación" },
      { href: "/la-facultad", label: "La Facultad" },
      { href: "/contacto", label: "Contacto" },
    ],
  },
];

export default function ComunidadPage() {
  return (
    <main id="contenido-principal" className="min-w-0 overflow-x-clip">
      <PageHero
        kicker="Comunidad"
        title="Estudiantes, egresados y docentes"
        description="Esta ruta reemplaza el enlace vacío del sitio anterior. Tres puertas de servicio, sin directorios inventados ni cifras de membresía."
        image={images.studentsCampus}
      />

      <section className="border-b border-border bg-sand/50 py-4 md:py-5" aria-label="Comunidad Facultad">
        <Container>
          <PhotoStrip
            items={[
              images.afroStudent,
              images.studentsCampus,
              images.afroProfessor,
              images.communityGather,
            ]}
          />
        </Container>
      </section>
      <section className="py-16 md:py-20">
        <Container>
          <SectionHeader
            kicker="Tres comunidades"
            title="La vida de la Facultad más allá del aula"
            description={`Sede: ${site.address.venue}, ${site.address.city}.`}
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {hubs.map((hub) => (
              <article
                key={hub.title}
                className="flex flex-col overflow-hidden rounded-sm border border-border bg-card"
              >
                <div className="relative h-52">
                  <Image
                    src={hub.image.src}
                    alt={hub.image.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover object-top"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h2 className="font-serif text-2xl text-navy">{hub.title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {hub.text}
                  </p>
                  <ul className="mt-4 space-y-2 text-sm font-semibold text-blue">
                    {hub.links.map((link) => (
                      <li key={link.href}>
                        <Link href={link.href} className="hover:underline">
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
          <Button asChild className="mt-10 bg-gold text-navy hover:bg-gold-bright">
            <Link href="/iniciar-sesion">Acceso de demostración</Link>
          </Button>
        </Container>
      </section>
    </main>
  );
}
