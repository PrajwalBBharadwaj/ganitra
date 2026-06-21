import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | A Mathematics Understanding Platform",
  description:
    "Ganitra helps students see mathematics clearly and intuitively. Learn about our philosophy, mission, and vision for mathematics education.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
        About
      </h1>
      <p className="mt-4 text-lg text-primary/70">
        Our mission and philosophy.
      </p>
    </div>
  );
}