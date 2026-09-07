"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { BrandMark } from "@/components/brand-mark";
import { AccessibilityToolbar } from "@/components/accessibility-toolbar";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { primaryNav, utilityNav } from "@/content/navigation";
import { site } from "@/content/site";
import { cn } from "@/lib/utils";

function DesktopNav() {
  const pathname = usePathname();

  return (
    <ul className="flex min-w-0 flex-wrap items-center gap-x-0.5 gap-y-1">
      {primaryNav.map((item) => {
        const active =
          pathname === item.href || pathname.startsWith(`${item.href}/`);
        return (
          <li key={item.href} className="min-w-0">
            <Link
              href={item.href}
              className={cn(
                "block rounded-md px-2 py-1.5 text-[0.8rem] font-semibold tracking-wide whitespace-nowrap transition-colors xl:px-2.5",
                active
                  ? "bg-white/10 text-gold-bright"
                  : "text-primary-foreground/90 hover:bg-white/10 hover:text-white",
              )}
              aria-current={active ? "page" : undefined}
            >
              {item.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export function SiteHeader() {
  return (
    <header className="max-w-full overflow-x-clip bg-navy text-primary-foreground">
      <div className="border-b border-white/10 bg-navy-mid">
        <div className="mx-auto flex max-w-6xl min-w-0 flex-wrap items-center justify-between gap-x-3 gap-y-2 px-4 py-2">
          <p className="min-w-0 text-[0.65rem] font-medium tracking-[0.12em] text-primary-foreground/80 uppercase sm:text-[0.7rem]">
            <span className="sm:hidden">UdeC · Facultad pública</span>
            <span className="hidden sm:inline">
              {site.university} · Institución de educación superior pública
            </span>
          </p>
          <div className="flex min-w-0 flex-wrap items-center gap-x-3 gap-y-2">
            <nav aria-label="Enlaces institucionales">
              <ul className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs">
                {utilityNav.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-primary-foreground/85 underline-offset-4 hover:text-white hover:underline"
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
            <AccessibilityToolbar />
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-6xl min-w-0 flex-wrap items-center gap-2 px-4 py-3">
        <Link
          href="/"
          className="min-w-0 rounded-sm focus-visible:outline-offset-4"
          aria-label={`${site.brand}. Ir al inicio`}
        >
          <BrandMark />
        </Link>

        <div className="ml-auto flex shrink-0 items-center gap-2">
          <Button
            asChild
            className="hidden bg-gold text-navy hover:bg-gold-bright sm:inline-flex"
            size="sm"
          >
            <Link href="/iniciar-sesion">Iniciar sesión</Link>
          </Button>

          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="border-white/30 bg-transparent text-white hover:bg-white/10 md:hidden"
                aria-label="Abrir menú de navegación"
              >
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="max-w-[min(100%,22rem)] bg-navy text-primary-foreground"
            >
              <SheetHeader>
                <SheetTitle className="text-left text-primary-foreground">
                  Menú
                </SheetTitle>
              </SheetHeader>
              <nav className="px-2" aria-label="Navegación móvil">
                <ul className="flex flex-col gap-1">
                  {primaryNav.map((item) => (
                    <li key={item.href}>
                      <SheetClose asChild>
                        <Link
                          href={item.href}
                          className="block rounded-md px-3 py-2 text-sm font-semibold text-primary-foreground hover:bg-white/10"
                        >
                          {item.label}
                        </Link>
                      </SheetClose>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 border-t border-white/15 px-3 pt-4">
                  <SheetClose asChild>
                    <Link
                      href="/iniciar-sesion"
                      className="inline-flex rounded-md bg-gold px-3 py-2 text-sm font-semibold text-navy"
                    >
                      Iniciar sesión
                    </Link>
                  </SheetClose>
                  <p className="mt-4 text-xs text-primary-foreground/70">
                    {site.address.venue}, {site.address.city}
                  </p>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>

        <nav
          className="hidden w-full min-w-0 md:block"
          aria-label="Navegación principal"
        >
          <DesktopNav />
        </nav>
      </div>
    </header>
  );
}
