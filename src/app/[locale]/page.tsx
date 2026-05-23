import HomeContent from "components/HomeContent";
import PersonJsonLd from "components/PersonJsonLd";
import { routing, Locale } from "i18n/routing";
import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "presentation" });

  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://saulmoreyra.dev";

  return {
    title: `${t("hello")} — ${t("role")}`,
    description: t("intro"),
    metadataBase: new URL(siteUrl),
    openGraph: {
      title: `${t("hello")} — ${t("role")}`,
      description: t("intro"),
      locale: locale === "es" ? "es_MX" : "en_US",
      type: "website",
      siteName: "Saúl Moreyra",
    },
    twitter: {
      card: "summary_large_image",
      title: `${t("hello")} — ${t("role")}`,
      description: t("intro"),
    },
    alternates: {
      canonical: siteUrl,
      languages: {
        es: siteUrl,
        en: `${siteUrl}/en`,
      },
    },
    icons: {
      icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    },
  };
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale as Locale);
  const t = await getTranslations({ locale, namespace: "presentation" });

  return (
    <>
      <PersonJsonLd
        locale={locale}
        name={t("hello")}
        jobTitle={t("role")}
        description={t("intro")}
      />
      <HomeContent />
    </>
  );
}
