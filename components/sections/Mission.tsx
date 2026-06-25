import { siteConfig } from "@/data/siteConfig";
import { HexagonWatermark } from "@/components/ui/MathGraphics";

export function Mission() {
  return (
    <section className="relative overflow-hidden bg-surface py-16 sm:py-24">
      {/* Geometric watermark */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03]">
        <HexagonWatermark className="h-full w-full max-w-2xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Our Mission
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-text-secondary">
            {siteConfig.missionStatement}
          </p>
        </div>
      </div>
    </section>
  );
}