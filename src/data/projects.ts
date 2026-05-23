export type ProjectEntry = {
  id: string;
  stack: string[];
  href?: string;
  repo?: string;
  featured?: boolean;
};

export const projects: ProjectEntry[] = [
  {
    id: "zenfi",
    featured: true,
    stack: ["Expo", "React Native", "TypeScript"],
    href: "https://www.zenfi.mx/",
  },
  {
    id: "keepLedger",
    stack: ["Next.js", "Prisma", "PostgreSQL", "GraphQL", "tRPC"],
  },
  {
    id: "skydropxIntegrations",
    stack: ["Next.js", "SSR", "Material-UI", "Shopify", "Tienda Nube"],
  },
  {
    id: "amoofy",
    stack: ["Vite", "React", "Tailwind CSS", "TypeScript"],
  },
  {
    id: "portfolio",
    stack: ["Next.js", "Emotion", "TypeScript", "i18n"],
    repo: "https://github.com/SaulMoreyra/next-emotion-personal-web",
  },
];
