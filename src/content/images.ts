export type StockImage = {
  src: string;
  alt: string;
  credit: string;
};

function unsplash(photoId: string, width = 1800) {
  return `https://images.unsplash.com/${photoId}?auto=format&fit=crop&w=${width}&q=80`;
}

function pexels(id: string, width = 1600) {
  return `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${width}`;
}

const place = {
  heroCartagena: {
    src: unsplash("photo-1715503485452-89d50b42ff5d"),
    alt: "Calle del Centro Histórico de Cartagena con fachadas coloniales, palmas y torre de iglesia",
    credit: "Jimmy Woo / Unsplash",
  },
  cartagenaWalls: {
    src: unsplash("photo-1587595431973-160d0d94add1"),
    alt: "Murallas de Cartagena al atardecer frente al mar Caribe",
    credit: "Unsplash",
  },
  cartagenaStreet: {
    src: unsplash("photo-1578662996442-48f60103fc96"),
    alt: "Calle colonial colorida con balcones y vegetación tropical",
    credit: "Unsplash",
  },
  cartagenaColor: {
    src: unsplash("photo-1596422846543-75c6fc197f07"),
    alt: "Fachadas de colores del recinto amurallado de Cartagena al atardecer",
    credit: "Unsplash",
  },
  cartagenaPlaza: {
    src: pexels("3889855"),
    alt: "Plaza del Centro Histórico de Cartagena bajo cielo caribeño",
    credit: "Pexels",
  },
  cartagenaBalcony: {
    src: pexels("2166553"),
    alt: "Balcones coloniales y faroles en una calle de Cartagena",
    credit: "Pexels",
  },
  cartagenaDoor: {
    src: pexels("2166559"),
    alt: "Puerta y fachada colonial en el Centro Histórico de Cartagena",
    credit: "Pexels",
  },
  cartagenaDetail: {
    src: pexels("2166558"),
    alt: "Detalle arquitectónico colonial en Cartagena de Indias",
    credit: "Pexels",
  },
  caribbeanPort: {
    src: pexels("3225531"),
    alt: "Bahía y costa del Caribe colombiano con luz cálida",
    credit: "Pexels",
  },
  caribbeanWater: {
    src: pexels("3225528"),
    alt: "Agua turquesa del Caribe vista desde la costa",
    credit: "Pexels",
  },
} satisfies Record<string, StockImage>;

const people = {
  afroStudent: {
    src: unsplash("photo-1531123897727-8f129e1688ce"),
    alt: "Joven afrodescendiente con expresión serena, comunidad estudiantil",
    credit: "Unsplash",
  },
  afroProfessor: {
    src: unsplash("photo-1573496359142-b8d87734a5a2"),
    alt: "Docente afrodescendiente en entorno profesional",
    credit: "Unsplash",
  },
  afroColleague: {
    src: unsplash("photo-1522529599102-193c0d76b5b6"),
    alt: "Profesional afrodescendiente sonriente, retrato institucional",
    credit: "Unsplash",
  },
  meeting: {
    src: unsplash("photo-1573164713714-d95e436ab8d6"),
    alt: "Mujer profesional afrodescendiente en una reunión de trabajo",
    credit: "Unsplash",
  },
  studentsCampus: {
    src: unsplash("photo-1529156069898-49953e39b3ac"),
    alt: "Grupo de jóvenes afrodescendientes conversando al aire libre",
    credit: "Unsplash",
  },
  studentsCollab: {
    src: unsplash("photo-1522202176988-66273c2fd55f"),
    alt: "Estudiantes colaborando alrededor de una mesa con cuadernos y laptops",
    credit: "Unsplash",
  },
  communityHands: {
    src: unsplash("photo-1582213782179-e0d53f98f2ca"),
    alt: "Manos unidas en círculo, símbolo de comunidad y servicio",
    credit: "Unsplash",
  },
  communityGather: {
    src: unsplash("photo-1469571486292-0ba58a3f068b"),
    alt: "Personas reunidas al aire libre en un acto comunitario",
    credit: "Unsplash",
  },
  teamOffice: {
    src: unsplash("photo-1600880292203-757bb62b4baf"),
    alt: "Equipo diverso reunido en una mesa de trabajo",
    credit: "Unsplash",
  },
} satisfies Record<string, StockImage>;

const craft = {
  library: {
    src: unsplash("photo-1521587760476-6c12a4b040da"),
    alt: "Sala de lectura universitaria con estanterías de libros",
    credit: "Unsplash",
  },
  oldBooks: {
    src: unsplash("photo-1505664194779-8beaceb93744"),
    alt: "Tomos antiguos de derecho y humanidades en estantería",
    credit: "Unsplash",
  },
  documents: {
    src: unsplash("photo-1450101499163-c8848c66ca85"),
    alt: "Manos firmando documentos legales sobre un escritorio",
    credit: "Unsplash",
  },
  studyDesk: {
    src: unsplash("photo-1434030216411-0b793f4b4173"),
    alt: "Cuaderno abierto, pluma y café en mesa de estudio",
    credit: "Unsplash",
  },
  classroom: {
    src: unsplash("photo-1541339907198-e08756dedf3f"),
    alt: "Aula universitaria con filas de asientos y pizarra",
    credit: "Unsplash",
  },
  graduation: {
    src: unsplash("photo-1627556704290-2b1f5853ff78"),
    alt: "Estudiantes con toga y birrete en ceremonia de graduación",
    credit: "Unsplash",
  },
  lecture: {
    src: unsplash("photo-1523240795612-9a054b0db644"),
    alt: "Estudiantes sentados en un espacio académico conversando",
    credit: "Unsplash",
  },
  research: {
    src: unsplash("photo-1454165804606-c3d57bc86b40"),
    alt: "Manos sobre documentos y laptop en mesa de investigación",
    credit: "Unsplash",
  },
  counsel: {
    src: unsplash("photo-1507679799987-c73779587ccf"),
    alt: "Profesional con traje en entorno de oficina, asesoría seria",
    credit: "Unsplash",
  },
  openBook: {
    src: unsplash("photo-1497633762265-9d179a990aa6"),
    alt: "Libro abierto sobre mesa de madera con luz natural",
    credit: "Unsplash",
  },
} satisfies Record<string, StockImage>;

/** Catálogo unificado + alias estables para páginas existentes. */
export const images = {
  ...place,
  ...people,
  ...craft,
  // aliases
  lawBooks: craft.oldBooks,
  seminar: craft.studyDesk,
  studentsStudy: people.studentsCollab,
  community: people.communityGather,
  caribbeanCoast: place.caribbeanPort,
} satisfies Record<string, StockImage>;
