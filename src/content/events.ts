export type FacultyEvent = {
  slug: string;
  title: string;
  date: string;
  dateLabel: string;
  time: string;
  place: string;
  kind: "Foro" | "Ceremonia" | "Académico" | "Comunidad";
  summary: string;
  detail: string;
};

const MONTHS_ES = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
] as const;

export function monthKey(date: string) {
  return date.slice(0, 7);
}

export function monthLabelFromKey(key: string) {
  const [year, month] = key.split("-");
  const index = Number(month) - 1;
  return `${MONTHS_ES[index]} de ${year}`;
}

export function monthShortFromKey(key: string) {
  return MONTHS_ES[Number(key.slice(5, 7)) - 1].slice(0, 3);
}

export function groupEventsByMonth(list: FacultyEvent[]) {
  const groups: { key: string; label: string; items: FacultyEvent[] }[] = [];
  const sorted = [...list].sort((a, b) => a.date.localeCompare(b.date));
  for (const event of sorted) {
    const key = monthKey(event.date);
    const current = groups.at(-1);
    if (!current || current.key !== key) {
      groups.push({ key, label: monthLabelFromKey(key), items: [event] });
    } else {
      current.items.push(event);
    }
  }
  return groups;
}

export const events: FacultyEvent[] = [
  {
    slug: "foro-derecho-y-tecnologia",
    title: "Foro académico: Derecho y tecnología en el Caribe",
    date: "2026-07-28",
    dateLabel: "28 de julio de 2026",
    time: "9:00 a. m. a 12:30 p. m.",
    place: "Claustro de San Agustín · Cartagena",
    kind: "Foro",
    summary:
      "Conversatorio sobre regulación digital, datos personales y acceso a la justicia. Cupos, confirmación de panelistas y transmisión se anuncian por los canales de la Facultad.",
    detail:
      "Actividad de divulgación académica abierta a estudiantes, egresados y público interesado. La programación definitiva (ponentes, inscripción y eventual transmisión) debe confirmarse con la Facultad; esta ficha es una muestra de agenda y no un afiche oficial de asistencia.",
  },
  {
    slug: "ceremonia-de-grados-cartagena",
    title: "Ceremonia de grados — Cartagena",
    date: "2026-09-30",
    dateLabel: "30 de septiembre de 2026",
    time: "Según cronograma institucional",
    place: "Universidad de Cartagena · sede que designe Rectoría",
    kind: "Ceremonia",
    summary:
      "Las fechas, requisitos de paz y salvo y protocolo de las ceremonias de grado los publica la Universidad. Consulte el cronograma oficial antes de hacer trámites.",
    detail:
      "La Facultad acompaña a sus egresados en el proceso de grado, pero el calendario, los recintos y los requisitos documentales son institucionales. Verifique en unicartagena.edu.co/cronograma-ceremonias-de-grado o el enlace vigente de Rectoría.",
  },
  {
    slug: "induccion-consultorio-juridico",
    title: "Inducción a la práctica del Consultorio Jurídico",
    date: "2026-08-12",
    dateLabel: "12 de agosto de 2026",
    time: "2:00 p. m.",
    place: "Consultorio Jurídico · Calle del Cuartel n.º 36-43",
    kind: "Académico",
    summary:
      "Encuentro de orientación para estudiantes de últimos semestres que inician práctica supervisada. La asistencia se rige por el calendario del Consultorio.",
    detail:
      "La inducción cubre ética de la atención, áreas de servicio, conciliación y canales de turno. Confirme hora y lista con la coordinación del Consultorio (extensión 245).",
  },
  {
    slug: "cafe-de-egresados",
    title: "Café de egresados: red profesional del Caribe",
    date: "2026-10-16",
    dateLabel: "16 de octubre de 2026",
    time: "5:30 p. m.",
    place: "Claustro de San Agustín",
    kind: "Comunidad",
    summary:
      "Encuentro informal para egresadas y egresados de la Facultad. Inscripción y cupo se comunican por Comunidad; no hay cobro publicado en este sitio.",
    detail:
      "Espacio de actualización y redes. Si la Decanatura modifica la fecha, el aviso se actualizará aquí y en los canales institucionales.",
  },
];
