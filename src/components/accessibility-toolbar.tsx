"use client";

import Link from "next/link";
import { useAccessibility } from "@/components/accessibility-provider";
import { Button } from "@/components/ui/button";

export function AccessibilityToolbar() {
  const { fontSize, highContrast, setFontSize, toggleContrast, reset } =
    useAccessibility();

  return (
    <div
      className="flex flex-wrap items-center gap-1"
      role="group"
      aria-label="Barra de accesibilidad"
    >
      <Button
        type="button"
        variant="ghost"
        size="xs"
        className="h-7 px-2 text-primary-foreground hover:bg-white/10 hover:text-primary-foreground"
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
        className="h-7 px-2 text-base text-primary-foreground hover:bg-white/10 hover:text-primary-foreground"
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
        className="h-7 px-2 text-lg text-primary-foreground hover:bg-white/10 hover:text-primary-foreground"
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
        className="h-7 px-2 text-primary-foreground hover:bg-white/10 hover:text-primary-foreground"
        onClick={toggleContrast}
        aria-pressed={highContrast}
      >
        Contraste
      </Button>
      <Button
        type="button"
        variant="ghost"
        size="xs"
        className="h-7 px-2 text-primary-foreground/80 hover:bg-white/10 hover:text-primary-foreground"
        onClick={reset}
      >
        Restablecer
      </Button>
      <Button
        variant="ghost"
        size="xs"
        className="h-7 px-2 text-primary-foreground hover:bg-white/10 hover:text-primary-foreground"
        asChild
      >
        <Link href="/accesibilidad">Ayuda</Link>
      </Button>
    </div>
  );
}
