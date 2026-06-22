import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/data/blog";

export const metadata: Metadata = {
  title: "Blog | Visual Mathematics and Math Understanding",
  description:
    "Explore articles about visual mathematics, conceptual understanding, and effective math learning strategies.",
};

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
        Blog
      </h1>
      <p className="mt-4 text-lg text-primary/70">
        Articles about visual mathematics and understanding-first learning.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <article
            key={post.slug}
            className="rounded-xl border border-secondary-muted bg-white p-6 shadow-sm"
          >
            <time className="text-xs font-medium text-primary/40">
              {post.date}
            </time>
            <h2 className="mt-2 text-lg font-semibold text-primary">
              <Link
                href={`/blog/${post.slug}`}
                className="underline-offset-2 hover:underline"
              >
                {post.title}
              </Link>
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-primary/60">
              {post.excerpt}
            </p>
            <Link
              href={`/blog/${post.slug}`}
              className="mt-4 inline-block text-sm font-semibold text-primary underline-offset-2 hover:underline"
            >
              Read more &rarr;
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}