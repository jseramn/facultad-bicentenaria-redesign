import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main
      id="contenido-principal"
      className="mx-auto flex min-h-[60vh] max-w-2xl flex-col justify-center px-4 py-20"
    >
      <p className="text-xs font-semibold tracking-[0.2em] text-blue uppercase">
        Error 404
      </p>
      <h1 className="mt-3 font-serif text-4xl text-navy">
        Esta página no está en el mapa del sitio
      </h1>
      <p className="mt-4 text-muted-foreground">
        El enlace puede estar desactualizado —el sitio anterior tenía rutas rotas,
        como Comunidad—. Vuelva al inicio o use la navegación principal.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Button asChild className="bg-navy text-primary-foreground hover:bg-navy-mid">
          <Link href="/">Ir al inicio</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/contacto">Contacto</Link>
        </Button>
      </div>
    </main>
  );
}
