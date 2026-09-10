"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  useSyncExternalStore,
} from "react";
import {
  applyAnalyticsConsent,
  allAllowedConsent,
  clearConsent,
  COOKIE_CONSENT_VERSION,
  essentialOnlyConsent,
  persistConsent,
  readStoredConsent,
  type CookieConsentRecord,
} from "@/lib/cookie-consent";

type CookieConsentContextValue = {
  consent: CookieConsentRecord | null;
  settingsOpen: boolean;
  openSettings: () => void;
  closeSettings: () => void;
  acceptAll: () => void;
  rejectNonEssential: () => void;
  saveCustom: (next: Pick<CookieConsentRecord, "preferences" | "analytics">) => void;
  revoke: () => void;
};

const CookieConsentContext = createContext<CookieConsentContextValue | null>(
  null,
);

let consentValue: CookieConsentRecord | null = null;
const listeners = new Set<() => void>();

function emit() {
  for (const listener of listeners) listener();
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

function writeConsent(next: CookieConsentRecord | null) {
  consentValue = next;
  if (next) {
    persistConsent(next);
    applyAnalyticsConsent(next.analytics);
  } else {
    clearConsent();
    applyAnalyticsConsent(false);
  }
  emit();
}

if (typeof window !== "undefined") {
  consentValue = readStoredConsent();
  applyAnalyticsConsent(consentValue?.analytics === true);
}

export function CookieConsentProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const consent = useSyncExternalStore(
    subscribe,
    () => consentValue,
    () => null,
  );
  const [settingsOpen, setSettingsOpen] = useState(false);

  useEffect(() => {
    applyAnalyticsConsent(consent?.analytics === true);
  }, [consent]);

  const acceptAll = useCallback(() => {
    writeConsent(allAllowedConsent());
    setSettingsOpen(false);
  }, []);

  const rejectNonEssential = useCallback(() => {
    writeConsent(essentialOnlyConsent());
    setSettingsOpen(false);
  }, []);

  const saveCustom = useCallback(
    (next: Pick<CookieConsentRecord, "preferences" | "analytics">) => {
      writeConsent({
        version: COOKIE_CONSENT_VERSION,
        necessary: true,
        preferences: next.preferences,
        analytics: next.analytics,
        updatedAt: new Date().toISOString(),
      });
      setSettingsOpen(false);
    },
    [],
  );

  const revoke = useCallback(() => {
    writeConsent(null);
    setSettingsOpen(true);
  }, []);

  const value = useMemo(
    () => ({
      consent,
      settingsOpen,
      openSettings: () => setSettingsOpen(true),
      closeSettings: () => setSettingsOpen(false),
      acceptAll,
      rejectNonEssential,
      saveCustom,
      revoke,
    }),
    [consent, settingsOpen, acceptAll, rejectNonEssential, saveCustom, revoke],
  );

  return (
    <CookieConsentContext.Provider value={value}>
      {children}
    </CookieConsentContext.Provider>
  );
}

export function useCookieConsent() {
  const context = useContext(CookieConsentContext);
  if (!context) {
    throw new Error(
      "useCookieConsent debe usarse dentro de CookieConsentProvider",
    );
  }
  return context;
}
