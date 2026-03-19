export const themeStorageKey = "portfolio-theme";

export type ThemeMode = "light" | "dark";
export const defaultTheme: ThemeMode = "light";
export const systemThemeMediaQuery = "(prefers-color-scheme: dark)";

export function resolveSystemTheme(): ThemeMode {
  if (typeof window === "undefined") {
    return defaultTheme;
  }

  return window.matchMedia(systemThemeMediaQuery).matches ? "dark" : "light";
}

export function resolveStoredTheme(): ThemeMode | null {
  if (typeof window === "undefined") {
    return null;
  }

  const savedTheme = window.localStorage.getItem(themeStorageKey);

  return savedTheme === "light" || savedTheme === "dark" ? savedTheme : null;
}

export function resolveThemePreference(): ThemeMode {
  return resolveStoredTheme() ?? resolveSystemTheme();
}

export function applyThemeToRoot(theme: ThemeMode) {
  if (typeof document === "undefined") {
    return;
  }

  const root = document.documentElement;

  root.dataset.theme = theme;
  root.style.colorScheme = theme;
  root.classList.toggle("dark", theme === "dark");
}

export const themeScript = `
(() => {
  const storageKey = "${themeStorageKey}";
  const mediaQuery = "${systemThemeMediaQuery}";
  const root = document.documentElement;
  const saved = window.localStorage.getItem(storageKey);
  const systemTheme = window.matchMedia(mediaQuery).matches ? "dark" : "light";
  const theme = saved === "light" || saved === "dark" ? saved : systemTheme;

  root.dataset.theme = theme;
  root.style.colorScheme = theme;
  root.classList.toggle("dark", theme === "dark");
})();
`;
