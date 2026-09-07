import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero, Container, SectionHeader, PhotoStrip } from "@/components/page-shell";
import { Button } from "@/components/ui/button";
import { consultorio, site } from "@/content/site";
import { images } from "@/content/images";

export const metadata: Metadata = {
  title: "Consultorio jurídico",
  description:
    "Consultorio Jurídico Antenor Boza Avendaño y Centro de Conciliación: asesoría gratuita y práctica supervisada.",
};

const pasos = [
  {
    title: "Solicite turno",
    text: "Acuda a la sede Centro o Escallón Villa, o llame a la extensión 245. No se califican casos por este sitio web.",
  },
  {
    title: "Atención supervisada",
    text: "Estudiantes de últimos semestres, con docentes, prestan orientación y, cuando hay competencia, representación.",
  },
  {
    title: "Conciliación",
    text: "El Centro de Conciliación tramita materias civil, de familia y penal querellable, según la Ley 2220 de 2022.",
  },
];

export default function ConsultorioPage() {
  return (
    <main id="contenido-principal" className="min-w-0 overflow-x-clip">
      <PageHero
        kicker="Proyección social"
        title={consultorio.name}
        description="Servicio gratuito de orientación jurídica y conciliación, con estudiantes de últimos semestres y docentes de la Facultad."
        image={images.counsel}
      />

      <section className="py-14 md:py-16">
        <Container className="grid min-w-0 gap-10 lg:grid-cols-2">
          <div className="min-w-0">
            <SectionHeader kicker="Servicio social" title="Acceso a la justicia en el Caribe" />
            <p className="mt-6 leading-relaxed text-ink/85">{consultorio.mission}</p>
            <p className="mt-4 leading-relaxed text-ink/85">{consultorio.vision}</p>
            <p className="mt-4 text-sm text-navy">{consultorio.note}</p>
          </div>
          <div className="relative min-h-[280px] overflow-hidden rounded-sm">
            <Image
              src={images.documents.src}
              alt={images.documents.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </Container>
      </section>

      <section className="bg-sand py-14 md:py-16">
        <Container>
          <SectionHeader kicker="Cómo funciona" title="Tres pasos, sin intermediarios digitales" />
          <ol className="mt-8 grid min-w-0 gap-4 md:grid-cols-3">
            {pasos.map((paso, index) => (
              <li key={paso.title} className="rounded-sm bg-card p-5 ring-1 ring-border">
                <p className="font-serif text-3xl text-navy">{String(index + 1).padStart(2, "0")}</p>
                <h2 className="mt-2 font-serif text-xl text-navy">{paso.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-ink/85">{paso.text}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="py-14 md:py-16">
        <Container>
          <SectionHeader kicker="Áreas" title="Materias de atención" />
          <ul className="mt-8 grid min-w-0 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {consultorio.areas.map((area) => (
              <li
                key={area}
                className="rounded-sm border border-border bg-card px-4 py-3 text-sm font-medium text-navy"
              >
                {area}
              </li>
            ))}
          </ul>
          <p className="mt-6 max-w-3xl text-sm leading-relaxed text-ink/85">
            {consultorio.conciliation}
          </p>
        </Container>
      </section>


      <section className="bg-sand/70 py-4 md:py-5" aria-label="Servicio y comunidad">
        <Container>
          <PhotoStrip
            items={[
              images.documents,
              images.communityHands,
              images.meeting,
              images.openBook,
            ]}
          />
        </Container>
      </section>

      <section className="border-t border-border py-14 md:py-16">
        <Container className="grid min-w-0 gap-8 md:grid-cols-2">
          {consultorio.seats.map((seat) => (
            <article key={seat.name} className="rounded-sm border border-border bg-card p-6">
              <h2 className="font-serif text-2xl text-navy">{seat.name}</h2>
              <p className="mt-3 text-sm leading-relaxed text-ink/85">{seat.detail}</p>
            </article>
          ))}
          <article className="relative overflow-hidden rounded-sm md:col-span-2">
            <Image
              src={images.communityHands.src}
              alt={images.communityHands.alt}
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div className="relative bg-navy/82 p-6 text-primary-foreground md:p-8">
              <h2 className="font-serif text-2xl">Contacto del Consultorio</h2>
              <ul className="mt-4 space-y-2 text-sm text-primary-foreground/90">
                <li>Conmutador: {site.phones.switchboard}, extensión {site.phones.consultorioExt}</li>
                <li>
                  Correo:{" "}
                  <a className="underline" href={`mailto:${site.emails.consultorio}`}>
                    {site.emails.consultorio}
                  </a>
                </li>
                <li>Facultad: {site.emails.facultad}</li>
              </ul>
              <p className="mt-4 max-w-2xl text-sm text-primary-foreground/80">
                Este canal no califica casos por internet ni recibe expedientes completos.
                Solicite turno en sede o por los medios oficiales.
              </p>
              <Button asChild className="mt-6 bg-gold text-navy hover:bg-gold-bright">
                <Link href="/contacto">Escribir a la Facultad</Link>
              </Button>
            </div>
          </article>
        </Container>
      </section>
    </main>
  );
}
