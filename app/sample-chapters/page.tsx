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
      <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
        Sample Chapters
      </h1>
      <p className="mt-4 text-lg text-primary/70">
        Preview our visual mathematics approach. Each sample shows the first
        chapter from one of our textbook series.
      </p>

      <div className="mt-10 space-y-12">
        {books.map((book) => {
          const firstChapter = book.chapters[0];
          if (!firstChapter) return null;

          return (
            <section key={book.id} className="rounded-xl border border-secondary-muted bg-white p-6 sm:p-8">
              <div className={`h-2 w-20 rounded-full ${book.accent}`} />
              <h2 className="mt-4 text-2xl font-bold text-primary">
                {book.title}
              </h2>
              <p className="mt-1 text-sm font-medium text-primary/50">
                {book.gradeRange}
              </p>
              <p className="mt-2 text-primary/70">{book.description}</p>

              <div className="mt-8 border-t border-secondary-muted pt-6">
                <h3 className="text-lg font-semibold text-primary">
                  Sample: {firstChapter.title}
                </h3>
                <p className="mt-1 text-sm text-primary/60">
                  {firstChapter.concept}
                </p>

                {/* PDF embed for books with a sample PDF */}
                {book.samplePdfUrl ? (
                  <div className="mt-6">
                    <iframe
                      src={book.samplePdfUrl}
                      className="h-[600px] w-full rounded-lg border border-secondary-muted"
                      title={`${book.title} sample chapter PDF`}
                    />
                    <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                      <a
                        href={book.samplePdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center rounded-lg border border-primary/20 bg-white px-6 py-3 text-sm font-semibold text-primary shadow-sm transition-colors hover:bg-secondary-muted"
                      >
                        Open PDF in new tab
                      </a>
                      <Link
                        href="/contact#request-book"
                        className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-primary-dark"
                      >
                        Request Full Book
                      </Link>
                    </div>
                  </div>
                ) : (
                  /* Text-based preview for books without a PDF */
                  <>
                    <div className="mt-6 space-y-6">
                      {firstChapter.sections.map((section, i) => (
                        <div key={i}>
                          {section.title && (
                            <h4 className="font-semibold text-primary">
                              {section.title}
                            </h4>
                          )}
                          <p className="mt-1 text-sm leading-relaxed text-primary/70">
                            {section.content}
                          </p>
                        </div>
                      ))}
                    </div>
                    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                      <Link
                        href="/contact#request-book"
                        className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-primary-dark"
                      >
                        Request Full Book
                      </Link>
                    </div>
                  </>
                )}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}