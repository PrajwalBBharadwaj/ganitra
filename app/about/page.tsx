import { siteConfig } from "@/data/siteConfig";
import { BlueprintCircle, BlueprintTriangle } from "@/components/ui/MathGraphics";

export const metadata = {
  title: "About Ganitra",
  description: "Learn about our mission to make mathematics visual, intuitive, and connected to the real world.",
};

export default function AboutPage() {
  return (
    <div className="relative overflow-hidden bg-surface py-16 sm:py-20">
      {/* Mathematical background graphics */}
      <div className="absolute -left-20 top-20 hidden h-[400px] w-auto opacity-[0.08] lg:block">
        <BlueprintCircle className="h-full w-auto" />
      </div>
      <div className="absolute -right-20 top-40 hidden h-[400px] w-auto opacity-[0.08] lg:block">
        <BlueprintTriangle className="h-full w-auto" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="scroll-mt-24 text-4xl font-bold tracking-tight text-primary sm:text-5xl">
            About {siteConfig.displayName}
          </h1>
          <p className="mt-4 text-lg text-text-secondary">
            Making mathematics visual, intuitive, and connected to the real world.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <div className="group relative overflow-hidden rounded-xl border border-border bg-surface-raised p-6 shadow-sm transition-all duration-200 hover:shadow-md hover:-translate-y-1">
            <div className="absolute inset-0 opacity-[0.03]">
              <div className="h-full w-full" style={{
                backgroundImage: "radial-gradient(circle at 2px 2px, #06B6D4 1px, transparent 0)",
                backgroundSize: "24px 24px"
              }} />
            </div>
            <div className="relative">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-discovery/20 text-discovery">
                <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="24" cy="24" r="16" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.6" />
                  <circle cx="24" cy="24" r="4" fill="currentColor" fillOpacity="0.4" />
                </svg>
              </div>
              <h2 className="mt-4 text-xl font-bold text-primary">Our Vision</h2>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                We believe mathematics is not about memorizing formulas — it is about seeing patterns, understanding relationships, and building intuition that lasts a lifetime.
              </p>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-xl border border-border bg-surface-raised p-6 shadow-sm transition-all duration-200 hover:shadow-md hover:-translate-y-1">
            <div className="absolute inset-0 opacity-[0.03]">
              <div className="h-full w-full" style={{
                backgroundImage: "radial-gradient(circle at 2px 2px, #7C3AED 1px, transparent 0)",
                backgroundSize: "24px 24px"
              }} />
            </div>
            <div className="relative">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-insight/20 text-insight">
                <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="24" cy="14" r="4" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.6" />
                  <circle cx="14" cy="34" r="4" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.6" />
                  <circle cx="34" cy="34" r="4" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.6" />
                  <line x1="24" y1="18" x2="14" y2="30" stroke="currentColor" strokeWidth="1" strokeOpacity="0.4" />
                  <line x1="24" y1="18" x2="34" y2="30" stroke="currentColor" strokeWidth="1" strokeOpacity="0.4" />
                </svg>
              </div>
              <h2 className="mt-4 text-xl font-bold text-primary">Our Approach</h2>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                Every concept is introduced visually. Diagrams, patterns, and real-world connections come before abstract notation, so learners build genuine understanding.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
