"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function LoginForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-xl border border-border bg-card p-6" role="status">
        <h2 className="font-serif text-2xl text-navy">Acceso de demostración</h2>
        <p className="mt-3 text-sm text-muted-foreground">
          El inicio de sesión institucional aún no está conectado a un directorio
          real. Use los sistemas de la Universidad de Cartagena para correo,
          notas y trámites. El foro de este sitio opera con hilos de muestra.
        </p>
        <Button asChild className="mt-5 bg-navy text-primary-foreground hover:bg-navy-mid">
          <Link href="/foro">Ir al foro académico</Link>
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="space-y-2">
        <Label htmlFor="usuario">Usuario o correo institucional</Label>
        <Input
          id="usuario"
          name="usuario"
          type="email"
          required
          autoComplete="username"
          placeholder="nombre@unicartagena.edu.co"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="clave">Contraseña</Label>
        <Input
          id="clave"
          name="clave"
          type="password"
          required
          autoComplete="current-password"
        />
      </div>
      <Button
        type="submit"
        className="w-full bg-gold text-navy hover:bg-gold-bright"
        size="lg"
      >
        Iniciar sesión
      </Button>
      <p className="text-center text-xs text-muted-foreground">
        Entorno de prueba. No ingrese su contraseña real de la Universidad.
      </p>
    </form>
  );
}
