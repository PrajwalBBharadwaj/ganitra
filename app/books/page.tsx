import type { Metadata } from "next";
import Link from "next/link";
import { books } from "@/data/books";
import { DotMatrix, CoordinateGrid, GeometricMesh } from "@/components/ui/MathGraphics";

export const metadata: Metadata = {
  title: "Mathematics Textbooks by Grade",
  description:
    "Explore Ganitra's textbook series: Foundations (Grades 1-4), Core Math (Grades 5-7), and Advanced Mathematics (Grades 8-10).",
};

export default function BooksPage() {
  const patternMap: Record<string, React.ReactNode> = {
    foundations: <DotMatrix className="h-full w-full" />,
    "core-math": <CoordinateGrid className="h-full w-full" />,
    "advanced-mathematics": <GeometricMesh className="h-full w-full" />,
  };

  return (
    <div className="relative overflow-hidden bg-surface py-16 sm:py-20">
      {/* Mathematical background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="h-full w-full">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="books-bg" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                <circle cx="40" cy="40" r="1" fill="#06B6D4" fillOpacity="0.3" />
                <line x1="0" y1="40" x2="80" y2="40" stroke="#06B6D4" strokeOpacity="0.15" strokeWidth="0.5" />
                <line x1="40" y1="0" x2="40" y2="80" stroke="#06B6D4" strokeOpacity="0.15" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#books-bg)" />
          </svg>
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="scroll-mt-24 text-4xl font-bold tracking-tight text-primary sm:text-5xl">
            Books
          </h1>
          <p className="mt-4 text-lg text-text-secondary">
            Explore our textbook collections. Each series builds on the previous one,
            creating a complete learning journey from grades 1 through 10.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {books.map((book) => (
            <div
              key={book.id}
              className="group relative overflow-hidden rounded-xl border border-border bg-surface-raised shadow-sm transition-all duration-200 hover:shadow-md hover:-translate-y-1"
            >
              {/* Book-specific mathematical pattern */}
              <div className="absolute inset-0 opacity-[0.04]">
                {patternMap[book.id]}
              </div>

              <div className={`h-1.5 ${book.accent}`} />
              <div className="relative p-6">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-bold text-primary">{book.title}</h2>
                    <span className={`rounded-full px-2.5 py-0.5 text-xs font-semibold text-primary-dark ${book.accent}`}>
                      {book.chapters.length} chapters
                    </span>
                  </div>
                <p className="mt-1 text-sm font-medium text-text-muted">
                  {book.gradeRange}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                  {book.shortDescription}
                </p>

                <div className="mt-4">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-text-muted">
                    Focus Topics
                  </h3>
                  <ul className="mt-2 space-y-1">
                    {book.chapters.map((ch) => (
                      <li key={ch.id} className="text-sm text-text-secondary">
                        &bull; {ch.title}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 flex gap-3">
                  <Link
                    href="/sample-chapters"
                    className="text-sm font-semibold text-discovery underline-offset-2 hover:underline"
                  >
                    View Sample
                  </Link>
                  <Link
                    href="/contact#request-book"
                    className="text-sm font-semibold text-discovery underline-offset-2 hover:underline"
                  >
                    Request Book
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
