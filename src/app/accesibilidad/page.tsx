import type { Metadata } from "next";
import { PageHero, Container, SectionHeader, PhotoStrip } from "@/components/page-shell";
import { images } from "@/content/images";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Accesibilidad",
  description:
    "Declaración de accesibilidad WCAG 2.1 AA y uso de la barra de tamaño de texto y contraste de la Facultad Bicentenaria.",
};

export default function AccesibilidadPage() {
  return (
    <main id="contenido-principal">
      <PageHero
        kicker="Accesibilidad"
        title="Un sitio público debe poder usarse"
        description="Esta sede digital busca alinearse con WCAG 2.1 nivel AA y con las prácticas de sitios institucionales colombianos de 2026."
        image={images.openBook}
      />

      <section className="border-b border-border bg-sand/50 py-4 md:py-5" aria-label="Accesibilidad">
        <Container>
          <PhotoStrip
            items={[
              images.openBook,
              images.library,
              images.studyDesk,
              images.documents,
            ]}
          />
        </Container>
      </section>
      <section className="py-16 md:py-20">
        <Container className="max-w-3xl space-y-10">
          <SectionHeader
            kicker="Declaración"
            title="Compromiso"
            description="La Facultad de Derecho y Ciencias Políticas de la Universidad de Cartagena publica información de interés general. El diseño prioriza HTML semántico, orden de lectura, contraste y operación por teclado."
          />
          <div>
            <h2 className="font-serif text-2xl text-navy">Qué incluye este sitio</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted-foreground">
              <li>Enlace para saltar al contenido principal.</li>
              <li>Regiones de encabezado, navegación, contenido principal y pie.</li>
              <li>Indicador de foco visible en enlaces, botones y campos.</li>
              <li>Textos alternativos en español para la fotografía de stock.</li>
              <li>Barra de accesibilidad: tamaño de texto (A / A+ / A++) y contraste alto.</li>
              <li>Respeto a «reducir movimiento» del sistema operativo.</li>
              <li>Mapa del sitio en <code className="text-navy">/sitemap.xml</code>.</li>
            </ul>
          </div>
          <div>
            <h2 className="font-serif text-2xl text-navy">Cómo usar la barra</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              En la franja superior, junto a Transparencia y Contacto, están los
              controles. <strong className="text-navy">A</strong> restablece el tamaño
              habitual; <strong className="text-navy">A+</strong> y{" "}
              <strong className="text-navy">A++</strong> aumentan el texto de toda la
              interfaz. <strong className="text-navy">Contraste</strong> aplica un tema
              de alto contraste (fondo blanco y texto negro).{" "}
              <strong className="text-navy">Restablecer</strong> vuelve a la
              presentación por defecto. Las preferencias se guardan en este
              navegador (almacenamiento local).
            </p>
          </div>
          <div>
            <h2 className="font-serif text-2xl text-navy">Limitaciones conocidas</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Las fotografías provienen de Unsplash y Pexels, no del archivo
              histórico de la Universidad; son ilustrativas. El foro y el inicio de
              sesión son prototipos. Los PDF del plan de estudios y las fichas de
              posgrado viven en dominios de la UdeC: su accesibilidad depende de
              esos documentos.
            </p>
          </div>
          <div>
            <h2 className="font-serif text-2xl text-navy">Reportar una barrera</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Escriba a{" "}
              <a className="text-blue underline" href={`mailto:${site.emails.facultad}`}>
                {site.emails.facultad}
              </a>{" "}
              indicando la página, el navegador y la dificultad. Teléfono:{" "}
              {site.phones.switchboard}, extensiones {site.phones.facultyExt}.
            </p>
          </div>
        </Container>
      </section>
    </main>
  );
}
