export const typography = {
  display: {
    fontSize: "clamp(2.25rem, 5vw, 3.5rem)",
    fontWeight: 700,
    lineHeight: 1.1,
    letterSpacing: "-0.03em",
  },
  h1: {
    fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
    fontWeight: 700,
    lineHeight: 1.2,
    letterSpacing: "-0.02em",
  },
  h2: {
    fontSize: "clamp(1.375rem, 2.5vw, 1.75rem)",
    fontWeight: 600,
    lineHeight: 1.3,
    letterSpacing: "-0.01em",
  },
  h3: {
    fontSize: "1.125rem",
    fontWeight: 600,
    lineHeight: 1.4,
  },
  body: {
    fontSize: "1rem",
    fontWeight: 400,
    lineHeight: 1.7,
  },
  bodySm: {
    fontSize: "0.875rem",
    fontWeight: 400,
    lineHeight: 1.6,
  },
  overline: {
    fontSize: "0.75rem",
    fontWeight: 600,
    lineHeight: 1.4,
    letterSpacing: "0.12em",
    textTransform: "uppercase" as const,
  },
  caption: {
    fontSize: "0.8125rem",
    fontWeight: 500,
    lineHeight: 1.5,
  },
};

export const fonts = {
  display: "var(--font-display), system-ui, sans-serif",
  body: "var(--font-body), system-ui, sans-serif",
};
