import Link from "next/link";
import { blogPosts } from "@/data/blog";
import { DotMatrix, GeometricMesh, CoordinateGrid } from "@/components/ui/MathGraphics";

export const metadata = {
  title: "Mathematics Insights & Visual Learning",
  description:
    "Explore articles on visual mathematics, conceptual understanding, and the Ganitra approach to learning.",
};

export default function BlogPage() {
  const patternMap = [DotMatrix, GeometricMesh, CoordinateGrid];

  return (
    <div className="relative overflow-hidden bg-surface py-16 sm:py-20">
      {/* Mathematical background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="h-full w-full">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="blog-bg" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                <circle cx="40" cy="40" r="1" fill="#7C3AED" fillOpacity="0.3" />
                <line x1="0" y1="40" x2="80" y2="40" stroke="#7C3AED" strokeOpacity="0.15" strokeWidth="0.5" />
                <line x1="40" y1="0" x2="40" y2="80" stroke="#7C3AED" strokeOpacity="0.15" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#blog-bg)" />
          </svg>
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
            const PatternComponent = patternMap[i % patternMap.length];
            return (
              <article
                key={post.slug}
                className="group relative overflow-hidden rounded-xl border border-border bg-surface-raised p-6 shadow-sm transition-all duration-200 hover:shadow-md hover:-translate-y-1"
              >
                {/* Card-specific mathematical pattern */}
                <div className="absolute inset-0 opacity-[0.04]">
                  <PatternComponent className="h-full w-full" />
                </div>

                <div className="relative">
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
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
}
