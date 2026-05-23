import { getRequestConfig } from "next-intl/server";
import { routing, Locale } from "./routing";

const namespaces = [
  "common",
  "presentation",
  "about",
  "experience",
  "projects",
  "skills",
  "contact",
  "stats",
] as const;

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  if (!locale || !routing.locales.includes(locale as Locale)) {
    locale = routing.defaultLocale;
  }

  const entries = await Promise.all(
    namespaces.map(async (namespace) => {
      const messages = (
        await import(`../../public/locales/${locale}/${namespace}.json`)
      ).default;
      return [namespace, messages] as const;
    })
  );

  return {
    locale,
    messages: Object.fromEntries(entries),
  };
});
