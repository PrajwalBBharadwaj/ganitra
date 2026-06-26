"use client";

import Link from "next/link";
import { useState } from "react";
import { siteConfig } from "@/data/siteConfig";
import { headerNav } from "@/data/navigation";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary-dark/95 backdrop-blur-sm border-b border-white/10 shadow-sm">
      <nav className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold tracking-tight text-white">
            {siteConfig.displayName}
          </Link>

          {/* Desktop nav — centered */}
          <div className="hidden items-center gap-8 md:flex">
            {headerNav.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-white/80 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA + Mobile menu */}
          <div className="flex items-center gap-4">
            <Link
              href="/sample-chapters"
              className="hidden rounded-lg bg-discovery px-4 py-2 text-sm font-semibold text-primary-dark transition-colors hover:bg-discovery/90 md:inline-flex"
            >
              View Sample Chapters
            </Link>
            <button
              type="button"
              className="md:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              <svg
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile nav panel */}
        {mobileOpen && (
          <div className="mt-4 rounded-xl bg-primary-dark/95 p-4 md:hidden">
            <div className="space-y-2">
              {headerNav.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block rounded-lg px-3 py-2 text-sm font-medium text-white/80 transition-colors hover:bg-white/10 hover:text-white"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/sample-chapters"
                className="mt-3 block rounded-lg bg-discovery px-4 py-2 text-center text-sm font-semibold text-primary-dark"
                onClick={() => setMobileOpen(false)}
              >
                View Sample Chapters
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}