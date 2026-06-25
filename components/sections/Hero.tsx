import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { IntersectingCircles, TriangleConstruction, CoordinateGrid } from "@/components/ui/MathGraphics";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-primary math-bg">
      {/* Mathematical SVG visualization — right side */}
      <div className="absolute inset-y-0 right-0 hidden w-5/12 lg:block">
        <div className="relative h-full w-full opacity-80">
          <IntersectingCircles className="absolute inset-0" />
          <TriangleConstruction className="absolute inset-0" />
          <CoordinateGrid className="absolute inset-0" />
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
        <div className="max-w-2xl lg:max-w-3xl">
          {/* Overline */}
          <p className="text-sm font-semibold uppercase tracking-widest text-discovery">
            Mathematics Understanding Platform
          </p>

          <h1 className="mt-4 text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
            {siteConfig.tagline}
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-white/75 sm:text-xl">
            {siteConfig.missionStatement}
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/sample-chapters"
              className="inline-flex items-center justify-center rounded-lg bg-discovery px-6 py-3 text-sm font-semibold text-primary-dark shadow-sm transition-all hover:bg-discovery/90 hover:scale-[1.02]"
            >
              View Sample Chapters
            </Link>
            <Link
              href="/books"
              className="inline-flex items-center justify-center rounded-lg border border-white/25 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-white/10 hover:scale-[1.02]"
            >
              Explore Books
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}