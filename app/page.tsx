import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { books } from "@/data/books";
import { blogPosts } from "@/data/blog";
import { Hero } from "@/components/sections/Hero";
import { Mission } from "@/components/sections/Mission";
import { SimpleCTA } from "@/components/sections/SimpleCTA";
import {
  DotMatrix,
  IntersectingCircles,
  TriangleConstruction,
  GeometricMesh,
  EyeIcon,
  BlueprintCircle,
  BlueprintTriangle,
  BlueprintNodes,
  BookIcon,
  SadFaceIcon,
} from "@/components/ui/MathGraphics";
import { MathematicalNetwork } from "@/components/ui/math-blueprints";

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Problem Section — 3 cards with visual hierarchy using accent system */}
      <section className="relative bg-surface py-16 sm:py-20">
        {/* Mathematical network background */}
        <div className="absolute inset-0 opacity-[0.4]">
          <MathematicalNetwork className="h-full w-full" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="scroll-mt-24 text-center text-2xl font-bold tracking-tight text-primary sm:text-3xl">
            WHAT'S WRONG AND HOW WE FIX IT
          </h2>

          <div className="mt-10 flex flex-col gap-6 lg:flex-row lg:items-center" >
            {/* Traditional Math — neutral/muted (lowest weight) */}
            <div className="group relative overflow-hidden rounded-2xl border border-border bg-surface-raised p-8 text-center shadow-sm transition-all duration-200 hover:shadow-md lg:flex-1">
              {/* Background graphic — fragmented nodes */}
              <div className="absolute inset-0 opacity-[0.04]">
                <DotMatrix className="h-full w-full" />
              </div>

              <div className="relative">
                <div className="flex items-center justify-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-text-muted/10 text-text-muted">
                  <BookIcon className="text-curiosity" />
                  </div>
                  

                  <h3 className="text-2xl font-bold text-text-secondary">Traditional Math</h3>
                </div>
                <ul className="mt-5 space-y-3 text-base leading-[1.7] text-text-muted">
                  <li>• Memorization</li>
                  <li>• Formulas First</li>
                  <li>• Abstract</li>
                  <li>• Disconnected</li>
                </ul>
              </div>
            </div>

            {/* Flow Arrow — desktop only (solid line) */}
            <div className="hidden lg:flex items-center justify-center px-2">
              <svg
                width="60"
                height="75"
                viewBox="0 0 48 48"
                fill="none"
                className="text-text-muted"
              >
                {/* Solid line */}
                <path
                  d="M6 24h32"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />

                {/* Arrow head */}
                <path
                  d="M32 16l10 8-10 8"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            

            {/* Leads To — muted warm treatment (middle weight) */}
            <div className="group relative overflow-hidden rounded-2xl border border-insight/20 bg-surface-raised p-8 text-center shadow-sm  transition-all duration-200 hover:shadow-md lg:flex-1">
              {/* Background graphic — fading connections */}
              <div className="absolute inset-0 opacity-[0.04]">
                <IntersectingCircles className="h-full w-full" />
              </div>

              <div className="relative">
                <div className="flex items-center justify-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-insight/15 text-insight">
                  <SadFaceIcon className="text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary">Leads To</h3>
                </div>
                <ul className="mt-5 space-y-3 text-base leading-[1.7] text-text-secondary">
                  <li>• Confusion</li>
                  <li>• Fear of Math</li>
                  <li>• Temporary Learning</li>
                  <li>• Low Confidence</li>
                </ul>
              </div>
            </div>
            

            {/* Flow Arrow — desktop only (solid line) */}
            <div className="hidden lg:flex items-center justify-center px-2">
              <svg
                width="60"
                height="75"
                viewBox="0 0 48 48"
                fill="none"
                className="text-text-muted"
              >
                {/* Solid line */}
                <path
                  d="M6 24h32"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />

                {/* Arrow head */}
                <path
                  d="M32 16l10 8-10 8"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            

            {/* Ganitra Approach — strongest treatment (destination) */}
            <div className="group relative overflow-hidden rounded-2xl border-2 border-discovery/30 bg-gradient-to-br from-[#BFF4F4] via-[#BFF4F4] to-[#BFF4F4] p-8 text-center shadow-md transition-all duration-200 hover:shadow-lg lg:flex-1">
              {/* Background graphic — clean geometric construction */}
              <div className="absolute inset-0 opacity-[0.06]">
                <TriangleConstruction className="h-full w-full" />
              </div>

              <div className="relative">
                <div className="flex items-center justify-center gap-3">
                 <EyeIcon className="text-discovery" />
                 <h3 className="text-2xl font-bold text-primary">Ganitra Approach</h3>
               </div>

                <ul className="mt-5 space-y-3 text-base leading-[1.7] text-text-secondary">
                  <li>• Visual Understanding</li>
                  <li>• Intuition First</li>
                  <li>• Connections</li>
                  <li>• Long-term Confidence</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Mission />

      {/* Ganitra Method — 3 distinct gradient cards */}
      <section className="bg-surface-raised py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="scroll-mt-24 text-center text-2xl font-bold tracking-tight text-primary sm:text-3xl">
            THE GANITRA METHOD
          </h2>

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
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">Visualize the concept. We start with what you can see. Pictures, patterns and diagrams make ideas clear.</p>
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
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">Build deep understanding. We connect the dots. You discover how and why it works.</p>
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
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">Use it with confidence. We practice in meaningful ways. You apply math to solve real problems.</p>
                <div className="mt-4 h-1 w-12 rounded-full bg-application" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Books Preview Section */}
      <section className="bg-[#EAF6F8] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="scroll-mt-24 text-center text-2xl font-bold tracking-tight text-primary sm:text-3xl">
            EXPLORE OUR BOOKS
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {books.map((book) => (
              <div
                key={book.id}
                className="group relative overflow-hidden rounded-xl border border-border bg-surface shadow-sm transition-all hover:shadow-md hover:-translate-y-1"
              >
                <div className={`h-1.5 ${book.accent}`} />
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-primary">{book.title}</h3>
                    <span className={`rounded-full px-2.5 py-0.5 text-xs font-semibold text-primary-dark ${book.accent}`}>
                      {book.chapters.length} chapters
                    </span>
                  </div>
                  <p className="mt-1 text-sm font-medium text-text-muted">{book.gradeRange}</p>
                  <p className="mt-3 text-sm leading-relaxed text-text-secondary">{book.shortDescription}</p>
                  <div className="mt-6 flex gap-3">
                    <Link href="/sample-chapters" className="text-sm font-semibold text-discovery underline-offset-2 hover:underline">View Sample</Link>
                    <Link href="/contact#request-book" className="text-sm font-semibold text-discovery underline-offset-2 hover:underline">Request Book</Link>
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

      {/* Blog Preview Section */}
      <section className="bg-surface-raised py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="scroll-mt-24 text-center text-2xl font-bold tracking-tight text-primary sm:text-3xl">
            LATEST INSIGHTS
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {blogPosts.slice(0, 3).map((post, i) => {
              const colors = ["bg-discovery", "bg-insight", "bg-application"];
              const color = colors[i % colors.length];
              return (
                <article key={post.slug} className="group rounded-xl border border-border bg-surface p-6 shadow-sm transition-all hover:shadow-md hover:-translate-y-1">
                  <div className={`h-1 w-12 rounded-full ${color}`} />
                  <time className="mt-3 block text-xs font-medium text-text-muted">{post.date}</time>
                  <h3 className="mt-2 text-lg font-semibold text-primary group-hover:text-discovery transition-colors">
                    <Link href={`/blog/${post.slug}`} className="underline-offset-2 hover:underline">{post.title}</Link>
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">{post.excerpt}</p>
                  <Link href={`/blog/${post.slug}`} className="mt-4 inline-block text-sm font-semibold text-discovery underline-offset-2 hover:underline">Read more →</Link>
                </article>
              );
            })}
          </div>
          <div className="mt-8 text-center">
            <Link href="/blog" className="inline-flex items-center justify-center rounded-lg border border-primary/20 bg-surface px-6 py-3 text-sm font-semibold text-primary shadow-sm transition-all hover:bg-surface-sunken hover:scale-[1.02]">View All Articles</Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <SimpleCTA
        title="Ready to see mathematics differently?"
        description="Start your journey with Ganitra today."
        primaryLabel="Explore Books"
        primaryHref="/books"
        secondaryLabel="View Sample Chapters"
        secondaryHref="/sample-chapters"
      />
    </>
  );
}