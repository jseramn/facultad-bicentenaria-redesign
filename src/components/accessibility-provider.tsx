"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useSyncExternalStore,
} from "react";

type FontSize = "md" | "lg" | "xl";

type AccessibilityState = {
  fontSize: FontSize;
  highContrast: boolean;
  setFontSize: (size: FontSize) => void;
  toggleContrast: () => void;
  reset: () => void;
};

const AccessibilityContext = createContext<AccessibilityState | null>(null);

const FONT_KEY = "fb-font-size";
const CONTRAST_KEY = "fb-high-contrast";

let fontSizeValue: FontSize = "md";
let highContrastValue = false;
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

function readStoredFont(): FontSize {
  const stored = window.localStorage.getItem(FONT_KEY);
  if (stored === "md" || stored === "lg" || stored === "xl") return stored;
  return "md";
}

function applyToDocument() {
  document.documentElement.dataset.fontSize = fontSizeValue;
  document.documentElement.classList.toggle("high-contrast", highContrastValue);
}

if (typeof window !== "undefined") {
  fontSizeValue = readStoredFont();
  highContrastValue = window.localStorage.getItem(CONTRAST_KEY) === "1";
  applyToDocument();
}

export function AccessibilityProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const fontSize = useSyncExternalStore(
    subscribe,
    () => fontSizeValue,
    () => "md" as FontSize,
  );
  const highContrast = useSyncExternalStore(
    subscribe,
    () => highContrastValue,
    () => false,
  );

  useEffect(() => {
    applyToDocument();
  }, [fontSize, highContrast]);

  const setFontSize = useCallback((size: FontSize) => {
    fontSizeValue = size;
    window.localStorage.setItem(FONT_KEY, size);
    applyToDocument();
    emit();
  }, []);

  const toggleContrast = useCallback(() => {
    highContrastValue = !highContrastValue;
    window.localStorage.setItem(CONTRAST_KEY, highContrastValue ? "1" : "0");
    applyToDocument();
    emit();
  }, []);

  const reset = useCallback(() => {
    fontSizeValue = "md";
    highContrastValue = false;
    window.localStorage.setItem(FONT_KEY, "md");
    window.localStorage.setItem(CONTRAST_KEY, "0");
    applyToDocument();
    emit();
  }, []);

  const value = useMemo(
    () => ({ fontSize, highContrast, setFontSize, toggleContrast, reset }),
    [fontSize, highContrast, setFontSize, toggleContrast, reset],
  );

  return (
    <AccessibilityContext.Provider value={value}>
      {children}
    </AccessibilityContext.Provider>
  );
}

export function useAccessibility() {
  const context = useContext(AccessibilityContext);
  if (!context) {
    throw new Error("useAccessibility debe usarse dentro de AccessibilityProvider");
  }
  return context;
}
