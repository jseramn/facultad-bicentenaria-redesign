import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function DemoNotice({
  className,
  children,
}: {
  className?: string;
  children?: ReactNode;
}) {
  return (
    <div
      className={cn(
        "rounded-sm border border-gold/45 bg-gold/15 px-4 py-3 text-navy",
        className,
      )}
      role="status"
    >
      <p className="text-[0.65rem] font-semibold tracking-[0.16em] uppercase">
        Demostración · sin backend
      </p>
      <p className="mt-1 text-sm leading-relaxed text-ink/85">
        {children ??
          "Prototipo de interfaz. No está conectado al directorio, al correo ni a un foro institucional de la Universidad de Cartagena."}
      </p>
    </div>
  );
}
