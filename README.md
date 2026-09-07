# Facultad Bicentenaria

Sitio institucional de la **Facultad de Derecho y Ciencias Políticas** de la **Universidad de Cartagena**. Sustituye la experiencia anterior de facultadbicentenaria.com: navegación densa, enlace muerto de Comunidad, contadores de investigación en cero y textos con erratas.

Español únicamente. No reproduce fotografías ni assets del sitio previo.

## Qué incluye

- Inicio editorial caribeño con llamados a Admisiones 2027-1 y posgrados
- La Facultad: historia (1827), misión, visión 2027, sede del Claustro de San Agustín, trámites
- Oferta: pregrado SNIES 740, posgrados publicados, diplomados de septiembre 2026, cursos virtuales
- Consultorio Jurídico Antenor Barboza Avendaño y Centro de Conciliación
- Investigación sin cifras inventadas
- Foro académico de demostración, noticias, eventos, comunidad, contacto y declaración de accesibilidad

Los datos de contacto, SNIES, registro calificado y fichas de posgrado provienen de fuentes públicas de la Universidad de Cartagena. Donde no hay dato verificado se indica «consultar con la Facultad».

## Cómo ejecutarlo

Requisitos: Node.js 20 o superior y npm.

```bash
npm install
npm run dev
```

El servidor de desarrollo queda en [http://127.0.0.1:43123](http://127.0.0.1:43123).

```bash
npm run build
npm start
```

## Estructura

```
src/app/                 Rutas App Router (páginas, sitemap, robots)
src/components/          Cabecera, pie, barra de accesibilidad, formularios
src/components/ui/       Primitivas shadcn/ui (botón, acordeón, hoja móvil, etc.)
src/content/             Contenido tipado en TypeScript (fichas, noticias, eventos)
src/lib/utils.ts         Utilidad de clases
```

Rutas principales: `/`, `/la-facultad`, `/oferta`, `/oferta/pregrado`, `/oferta/posgrados`, `/oferta/educacion-continua`, `/oferta/cursos-virtuales`, `/consultorio-juridico`, `/investigacion`, `/foro`, `/noticias`, `/eventos`, `/contacto`, `/comunidad`, `/accesibilidad`.

Mapa del sitio: `/sitemap.xml`.

## Accesibilidad

El sitio apunta a **WCAG 2.1 nivel AA**:

- Enlace «Saltar al contenido principal»
- Landmarks de encabezado, navegación, contenido y pie
- Foco visible y operación por teclado
- Barra superior: tamaño de texto (A / A+ / A++) y contraste alto (preferencia en el navegador)
- `lang="es-CO"` y textos alternativos en español
- Página `/accesibilidad` con la declaración y el uso de la barra

## Fotografía y tipografía

- Imágenes de **Unsplash** y **Pexels** (patrones remotos en `next.config.ts`). Representación caribeña y afrocolombiana, recortes institucionales, sin material del sitio anterior.
- **Newsreader** (titulares) y **Source Sans 3** (cuerpo), cargadas con `next/font`.
- Paleta: marino `#021438`, azul `#13578e`, acento dorado contenido `#c4a35a`.

## Notas editoriales

- El Consultorio se nombra según la Universidad: **Antenor Barboza Avendaño**.
- El foro y el inicio de sesión son prototipos: no conectan al directorio institucional. No introduzca contraseñas reales.
- El formulario de contacto no envía correo; indica los canales oficiales.
- No se publican grupos de investigación, rankings ni matrículas no verificadas.

## Licencia de uso

Proyecto de reemplazo informativo de una sede digital de facultad pública. El contenido factual pertenece a la Universidad de Cartagena y a las normas que cita. Las fotografías conservan la licencia de Unsplash o Pexels.
