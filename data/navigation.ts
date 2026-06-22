/**
 * Centralized navigation data.
 * Header and Footer must import from this file only.
 * No duplicated nav arrays anywhere else.
 */

export interface NavItem {
  label: string;
  href: string;
}

export const headerNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Books", href: "/books" },
  { label: "Sample Chapters", href: "/sample-chapters" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export interface FooterGroup {
  title: string;
  links: NavItem[];
}

export const footerGroups: FooterGroup[] = [
  {
    title: "Platform",
    links: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Future", href: "/future" },
    ],
  },
  {
    title: "Books",
    links: [
      { label: "All Books", href: "/books" },
      { label: "Sample Chapters", href: "/sample-chapters" },
    ],
  },
  {
    title: "Contact",
    links: [{ label: "Contact Us", href: "/contact" }],
  },
];