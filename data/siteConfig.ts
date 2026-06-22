/**
 * Centralized site configuration.
 * All brand values must come from this file — never hardcoded in components.
 */
export const siteConfig = {
  name: "Ganitra (working title)",
  displayName: "Ganitra",
  tagline: "Mathematics becomes easy when you can see it.",
  missionStatement:
    "To help students see mathematics clearly and intuitively through visual understanding, structured thinking, and conceptual clarity.",
  origin: "Derived from Ganita, the Sanskrit word for Mathematics.",
  pronunciation: "Ga-ni-tra",
  domain: "ganitra.example.com",
  defaultTitle: "Ganitra | Visual Mathematics Learning and Textbooks",
  defaultDescription:
    "Ganitra helps students understand mathematics through intuition, patterns, and structured thinking. Explore our textbook series for grades 1-10.",
  contactEmail: "hello@ganitra.example.com",
  socialLinks: [] as Array<{ label: string; href: string }>,
} as const;

export type SiteConfig = typeof siteConfig;