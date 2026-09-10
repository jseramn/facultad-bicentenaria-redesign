import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage, LegalSection } from "@/components/legal-page";
import { images } from "@/content/images";
import { legal } from "@/content/legal";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Política de tratamiento de datos personales",
  description:
    "Política de tratamiento de datos personales de esta sede digital de la Facultad de Derecho y Ciencias Políticas, en el marco de la Ley 1581 de 2012.",
};

export default function PoliticaPrivacidadPage() {
  return (
    <LegalPage
      kicker="Ley 1581 de 2012"
      title="Política de tratamiento de datos personales"
      description="Información sobre finalidades, derechos del titular y canales de atención. Texto de un prototipo de rediseño; no inventa registros ni sustituye la política oficial de la Universidad de Cartagena."
      image={images.documents}
    >
      <p className="rounded-sm border border-gold/40 bg-gold/10 px-4 py-3 text-sm leading-relaxed text-navy">
        {legal.prototypeScope} La política institucional vigente de la Universidad
        está en{" "}
        <a
          className="underline underline-offset-4"
          href={legal.udecPrivacyUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          unicartagena.edu.co/proteccion-de-datos
        </a>
        . Última actualización de este texto: {legal.lastUpdated}.
      </p>

      <LegalSection title="1. Responsable del tratamiento">
        <p>
          En el entorno institucional, el responsable del tratamiento de datos
          personales de la Universidad de Cartagena es la propia Universidad,
          con domicilio en el Claustro de San Agustín, {legal.udecDataOffice.address}{" "}
          Dependencia de referencia para habeas data institucional:{" "}
          {legal.udecDataOffice.name}. Teléfono: {legal.udecDataOffice.phone}.
        </p>
        <p>
          Esta sede digital ({site.brand}) presenta información pública de la{" "}
          {site.faculty}. Los canales de la Facultad para consultas de este
          sitio son {legal.facultyChannel.emails.join(" y ")}, teléfono{" "}
          {legal.facultyChannel.phone}. Dirección: {legal.facultyChannel.address}
        </p>
        <p>
          No se publica aquí un número de identificación tributaria, un registro
          de bases de datos ni un acto administrativo de adopción: esos datos
          corresponden a la Universidad y deben confirmarse con su Oficina
          Jurídica antes de un despliegue de producción.
        </p>
      </LegalSection>

      <LegalSection title="2. Marco normativo">
        <p>
          Esta política se formula de manera informativa a la luz de la
          Constitución Política (art. 15), la Ley 1581 de 2012, el Decreto 1377
          de 2013 (compilado en el Decreto 1074 de 2015), las instrucciones de
          la Superintendencia de Industria y Comercio, la Ley 1712 de 2014 en
          materia de transparencia, y los lineamientos MinTIC sobre sedes
          electrónicas (incluida la Resolución 2893 de 2020 y sus anexos
          relativos a cookies y política de tratamiento). La accesibilidad del
          sitio se orienta por la Resolución MinTIC 1519 de 2020.
        </p>
      </LegalSection>

      <LegalSection title="3. Alcance de este sitio">
        <p>
          La navegación anónima de las páginas públicas no exige suministrar
          nombre, documento ni correo. Los formularios de contacto e inicio de
          sesión son interfaces de demostración: no envían los datos a un
          servidor de la Universidad ni crean una base de datos institucional.
          Aun así, el sitio solicita autorización informada porque simula la
          recabación de datos personales.
        </p>
        <p>
          Si en una adopción productiva estos formularios se conectan a correo,
          expediente o directorio, el responsable deberá actualizar finalidades,
          encargados, plazos de conservación y el Registro Nacional de Bases de
          Datos cuando ello sea exigible.
        </p>
      </LegalSection>

      <LegalSection title="4. Datos que pueden recabarse">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            Datos de identificación y contacto que la persona escriba en el
            formulario (nombre, correo, asunto y mensaje).
          </li>
          <li>
            Usuario o correo y contraseña en el acceso de demostración. No
            ingrese credenciales reales de la Universidad.
          </li>
          <li>
            Datos técnicos mínimos del navegador necesarios para servir la
            página (por ejemplo, la solicitud HTTP). Este prototipo no opera un
            medidor de analítica de terceros.
          </li>
          <li>
            Preferencias de accesibilidad en el almacenamiento local del
            navegador (tamaño de texto y contraste), estrictamente funcionales.
          </li>
        </ul>
        <p>
          No se solicitan datos sensibles (origen étnico, salud, vida sexual,
          datos biométricos, etc.) ni datos de niñas, niños o adolescentes. Si
          alguien los incluye en un mensaje, no deben usarse para una finalidad
          distinta a devolver la comunicación y, en producción, deberían
          suprimirse o canalizarse según el procedimiento institucional.
        </p>
      </LegalSection>

      <LegalSection title="5. Finalidades">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            Atender consultas sobre oferta académica, consultorio jurídico,
            trámites y vida de la Facultad, cuando el formulario esté
            habilitado en producción.
          </li>
          <li>
            Permitir el uso accesible del sitio (preferencias de presentación).
          </li>
          <li>
            Recordar la decisión sobre cookies no esenciales.
          </li>
          <li>
            Cumplir obligaciones legales, órdenes de autoridad y deberes de
            transparencia cuando corresponda a la Universidad.
          </li>
        </ul>
        <p>
          Los datos no se usan en este prototipo para mercadeo, perfiles
          comerciales ni cesión onerosa a terceros.
        </p>
      </LegalSection>

      <LegalSection title="6. Autorización">
        <p>
          El tratamiento de datos recabados en formularios requiere
          autorización previa, expresa e informada del titular (Ley 1581 de
          2012 y Decreto 1377 de 2013). En este sitio esa autorización se
          manifiesta marcando la casilla correspondiente antes de enviar. La
          negativa impide el envío del formulario; no impide consultar las
          páginas públicas.
        </p>
      </LegalSection>

      <LegalSection title="7. Derechos del titular">
        <p>
          El titular puede, en los términos de la Ley 1581 de 2012, conocer,
          actualizar y rectificar sus datos; solicitar prueba de la
          autorización; ser informado sobre el uso que se ha dado a sus datos;
          presentar quejas ante la Superintendencia de Industria y Comercio;
          revocar la autorización y/o solicitar la supresión cuando sea
          procedente; y acceder de forma gratuita a los datos.
        </p>
        <p>
          Para ejercerlos respecto de información de la Facultad en este sitio,
          escriba a{" "}
          <a className="text-blue underline" href={`mailto:${site.emails.derecho}`}>
            {site.emails.derecho}
          </a>{" "}
          o a{" "}
          <a className="text-blue underline" href={`mailto:${site.emails.facultad}`}>
            {site.emails.facultad}
          </a>
          , con copia de identificación y una descripción clara de la
          solicitud. Para el habeas data institucional de la Universidad,
          diríjase a {legal.udecDataOffice.name} ({legal.udecDataOffice.phone}) y
          consulte {legal.udecPrivacyUrl}.
        </p>
      </LegalSection>

      <LegalSection title="8. Encargados, transferencias y encargos">
        <p>
          Este prototipo no contrata un encargado de tratamiento ni transfiere
          datos a un servidor de formularios. El alojamiento de la sede digital
          puede implicar, en producción, proveedores de infraestructura; esos
          contratos y transferencias internacionales, si existen, deben
          documentarse por la Universidad. Los hipervínculos a unicartagena.edu.co,
          Unsplash o Pexels no convierten a esos sitios en destinatarios de los
          formularios de esta sede.
        </p>
      </LegalSection>

      <LegalSection title="9. Conservación y seguridad">
        <p>
          En el estado actual, el mensaje del formulario de contacto permanece
          solo en la sesión del navegador (no hay envío). Las preferencias de
          accesibilidad y el consentimiento de cookies se conservan en el
          dispositivo del usuario hasta que las borre o las revoque. En
          producción, los plazos deben alinearse con la finalidad y con las
          tablas de retención documental de la Universidad.
        </p>
      </LegalSection>

      <LegalSection title="10. Cookies y avisos relacionados">
        <p>
          El detalle de cookies, almacenamiento local y cómo revocar el
          consentimiento está en la{" "}
          <Link className="text-blue underline" href="/politica-de-cookies">
            Política de cookies
          </Link>
          . El{" "}
          <Link className="text-blue underline" href="/aviso-de-privacidad">
            aviso de privacidad
          </Link>{" "}
          resume este documento para los formularios. El portal de{" "}
          <a
            className="text-blue underline"
            href={legal.udecTransparencyUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            transparencia de la Universidad de Cartagena
          </a>{" "}
          es el canal de Ley 1712 de 2014.
        </p>
      </LegalSection>

      <LegalSection title="11. Vigencia">
        <p>
          Este texto rige para esta sede digital desde el {legal.lastUpdated} y
          puede actualizarse cuando cambien finalidades, proveedores o el
          marco normativo. Los cambios se publicarán en esta misma ruta.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
