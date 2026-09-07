import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, Container, SectionHeader, PhotoStrip } from "@/components/page-shell";
import { Button } from "@/components/ui/button";
import { images } from "@/content/images";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Cursos virtuales",
  description:
    "Cursos cortos a distancia de la Facultad de Derecho y Ciencias Políticas. Calendario vigente: consultar con la Facultad.",
};

export default function CursosVirtualesPage() {
  return (
    <main id="contenido-principal">
      <PageHero
        kicker="Cursos virtuales"
        title="Inmersiones cortas, a distancia"
        description="La Facultad anuncia cursos virtuales de actualización jurídica. Este sitio no reproduce catálogos caducados ni inventa fechas de apertura."
        image={images.studentsCollab}
      />

      <section className="border-b border-border bg-sand/50 py-4 md:py-5" aria-label="Ambiente académico">
        <Container>
          <PhotoStrip
            items={[
              images.studentsCollab,
              images.lecture,
              images.studyDesk,
              images.openBook,
            ]}
          />
        </Container>
      </section>

      <section className="py-16 md:py-20">
        <Container>
          <SectionHeader
            kicker="Estado de la oferta"
            title="Consultar cohorte vigente"
            description="Cuando un curso abre inscripción, se publicará aquí el nombre, la duración y el canal de matrícula. Mientras tanto, use Educación continua o el correo de la Facultad."
          />
          <div className="mt-10 rounded-sm border border-dashed border-border bg-card p-8">
            <h2 className="font-serif text-2xl text-navy">Sin cohorte publicada en este momento</h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              No hay un listado oficial de cursos virtuales con fechas cerradas para
              mostrar. Evitamos rellenar esta página con módulos genéricos o precios
              inventados. Si ya recibió un afiche institucional, contraste el dato con{" "}
              {site.emails.facultad}.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild className="bg-navy text-primary-foreground hover:bg-navy-mid">
                <Link href="/oferta/educacion-continua">Ver diplomados presenciales de muestra</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/contacto">Contacto</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
