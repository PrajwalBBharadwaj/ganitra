import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: siteConfig.defaultTitle,
    template: `%s | ${siteConfig.displayName}`,
  },
  description: siteConfig.defaultDescription,
  openGraph: {
    title: siteConfig.defaultTitle,
    description: siteConfig.defaultDescription,
    siteName: siteConfig.displayName,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

function Header() {
  return (
    <header className="border-b border-secondary-muted bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-primary"
        >
          {siteConfig.displayName}
        </Link>
        <div className="flex items-center gap-6">
          <Link
            href="/books"
            className="text-sm font-medium text-primary/80 hover:text-primary"
          >
            Books
          </Link>
          <Link
            href="/sample-chapters"
            className="text-sm font-medium text-primary/80 hover:text-primary"
          >
            Sample Chapters
          </Link>
          <Link
            href="/blog"
            className="text-sm font-medium text-primary/80 hover:text-primary"
          >
            Blog
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium text-primary/80 hover:text-primary"
          >
            About
          </Link>
          <Link
            href="/future"
            className="text-sm font-medium text-primary/80 hover:text-primary"
          >
            Future
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium text-primary/80 hover:text-primary"
          >
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-secondary-muted bg-white">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-primary/60">
            &copy; {new Date().getFullYear()} {siteConfig.displayName}. All
            rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/about"
              className="text-sm text-primary/60 hover:text-primary"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-sm text-primary/60 hover:text-primary"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}