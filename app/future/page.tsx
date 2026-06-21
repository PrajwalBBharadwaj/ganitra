import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Future of Ganitra | Visual Math, Practice and Teacher Resources",
  description:
    "Explore Ganitra's roadmap: Interactive Practice, Visual Mathematics, Teacher Resources, and School Programs — all coming soon.",
};

export default function FuturePage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
        Future
      </h1>
      <p className="mt-4 text-lg text-primary/70">
        Our platform roadmap.
      </p>
    </div>
  );
}