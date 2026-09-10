"use client";

import Link from "next/link";
import { Accessibility } from "lucide-react";
import { useAccessibility } from "@/components/accessibility-provider";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

function FontSizeButton({
  size,
  current,
  onSelect,
  children,
  srLabel,
}: {
  size: "md" | "lg" | "xl";
  current: "md" | "lg" | "xl";
  onSelect: (size: "md" | "lg" | "xl") => void;
  children: React.ReactNode;
  srLabel: string;
}) {
  const pressed = current === size;
  return (
    <Button
      type="button"
      variant={pressed ? "default" : "outline"}
      className={cn(
        pressed
          ? "bg-navy text-primary-foreground hover:bg-navy-mid"
          : "border-border bg-card text-navy hover:bg-sand",
      )}
      onClick={() => onSelect(size)}
      aria-pressed={pressed}
    >
      {children}
      <span className="sr-only">{srLabel}</span>
    </Button>
  );
}

export function AccessibilityDialog({ className }: { className?: string }) {
  const { fontSize, highContrast, setFontSize, toggleContrast, reset } =
    useAccessibility();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          type="button"
          variant="ghost"
          size="sm"
          className={cn(
            "h-7 gap-1.5 px-2 text-xs text-primary-foreground hover:bg-white/10 hover:text-primary-foreground",
            className,
          )}
        >
          <Accessibility className="size-3.5" aria-hidden />
          Accesibilidad
        </Button>
      </DialogTrigger>
      <DialogContent
        className="sm:max-w-md"
        aria-describedby="accesibilidad-dialog-desc"
      >
        <DialogHeader>
          <DialogTitle id="accesibilidad-dialog-title" className="font-serif text-xl text-navy">
            Accesibilidad
          </DialogTitle>
          <DialogDescription id="accesibilidad-dialog-desc">
            Ajuste el tamaño del texto y el contraste. Estas preferencias se
            guardan en este navegador (almacenamiento local estrictamente
            necesario para el funcionamiento accesible del sitio) y no son
            analítica.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-5">
          <fieldset className="space-y-2">
            <legend className="text-sm font-semibold text-navy">
              Tamaño de texto
            </legend>
            <div className="flex flex-wrap gap-2">
              <FontSizeButton
                size="md"
                current={fontSize}
                onSelect={setFontSize}
                srLabel="Tamaño de texto habitual"
              >
                A
              </FontSizeButton>
              <FontSizeButton
                size="lg"
                current={fontSize}
                onSelect={setFontSize}
                srLabel="Aumentar tamaño de texto"
              >
                A+
              </FontSizeButton>
              <FontSizeButton
                size="xl"
                current={fontSize}
                onSelect={setFontSize}
                srLabel="Tamaño de texto máximo"
              >
                A++
              </FontSizeButton>
            </div>
          </fieldset>

          <div className="flex flex-wrap gap-2">
            <Button
              type="button"
              variant={highContrast ? "default" : "outline"}
              className={
                highContrast
                  ? "bg-navy text-primary-foreground hover:bg-navy-mid"
                  : "border-border bg-card text-navy hover:bg-sand"
              }
              onClick={toggleContrast}
              aria-pressed={highContrast}
            >
              Contraste alto
            </Button>
            <Button
              type="button"
              variant="ghost"
              className="text-navy hover:bg-sand"
              onClick={reset}
            >
              Restablecer
            </Button>
          </div>
        </div>

        <DialogFooter className="sm:justify-between">
          <DialogClose asChild>
            <Link
              href="/accesibilidad"
              className="inline-flex h-8 items-center text-sm text-blue underline underline-offset-4 hover:text-navy"
            >
              Más información
            </Link>
          </DialogClose>
          <DialogClose asChild>
            <Button className="bg-gold text-navy hover:bg-gold-bright">
              Cerrar
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
