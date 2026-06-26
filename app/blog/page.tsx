import Link from "next/link";
import { blogPosts } from "@/data/blog";

export const metadata = {
  title: "Mathematics Insights & Visual Learning",
  description:
    "Explore articles on visual mathematics, conceptual understanding, and the Ganitra approach to learning.",
};

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="scroll-mt-24 text-4xl font-bold tracking-tight text-primary sm:text-5xl">
          Latest Insights
        </h1>
        <p className="mt-4 text-lg text-text-secondary">
          Explore articles on visual mathematics, conceptual understanding, and
          the Ganitra approach to learning.
        </p>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post, i) => {
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
              <h2 className="mt-2 text-lg font-semibold text-primary group-hover:text-discovery transition-colors">
                <Link
                  href={`/blog/${post.slug}`}
                  className="underline-offset-2 hover:underline"
                >
                  {post.title}
                </Link>
              </h2>
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
    </div>
  );
}