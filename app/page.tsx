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

      {/* Problem Section */}
      <section className="bg-secondary-muted/50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              The Problem with Traditional Math Education
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-primary/70">
              Many students memorize mathematics. Few truly understand it. This
              leads to fear, confusion, and a lasting lack of confidence. We
              believe mathematics is not inherently difficult — it is often just
              presented poorly.
            </p>
          </div>
        </div>
      </section>

      <Mission />

      {/* Ganitra Method */}
      <section className="bg-secondary-muted/50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            The Ganitra Method
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {[
              {
                step: "See",
                description: "Visual understanding through patterns, diagrams, and mathematical structures.",
              },
              {
                step: "Understand",
                description: "Conceptual clarity that connects ideas rather than isolated facts.",
              },
              {
                step: "Apply",
                description: "Problem-solving confidence built on genuine comprehension.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="rounded-xl border border-secondary-muted bg-white p-6 shadow-sm"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-sm font-bold text-white">
                  {item.step[0]}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-primary">
                  {item.step}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-primary/60">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Books Preview Section — from data/books.ts */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Our Textbook Series
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-primary/70">
            Three collections designed for sequential, visual mathematics learning
            from grades 1 through 10.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {books.map((book) => (
              <div
                key={book.id}
                className="group relative overflow-hidden rounded-xl border border-secondary-muted bg-white shadow-sm transition-shadow hover:shadow-md"
              >
                <div className={`h-2 ${book.accent}`} />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary">
                    {book.title}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-primary/50">
                    {book.gradeRange}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-primary/70">
                    {book.shortDescription}
                  </p>
                  <div className="mt-6 flex gap-3">
                    <Link
                      href="/sample-chapters"
                      className="text-sm font-semibold text-primary underline-offset-2 hover:underline"
                    >
                      View Sample
                    </Link>
                    <Link
                      href="/contact#request-book"
                      className="text-sm font-semibold text-primary underline-offset-2 hover:underline"
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

      {/* Blog Preview Section — from data/blog.ts */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            From Our Blog
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {blogPosts.slice(0, 3).map((post) => (
              <div
                key={post.slug}
                className="rounded-xl border border-secondary-muted bg-white p-6 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-primary">{post.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-primary/60">
                  {post.excerpt}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-4 inline-block text-sm font-semibold text-primary underline-offset-2 hover:underline"
                >
                  Read more
                </Link>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/blog"
              className="inline-flex items-center justify-center rounded-lg border border-primary/20 bg-white px-6 py-3 text-sm font-semibold text-primary shadow-sm transition-colors hover:bg-secondary-muted"
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