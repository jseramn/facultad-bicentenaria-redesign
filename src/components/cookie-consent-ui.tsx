"use client";

import { useId, useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useCookieConsent } from "@/components/cookie-consent-provider";
import type { CookieConsentRecord } from "@/lib/cookie-consent";

function useHasHydrated() {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );
}

function formatConsentDate(iso: string) {
  try {
    return new Intl.DateTimeFormat("es-CO", {
      dateStyle: "long",
      timeStyle: "short",
      timeZone: "America/Bogota",
    }).format(new Date(iso));
  } catch {
    return iso;
  }
}

function CookieSettingsForm({
  consent,
  onAcceptAll,
  onRejectNonEssential,
  onSave,
}: {
  consent: CookieConsentRecord | null;
  onAcceptAll: () => void;
  onRejectNonEssential: () => void;
  onSave: (next: Pick<CookieConsentRecord, "preferences" | "analytics">) => void;
}) {
  const [preferences, setPreferences] = useState(consent?.preferences === true);
  const [analytics, setAnalytics] = useState(consent?.analytics === true);
  const preferencesId = useId();
  const analyticsId = useId();
  const necessaryId = useId();

  return (
    <>
      <DialogHeader>
        <DialogTitle
          id="cookie-settings-title"
          className="font-serif text-xl text-navy"
        >
          Configurar cookies
        </DialogTitle>
        <DialogDescription id="cookie-settings-desc">
          El consentimiento es previo, expreso e informado por categoría.
          Puede aceptarlo, denegarlo o revocarlo en cualquier momento.
        </DialogDescription>
      </DialogHeader>

      <div className="space-y-4">
        <div className="flex items-start gap-3 rounded-sm border border-border bg-sand/40 p-3">
          <Checkbox id={necessaryId} checked disabled aria-disabled="true" />
          <div>
            <Label htmlFor={necessaryId} className="text-navy">
              Necesarias
            </Label>
            <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
              Siempre activas. Incluyen el registro de esta decisión y las
              preferencias de accesibilidad (tamaño de texto y contraste)
              exigidas para el uso del sitio. No se usan para analítica.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3 rounded-sm border border-border bg-card p-3">
          <Checkbox
            id={preferencesId}
            checked={preferences}
            onCheckedChange={(value) => setPreferences(value === true)}
          />
          <div>
            <Label htmlFor={preferencesId} className="text-navy">
              Preferencias
            </Label>
            <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
              Reservada para ajustes opcionales de interfaz que no sean
              imprescindibles. Hoy este sitio no guarda preferencias
              adicionales en esta categoría.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3 rounded-sm border border-border bg-card p-3">
          <Checkbox
            id={analyticsId}
            checked={analytics}
            onCheckedChange={(value) => setAnalytics(value === true)}
          />
          <div>
            <Label htmlFor={analyticsId} className="text-navy">
              Analíticas
            </Label>
            <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
              Medición de uso con un proveedor institucional, si se contrata.
              No hay Google Analytics, Meta Pixel, PostHog ni otro medidor
              cargado en este prototipo. Aceptar no inyecta scripts de
              terceros hoy; solo deja constancia de su autorización para
              cuando exista un proveedor.
            </p>
          </div>
        </div>
      </div>

      <DialogFooter className="gap-2 sm:justify-between">
        <Button
          type="button"
          variant="ghost"
          className="text-navy hover:bg-sand"
          onClick={onRejectNonEssential}
        >
          Solo necesarias
        </Button>
        <div className="flex flex-col gap-2 sm:flex-row">
          <Button
            type="button"
            variant="outline"
            onClick={() => onSave({ preferences, analytics })}
          >
            Guardar
          </Button>
          <Button
            type="button"
            className="bg-gold text-navy hover:bg-gold-bright"
            onClick={onAcceptAll}
          >
            Aceptar todas
          </Button>
        </div>
      </DialogFooter>
    </>
  );
}

export function CookieConsentUi() {
  const hydrated = useHasHydrated();
  const {
    consent,
    settingsOpen,
    openSettings,
    closeSettings,
    acceptAll,
    rejectNonEssential,
    saveCustom,
  } = useCookieConsent();

  const showBanner = hydrated && !consent;

  return (
    <>
      {showBanner ? (
        <div
          className="fixed inset-x-0 bottom-0 z-[45] border-t border-white/15 bg-navy text-primary-foreground shadow-[0_-12px_32px_rgba(6,21,43,0.45)]"
          role="region"
          aria-labelledby="cookie-consent-title"
        >
          <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4 pb-[max(1rem,env(safe-area-inset-bottom))] md:flex-row md:items-end md:justify-between">
            <div className="min-w-0 max-w-3xl">
              <h2
                id="cookie-consent-title"
                className="font-serif text-lg text-gold-bright"
              >
                Cookies y almacenamiento local
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-primary-foreground/85">
                Usamos cookies y almacenamiento local{" "}
                <strong className="font-semibold text-white">
                  estrictamente necesarios
                </strong>{" "}
                para el funcionamiento, la accesibilidad y recordar su decisión
                (Ley 1581 de 2012 y lineamientos MinTIC sobre sedes
                electrónicas). Las categorías no esenciales permanecen
                desactivadas hasta que usted las acepte. Hoy{" "}
                <strong className="font-semibold text-white">
                  no hay analítica de terceros
                </strong>
                : esa categoría queda lista, pero no se carga ningún medidor
                hasta un consentimiento expreso y un proveedor institucional.
              </p>
              <p className="mt-2 text-xs text-primary-foreground/70">
                <Link
                  href="/politica-de-cookies"
                  className="underline underline-offset-4 hover:text-white"
                >
                  Política de cookies
                </Link>
                {" · "}
                <Link
                  href="/politica-de-privacidad"
                  className="underline underline-offset-4 hover:text-white"
                >
                  Tratamiento de datos personales
                </Link>
              </p>
            </div>
            <div className="flex w-full shrink-0 flex-col gap-2 sm:flex-row md:w-auto">
              <Button
                type="button"
                className="bg-gold text-navy hover:bg-gold-bright"
                onClick={acceptAll}
              >
                Aceptar
              </Button>
              <Button
                type="button"
                variant="outline"
                className="border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white"
                onClick={rejectNonEssential}
              >
                Rechazar no esenciales
              </Button>
              <Button
                type="button"
                variant="ghost"
                className="text-gold-bright hover:bg-white/10 hover:text-gold-bright"
                onClick={openSettings}
              >
                Configurar
              </Button>
            </div>
          </div>
        </div>
      ) : null}

      {showBanner ? (
        <div className="h-[min(22rem,52svh)] md:h-40" aria-hidden="true" />
      ) : null}

      <Dialog
        open={settingsOpen}
        onOpenChange={(open) => {
          if (open) openSettings();
          else closeSettings();
        }}
      >
        <DialogContent
          className="sm:max-w-lg"
          aria-describedby="cookie-settings-desc"
        >
          {settingsOpen ? (
            <CookieSettingsForm
              key={consent?.updatedAt ?? "undecided"}
              consent={consent}
              onAcceptAll={acceptAll}
              onRejectNonEssential={rejectNonEssential}
              onSave={saveCustom}
            />
          ) : null}
        </DialogContent>
      </Dialog>
    </>
  );
}

export function CookiePreferencesCard() {
  const hydrated = useHasHydrated();
  const { consent, openSettings, revoke, rejectNonEssential } =
    useCookieConsent();

  if (!hydrated) {
    return (
      <p className="text-sm text-muted-foreground">
        Cargando su decisión de cookies…
      </p>
    );
  }

  return (
    <div className="rounded-xl border border-border bg-card p-6">
      <h2 className="font-serif text-2xl text-navy">Su decisión en este navegador</h2>
      {consent ? (
        <dl className="mt-4 space-y-2 text-sm text-muted-foreground">
          <div className="flex justify-between gap-4">
            <dt>Necesarias</dt>
            <dd className="text-navy">Activas</dd>
          </div>
          <div className="flex justify-between gap-4">
            <dt>Preferencias</dt>
            <dd className="text-navy">
              {consent.preferences ? "Aceptadas" : "Rechazadas"}
            </dd>
          </div>
          <div className="flex justify-between gap-4">
            <dt>Analíticas</dt>
            <dd className="text-navy">
              {consent.analytics ? "Aceptadas (sin proveedor cargado)" : "Rechazadas"}
            </dd>
          </div>
          <div className="flex justify-between gap-4">
            <dt>Fecha</dt>
            <dd className="text-right text-navy">
              {formatConsentDate(consent.updatedAt)}
            </dd>
          </div>
        </dl>
      ) : (
        <p className="mt-3 text-sm text-muted-foreground">
          Aún no hay una decisión registrada. Mientras tanto solo operan las
          categorías estrictamente necesarias.
        </p>
      )}
      <div className="mt-5 flex flex-wrap gap-2">
        <Button
          type="button"
          className="bg-navy text-primary-foreground hover:bg-navy-mid"
          onClick={openSettings}
        >
          Configurar cookies
        </Button>
        <Button type="button" variant="outline" onClick={rejectNonEssential}>
          Rechazar no esenciales
        </Button>
        <Button
          type="button"
          variant="ghost"
          className="text-coral-deep hover:bg-sand hover:text-coral-deep"
          onClick={revoke}
        >
          Revocar consentimiento
        </Button>
      </div>
    </div>
  );
}
