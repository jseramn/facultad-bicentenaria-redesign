import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { PageHero, Container, SectionHeader, PhotoStrip } from "@/components/page-shell";
import { images } from "@/content/images";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Datos de contacto reales de la Facultad de Derecho y Ciencias Políticas de la Universidad de Cartagena.",
};

export default function ContactoPage() {
  return (
    <main id="contenido-principal">
      <PageHero
        kicker="Atención"
        title="Hable con la Facultad"
        description="Teléfonos, correos y sede verificados. El formulario de esta página es una interfaz; las solicitudes con efecto administrativo deben ir por los canales de la Universidad."
        image={images.cartagenaBalcony}
      />

      <section className="border-b border-border bg-sand/50 py-4 md:py-5" aria-label="Sede Cartagena">
        <Container>
          <PhotoStrip
            items={[
              images.cartagenaBalcony,
              images.cartagenaPlaza,
              images.cartagenaStreet,
              images.cartagenaDoor,
            ]}
          />
        </Container>
      </section>
      <section className="py-16 md:py-20">
        <Container className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeader kicker="Datos reales" title="Claustro de San Agustín" />
            <address className="mt-6 space-y-3 text-sm leading-relaxed text-navy not-italic">
              <p>
                {site.address.venue}
                <br />
                {site.address.street}
                <br />
                {site.address.district}, {site.address.city}
                <br />
                {site.address.department}, {site.address.country}
              </p>
              <p>
                Conmutador:{" "}
                <a className="underline" href="tel:+573164390360">
                  {site.phones.switchboard}
                </a>
                <br />
                Extensiones de Facultad: {site.phones.facultyExt}
                <br />
                Consultorio jurídico: Ext. {site.phones.consultorioExt}
              </p>
              <p>
                <a className="underline" href={`mailto:${site.emails.derecho}`}>
                  {site.emails.derecho}
                </a>
                <br />
                <a className="underline" href={`mailto:${site.emails.facultad}`}>
                  {site.emails.facultad}
                </a>
                <br />
                <a className="underline" href={`mailto:${site.emails.consultorio}`}>
                  {site.emails.consultorio}
                </a>
              </p>
              <p>
                {site.hours.weekdays}
                <br />
                {site.hours.weekends}
                <br />
                {site.hours.timezone}
              </p>
            </address>
          </div>
          <div>
            <h2 className="font-serif text-2xl text-navy">Escriba desde el sitio</h2>
            <p className="mt-2 mb-6 text-sm text-muted-foreground">
              No adjunte documentos con datos personales de terceros. Para el
              Consultorio solicite turno por la extensión 245.
            </p>
            <ContactForm />
          </div>
        </Container>
      </section>
    </main>
  );
}
