import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { HeroIllustration } from "@/components/ui/MathGraphics";

export function Hero() {
  return (
    <section className="relative min-h-screen bg-hero-bg math-bg overflow-hidden">
      {/* Hero SVG illustration — right side */}
      <div className="absolute inset-y-0 right-0 hidden w-3/5 lg:block">
        <HeroIllustration className="h-full w-full" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-screen items-center">
          <div className="max-w-2xl py-20 lg:max-w-3xl">
            {/* Overline */}
            <p className="text-sm font-semibold uppercase tracking-widest text-discovery">
              {siteConfig.origin && siteConfig.origin.includes("Sanskrit") ? "VISUAL. INTUITIVE. CONNECTED." : "Mathematics Understanding Platform"}
            </p>

            <h1 className="mt-4 text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
              {siteConfig.tagline.split("when you can see it.").length > 1 ? (
                <>
                  {siteConfig.tagline.split("when you can see it.")[0]}
                  <span className="text-discovery">see</span>
                  it.
                </>
              ) : (
                siteConfig.tagline
              )}
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-white/75 sm:text-xl max-w-[650px]">
              {siteConfig.missionStatement}
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/sample-chapters"
                className="inline-flex items-center justify-center rounded-lg bg-discovery px-6 py-3 text-sm font-semibold text-primary-dark shadow-sm transition-all hover:bg-discovery/90 hover:scale-[1.02]"
              >
                Explore Books
              </Link>
              <Link
                href="/books"
                className="inline-flex items-center justify-center rounded-lg border border-white/25 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-white/10 hover:scale-[1.02]"
              >
                See the Method
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}