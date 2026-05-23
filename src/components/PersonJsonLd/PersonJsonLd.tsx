import { socialLinksData } from "data/socialLinks";

type Props = {
  locale: string;
  name: string;
  jobTitle: string;
  description: string;
};

const PersonJsonLd = ({ locale, name, jobTitle, description }: Props) => {
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://saulmoreyra.dev";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name,
    jobTitle,
    description,
    url: siteUrl,
    image: `${siteUrl}/images/profile.jpg`,
    sameAs: socialLinksData.map((link) => link.href),
    address: {
      "@type": "PostalAddress",
      addressLocality: "Oaxaca",
      addressCountry: locale === "es" ? "MX" : "Mexico",
    },
    knowsAbout: [
      "React",
      "TypeScript",
      "Node.js",
      "React Native",
      "Expo",
      "Next.js",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};

export default PersonJsonLd;
