"use client";

import Link from "next/link";
import { Label } from "@/components/ui/label";

export function DataTreatmentConsent({
  id,
  variant = "form",
}: {
  id: string;
  variant?: "form" | "login";
}) {
  const copy =
    variant === "login"
      ? "Autorizo de manera previa, expresa e informada el tratamiento de los datos que ingrese en este formulario de demostración, conforme a la"
      : "Autorizo de manera previa, expresa e informada el tratamiento de mis datos personales (nombre, correo y mensaje) para atender esta consulta de demostración, conforme a la";

  return (
    <div className="flex items-start gap-3 rounded-sm border border-border bg-sand/40 p-3">
      <input
        id={id}
        name="autorizacionDatos"
        type="checkbox"
        required
        className="mt-1 size-4 shrink-0 accent-navy"
      />
      <Label htmlFor={id} className="text-sm leading-relaxed font-normal text-ink">
        {copy}{" "}
        <Link
          href="/politica-de-privacidad"
          className="text-blue underline underline-offset-4"
        >
          Política de tratamiento de datos personales
        </Link>{" "}
        (Ley 1581 de 2012) y el{" "}
        <Link
          href="/aviso-de-privacidad"
          className="text-blue underline underline-offset-4"
        >
          aviso de privacidad
        </Link>
        . El envío no sustituye un trámite oficial de la Universidad de
        Cartagena. Este prototipo no transmite el formulario a un servidor.
      </Label>
    </div>
  );
}
