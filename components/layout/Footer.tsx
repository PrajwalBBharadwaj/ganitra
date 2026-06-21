import Link from "next/link";
import { siteConfig } from "@/config/site";

const footerGroups = [
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
    links: [
      { label: "Contact Us", href: "/contact" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-secondary-muted bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="text-lg font-bold tracking-tight text-primary">
              {siteConfig.displayName}
            </Link>
            <p className="mt-2 text-sm leading-relaxed text-primary/60">
              {siteConfig.tagline}
            </p>
          </div>

          {/* Link groups */}
          {footerGroups.map((group) => (
            <div key={group.title}>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-primary/50">
                {group.title}
              </h3>
              <ul className="mt-3 space-y-2">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-primary/70 transition-colors hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-10 border-t border-secondary-muted pt-6">
          <p className="text-center text-xs text-primary/50">
            &copy; {new Date().getFullYear()} {siteConfig.displayName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}