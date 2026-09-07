"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div
        className="rounded-xl border border-border bg-card p-6"
        role="status"
      >
        <h2 className="font-serif text-2xl text-navy">Mensaje registrado en esta sesión</h2>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          Este formulario es una interfaz de demostración: no envía correo todavía.
          Para una solicitud real escriba a{" "}
          <a className="underline" href="mailto:fderecho@unicartagena.edu.co">
            fderecho@unicartagena.edu.co
          </a>{" "}
          o llame al (+57) 316 439 0360, extensiones 152 y 153.
        </p>
        <Button
          type="button"
          className="mt-5 bg-navy text-primary-foreground hover:bg-navy-mid"
          onClick={() => setSent(false)}
        >
          Redactar otro mensaje
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 rounded-xl border border-border bg-card p-6"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="nombre">Nombre completo</Label>
          <Input id="nombre" name="nombre" required autoComplete="name" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="correo">Correo electrónico</Label>
          <Input
            id="correo"
            name="correo"
            type="email"
            required
            autoComplete="email"
          />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="asunto">Asunto</Label>
        <Input id="asunto" name="asunto" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="mensaje">Mensaje</Label>
        <Textarea
          id="mensaje"
          name="mensaje"
          required
          rows={6}
          placeholder="Indique su consulta. No envíe datos sensibles de terceros ni expedientes completos por este canal."
        />
      </div>
      <p className="text-xs text-muted-foreground">
        Al enviar acepta que este demo no constituye petición oficial. Para
        trámites con efectos administrativos use los canales de la Universidad de
        Cartagena.
      </p>
      <Button
        type="submit"
        className="bg-gold text-navy hover:bg-gold-bright"
        size="lg"
      >
        Enviar mensaje
      </Button>
    </form>
  );
}
