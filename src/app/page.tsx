import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container, SectionHeader, PhotoStrip } from "@/components/page-shell";
import { Button } from "@/components/ui/button";
import { events, monthShortFromKey, monthKey } from "@/content/events";
import { diplomados, site } from "@/content/site";
import { images } from "@/content/images";
import { newsPosts } from "@/content/news";

const ofertaSecundaria = [
  {
    href: "/oferta/posgrados",
    title: "Posgrados",
    text: "Maestría en Derecho, Maestría en Derecho Penal y Especialización en Derecho Penal.",
  },
  {
    href: "/oferta/educacion-continua",
    title: "Educación continua",
    text: "Diplomados de actualización con inicio previsto en septiembre de 2026.",
  },
  {
    href: "/oferta/cursos-virtuales",
    title: "Cursos virtuales",
    text: "Oferta corta a distancia. Cupos y valores: consultar con la Facultad.",
  },
];

export default function HomePage() {
  return (
    <main id="contenido-principal" className="min-w-0 overflow-x-clip">
      <section className="relative isolate min-h-[min(78svh,42rem)] overflow-hidden bg-navy text-primary-foreground">
        <Image
          src={images.heroCartagena.src}
          alt={images.heroCartagena.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_35%]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/80 to-navy/35" />
        <div className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-navy/90 via-navy/55 to-transparent md:w-3/4" />
        <Container className="relative z-10 flex min-h-[min(78svh,42rem)] flex-col justify-end pb-12 pt-24 md:pb-16">
          <p className="inline-flex w-fit items-center gap-2 border border-coral/60 bg-navy/40 px-3 py-1 text-[0.7rem] font-semibold tracking-[0.18em] text-gold-bright uppercase backdrop-blur-sm">
            {site.university} · desde {site.foundedYear}
          </p>
          <h1 className="mt-5 max-w-3xl font-serif text-[2.35rem] leading-[1.08] text-balance sm:text-5xl md:text-6xl">
            Derecho del Caribe,
            <span className="block text-gold-bright">con casa en el Claustro</span>
          </h1>
          <p className="mt-5 max-w-xl text-base text-pretty text-primary-foreground/90 sm:text-lg">
            {site.tagline}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button
              asChild
              size="lg"
              className="h-11 rounded-sm bg-coral px-6 text-primary-foreground hover:bg-coral-deep"
            >
              <a
                href={site.official.admissions}
                target="_blank"
                rel="noopener noreferrer"
              >
                Admisiones 2027-1
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-11 rounded-sm border-white/45 bg-transparent px-6 text-white hover:bg-white/10 hover:text-white"
            >
              <Link href="/oferta/pregrado">Pregrado en Derecho</Link>
            </Button>
          </div>
          <dl className="mt-10 grid max-w-2xl grid-cols-2 gap-x-6 gap-y-4 border-t border-white/15 pt-6 sm:grid-cols-4">
            {[
              ["SNIES", "740"],
              ["Créditos", "160"],
              ["Sede", "Claustro"],
              ["Extensión", "Cereté · Magangué"],
            ].map(([k, v]) => (
              <div key={k}>
                <dt className="text-[0.65rem] tracking-[0.14em] text-primary-foreground/65 uppercase">
                  {k}
                </dt>
                <dd className="mt-1 font-serif text-lg text-gold-bright sm:text-xl">{v}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <section className="border-b border-border bg-sand/40 py-4 md:py-5" aria-label="Cartagena Bicentenaria">
        <Container>
          <PhotoStrip
            items={[
              images.cartagenaWalls,
              images.cartagenaColor,
              images.cartagenaBalcony,
              images.caribbeanPort,
            ]}
          />
        </Container>
      </section>

      <section className="bg-background py-14 md:py-20" aria-labelledby="oferta-titulo">
        <Container>
          <div className="grid min-w-0 gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="text-xs font-semibold tracking-[0.16em] text-coral uppercase">
                Oferta académica
              </p>
              <h2
                id="oferta-titulo"
                className="mt-3 font-serif text-3xl text-navy text-balance md:text-4xl"
              >
                Formar juristas para Cartagena, el Caribe y el país
              </h2>
              <div className="gold-rule mt-4" />
              <p className="mt-5 text-sm leading-relaxed text-ink/85 md:text-base">
                Pregrado con ficha MEN, posgrados publicados por la Universidad y
                educación continua. Lo que no esté en ficha se consulta con la Facultad.
              </p>
            </div>

            <div className="min-w-0 lg:col-span-7">
              <Link href="/oferta/pregrado" className="group block min-w-0">
                <article className="editorial-frame grid min-w-0 overflow-hidden bg-card ring-1 ring-border sm:grid-cols-2">
                  <div className="relative min-h-[220px] sm:min-h-full">
                    <Image
                      src={images.library.src}
                      alt={images.library.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, 35vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="flex flex-col justify-center p-6 md:p-8">
                    <p className="text-xs font-semibold tracking-[0.14em] text-coral uppercase">
                      Pregrado · presencial
                    </p>
                    <h3 className="mt-2 font-serif text-2xl text-navy md:text-3xl">
                      Programa de Derecho
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-ink/80">
                      SNIES 740 · 160 créditos · jornadas diurna y vespertina ·
                      práctica en consultorio jurídico.
                    </p>
                    <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-blue">
                      Ver ficha del programa
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </article>
              </Link>

              <ul className="mt-4 divide-y divide-border border border-border bg-card">
                {ofertaSecundaria.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="group flex items-start justify-between gap-4 px-5 py-4 transition-colors hover:bg-sand/60"
                    >
                      <div className="min-w-0">
                        <h3 className="font-serif text-xl text-navy">{item.title}</h3>
                        <p className="mt-1 text-sm text-ink/75">{item.text}</p>
                      </div>
                      <ArrowRight className="mt-1 size-4 shrink-0 text-coral transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y border-border bg-sand py-14 md:py-16">
        <Container className="grid items-stretch gap-0 lg:grid-cols-2">
          <div className="relative min-h-[300px] overflow-hidden lg:min-h-[380px]">
            <Image
              src={images.cartagenaWalls.src}
              alt={images.cartagenaWalls.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-center bg-navy p-8 text-primary-foreground md:p-12">
            <p className="text-xs font-semibold tracking-[0.16em] text-coral uppercase">
              Claustro de San Agustín
            </p>
            <h2 className="mt-3 font-serif text-3xl text-balance md:text-4xl">
              Casa de la Facultad en el Centro Histórico
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-primary-foreground/88 md:text-base">
              Unidad académica fundacional de la Universidad de Cartagena. Entre
              sus egresados documentados está Rafael Núñez. El currículo con énfasis
              investigativo se consolida hacia 1990.
            </p>
            <Button
              asChild
              className="mt-8 w-fit rounded-sm bg-coral text-primary-foreground hover:bg-coral-deep"
            >
              <Link href="/la-facultad">
                Historia, misión y trámites
                <ArrowRight />
              </Link>
            </Button>
          </div>
        </Container>
      </section>

      <section className="py-14 md:py-16" aria-labelledby="continua-titulo">
        <Container>
          <div className="flex flex-col gap-4 border-b border-border pb-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeader
              id="continua-titulo"
              kicker="Formación avanzada"
              title="Diplomados · septiembre 2026"
              description="Educación continua anunciada. Inscripciones y valores se confirman con la Facultad."
            />
            <Button asChild variant="outline" className="shrink-0 rounded-sm border-navy text-navy">
              <Link href="/oferta/educacion-continua">Ver todos</Link>
            </Button>
          </div>
          <div className="mt-0 divide-y divide-border">
            {diplomados.map((item, i) => (
              <article
                key={item.slug}
                className="grid gap-2 py-5 sm:grid-cols-[4rem_1fr_auto] sm:items-baseline sm:gap-6"
              >
                <p className="font-serif text-2xl text-coral/80">0{i + 1}</p>
                <div className="min-w-0">
                  <h3 className="font-serif text-xl text-navy text-balance">{item.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink/80">{item.summary}</p>
                </div>
                <p className="text-xs font-semibold tracking-wide text-navy uppercase sm:text-right">
                  {item.start}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-card py-14 md:py-16" aria-labelledby="agenda-titulo">
        <Container>
          <div className="grid min-w-0 gap-12 lg:grid-cols-2">
            <div className="min-w-0">
              <SectionHeader
                id="agenda-titulo"
                kicker="Agenda"
                title="Próximos eventos"
                description="Fechas alineadas con cada ficha. Calendario completo en Eventos."
              />
              <ul className="mt-8 space-y-0 border-t border-border">
                {[...events]
                  .sort((a, b) => a.date.localeCompare(b.date))
                  .slice(0, 3)
                  .map((event) => (
                    <li key={event.slug} className="min-w-0 border-b border-border">
                      <Link
                        href={`/eventos#${monthKey(event.date)}`}
                        className="flex min-w-0 gap-4 py-4 transition-colors hover:bg-sand/50"
                      >
                        <div className="flex w-14 shrink-0 flex-col items-start justify-center text-navy">
                          <span className="text-[0.65rem] tracking-wide text-coral uppercase">
                            {monthShortFromKey(monthKey(event.date))}
                          </span>
                          <span className="font-serif text-3xl leading-none">
                            {event.date.slice(8)}
                          </span>
                        </div>
                        <div className="min-w-0">
                          <p className="text-xs font-semibold tracking-wide text-ink/60 uppercase">
                            {event.kind}
                          </p>
                          <h3 className="mt-1 font-serif text-lg text-navy text-balance">
                            {event.title}
                          </h3>
                          <p className="mt-1 text-sm text-ink/75">{event.dateLabel}</p>
                        </div>
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>

            <div className="min-w-0">
              <SectionHeader
                kicker="Actualidad"
                title="Noticias de la Facultad"
                description="Orientación institucional. No sustituye boletines de Rectoría."
              />
              <ul className="mt-8 space-y-6">
                {newsPosts.map((post) => (
                  <li key={post.slug} className="min-w-0">
                    <p className="text-xs text-ink/65">
                      {post.dateLabel} · {post.category}
                    </p>
                    <h3 className="mt-1 font-serif text-xl text-navy text-balance">
                      <Link href={`/noticias/${post.slug}`} className="hover:underline">
                        {post.title}
                      </Link>
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink/80">{post.excerpt}</p>
                  </li>
                ))}
              </ul>
              <Button asChild variant="link" className="mt-2 px-0 text-coral">
                <Link href="/noticias">
                  Ver todas las noticias
                  <ArrowRight />
                </Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <section className="relative isolate overflow-hidden py-16 text-primary-foreground md:py-20">
        <Image
          src={images.communityHands.src}
          alt={images.communityHands.alt}
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-navy/82" />
        <Container className="relative z-10 grid min-w-0 gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="min-w-0">
            <p className="text-xs font-semibold tracking-[0.16em] text-coral uppercase">
              Proyección social
            </p>
            <h2 className="mt-3 font-serif text-3xl text-balance md:text-4xl">
              Consultorio Jurídico Antenor Boza Avendaño
            </h2>
            <p className="mt-4 max-w-xl text-pretty text-primary-foreground/90">
              Asesoría gratuita para personas de escasos recursos y práctica
              supervisada: civil, penal, laboral, familia, público, comercial,
              violencia de género y empresarial, más el Centro de Conciliación.
            </p>
            <Button asChild className="mt-7 rounded-sm bg-coral text-primary-foreground hover:bg-coral-deep">
              <Link href="/consultorio-juridico">Conocer el servicio</Link>
            </Button>
          </div>
          <div className="min-w-0 border border-white/20 bg-navy/55 p-6 backdrop-blur-[1px]">
            <p className="text-xs font-semibold tracking-[0.16em] text-gold-bright uppercase">
              Investigación
            </p>
            <h2 className="mt-3 font-serif text-2xl text-balance md:text-3xl">
              Sin cifras inventadas
            </h2>
            <p className="mt-4 text-pretty text-primary-foreground/90">
              No publicamos contadores en cero ni inventamos artículos. Grupos y
              productos vigentes se consultan con la Facultad.
            </p>
            <Button
              asChild
              variant="outline"
              className="mt-6 rounded-sm border-white/45 bg-transparent text-white hover:bg-white/10 hover:text-white"
            >
              <Link href="/investigacion">Ver investigación</Link>
            </Button>
          </div>
        </Container>
      </section>

      <section className="py-14 md:py-16">
        <Container>
          <SectionHeader
            kicker="Comunidad"
            title="Tres puertas de servicio"
            description="Estudiantes, egresados y docentes. Ruta que sustituye el enlace vacío del sitio anterior."
          />
          <div className="mt-8 grid min-w-0 gap-px bg-border sm:grid-cols-3">
            {[
              {
                href: "/comunidad",
                title: "Estudiantes",
                image: images.afroStudent,
                text: "Pregrado, consultorio y foro académico.",
              },
              {
                href: "/comunidad",
                title: "Egresados",
                image: images.afroColleague,
                text: "Posgrados, educación continua y red profesional.",
              },
              {
                href: "/comunidad",
                title: "Docentes",
                image: images.afroProfessor,
                text: "Investigación, extensión y convocatorias.",
              },
            ].map((hub) => (
              <Link key={hub.title} href={hub.href} className="group min-w-0 bg-card">
                <article>
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={hub.image.src}
                      alt={hub.image.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, 33vw"
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-serif text-xl text-navy">{hub.title}</h3>
                    <p className="mt-1 text-sm text-ink/80">{hub.text}</p>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
