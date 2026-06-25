import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { books } from "@/data/books";
import { blogPosts } from "@/data/blog";
import { Hero } from "@/components/sections/Hero";
import { Mission } from "@/components/sections/Mission";
import { SimpleCTA } from "@/components/sections/SimpleCTA";

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Problem Section — comparison cards */}
      <section className="bg-surface py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              The Problem with Traditional Math Education
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-text-secondary">
              Many students memorize mathematics. Few truly understand it.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Traditional Math cards */}
            <div className="rounded-xl border border-border bg-orange-50/50 p-6">
              <div className="mb-3 h-1 w-8 rounded-full bg-curiosity" />
              <h3 className="text-lg font-semibold text-primary">Memorization</h3>
              <p className="mt-2 text-sm text-text-secondary">Rules and procedures are memorized without understanding why they work.</p>
            </div>
            <div className="rounded-xl border border-border bg-orange-50/50 p-6">
              <div className="mb-3 h-1 w-8 rounded-full bg-curiosity" />
              <h3 className="text-lg font-semibold text-primary">Formulas First</h3>
              <p className="mt-2 text-sm text-text-secondary">Symbols and equations are introduced before the ideas they represent.</p>
            </div>
            <div className="rounded-xl border border-border bg-orange-50/50 p-6">
              <div className="mb-3 h-1 w-8 rounded-full bg-curiosity" />
              <h3 className="text-lg font-semibold text-primary">Abstract</h3>
              <p className="mt-2 text-sm text-text-secondary">Mathematics feels disconnected from reality and intuition.</p>
            </div>

            {/* Ganitra cards */}
            <div className="rounded-xl border border-discovery/20 bg-discovery/5 p-6">
              <div className="mb-3 h-1 w-8 rounded-full bg-discovery" />
              <h3 className="text-lg font-semibold text-primary">Visual</h3>
              <p className="mt-2 text-sm text-text-secondary">Concepts are seen before they are symbolized. Patterns reveal structure.</p>
            </div>
            <div className="rounded-xl border border-insight/20 bg-insight/5 p-6">
              <div className="mb-3 h-1 w-8 rounded-full bg-insight" />
              <h3 className="text-lg font-semibold text-primary">Intuitive</h3>
              <p className="mt-2 text-sm text-text-secondary">Understanding comes first. Procedures follow naturally from insight.</p>
            </div>
            <div className="rounded-xl border border-application/20 bg-application/5 p-6">
              <div className="mb-3 h-1 w-8 rounded-full bg-application" />
              <h3 className="text-lg font-semibold text-primary">Connected</h3>
              <p className="mt-2 text-sm text-text-secondary">Ideas build on each other. Mathematics becomes a coherent system.</p>
            </div>
          </div>
        </div>
      </section>

      <Mission />

      {/* Ganitra Method — 3 large distinct cards */}
      <section className="bg-surface-raised py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              The Ganitra Method
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-text-secondary">
              Three principles that guide everything we create.
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {/* See — cyan */}
            <div className="group relative overflow-hidden rounded-xl border border-discovery/20 bg-gradient-to-br from-discovery/10 to-discovery/5 p-6 shadow-sm transition-all hover:shadow-md hover:-translate-y-1">
              <div className="absolute inset-0 opacity-[0.03]">
                <div className="h-full w-full" style={{
                  backgroundImage: "radial-gradient(circle at 2px 2px, #06B6D4 1px, transparent 0)",
                  backgroundSize: "24px 24px"
                }} />
              </div>
              <div className="relative">
                <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-discovery/20 text-discovery">
                  <svg width="32" height="32" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <ellipse cx="24" cy="24" rx="16" ry="10" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.8" />
                    <circle cx="24" cy="24" r="6" stroke="currentColor" strokeWidth="1" strokeOpacity="0.5" />
                    <circle cx="24" cy="24" r="2.5" fill="currentColor" fillOpacity="0.6" />
                  </svg>
                </div>
                <h3 className="mt-4 text-xl font-bold text-primary">See</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">Visual understanding through patterns, diagrams, and mathematical structures.</p>
                <div className="mt-4 h-1 w-12 rounded-full bg-discovery" />
              </div>
            </div>

            {/* Understand — violet */}
            <div className="group relative overflow-hidden rounded-xl border border-insight/20 bg-gradient-to-br from-insight/10 to-insight/5 p-6 shadow-sm transition-all hover:shadow-md hover:-translate-y-1">
              <div className="absolute inset-0 opacity-[0.03]">
                <div className="h-full w-full" style={{
                  backgroundImage: "radial-gradient(circle at 2px 2px, #7C3AED 1px, transparent 0)",
                  backgroundSize: "24px 24px"
                }} />
              </div>
              <div className="relative">
                <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-insight/20 text-insight">
                  <svg width="32" height="32" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="24" cy="14" r="4" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.8" />
                    <circle cx="14" cy="34" r="4" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.8" />
                    <circle cx="34" cy="34" r="4" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.8" />
                    <line x1="24" y1="18" x2="14" y2="30" stroke="currentColor" strokeWidth="1" strokeOpacity="0.5" />
                    <line x1="24" y1="18" x2="34" y2="30" stroke="currentColor" strokeWidth="1" strokeOpacity="0.5" />
                    <line x1="14" y1="34" x2="34" y2="34" stroke="currentColor" strokeWidth="1" strokeOpacity="0.4" />
                  </svg>
                </div>
                <h3 className="mt-4 text-xl font-bold text-primary">Understand</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">Conceptual clarity that connects ideas rather than isolated facts.</p>
                <div className="mt-4 h-1 w-12 rounded-full bg-insight" />
              </div>
            </div>

            {/* Apply — amber */}
            <div className="group relative overflow-hidden rounded-xl border border-application/20 bg-gradient-to-br from-application/10 to-application/5 p-6 shadow-sm transition-all hover:shadow-md hover:-translate-y-1">
              <div className="absolute inset-0 opacity-[0.03]">
                <div className="h-full w-full" style={{
                  backgroundImage: "radial-gradient(circle at 2px 2px, #F59E0B 1px, transparent 0)",
                  backgroundSize: "24px 24px"
                }} />
              </div>
              <div className="relative">
                <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-application/20 text-application">
                  <svg width="32" height="32" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.8" />
                    <line x1="24" y1="6" x2="24" y2="42" stroke="currentColor" strokeWidth="1" strokeOpacity="0.5" />
                    <line x1="6" y1="24" x2="42" y2="24" stroke="currentColor" strokeWidth="1" strokeOpacity="0.5" />
                    <circle cx="24" cy="24" r="2" fill="currentColor" fillOpacity="0.5" />
                  </svg>
                </div>
                <h3 className="mt-4 text-xl font-bold text-primary">Apply</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">Problem-solving confidence built on genuine comprehension.</p>
                <div className="mt-4 h-1 w-12 rounded-full bg-application" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Books Preview Section — unique backgrounds per book */}
      <section className="bg-background py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              Our Textbook Series
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-lg text-text-secondary">
              Three collections designed for sequential, visual mathematics learning
              from grades 1 through 10.
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {books.map((book) => (
              <div
                key={book.id}
                className="group relative overflow-hidden rounded-xl border border-border bg-surface shadow-sm transition-all hover:shadow-md hover:-translate-y-1"
              >
                {/* Unique background per book */}
                <div className="absolute inset-0 opacity-[0.04]">
                  {book.id === "foundations" && (
                    <div className="h-full w-full" style={{
                      backgroundImage: "radial-gradient(circle at 2px 2px, #06B6D4 1px, transparent 0)",
                      backgroundSize: "20px 20px"
                    }} />
                  )}
                  {book.id === "core-math" && (
                    <div className="h-full w-full" style={{
                      backgroundImage: "linear-gradient(rgba(30,58,138,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(30,58,138,0.3) 1px, transparent 1px)",
                      backgroundSize: "24px 24px"
                    }} />
                  )}
                  {book.id === "advanced-mathematics" && (
                    <div className="h-full w-full" style={{
                      backgroundImage: "radial-gradient(circle at 1px 1px, #7C3AED 1px, transparent 0)",
                      backgroundSize: "16px 16px"
                    }} />
                  )}
                </div>

                <div className={`h-1.5 ${book.accent}`} />
                <div className="relative p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-primary">
                      {book.title}
                    </h3>
                    <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium text-white ${book.accent}`}>
                      {book.chapters.length} chapters
                    </span>
                  </div>
                  <p className="mt-1 text-sm font-medium text-text-muted">
                    {book.gradeRange}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                    {book.shortDescription}
                  </p>
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
      </section>

      {/* Sample Chapter CTA */}
      <SimpleCTA
        title="See the Ganitra Difference"
        description="Preview our visual approach to mathematics. See how concepts come alive through clear, structured explanations."
        primaryLabel="View Sample Chapters"
        primaryHref="/sample-chapters"
        secondaryLabel="Request a Book"
        secondaryHref="/contact#request-book"
      />

      {/* Blog Preview Section — category indicators */}
      <section className="bg-surface-raised py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              From Our Blog
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-lg text-text-secondary">
              Ideas and insights on visual mathematics and understanding-first learning.
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {blogPosts.slice(0, 3).map((post, i) => {
              const colors = ["bg-discovery", "bg-insight", "bg-application"];
              const color = colors[i % colors.length];
              return (
                <article
                  key={post.slug}
                  className="group rounded-xl border border-border bg-surface p-6 shadow-sm transition-all hover:shadow-md hover:-translate-y-1"
                >
                  <div className={`h-1 w-12 rounded-full ${color}`} />
                  <time className="mt-3 block text-xs font-medium text-text-muted">
                    {post.date}
                  </time>
                  <h3 className="mt-2 text-lg font-semibold text-primary group-hover:text-discovery transition-colors">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="underline-offset-2 hover:underline"
                    >
                      {post.title}
                    </Link>
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                    {post.excerpt}
                  </p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="mt-4 inline-block text-sm font-semibold text-discovery underline-offset-2 hover:underline"
                  >
                    Read more →
                  </Link>
                </article>
              );
            })}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/blog"
              className="inline-flex items-center justify-center rounded-lg border border-primary/20 bg-surface px-6 py-3 text-sm font-semibold text-primary shadow-sm transition-all hover:bg-surface-sunken hover:scale-[1.02]"
            >
              View All Articles
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <SimpleCTA
        title="Start Seeing Mathematics Differently"
        description={siteConfig.tagline}
        primaryLabel="View Sample Chapters"
        primaryHref="/sample-chapters"
        secondaryLabel="Explore Books"
        secondaryHref="/books"
      />
    </>
  );
}