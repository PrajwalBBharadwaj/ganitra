import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { footerGroups } from "@/data/navigation";
import { GeometricMesh } from "@/components/ui/MathGraphics";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-primary-dark">
      {/* Geometric pattern overlay */}
      <div className="absolute inset-0 opacity-[0.04]">
        <GeometricMesh className="h-full w-full" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="text-lg font-bold tracking-tight text-white">
              {siteConfig.displayName}
            </Link>
            <p className="mt-2 text-sm leading-relaxed text-white/60">
              {siteConfig.tagline}
            </p>
          </div>

          {/* Link groups */}
          {footerGroups.map((group) => (
            <div key={group.title}>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-white/40">
                {group.title}
              </h3>
              <ul className="mt-3 space-y-2">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/70 transition-colors hover:text-discovery"
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
        <div className="mt-10 border-t border-white/10 pt-6">
          <p className="text-center text-xs text-white/40">
            &copy; {new Date().getFullYear()} {siteConfig.displayName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}