import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero, Container, SectionHeader, PhotoStrip } from "@/components/page-shell";
import { Button } from "@/components/ui/button";
import { images } from "@/content/images";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Investigación",
  description:
    "Investigación de la Facultad de Derecho y Ciencias Políticas. Sin indicadores inventados: consulte líneas y grupos vigentes con la Facultad.",
};

const lineas = [
  {
    title: "Derecho público y justicias del Caribe",
    text: "Constitucional, administrativo y territorial, con atención a la ciudad amurallada, el puerto y los municipios de extensión.",
  },
  {
    title: "Derecho penal, procesal y derechos humanos",
    text: "Campo articulado al posgrado en Derecho Penal y a la práctica del Consultorio. Incluye violencia de género y víctimas.",
  },
  {
    title: "Derecho privado, empresa y ciudad",
    text: "Civil, comercial, laboral y urbano, en diálogo con la economía marítima, portuaria y turística de Cartagena.",
  },
  {
    title: "Teoría jurídica e investigación formativa",
    text: "El pregrado, desde alrededor de 1990, forma en gestión de proyectos (OA3 / RAP3). Eso es un marco curricular, no un inventario de productos.",
  },
];

const grupos = [
  {
    name: "Grupos reconocidos ante Minciencias",
    status: "Listado oficial pendiente de publicación en esta sede",
    text: "Cuando la Facultad entregue el consolidado vigente (nombre, código y clasificación), se publicará aquí con fuente y fecha. No se reproducen contadores en cero ni se inventan artículos anuales.",
  },
  {
    name: "Semilleros de pregrado",
    status: "Convocatoria: consultar con la dirección del programa",
    text: "Espacios de investigación formativa. La inscripción, tutores y líneas activas del semestre en curso no tienen cifras publicadas en este sitio.",
  },
  {
    name: "Proyección con el Consultorio",
    status: "Extensión y aula",
    text: "La práctica jurídica alimenta preguntas de investigación sobre acceso a la justicia, conciliación y violencias. No sustituye un grupo categorizado.",
  },
];

const pasos = [
  "Defina la pregunta con un docente o con la coordinación de investigaciones de la Facultad.",
  "Contraste si existe un grupo o semillero activo: ese dato no se fabrica aquí.",
  "Los productos (artículos, libros, ponencias) se reportan por los sistemas institucionales de la Universidad, no por banners numéricos.",
];

export default function InvestigacionPage() {
  return (
    <main id="contenido-principal" className="min-w-0 overflow-x-clip">
      <PageHero
        kicker="Investigación"
        title="Rigor académico, transparencia de datos"
        description="Landing de investigación con ejes temáticos y canales de consulta. Sin rankings, sin «0 artículos» y sin grupos inventados."
        image={images.research}
      />

      <section className="border-b border-border bg-sand/50 py-4 md:py-5" aria-label="Investigación">
        <Container>
          <PhotoStrip
            items={[
              images.research,
              images.oldBooks,
              images.library,
              images.studyDesk,
            ]}
          />
        </Container>
      </section>

      <section className="py-14 md:py-16">
        <Container className="grid min-w-0 gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="min-w-0">
            <SectionHeader
              kicker="Para qué sirve esta página"
              title="Un mapa, no un tablero de métricas"
              description="La investigación es función misional de la Facultad. Lo que falta es un inventario verificado de grupos. Hasta entonces, publicamos ejes, el canal de consulta y el criterio editorial."
            />
            <ul className="mt-6 space-y-3 text-sm leading-relaxed text-ink/85">
              {pasos.map((paso) => (
                <li key={paso} className="border-l-2 border-gold pl-4">
                  {paso}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative min-h-[260px] overflow-hidden rounded-xl">
            <Image
              src={images.oldBooks.src}
              alt={images.oldBooks.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
          </div>
        </Container>
      </section>

      <section className="bg-sand py-14 md:py-16">
        <Container>
          <SectionHeader
            kicker="Líneas de trabajo (referencia)"
            title="Cuatro ejes para orientar la conversación"
            description="Etiquetas temáticas, no denominaciones oficiales de grupo. Úselas para preguntar a la Facultad cuál está activa."
          />
          <div className="mt-8 grid min-w-0 gap-4 sm:grid-cols-2">
            {lineas.map((linea) => (
              <article key={linea.title} className="rounded-xl bg-card p-6 ring-1 ring-border">
                <h2 className="font-serif text-xl text-navy text-balance">{linea.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-ink/85">{linea.text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-14 md:py-16">
        <Container>
          <SectionHeader
            kicker="Grupos y semilleros"
            title="Placeholders honestos"
            description="Ninguna de estas fichas afirma clasificación, número de integrantes ni producción anual."
          />
          <div className="mt-8 grid min-w-0 gap-5 lg:grid-cols-3">
            {grupos.map((grupo) => (
              <article key={grupo.name} className="flex min-w-0 flex-col rounded-xl border border-border bg-card p-6">
                <p className="text-xs font-semibold tracking-[0.14em] text-blue uppercase">
                  {grupo.status}
                </p>
                <h2 className="mt-3 font-serif text-xl text-navy text-balance">{grupo.name}</h2>
                <p className="mt-3 text-sm leading-relaxed text-ink/85">{grupo.text}</p>
              </article>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button asChild className="bg-gold text-navy hover:bg-gold-bright">
              <a
                href={`mailto:${site.emails.facultad}?subject=Consulta%20investigacion%20Facultad%20de%20Derecho`}
              >
                Consultar con la Facultad
              </a>
            </Button>
            <Button asChild variant="outline">
              <Link href="/contacto">Formulario de contacto</Link>
            </Button>
            <Button asChild variant="ghost">
              <Link href="/oferta/pregrado">Ver énfasis investigativo del pregrado</Link>
            </Button>
          </div>
        </Container>
      </section>
    </main>
  );
}
