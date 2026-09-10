import type { Metadata } from "next";
import Link from "next/link";
import { CookiePreferencesCard } from "@/components/cookie-consent-ui";
import { LegalPage, LegalSection } from "@/components/legal-page";
import { images } from "@/content/images";
import { legal } from "@/content/legal";

export const metadata: Metadata = {
  title: "Política de cookies",
  description:
    "Tipos de cookies y almacenamiento local, conservación y forma de revocar el consentimiento en esta sede digital.",
};

export default function PoliticaCookiesPage() {
  return (
    <LegalPage
      kicker="Cookies y tecnologías similares"
      title="Política de cookies"
      description="Información sobre cookies necesarias, preferencias y analíticas, de acuerdo con la Ley 1581 de 2012 y los lineamientos MinTIC para sedes electrónicas. No se inventan proveedores de medición."
      image={images.library}
    >
      <p className="rounded-sm border border-gold/40 bg-gold/10 px-4 py-3 text-sm leading-relaxed text-navy">
        {legal.prototypeScope} Esta política se publica junto a la{" "}
        <Link className="underline underline-offset-4" href="/politica-de-privacidad">
          Política de tratamiento de datos personales
        </Link>
        . Última actualización: {legal.lastUpdated}.
      </p>

      <CookiePreferencesCard />

      <LegalSection title="1. Qué son las cookies y el almacenamiento local">
        <p>
          Las cookies son archivos que el sitio o un tercero puede guardar en
          el navegador. El almacenamiento local (localStorage) cumple una
          función similar para preferencias. En Colombia, cuando estas
          tecnologías suponen tratamiento de datos personales, aplican la Ley
          1581 de 2012 y, para sedes electrónicas de sujetos obligados, los
          anexos de la Resolución MinTIC 2893 de 2020: consentimiento previo,
          expreso e informado por categoría; por defecto, solo lo estrictamente
          necesario; mecanismo para aceptar, denegar o revocar.
        </p>
      </LegalSection>

      <LegalSection title="2. Auditoría de lo que este sitio usa hoy">
        <p>
          Revisión del código de este prototipo (septiembre de 2026):
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            No hay middleware de Next.js que fije cookies de sesión. No hay
            scripts de Google Analytics, Meta, Hotjar, PostHog ni otro medidor
            de terceros.
          </li>
          <li>
            Next.js puede emitir identificadores técnicos propios del
            despliegue (por ejemplo, en entornos de vista previa). Este
            prototipo no configura cookies de analítica de aplicación.
          </li>
          <li>
            Almacenamiento local de accesibilidad:{" "}
            <code className="text-navy">{legal.storageKeys.fontSize}</code> y{" "}
            <code className="text-navy">{legal.storageKeys.highContrast}</code>
            . Son preferencias funcionales exigidas para usar el sitio
            (Resolución MinTIC 1519 de 2020) y se tratan como estrictamente
            necesarias, no como analítica.
          </li>
          <li>
            Consentimiento: localStorage y cookie de primer partido{" "}
            <code className="text-navy">{legal.storageKeys.cookieConsent}</code>
            , con marca de tiempo, para recordar aceptar, rechazar o
            configurar.
          </li>
          <li>
            Las fotografías se cargan desde CDN de Unsplash y Pexels. Este
            sitio no instala sus píxeles de medición; la solicitud de la
            imagen es un recurso estático de terceros. En producción, la
            Universidad puede alojar las imágenes en dominio propio.
          </li>
          <li>
            Las fuentes tipográficas se sirven con <code className="text-navy">next/font</code>{" "}
            (archivos del propio sitio), no mediante una hoja de Google Fonts
            en el navegador del visitante.
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="3. Categorías">
        <p>
          <strong className="text-navy">Necesarias.</strong> Siempre activas.
          Permiten mostrar el sitio, guardar esta decisión y aplicar
          accesibilidad. Conservación: hasta un (1) año para el registro de
          consentimiento, o hasta que el titular lo borre; las preferencias de
          accesibilidad permanecen en el navegador hasta que se restablezcan o
          se limpie el almacenamiento.
        </p>
        <p>
          <strong className="text-navy">Preferencias.</strong> Ajustes
          opcionales de interfaz que no sean imprescindibles. Hoy no hay
          cookies adicionales en esta categoría. Si se aceptan, no se carga
          tecnología extra mientras no exista un uso real. Conservación
          prevista: hasta un (1) año, sujeta a revocación.
        </p>
        <p>
          <strong className="text-navy">Analíticas.</strong> Medición de visitas
          y uso. No hay proveedor contratado ni script cargado. Aceptar esta
          categoría deja constancia de la autorización; no activa un medidor
          inexistente. Cuando la Universidad contrate uno, deberá nombrarlo
          aquí, indicar quién lo gestiona, la finalidad, la conservación y no
          cargarlo hasta un nuevo consentimiento si cambia el tratamiento.
        </p>
      </LegalSection>

      <LegalSection title="4. Cómo gestionar y revocar">
        <p>
          Use el aviso de primera visita (Aceptar, Rechazar no esenciales,
          Configurar) o los botones de esta página. Revocar borra el registro
          de consentimiento en este navegador y vuelve a mostrar el aviso. También
          puede borrar cookies y sitio de su navegador.
        </p>
        <p>
          El detalle del tratamiento de datos personales está en la{" "}
          <Link className="text-blue underline" href="/politica-de-privacidad">
            política de privacidad
          </Link>
          . Canal de la Facultad: los correos y teléfonos publicados en{" "}
          <Link className="text-blue underline" href="/contacto">
            Contacto
          </Link>
          .
        </p>
      </LegalSection>

      <LegalSection title="5. Vigencia">
        <p>
          Texto vigente desde el {legal.lastUpdated}. Si se incorpora un
          proveedor de analítica o cambian las cookies, se actualizará esta
          página y se pedirá una nueva decisión cuando el cambio deje sin
          efecto el consentimiento anterior.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
