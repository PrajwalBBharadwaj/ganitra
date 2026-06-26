import { siteConfig } from "@/data/siteConfig";

export const metadata = {
  title: "About Ganitra",
  description: "Learn about our mission to make mathematics visual, intuitive, and connected to the real world.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="scroll-mt-24 text-4xl font-bold tracking-tight text-primary sm:text-5xl">
          About {siteConfig.displayName}
        </h1>
        <p className="mt-4 text-lg text-text-secondary">
          Making mathematics visual, intuitive, and connected to the real world.
        </p>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        <div className="rounded-xl border border-border bg-surface p-6 shadow-sm">
          <h2 className="text-xl font-bold text-primary">Our Vision</h2>
          <p className="mt-2 text-sm leading-relaxed text-text-secondary">
            We believe mathematics is not about memorizing formulas — it is about seeing patterns, understanding relationships, and building intuition that lasts a lifetime.
          </p>
        </div>
        <div className="rounded-xl border border-border bg-surface p-6 shadow-sm">
          <h2 className="text-xl font-bold text-primary">Our Approach</h2>
          <p className="mt-2 text-sm leading-relaxed text-text-secondary">
            Every concept is introduced visually. Diagrams, patterns, and real-world connections come before abstract notation, so learners build genuine understanding.
          </p>
        </div>
      </div>
    </div>
  );
}