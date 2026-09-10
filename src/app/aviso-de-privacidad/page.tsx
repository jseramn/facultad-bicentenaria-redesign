import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage, LegalSection } from "@/components/legal-page";
import { images } from "@/content/images";
import { legal } from "@/content/legal";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Aviso de privacidad",
  description:
    "Aviso de privacidad para formularios de esta sede digital de la Facultad de Derecho y Ciencias Políticas.",
};

export default function AvisoPrivacidadPage() {
  return (
    <LegalPage
      kicker="Formularios"
      title="Aviso de privacidad"
      description="Resumen de quién trata los datos, para qué y cuáles son sus derechos, de acuerdo con la Ley 1581 de 2012. Complementa, y no reemplaza, la política completa."
      image={images.documents}
    >
      <p className="rounded-sm border border-gold/40 bg-gold/10 px-4 py-3 text-sm leading-relaxed text-navy">
        {legal.prototypeScope} Documento de {legal.lastUpdated}.
      </p>

      <LegalSection title="Responsable">
        <p>
          Universidad de Cartagena / {site.faculty}, en los términos descritos
          en la{" "}
          <Link className="text-blue underline" href="/politica-de-privacidad">
            Política de tratamiento de datos personales
          </Link>
          . Canal de este sitio:{" "}
          <a className="text-blue underline" href={`mailto:${site.emails.derecho}`}>
            {site.emails.derecho}
          </a>{" "}
          y{" "}
          <a className="text-blue underline" href={`mailto:${site.emails.facultad}`}>
            {site.emails.facultad}
          </a>
          . Política institucional:{" "}
          <a
            className="text-blue underline"
            href={legal.udecPrivacyUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Protección de datos UdeC
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection title="Datos y finalidad">
        <p>
          Si usted escribe en el formulario de contacto, se trata nombre,
          correo, asunto y mensaje para atender la consulta. El inicio de
          sesión es un prototipo y no debe usarse con la contraseña real de la
          Universidad. En el estado actual los formularios no se transmiten a
          un servidor.
        </p>
      </LegalSection>

      <LegalSection title="Carácter facultativo y autorización">
        <p>
          Suministrar los datos es voluntario. Sin la casilla de autorización
          no se envía el formulario. No se piden datos sensibles ni de menores
          de edad.
        </p>
      </LegalSection>

      <LegalSection title="Derechos">
        <p>
          Puede conocer, actualizar, rectificar y suprimir sus datos, y
          revocar la autorización, escribiendo a los correos de la Facultad o
          a la Oficina Asesora de Planeación — Datos Personales de la
          Universidad ({legal.udecDataOffice.phone}). También puede presentar
          queja ante la Superintendencia de Industria y Comercio.
        </p>
      </LegalSection>

      <p className="text-sm text-muted-foreground">
        Cookies y almacenamiento local:{" "}
        <Link className="text-blue underline" href="/politica-de-cookies">
          Política de cookies
        </Link>
        .
      </p>
    </LegalPage>
  );
}
