"use client";

import Link from "next/link";
import { useAccessibility } from "@/components/accessibility-provider";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function AccessibilityToolbar({
  className,
  compact = false,
}: {
  className?: string;
  compact?: boolean;
}) {
  const { fontSize, highContrast, setFontSize, toggleContrast, reset } =
    useAccessibility();

  return (
    <div
      className={cn(
        "flex max-w-full flex-nowrap items-center gap-0.5 overflow-x-auto overscroll-x-contain [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
        compact ? "md:gap-1" : "md:flex-wrap",
        className,
      )}
      role="group"
      aria-label="Barra de accesibilidad"
    >
      <Button
        type="button"
        variant="ghost"
        size="xs"
        className="h-6 shrink-0 px-1.5 text-primary-foreground hover:bg-white/10 hover:text-primary-foreground md:h-7 md:px-2"
        onClick={() => setFontSize("md")}
        aria-pressed={fontSize === "md"}
      >
        A
        <span className="sr-only">Tamaño de texto habitual</span>
      </Button>
      <Button
        type="button"
        variant="ghost"
        size="xs"
        className="h-6 shrink-0 px-1.5 text-base text-primary-foreground hover:bg-white/10 hover:text-primary-foreground md:h-7 md:px-2"
        onClick={() => setFontSize("lg")}
        aria-pressed={fontSize === "lg"}
      >
        A+
        <span className="sr-only">Aumentar tamaño de texto</span>
      </Button>
      <Button
        type="button"
        variant="ghost"
        size="xs"
        className="h-6 shrink-0 px-1.5 text-lg text-primary-foreground hover:bg-white/10 hover:text-primary-foreground md:h-7 md:px-2"
        onClick={() => setFontSize("xl")}
        aria-pressed={fontSize === "xl"}
      >
        A++
        <span className="sr-only">Tamaño de texto máximo</span>
      </Button>
      <Button
        type="button"
        variant="ghost"
        size="xs"
        className="h-6 shrink-0 px-1.5 text-primary-foreground hover:bg-white/10 hover:text-primary-foreground md:h-7 md:px-2"
        onClick={toggleContrast}
        aria-pressed={highContrast}
      >
        Contraste
      </Button>
      <Button
        type="button"
        variant="ghost"
        size="xs"
        className="h-6 shrink-0 px-1.5 text-primary-foreground/80 hover:bg-white/10 hover:text-primary-foreground md:h-7 md:px-2"
        onClick={reset}
      >
        Restablecer
      </Button>
      <Button
        variant="ghost"
        size="xs"
        className="h-6 shrink-0 px-1.5 text-primary-foreground hover:bg-white/10 hover:text-primary-foreground md:h-7 md:px-2"
        asChild
      >
        <Link href="/accesibilidad">Ayuda</Link>
      </Button>
    </div>
  );
}
