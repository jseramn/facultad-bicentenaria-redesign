export const site = {
  brand: "Facultad Bicentenaria",
  faculty: "Facultad de Derecho y Ciencias Políticas",
  university: "Universidad de Cartagena",
  foundedYear: 1827,
  tagline:
    "Pregrado en Derecho (SNIES 740, 160 créditos, presencial). Posgrados, consultorio jurídico gratuito y educación continua.",
  description:
    "Facultad de Derecho y Ciencias Políticas de la Universidad de Cartagena. Pregrado en Derecho (SNIES 740), posgrados, consultorio jurídico gratuito y educación continua. Sede: Claustro de San Agustín, Centro Histórico.",
  url: "https://facultadbicentenaria.com",
  address: {
    venue: "Claustro de San Agustín",
    street: "Cra. 6 #36-100",
    district: "Centro Histórico",
    city: "Cartagena de Indias",
    department: "Bolívar",
    country: "Colombia",
    postal: "130001",
  },
  phones: {
    switchboard: "(+57) 316 439 0360",
    facultyExt: "152 / 153",
    consultorioExt: "245",
  },
  emails: {
    derecho: "derecho@unicartagena.edu.co",
    facultad: "fderecho@unicartagena.edu.co",
    consultorio: "dcjuridico@unicartagena.edu.co",
  },
  hours: {
    weekdays: "Lunes a viernes, 8:00 a. m. a 12:00 m. y 1:00 p. m. a 5:00 p. m.",
    weekends: "Sábados y domingos: cerrado (salvo actividades académicas programadas).",
    timezone: "Hora de Colombia (GMT−5)",
  },
  official: {
    university: "https://unicartagena.edu.co",
    admissions: "https://unicartagena.edu.co/inscribete-ya",
    applicants: "https://unicartagena.edu.co/aspirante",
    undergraduateCalls:
      "https://unicartagena.edu.co/convocatorias-pregrado-presencial",
    posgrados: "https://unicartagena.edu.co/estudia-con-nosotros/oferta-de-posgrados",
    program: "https://unicartagena.edu.co/estudia-con-nosotros/programa-de-derecho",
    facultyPage:
      "https://unicartagena.edu.co/estudia-con-nosotros/facultad-derecho-y-ciencias-politicas",
    transparency: "https://unicartagena.edu.co/transparencia",
    calendar: "https://unicartagena.edu.co/calendario-academico",
    dataProtection: "https://unicartagena.edu.co/proteccion-de-datos",
    maestriaPenal:
      "https://unicartagena.edu.co/estudia-con-nosotros/maestria-en-derecho-penal",
    maestriaDerecho:
      "https://unicartagena.edu.co/estudia-con-nosotros/maestria-en-derecho",
  },
  social: {
    facebook: "https://www.facebook.com/share/1PCqQyAefr/",
    instagram: "https://www.instagram.com/facultadbicentenaria_/",
    x: "https://x.com/uni_cartagena",
    youtube: "https://www.youtube.com/c/unicartagenaoficial",
    linkedin: "https://www.linkedin.com/in/facultad-bicentenaria-a82002424",
    whatsapp: "https://wa.me/message/JS2QRX6OACEVH1",
  },
} as const;

export const pregrado = {
  name: "Derecho",
  title: "Abogado / Abogada",
  level: "Pregrado",
  snies: "740",
  credits: 160,
  semesters: 10,
  modality: "Presencial",
  schedules: "Jornadas diurna y vespertina",
  qualifiedRegistry:
    "Resolución MEN n.º 23004 del 30 de noviembre de 2021",
  tuitionNote:
    "El valor de la matrícula se calcula de acuerdo con la declaración de renta, según la normativa institucional vigente. Consulte derechos pecuniarios en la Universidad de Cartagena.",
  campuses:
    "Sede principal en Cartagena (Claustro de San Agustín). El programa cuenta con sedes de extensión en Cereté y Magangué.",
  studyPlanUrl:
    "https://drive.google.com/file/d/1-ShSt7bj0mXGmMsfIpFN97j3lOmsxC3z/view?usp=sharing",
  mission:
    "Formar abogados y abogadas con riguroso conocimiento jurídico y humanístico quienes, mediante la interpretación y argumentación de normas, participan de forma crítica y propositiva en el desarrollo y transformación de la cultura jurídica, así como en el análisis, comprensión y solución de problemas sociales que impactan a nivel local, regional, nacional e internacional.",
  vision:
    "El programa de Derecho, a través del fortalecimiento de sus procesos misionales de docencia, investigación y extensión, se consolidará como un actor académico relevante en las dinámicas jurídicas, institucionales y de justicia en Colombia e Iberoamérica.",
  learningObjectives: [
    {
      id: "OA1",
      text: "Formar abogados que desarrollan técnicas interpretativas e investigativas sobre textos normativos, que permiten la definición de su alcance, sentido y nuevas alternativas de desarrollo en el contexto local, regional, nacional e internacional.",
    },
    {
      id: "OA3",
      text: "Formar abogados que gestionan proyectos de investigación en las diferentes áreas del Derecho para contribuir a la solución de problemas del entorno.",
    },
    {
      id: "OA4",
      text: "Formar abogados que desarrollan el razonamiento lógico, jurídico holístico y pensamiento crítico y creativo, con el fin de alcanzar soluciones novedosas frente a problemas relacionados con el saber jurídico.",
    },
    {
      id: "OA5",
      text: "Formar abogados que plantean y resuelven problemas jurídicos y sociales desde instancias extrajudiciales, como la negociación y la concertación, e instancias judiciales, legislativas y administrativas, para contribuir, desde lo jurídico, a la transformación de la sociedad, la cultura democrática, los derechos humanos y la justicia.",
    },
  ],
  learningOutcomes: [
    {
      id: "RAP1",
      text: "Aplica técnicas interpretativas e investigativas sobre textos normativos, que permiten la definición de su alcance, sentido y nuevas alternativas de desarrollo en el contexto local, regional, nacional e internacional.",
    },
    {
      id: "RAP3",
      text: "Gestiona proyectos de investigación en las diferentes áreas del Derecho para contribuir a la solución de problemas del entorno.",
    },
    {
      id: "RAP4",
      text: "Desarrolla razonamiento lógico, jurídico holístico y pensamiento crítico y creativo, con el fin de alcanzar soluciones novedosas frente a problemas relacionados con el saber disciplinar.",
    },
    {
      id: "RAP5",
      text: "Resuelve problemas jurídicos y sociales desde instancias judiciales, extrajudiciales, legislativas y administrativas para contribuir, desde lo jurídico, a la transformación de la sociedad, la participación democrática, los derechos humanos y el valor de la justicia.",
    },
  ],
  applicantProfile:
    "Quien aspira a cursar el pregrado en Derecho debe contar con título de bachiller otorgado por un centro de estudios secundarios en el país, o su equivalente si proviene del exterior; seguir el proceso de admisión institucional vigente y obtener el puntaje exigido. Se espera disposición para la lectura, la escritura y la oratoria, así como para analizar y comentar de manera crítica fuentes normativas relevantes para la prevención y solución de conflictos sociales.",
  graduateProfile:
    "Abogada o abogado con destrezas en el conocimiento, diseño y aplicación de normas jurídicas (nacionales e internacionales) y de políticas públicas y empresariales, para incidir en el desarrollo social, económico, político y jurídico de la ciudad —con énfasis turístico, marítimo y portuario—, la región, el país y el contexto internacional.",
  occupationalProfile: [
    "Litigio, defensa de oficio, mediación, conciliación y arbitraje para prevenir y dirimir conflictos.",
    "Función pública en las ramas judicial, ejecutiva o legislativa, en órganos de control y en entes investigadores, en los ámbitos local, regional y nacional.",
    "Asesoría al sector productivo, empresarial y financiero, con énfasis en lo marítimo, portuario y turístico.",
    "Docencia, investigación y gestión de procesos académicos en universidades y entidades de investigación que involucran al Derecho.",
    "Asesoría a instituciones y organismos internacionales, entre ellos instancias de derechos humanos y justicia penal internacional.",
  ],
} as const;

export const posgrados = [
  {
    slug: "maestria-en-derecho",
    name: "Maestría en Derecho",
    kind: "Maestría",
    status: "Ofertada en la página oficial de posgrados de la Universidad de Cartagena",
    summary:
      "Programa de posgrado adscrito a la Facultad de Derecho y Ciencias Políticas. Consulte la ficha oficial para SNIES, créditos, jornada y calendario de admisión.",
    href: "https://unicartagena.edu.co/estudia-con-nosotros/maestria-en-derecho",
    facts: [] as { label: string; value: string }[],
  },
  {
    slug: "maestria-en-derecho-penal",
    name: "Maestría en Derecho Penal",
    kind: "Maestría",
    status: "Registro calificado vigente",
    summary:
      "Posgrado de profundización dirigido a profesionales del Derecho con interés en los problemas prácticos del sistema penal contemporáneo.",
    href: "https://unicartagena.edu.co/estudia-con-nosotros/maestria-en-derecho-penal",
    facts: [
      { label: "SNIES", value: "106591" },
      { label: "Créditos", value: "60" },
      { label: "Duración", value: "Dos (2) años" },
      { label: "Modalidad", value: "Profundización" },
      {
        label: "Jornada",
        value: "Miércoles, jueves, viernes y sábados (un encuentro mensual)",
      },
      {
        label: "Registro calificado",
        value: "Resolución MEN n.º 023896 del 15 de diciembre de 2024 (vigencia 7 años)",
      },
      {
        label: "Contacto",
        value: "maestriaderpenal@unicartagena.edu.co · Ext. 180",
      },
    ],
  },
  {
    slug: "especializacion-en-derecho-penal",
    name: "Especialización en Derecho Penal",
    kind: "Especialización",
    status: "Ofertada en la página oficial de posgrados",
    summary:
      "Especialización adscrita a la Facultad. Los datos de SNIES, créditos y derechos pecuniarios deben consultarse en la ficha institucional vigente.",
    href: "https://unicartagena.edu.co/estudia-con-nosotros/oferta-de-posgrados",
    facts: [] as { label: string; value: string }[],
  },
] as const;

export const diplomados = [
  {
    slug: "derecho-urbano",
    title: "Diplomado en Derecho urbano",
    start: "Septiembre 2026",
    summary:
      "Conceptos y dilemas del derecho urbanístico y el ordenamiento territorial.",
  },
  {
    slug: "derecho-corporativo",
    title: "Diplomado en Derecho corporativo",
    start: "Septiembre 2026",
    summary:
      "Actualización en gobierno societario, contratación mercantil y asesoría a organizaciones productivas.",
  },
  {
    slug: "gestion-de-riesgos-y-seguros",
    title: "Diplomado en Gestión de riesgos y seguros",
    start: "Septiembre 2026",
    summary:
      "Fundamentos de la gestión de riesgos, el contrato de seguro y su aplicación práctica.",
  },
  {
    slug: "notariado-y-registro",
    title: "Diplomado en Notariado y registro",
    start: "Septiembre 2026",
    summary:
      "Formación complementaria en notariado, registro de instrumentos públicos y práctica notarial contemporánea.",
  },
] as const;

export const consultorio = {
  name: "Consultorio Jurídico Antenor Boza Avendaño",
  center: "Centro de Conciliación",
  mission:
    "El Consultorio Jurídico y el Centro de Conciliación de la Facultad son la instancia de proyección social que presta servicios gratuitos de administración de justicia, con docentes y estudiantes adscritos, a partir de principios éticos y del conocimiento jurídico aplicable a cada caso.",
  vision:
    "Prestar con calidad un servicio gratuito de justicia que sea referente en su área de influencia.",
  note: "El nombre oficial en fuentes institucionales de la Universidad de Cartagena es Antenor Boza Avendaño. El servicio es gratuito para personas de escasos recursos económicos, en especial de estratos 1, 2 y 3.",
  areas: [
    "Derecho público",
    "Civil",
    "Comercial y del consumidor",
    "Familia",
    "Laboral",
    "Penal (delitos querellables)",
    "Violencia de género",
    "Derecho empresarial",
    "Derechos humanos y desplazamiento forzado (sede Escallón Villa)",
  ],
  conciliation:
    "Conciliación extrajudicial en derecho en materias civil, de familia y penal querellable, en los términos de la Ley 2220 de 2022. Se excluyen por competencia las conciliaciones laboral y administrativa.",
  seats: [
    {
      name: "Sede Centro",
      detail: "Calle del Cuartel n.º 36-43, Centro Histórico, Cartagena.",
    },
    {
      name: "Sede Escallón Villa",
      detail:
        "Avenida Pedro de Heredia, sector Escallón Villa. Atención en derechos humanos, población migrante y víctimas del conflicto armado.",
    },
  ],
} as const;

export const facultyCopy = {
  historyLead:
    "La Facultad de Derecho y Ciencias Políticas es una de las unidades académicas fundacionales de la Universidad de Cartagena, instituida en 1827 en el marco del proyecto republicano impulsado por Simón Bolívar y Francisco de Paula Santander.",
  historyBody: [
    "Desde el Claustro de San Agustín, en el Centro Histórico de Cartagena de Indias, la Facultad ha formado juristas que han incidido en la vida pública del Caribe y del país. Entre sus egresados se cuenta, de manera documentada, el expresidente y constituyente Rafael Núñez.",
    "En 1958, bajo el rectorado de Juan Ignacio Gómez Naar y el decanato de Mario Alario Di Filippo, se reorganizó el régimen de estudios y se crearon departamentos de preespecialización en ciencias económicas y financieras, administrativas, derecho mercantil y laboral, derecho civil y ciencias comerciales.",
    "Hacia 1990 el currículo incorporó de manera más nítida el enfoque investigativo que hoy orienta la formación del pregrado. Fernando de la Vega describió en su momento la misión de la Facultad como «filtro y sostén de la democracia» en la costa Caribe.",
  ],
  facultyMission:
    "La Facultad de Derecho y Ciencias Políticas, a través de la docencia, la investigación y la proyección social, forma ciudadanas y ciudadanos profesionales en los distintos saberes del Derecho y las ciencias de la política, con sentido ético, pensamiento crítico y compromiso con el Caribe colombiano.",
  vision2027:
    "En sintonía con el direccionamiento estratégico de la Universidad de Cartagena hacia 2027 —año del bicentenario institucional—, la Facultad trabaja para consolidar una oferta de pregrado y posgrado pertinente, una investigación que beneficie a la comunidad y una extensión que anticipe las transformaciones jurídicas del Caribe y del país. La visión específica de grupos, indicadores y metas numéricas debe consultarse con la Decanatura; este sitio no publica cifras que no estén verificadas.",
  tramites: [
    {
      title: "Admisión a pregrado",
      body: "El proceso de admisión es institucional. Consulte convocatorias de pregrado presencial, requisitos de bachillerato y calendario en el portal de aspirantes de la Universidad de Cartagena.",
    },
    {
      title: "Admisión a posgrados",
      body: "Las maestrías y la especialización publican sus cronogramas en la oferta oficial de posgrados. Los documentos, entrevistas y derechos pecuniarios se rigen por cada ficha de programa.",
    },
    {
      title: "Certificados y constancias",
      body: "Las solicitudes de certificados de estudio, contenidos programáticos y constancias se tramitan por los canales institucionales de la Universidad. Escriba a fderecho@unicartagena.edu.co para orientación de la Facultad.",
    },
    {
      title: "Homologaciones y transferencias",
      body: "Los reconocimientos de créditos y transferencias internas o externas siguen el reglamento estudiantil vigente. Consulte con la dirección del programa de Derecho.",
    },
    {
      title: "Consultorio jurídico (práctica)",
      body: "La práctica en el Consultorio Jurídico Antenor Boza Avendaño está reservada a estudiantes de últimos semestres, bajo supervisión docente. Extensión 245 o dcjuridico@unicartagena.edu.co.",
    },
    {
      title: "Educación continua",
      body: "Diplomados y cursos de actualización se anuncian por esta sede digital y por los canales de la Facultad. Las inscripciones, cupos y valores se confirman con Educación continua; no se publican aquí cifras no verificadas.",
    },
  ],
} as const;
