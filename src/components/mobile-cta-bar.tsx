"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { site } from "@/content/site";

function shouldShow(pathname: string) {
  if (pathname === "/") return true;
  if (pathname === "/oferta" || pathname.startsWith("/oferta/")) return true;
  return false;
}

export function MobileCtaBar() {
  const pathname = usePathname();

  if (!shouldShow(pathname)) return null;

  return (
    <>
      <div
        className="fixed inset-x-0 bottom-0 z-40 border-t border-white/15 bg-navy/95 px-3 pt-2.5 pb-[max(0.65rem,env(safe-area-inset-bottom))] shadow-[0_-10px_28px_rgba(6,21,43,0.4)] backdrop-blur-md md:hidden"
        role="region"
        aria-label="Llamados a admisión y pregrado"
      >
        <div className="mx-auto flex max-w-6xl gap-2.5">
          <Button
            asChild
            className="h-11 min-w-0 flex-1 rounded-sm bg-coral text-[0.85rem] font-semibold text-primary-foreground hover:bg-coral-deep"
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
            variant="outline"
            className="h-11 min-w-0 flex-1 rounded-sm border-white/45 bg-transparent text-[0.85rem] font-semibold text-white hover:bg-white/10 hover:text-white"
          >
            <Link href="/oferta/pregrado">Pregrado</Link>
          </Button>
        </div>
      </div>
      <div className="h-[4.75rem] md:hidden" aria-hidden="true" />
    </>
  );
}
