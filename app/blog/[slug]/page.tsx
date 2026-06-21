import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Article",
  description: "Read our latest article about visual mathematics and understanding-first learning.",
};

export default function BlogArticlePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
        Blog Article
      </h1>
      <p className="mt-4 text-primary/70">Article content coming soon.</p>
    </div>
  );
}