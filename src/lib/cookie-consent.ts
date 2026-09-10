export const COOKIE_CONSENT_STORAGE_KEY = "fb-cookie-consent";
export const COOKIE_CONSENT_COOKIE_NAME = "fb-cookie-consent";
export const COOKIE_CONSENT_VERSION = 1;
export const COOKIE_CONSENT_MAX_AGE_SECONDS = 60 * 60 * 24 * 365;

export type CookieConsentRecord = {
  version: number;
  necessary: true;
  preferences: boolean;
  analytics: boolean;
  updatedAt: string;
};

export const essentialOnlyConsent = (): CookieConsentRecord => ({
  version: COOKIE_CONSENT_VERSION,
  necessary: true,
  preferences: false,
  analytics: false,
  updatedAt: new Date().toISOString(),
});

export const allAllowedConsent = (): CookieConsentRecord => ({
  version: COOKIE_CONSENT_VERSION,
  necessary: true,
  preferences: true,
  analytics: true,
  updatedAt: new Date().toISOString(),
});

export function isConsentRecord(value: unknown): value is CookieConsentRecord {
  if (!value || typeof value !== "object") return false;
  const record = value as CookieConsentRecord;
  return (
    record.version === COOKIE_CONSENT_VERSION &&
    record.necessary === true &&
    typeof record.preferences === "boolean" &&
    typeof record.analytics === "boolean" &&
    typeof record.updatedAt === "string"
  );
}

export function parseConsentJson(raw: string | null): CookieConsentRecord | null {
  if (!raw) return null;
  try {
    const parsed: unknown = JSON.parse(raw);
    return isConsentRecord(parsed) ? parsed : null;
  } catch {
    return null;
  }
}

export function persistConsent(record: CookieConsentRecord) {
  const json = JSON.stringify(record);
  window.localStorage.setItem(COOKIE_CONSENT_STORAGE_KEY, json);
  const secure = window.location.protocol === "https:" ? "; Secure" : "";
  document.cookie = `${COOKIE_CONSENT_COOKIE_NAME}=${encodeURIComponent(json)}; Path=/; Max-Age=${COOKIE_CONSENT_MAX_AGE_SECONDS}; SameSite=Lax${secure}`;
}

export function clearConsent() {
  window.localStorage.removeItem(COOKIE_CONSENT_STORAGE_KEY);
  document.cookie = `${COOKIE_CONSENT_COOKIE_NAME}=; Path=/; Max-Age=0; SameSite=Lax`;
}

export function readStoredConsent(): CookieConsentRecord | null {
  const fromStorage = parseConsentJson(
    window.localStorage.getItem(COOKIE_CONSENT_STORAGE_KEY),
  );
  if (fromStorage) return fromStorage;

  const match = document.cookie
    .split("; ")
    .find((part) => part.startsWith(`${COOKIE_CONSENT_COOKIE_NAME}=`));
  if (!match) return null;
  return parseConsentJson(decodeURIComponent(match.slice(COOKIE_CONSENT_COOKIE_NAME.length + 1)));
}

/** No hay proveedor de analítica contratado. Reservado para adopción institucional. */
export function applyAnalyticsConsent(enabled: boolean) {
  if (!enabled) return;
}
