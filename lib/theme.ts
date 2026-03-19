export const themeStorageKey = "portfolio-theme";

export type ThemeMode = "light" | "dark";

export const themeScript = `
(() => {
  const storageKey = "${themeStorageKey}";
  const root = document.documentElement;
  const saved = window.localStorage.getItem(storageKey);
  const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const theme = saved === "light" || saved === "dark" ? saved : systemPrefersDark ? "dark" : "light";

  root.dataset.theme = theme;
  root.style.colorScheme = theme;
})();
`;

