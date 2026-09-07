export type NewsPost = {
  slug: string;
  title: string;
  date: string;
  dateLabel: string;
  excerpt: string;
  category: string;
  body: string[];
  imageKey: "library" | "seminar" | "studentsCampus" | "documents" | "meeting";
};

export const newsPosts: NewsPost[] = [
  {
    slug: "admisiones-2027-1-pregrado-derecho",
    title: "Admisiones 2027-1: oriente su inscripción al pregrado en Derecho",
    date: "2026-07-15",
    dateLabel: "15 de julio de 2026",
    excerpt:
      "La convocatoria institucional de pregrado presencial es el canal oficial para ingresar al programa SNIES 740. La Facultad acompaña la orientación, no sustituye el proceso de la Universidad.",
    category: "Admisiones",
    imageKey: "studentsCampus",
    body: [
      "Quienes deseen cursar el pregrado en Derecho en la Universidad de Cartagena deben seguir el proceso de admisión institucional vigente: título de bachiller (o equivalente), inscripción en la convocatoria de pregrado presencial y obtención del puntaje exigido.",
      "El programa, con código SNIES 740, se ofrece en modalidad presencial, jornadas diurna y vespertina, con 160 créditos y diez semestres. La sede principal es el Claustro de San Agustín, en el Centro Histórico de Cartagena, y existen sedes de extensión en Cereté y Magangué.",
      "La Facultad no publica en este sitio cupos, cortes ni rankings. Esos datos, cuando aplican, se consultan en el portal de aspirantes y en las resoluciones de la Universidad. Para orientación académica puede escribir a derecho@unicartagena.edu.co o llamar al (57) 316 439 0360, extensiones 152 y 153.",
      "El valor de la matrícula se determina de acuerdo con la declaración de renta, según la normativa de derechos pecuniarios vigente. Confirme fechas, documentos y pagos únicamente en unicartagena.edu.co.",
    ],
  },
  {
    slug: "consultorio-juridico-atencion-a-la-ciudadania",
    title: "Consultorio Jurídico: atención gratuita y práctica supervisada",
    date: "2026-07-10",
    dateLabel: "10 de julio de 2026",
    excerpt:
      "El Consultorio Jurídico Antenor Boza Avendaño y el Centro de Conciliación prestan asesoría gratuita a personas de escasos recursos, con estudiantes de últimos semestres guiados por docentes.",
    category: "Proyección social",
    imageKey: "documents",
    body: [
      "El Consultorio Jurídico Antenor Boza Avendaño es el escenario de proyección social de la Facultad. Allí se articulan la formación práctica del pregrado y el acceso a la justicia para comunidades de escasos recursos, en especial de estratos 1, 2 y 3.",
      "Se ofrece orientación y representación, según competencia, en derecho público, civil, comercial, familia, laboral, penal querellable, violencia de género y derecho empresarial. El Centro de Conciliación adelanta trámites extrajudiciales en derecho en materias civil, de familia y penal querellable, de conformidad con la Ley 2220 de 2022.",
      "Hay dos sedes de atención: Centro (Calle del Cuartel n.º 36-43) y Escallón Villa (Avenida Pedro de Heredia), esta última con énfasis en derechos humanos, población migrante y víctimas del conflicto armado. Para turnos e información: extensión 245 o dcjuridico@unicartagena.edu.co.",
      "Este aviso no constituye asesoría jurídica particular ni sustituye la calificación de cada caso por el equipo docente.",
    ],
  },
  {
    slug: "posgrados-2027-ficha-oficial",
    title: "Posgrados 2027: consulte la ficha oficial antes de inscribirse",
    date: "2026-06-28",
    dateLabel: "28 de junio de 2026",
    excerpt:
      "La Facultad oferta la Maestría en Derecho, la Maestría en Derecho Penal y la Especialización en Derecho Penal. Los calendarios, SNIES y derechos pecuniarios se confirman en el portal de posgrados de la Universidad.",
    category: "Posgrados",
    imageKey: "seminar",
    body: [
      "La oferta pública de posgrados de la Facultad comprende la Maestría en Derecho, la Maestría en Derecho Penal y la Especialización en Derecho Penal. Los procesos de inscripción, entrevistas y matrícula los administra la Universidad de Cartagena.",
      "De la Maestría en Derecho Penal está publicada, en ficha institucional, la información de SNIES 106591, 60 créditos, duración de dos años, modalidad de profundización y registro calificado mediante Resolución MEN n.º 023896 del 15 de diciembre de 2024. El contacto del programa es maestriaderpenal@unicartagena.edu.co, extensión 180.",
      "Para la Maestría en Derecho y la Especialización en Derecho Penal, este sitio no reproduce códigos SNIES ni valores de matrícula que no estén verificados en la ficha vigente. Use el botón de posgrados o escriba a fderecho@unicartagena.edu.co.",
      "Los diplomados de educación continua con inicio previsto en septiembre de 2026 (derecho urbano, corporativo, riesgos y seguros, notariado y registro) se inscriben por los canales de Educación continua de la Facultad.",
    ],
  },
];

export function getNewsBySlug(slug: string) {
  return newsPosts.find((post) => post.slug === slug);
}
