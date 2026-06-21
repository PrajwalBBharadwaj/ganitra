import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mathematics Textbooks by Grade",
  description:
    "Explore Ganitra's textbook series: Foundations (Grades 1-4), Core Math (Grades 5-7), and Advanced Mathematics (Grades 8-10).",
};

export default function BooksPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
        Books
      </h1>
      <p className="mt-4 text-lg text-primary/70">
        Explore our textbook collections.
      </p>
    </div>
  );
}