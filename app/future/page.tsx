export const metadata = {
  title: "Future of Ganitra",
  description: "Explore our roadmap and vision for the future of visual mathematics education.",
};

export default function FuturePage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="scroll-mt-24 text-4xl font-bold tracking-tight text-primary sm:text-5xl">
          Future Roadmap
        </h1>
        <p className="mt-4 text-lg text-text-secondary">
          Our vision for expanding visual mathematics education.
        </p>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-xl border border-border bg-surface p-6 shadow-sm">
          <h2 className="text-xl font-bold text-primary">Digital Platform</h2>
          <p className="mt-2 text-sm leading-relaxed text-text-secondary">
            Interactive digital versions of our textbooks with animated diagrams and guided explorations.
          </p>
        </div>
        <div className="rounded-xl border border-border bg-surface p-6 shadow-sm">
          <h2 className="text-xl font-bold text-primary">Teacher Resources</h2>
          <p className="mt-2 text-sm leading-relaxed text-text-secondary">
            Comprehensive guides and materials to help educators bring visual mathematics into their classrooms.
          </p>
        </div>
        <div className="rounded-xl border border-border bg-surface p-6 shadow-sm">
          <h2 className="text-xl font-bold text-primary">Community</h2>
          <p className="mt-2 text-sm leading-relaxed text-text-secondary">
            Building a community of learners and educators passionate about visual mathematics.
          </p>
        </div>
      </div>
    </div>
  );
}