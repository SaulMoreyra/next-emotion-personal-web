export type ExperienceRole = {
  title: string;
  period: string;
};

export type ExperienceEntry = {
  id: string;
  company: string;
  companyUrl?: string;
  location: string;
  period: string;
  roles: ExperienceRole[];
  highlight?: boolean;
};

export const experience: ExperienceEntry[] = [
  {
    id: "zenfi",
    company: "Zenfi",
    companyUrl: "https://www.zenfi.mx/",
    location: "Guadalajara, Jalisco, México",
    period: "2025 — Presente",
    highlight: true,
    roles: [
      { title: "Tech Lead", period: "Feb 2026 — Presente" },
      { title: "Senior Software Engineer", period: "Mar 2025 — Mar 2026" },
    ],
  },
  {
    id: "amoofy",
    company: "A Moment Of You (Amoofy)",
    location: "Denver, CO",
    period: "2025",
    roles: [{ title: "Frontend Engineer", period: "Mar 2025 — Jun 2025" }],
  },
  {
    id: "keep",
    company: "Keep",
    companyUrl: "https://keep.co",
    location: "Canadá",
    period: "2023 — 2024",
    roles: [{ title: "Fullstack Engineer", period: "Sep 2023 — Dic 2024" }],
  },
  {
    id: "skydropx",
    company: "Skydropx LATAM",
    companyUrl: "https://www.skydropx.com/",
    location: "Monterrey, Nuevo León, México",
    period: "2022 — 2023",
    roles: [{ title: "Frontend Engineer", period: "Abr 2022 — Sep 2023" }],
  },
  {
    id: "fintecimal",
    company: "Fintecimal",
    companyUrl: "https://www.fintecimal.com/",
    location: "Guadalajara, Jalisco, México",
    period: "2021 — 2022",
    roles: [
      {
        title: "Full Stack Developer React / Node",
        period: "Feb 2021 — Abr 2022",
      },
    ],
  },
  {
    id: "coneval",
    company: "CONEVAL",
    location: "México",
    period: "2021",
    roles: [
      {
        title: "Full Stack Developer React / Spring",
        period: "Sep 2021 — Nov 2021",
      },
    ],
  },
  {
    id: "nestle",
    company: "Nestlé",
    location: "México",
    period: "2021",
    roles: [{ title: "React Developer", period: "May 2021 — Ago 2021" }],
  },
  {
    id: "tekton",
    company: "Tekton",
    location: "Chihuahua, México",
    period: "2021",
    roles: [{ title: "Desarrollador de Android", period: "Ene 2021 — Mar 2021" }],
  },
  {
    id: "bancoForjadores",
    company: "Banco Forjadores",
    location: "México",
    period: "2020 — 2021",
    roles: [
      {
        title: "Desarrollador de Android",
        period: "Nov 2020 — Feb 2021",
      },
    ],
  },
  {
    id: "get",
    company: "GET Consultoría",
    location: "Xalapa, Veracruz, México",
    period: "2020",
    roles: [
      {
        title: "Full Stack Developer React / Node",
        period: "Feb 2020 — Sep 2020",
      },
    ],
  },
  {
    id: "ito",
    company: "Instituto Tecnológico de Oaxaca",
    location: "Oaxaca de Juárez, México",
    period: "2018 — 2020",
    roles: [
      {
        title: "Secretario de Conciliación Estudiantil",
        period: "Ene 2018 — Feb 2020",
      },
      {
        title: "Profesor universitario invitado — Estructura de Datos",
        period: "Ene 2020",
      },
    ],
  },
];

export const education = {
  institution: "Instituto Tecnológico de Oaxaca",
  degree: "Ingeniería en Sistemas Computacionales",
  period: "2015 — 2020",
};

export const awards = [
  "honorableMention",
  "firstPlaceInnovation",
  "regionalFair2019",
  "bronzeMultimedia2018",
];
