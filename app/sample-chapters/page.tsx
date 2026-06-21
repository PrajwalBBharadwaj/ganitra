import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sample Math Chapters",
  description:
    "Preview Ganitra's visual approach to mathematics. Explore sample chapters from our Foundations, Core Math, and Advanced Mathematics series.",
};

export default function SampleChaptersPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
        Sample Chapters
      </h1>
      <p className="mt-4 text-lg text-primary/70">
        Preview our visual mathematics approach.
      </p>
    </div>
  );
}