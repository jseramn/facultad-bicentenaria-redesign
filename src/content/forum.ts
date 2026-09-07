export type ForumThread = {
  id: string;
  title: string;
  author: string;
  role: "Estudiante" | "Docente" | "Egresado" | "Moderación";
  date: string;
  dateLabel: string;
  replies: number;
  tags: string[];
  excerpt: string;
  body: string;
  answers: {
    author: string;
    role: ForumThread["role"];
    dateLabel: string;
    body: string;
  }[];
};

export const forumThreads: ForumThread[] = [
  {
    id: "orientacion-admisiones-2027-1",
    title: "¿Dónde se confirma el calendario de admisiones 2027-1?",
    author: "Moderación del foro",
    role: "Moderación",
    date: "2026-07-02",
    dateLabel: "2 de julio de 2026",
    replies: 1,
    tags: ["Admisiones", "Pregrado"],
    excerpt:
      "Hilo de orientación: el calendario, los pagos y los cortes no se publican como cifras propias de este sitio.",
    body: "Este foro académico es un espacio de consulta entre la comunidad de la Facultad. Las fechas de inscripción, los derechos pecuniarios y los resultados de admisión los publica únicamente la Universidad de Cartagena. ¿Tienen enlaces útiles para quienes llegan por primera vez?",
    answers: [
      {
        author: "Secretaría de apoyo (muestra)",
        role: "Moderación",
        dateLabel: "2 de julio de 2026",
        body: "Use unicartagena.edu.co/inscribete-ya y la sección de aspirantes. La Facultad orienta por derecho@unicartagena.edu.co y las extensiones 152 y 153. Este hilo es de demostración: el inicio de sesión real aún no está conectado.",
      },
    ],
  },
  {
    id: "practica-consultorio",
    title: "Requisitos de práctica en el Consultorio Jurídico",
    author: "Comunidad estudiantil (muestra)",
    role: "Estudiante",
    date: "2026-06-18",
    dateLabel: "18 de junio de 2026",
    replies: 1,
    tags: ["Consultorio", "Práctica"],
    excerpt:
      "Conversación de referencia sobre la práctica de últimos semestres y el Centro de Conciliación.",
    body: "¿La práctica del Consultorio se abre solo para últimos semestres? Quisiera saber también cómo se asignan las áreas (familia, laboral, violencia de género, etc.).",
    answers: [
      {
        author: "Acompañamiento docente (muestra)",
        role: "Docente",
        dateLabel: "19 de junio de 2026",
        body: "La práctica está reservada a estudiantes de últimos semestres, con supervisión docente. La asignación de áreas depende de la coordinación del Consultorio. Confirme listas y horarios en la extensión 245 o en dcjuridico@unicartagena.edu.co. Respuesta de muestra; no sustituye un comunicado oficial.",
      },
    ],
  },
];

export function getThreadById(id: string) {
  return forumThreads.find((thread) => thread.id === id);
}
