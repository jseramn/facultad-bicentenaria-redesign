"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu } from "lucide-react";
import { BrandMark } from "@/components/brand-mark";
import { AccessibilityDialog } from "@/components/accessibility-dialog";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { demoNav, primaryNav, utilityNav, type NavItem } from "@/content/navigation";
import { site } from "@/content/site";
import { cn } from "@/lib/utils";

function isActivePath(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

function DemoChip({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "rounded-sm bg-gold/20 px-1.5 py-px text-[0.58rem] font-semibold tracking-[0.12em] text-gold-bright uppercase",
        className,
      )}
    >
      demo
    </span>
  );
}

function navItemClass(active: boolean, variant: "desktop" | "sheet") {
  if (variant === "desktop") {
    return cn(
      "relative block rounded-md px-2 py-1.5 text-[0.8rem] font-semibold tracking-wide whitespace-nowrap transition-colors xl:px-2.5",
      active
        ? "bg-gold/15 text-gold-bright shadow-[inset_0_-2px_0_0_var(--gold-bright)]"
        : "text-primary-foreground/85 hover:bg-white/10 hover:text-white",
    );
  }

  return cn(
    "flex items-center justify-between gap-2 rounded-md px-3 py-2.5 text-sm font-semibold transition-colors",
    active
      ? "border-l-[3px] border-gold-bright bg-gold/15 text-gold-bright"
      : "border-l-[3px] border-transparent text-primary-foreground hover:bg-white/10",
  );
}

function NavLabel({ item }: { item: NavItem }) {
  return (
    <span className="inline-flex min-w-0 items-center gap-1.5">
      {item.label}
      {item.demo ? <DemoChip /> : null}
    </span>
  );
}

function DesktopNav({ pathname }: { pathname: string }) {
  return (
    <ul className="flex min-w-0 flex-wrap items-center gap-x-0.5 gap-y-1">
      {primaryNav.map((item) => {
        const active = isActivePath(pathname, item.href);
        return (
          <li key={item.href} className="min-w-0">
            <Link
              href={item.href}
              className={navItemClass(active, "desktop")}
              aria-current={active ? "page" : undefined}
            >
              <NavLabel item={item} />
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

function SheetNavList({
  items,
  pathname,
}: {
  items: NavItem[];
  pathname: string;
}) {
  return (
    <ul className="flex flex-col gap-0.5">
      {items.map((item) => {
        const active = isActivePath(pathname, item.href);
        const external = item.href.startsWith("http");
        return (
          <li key={item.href}>
            <SheetClose asChild>
              <Link
                href={item.href}
                className={navItemClass(active, "sheet")}
                aria-current={active ? "page" : undefined}
                {...(external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                <NavLabel item={item} />
              </Link>
            </SheetClose>
          </li>
        );
      })}
    </ul>
  );
}

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="max-w-full overflow-x-clip bg-navy text-primary-foreground">
      <div className="border-b border-white/10 bg-navy-mid">
        <div className="mx-auto flex max-w-6xl min-w-0 items-center justify-between gap-3 px-4 py-1 md:py-1.5">
          <p className="hidden min-w-0 text-[0.62rem] font-medium tracking-[0.14em] text-primary-foreground/75 uppercase lg:block">
            {site.university} · Institución de educación superior pública
          </p>
          <div className="flex min-w-0 flex-1 items-center justify-start gap-x-3 md:flex-none md:justify-end">
            <nav
              className="hidden min-w-0 md:block"
              aria-label="Enlaces institucionales"
            >
              <ul className="flex max-w-full items-center gap-x-2.5 overflow-x-auto text-[0.7rem] xl:gap-x-3">
                {utilityNav.map((item) => (
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
            <AccessibilityDialog />
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-6xl min-w-0 flex-wrap items-center gap-2 px-4 py-2 md:py-2.5">
        <Link
          href="/"
          className="min-w-0 rounded-sm focus-visible:outline-offset-4"
          aria-label={`${site.brand}. Ir al inicio`}
        >
          <BrandMark />
        </Link>

        <div className="ml-auto flex shrink-0 items-center gap-2">
          <Link
            href="/iniciar-sesion"
            className="hidden items-center gap-1.5 rounded-sm px-2 py-1 text-xs font-semibold text-primary-foreground/80 transition-colors hover:bg-white/10 hover:text-white sm:inline-flex"
          >
            Iniciar sesión
            <DemoChip />
          </Link>

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
              className="max-w-[min(100%,22rem)] overflow-y-auto bg-navy text-primary-foreground"
            >
              <SheetHeader>
                <SheetTitle className="text-left text-primary-foreground">
                  Menú
                </SheetTitle>
              </SheetHeader>
              <nav className="px-2 pb-6" aria-label="Navegación móvil">
                <SheetNavList items={primaryNav} pathname={pathname} />

                <div className="mt-4 border-t border-white/15 pt-4">
                  <p className="px-3 text-[0.65rem] font-semibold tracking-[0.14em] text-gold-bright uppercase">
                    Prototipos
                  </p>
                  <div className="mt-1">
                    <SheetNavList items={demoNav} pathname={pathname} />
                  </div>
                </div>

                <details className="group mt-4 rounded-md border border-white/15">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-2 px-3 py-2.5 text-sm font-semibold text-primary-foreground [&::-webkit-details-marker]:hidden">
                    Institucional
                    <ChevronDown className="size-4 shrink-0 transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="border-t border-white/10 px-1 pb-2">
                    <SheetNavList items={utilityNav} pathname={pathname} />
                  </div>
                </details>

                <p className="mt-5 px-3 text-xs text-primary-foreground/70">
                  {site.address.venue}, {site.address.city}
                </p>
              </nav>
            </SheetContent>
          </Sheet>
        </div>

        <nav
          className="hidden w-full min-w-0 md:block"
          aria-label="Navegación principal"
        >
          <DesktopNav pathname={pathname} />
        </nav>
      </div>
    </header>
  );
}
