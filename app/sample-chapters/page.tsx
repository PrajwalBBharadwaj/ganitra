import type { Metadata } from "next";
import Link from "next/link";
import { books } from "@/data/books";

export const metadata: Metadata = {
  title: "Sample Math Chapters",
  description:
    "Preview Ganitra's visual approach to mathematics. Explore sample chapters from our Foundations, Core Math, and Advanced Mathematics series.",
};

export default function SampleChaptersPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
          Sample Chapters
        </h1>
        <p className="mt-4 text-lg text-text-secondary">
          Preview our visual mathematics approach. Each sample shows the first
          chapter from one of our textbook series.
        </p>
      </div>

      <div className="mt-10 space-y-12">
        {books.map((book) => {
          const firstChapter = book.chapters[0];
          if (!firstChapter) return null;

          return (
            <section key={book.id} className="rounded-xl border border-border bg-surface p-6 sm:p-8 shadow-sm">
              <div className={`h-1.5 w-20 rounded-full ${book.accent}`} />
              <h2 className="mt-4 text-2xl font-bold text-primary">
                {book.title}
              </h2>
              <p className="mt-1 text-sm font-medium text-text-muted">
                {book.gradeRange}
              </p>

              {/* Learning header block */}
              <div className="mt-6 rounded-lg border border-border bg-surface-raised p-5">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                  {/* Book cover placeholder */}
                  <div className={`flex h-24 w-16 flex-shrink-0 items-center justify-center rounded-lg ${book.accent}`}>
                    <span className="text-xs font-bold text-white text-center leading-tight">
                      {book.title.split(" ").map(w => w[0]).join("").slice(0, 2)}
                    </span>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-primary">
                      {firstChapter.title}
                    </h3>
                    <p className="mt-1 text-sm text-text-secondary italic">
                      {firstChapter.concept}
                    </p>

                    <div className="mt-3 flex flex-wrap gap-2">
                      {firstChapter.sections.slice(0, 3).map((section, i) => (
                        <span
                          key={i}
                          className={`rounded-full px-3 py-1 text-xs font-medium text-white ${book.accent}`}
                        >
                          {section.title || `Section ${i + 1}`}
                        </span>
                      ))}
                    </div>

                    <div className="mt-3 flex items-center gap-4 text-xs text-text-muted">
                      <span>📚 {firstChapter.sections.length} sections</span>
                      <span>⏱ 20 min read</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* PDF embed for books with a sample PDF */}
              {book.samplePdfUrl ? (
                <div className="mt-6">
                  <iframe
                    src={book.samplePdfUrl}
                    className="h-[600px] w-full rounded-lg border border-border"
                    title={`${book.title} sample chapter PDF`}
                  />
                  <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                    <a
                      href={book.samplePdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-lg border border-primary/20 bg-surface px-6 py-3 text-sm font-semibold text-primary shadow-sm transition-all hover:bg-surface-sunken hover:scale-[1.02]"
                    >
                      Open PDF in new tab
                    </a>
                    <Link
                      href="/contact#request-book"
                      className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-primary-dark hover:scale-[1.02]"
                    >
                      Request Full Book
                    </Link>
                  </div>
                </div>
              ) : (
                <div className="mt-6 space-y-6">
                  {firstChapter.sections.map((section, i) => (
                    <div key={i}>
                      {section.title && (
                        <h4 className="font-semibold text-primary">
                          {section.title}
                        </h4>
                      )}
                      <p className="mt-1 text-sm leading-relaxed text-text-secondary">
                        {section.content}
                      </p>
                    </div>
                  ))}
                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <Link
                      href="/contact#request-book"
                      className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-primary-dark hover:scale-[1.02]"
                    >
                      Request Full Book
                    </Link>
                  </div>
                </div>
              )}
            </section>
          );
        })}
      </div>
    </div>
  );
}