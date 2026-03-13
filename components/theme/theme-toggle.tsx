"use client";

import { Moon, Sun } from "lucide-react";
import { useSyncExternalStore } from "react";

import type { Locale } from "@/lib/i18n";
import { themeStorageKey, type ThemeMode } from "@/lib/theme";
import { cn } from "@/lib/utils";

const themeChangeEvent = "portfolio-theme-change";

function resolveTheme(): ThemeMode {
  if (typeof window === "undefined") {
    return "light";
  }

  const savedTheme = window.localStorage.getItem(themeStorageKey);

  if (savedTheme === "light" || savedTheme === "dark") {
    return savedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function applyTheme(theme: ThemeMode, persist = false) {
  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme;

  if (persist) {
    window.localStorage.setItem(themeStorageKey, theme);
  }

  window.dispatchEvent(new CustomEvent(themeChangeEvent));
}

export function ThemeToggle({ locale }: { locale: Locale }) {
  const theme = useSyncExternalStore(subscribeToTheme, getThemeSnapshot, getServerThemeSnapshot);

  function handleToggle() {
    const nextTheme = theme === "light" ? "dark" : "light";

    applyTheme(nextTheme, true);
  }

  const isDark = theme === "dark";
  const label = locale === "es"
    ? isDark
      ? "Cambiar a modo claro"
      : "Cambiar a modo oscuro"
    : isDark
      ? "Switch to light mode"
      : "Switch to dark mode";

  return (
    <button
      aria-label={label}
      aria-pressed={isDark}
      suppressHydrationWarning
      className={cn(
        "inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-panel/88 text-muted transition hover:border-line-strong hover:bg-panel-strong hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-accent",
      )}
      onClick={handleToggle}
      type="button"
    >
      {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
}

function subscribeToTheme(onStoreChange: () => void) {
  if (typeof window === "undefined") {
    return () => undefined;
  }

  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

  function handleSystemChange() {
    const savedTheme = window.localStorage.getItem(themeStorageKey);

    if (savedTheme === "light" || savedTheme === "dark") {
      return;
    }

    onStoreChange();
  }

  function handleStorage(event: StorageEvent) {
    if (event.key === themeStorageKey) {
      onStoreChange();
    }
  }

  function handleThemeChange() {
    onStoreChange();
  }

  mediaQuery.addEventListener("change", handleSystemChange);
  window.addEventListener("storage", handleStorage);
  window.addEventListener(themeChangeEvent, handleThemeChange);

  return () => {
    mediaQuery.removeEventListener("change", handleSystemChange);
    window.removeEventListener("storage", handleStorage);
    window.removeEventListener(themeChangeEvent, handleThemeChange);
  };
}

function getThemeSnapshot(): ThemeMode {
  if (typeof document === "undefined") {
    return "light";
  }

  const theme = document.documentElement.dataset.theme;

  if (theme === "light" || theme === "dark") {
    return theme;
  }

  return resolveTheme();
}

function getServerThemeSnapshot(): ThemeMode {
  return "light";
}
