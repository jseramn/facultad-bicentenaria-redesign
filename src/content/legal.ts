import { site } from "@/content/site";

export const legal = {
  lastUpdated: "10 de septiembre de 2026",
  prototypeScope:
    "Este sitio es un rediseño informativo de la sede digital de la Facultad de Derecho y Ciencias Políticas. No sustituye la política institucional vigente de la Universidad de Cartagena ni un acto de adopción por la Oficina Jurídica o la Oficina Asesora de Planeación. Quien lo publique en producción debe verificar el texto con esas dependencias.",
  udecPrivacyUrl: site.official.dataProtection,
  udecTransparencyUrl: site.official.transparency,
  facultyChannel: {
    emails: [site.emails.derecho, site.emails.facultad] as const,
    phone: `${site.phones.switchboard}, extensiones ${site.phones.facultyExt}`,
    address: `${site.address.venue}, ${site.address.street}, ${site.address.district}, ${site.address.city}, ${site.address.department}, ${site.address.country}.`,
  },
  udecDataOffice: {
    name: "Oficina Asesora de Planeación — Datos Personales (Universidad de Cartagena)",
    address:
      "Cra. 6 No. 36-100, Centro Histórico, Cartagena de Indias, Bolívar, Colombia, código postal 130001.",
    phone: "(+57) 316 439 0360, extensión 165",
    page: site.official.dataProtection,
  },
  storageKeys: {
    fontSize: "fb-font-size",
    highContrast: "fb-high-contrast",
    cookieConsent: "fb-cookie-consent",
  },
} as const;
