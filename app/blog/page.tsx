import type { Metadata } from "next";
import Link from "next/link";

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
    </div>
  );
}