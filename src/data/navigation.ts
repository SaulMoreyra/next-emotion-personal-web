export const NAV_SECTIONS = [
  { id: "hero", labelKey: "home" },
  { id: "about", labelKey: "about" },
  { id: "experience", labelKey: "experience" },
  { id: "projects", labelKey: "projects" },
  { id: "skills", labelKey: "skills" },
  { id: "contact", labelKey: "contact" },
] as const;

export type SectionId = (typeof NAV_SECTIONS)[number]["id"];
