import type { Metadata } from "next";
import { LoginForm } from "@/components/login-form";
import { Container } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Iniciar sesión",
  description:
    "Acceso de demostración al foro de la Facultad Bicentenaria. No está conectado al directorio de la Universidad de Cartagena.",
};

export default function LoginPage() {
  return (
    <main id="contenido-principal" className="py-16 md:py-24">
      <Container className="max-w-md">
        <p className="text-xs font-semibold tracking-[0.2em] text-blue uppercase">
          Acceso
        </p>
        <h1 className="mt-3 font-serif text-3xl text-navy">Iniciar sesión</h1>
        <p className="mt-3 mb-8 text-sm text-muted-foreground">
          Prototipo para el foro académico. No utilice la contraseña de su correo
          institucional ni de los sistemas de notas.
        </p>
        <div className="rounded-sm border border-border bg-card p-6">
          <LoginForm />
        </div>
      </Container>
    </main>
  );
}
