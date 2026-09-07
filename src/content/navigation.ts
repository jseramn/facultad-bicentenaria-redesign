export type NavItem = {
  href: string;
  label: string;
};

export const primaryNav: NavItem[] = [
  { href: "/la-facultad", label: "La Facultad" },
  { href: "/oferta", label: "Oferta" },
  { href: "/comunidad", label: "Comunidad" },
  { href: "/consultorio-juridico", label: "Consultorio" },
  { href: "/investigacion", label: "Investigación" },
  { href: "/noticias", label: "Noticias" },
  { href: "/eventos", label: "Eventos" },
  { href: "/foro", label: "Foro" },
];

export const utilityNav: NavItem[] = [
  { href: "https://unicartagena.edu.co", label: "Universidad de Cartagena" },
  { href: "https://unicartagena.edu.co/transparencia", label: "Transparencia" },
  { href: "/accesibilidad", label: "Accesibilidad" },
  { href: "/contacto", label: "Contacto" },
];

export const footerNav = {
  facultad: [
    { href: "/la-facultad", label: "Historia y sede" },
    { href: "/oferta/pregrado", label: "Pregrado en Derecho" },
    { href: "/oferta/posgrados", label: "Posgrados" },
    { href: "/oferta/educacion-continua", label: "Educación continua" },
    { href: "/investigacion", label: "Investigación" },
  ],
  comunidad: [
    { href: "/comunidad", label: "Estudiantes, egresados y docentes" },
    { href: "/consultorio-juridico", label: "Consultorio jurídico" },
    { href: "/foro", label: "Foro académico" },
    { href: "/noticias", label: "Noticias" },
    { href: "/eventos", label: "Eventos" },
  ],
  servicio: [
    { href: "/contacto", label: "Contacto" },
    { href: "/accesibilidad", label: "Declaración de accesibilidad" },
    { href: "/iniciar-sesion", label: "Iniciar sesión (demo)" },
    {
      href: "https://unicartagena.edu.co/proteccion-de-datos",
      label: "Protección de datos",
    },
    {
      href: "https://unicartagena.edu.co/transparencia",
      label: "Portal de transparencia UdeC",
    },
  ],
};

export const sitemapRoutes = [
  "/",
  "/la-facultad",
  "/oferta",
  "/oferta/pregrado",
  "/oferta/posgrados",
  "/oferta/educacion-continua",
  "/oferta/cursos-virtuales",
  "/consultorio-juridico",
  "/investigacion",
  "/foro",
  "/noticias",
  "/eventos",
  "/contacto",
  "/comunidad",
  "/accesibilidad",
  "/iniciar-sesion",
] as const;
