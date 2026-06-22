import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/data/blog";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
    },
  };
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-primary">Post Not Found</h1>
        <p className="mt-4 text-primary/70">
          The article you're looking for doesn't exist.
        </p>
        <Link
          href="/blog"
          className="mt-6 inline-block text-sm font-semibold text-primary underline-offset-2 hover:underline"
        >
          &larr; Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <Link
        href="/blog"
        className="text-sm font-semibold text-primary underline-offset-2 hover:underline"
      >
        &larr; Back to Blog
      </Link>

      <header className="mt-6">
        <time className="text-sm font-medium text-primary/40">{post.date}</time>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-primary sm:text-4xl">
          {post.title}
        </h1>
        <p className="mt-3 text-lg text-primary/60">{post.excerpt}</p>
      </header>

      <div className="mt-10 space-y-4 text-base leading-relaxed text-primary/80">
        {post.content.split("\n\n").map((paragraph, i) => {
          if (paragraph.startsWith("## ")) {
            return (
              <h2 key={i} className="mt-8 text-xl font-semibold text-primary">
                {paragraph.replace("## ", "")}
              </h2>
            );
          }
          if (paragraph.startsWith("### ")) {
            return (
              <h3 key={i} className="mt-6 text-lg font-semibold text-primary">
                {paragraph.replace("### ", "")}
              </h3>
            );
          }
          if (paragraph.startsWith("- ")) {
            return (
              <ul key={i} className="list-disc pl-6 space-y-1">
                {paragraph.split("\n").map((line, j) => (
                  <li key={j}>{line.replace("- ", "")}</li>
                ))}
              </ul>
            );
          }
          return <p key={i}>{paragraph}</p>;
        })}
      </div>
    </article>
  );
}