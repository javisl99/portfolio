export const locales = ["es", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "es";

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function assertLocale(value: string): Locale {
  if (!isLocale(value)) {
    throw new Error(`Unsupported locale: ${value}`);
  }

  return value;
}

export function getAlternateLocale(locale: Locale): Locale {
  return locale === "es" ? "en" : "es";
}

export function localizePath(locale: Locale, pathname = "") {
  if (!pathname || pathname === "/") {
    return `/${locale}`;
  }

  return `/${locale}${pathname}`;
}

export function replaceLocaleInPathname(pathname: string | null | undefined, targetLocale: Locale) {
  if (!pathname) {
    return localizePath(targetLocale);
  }

  if (pathname === "/") {
    return localizePath(targetLocale);
  }

  if (/^\/(es|en)(?=\/|$)/.test(pathname)) {
    return pathname.replace(/^\/(es|en)(?=\/|$)/, `/${targetLocale}`);
  }

  return localizePath(targetLocale, pathname);
}
