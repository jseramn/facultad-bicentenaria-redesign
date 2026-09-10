import Link from "next/link";
import { footerNav } from "@/content/navigation";
import { site } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="mt-auto max-w-full overflow-x-clip bg-navy text-primary-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-4">
        <div className="md:col-span-1">
          <p className="font-serif text-xl text-balance">{site.faculty}</p>
          <p className="mt-2 text-sm text-primary-foreground/75">
            {site.university}
          </p>
          <div className="gold-rule mt-4" />
          <address className="mt-4 text-sm leading-relaxed text-primary-foreground/80 not-italic">
            {site.address.venue}
            <br />
            {site.address.street}
            <br />
            {site.address.district}, {site.address.city}
            <br />
            {site.address.department}, {site.address.country}
          </address>
        </div>

        <nav aria-label="Facultad">
          <p className="text-xs font-semibold tracking-[0.16em] text-gold uppercase">
            Facultad
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            {footerNav.facultad.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-primary-foreground/80 underline-offset-4 hover:text-white hover:underline"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Comunidad">
          <p className="text-xs font-semibold tracking-[0.16em] text-gold uppercase">
            Comunidad
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            {footerNav.comunidad.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-primary-foreground/80 underline-offset-4 hover:text-white hover:underline"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="text-xs font-semibold tracking-[0.16em] text-gold uppercase">
            Contacto y servicio
          </p>
          <ul className="mt-3 space-y-2 text-sm text-primary-foreground/80">
            <li>
              <a className="hover:underline" href={`tel:+573164390360`}>
                {site.phones.switchboard} · Ext. {site.phones.facultyExt}
              </a>
            </li>
            <li>
              Consultorio Ext. {site.phones.consultorioExt}
            </li>
            <li>
              <a className="hover:underline" href={`mailto:${site.emails.facultad}`}>
                {site.emails.facultad}
              </a>
            </li>
            {footerNav.servicio.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="underline-offset-4 hover:text-white hover:underline"
                  {...(item.href.startsWith("http")
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-4 text-xs text-primary-foreground/65">
          <nav aria-label="Información legal">
            <ul className="flex flex-wrap gap-x-4 gap-y-2">
              {footerNav.legal.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-primary-foreground/80 underline-offset-4 hover:text-white hover:underline"
                    {...(item.href.startsWith("http")
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex flex-col gap-2 sm:flex-row sm:justify-between">
            <p>
              Universidad de Cartagena · Facultad de Derecho y Ciencias Políticas.
              Sitio de información pública; no reemplaza actos administrativos.
            </p>
            <p>Fundada en {site.foundedYear} · Caribe colombiano</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
