import { siteConfig } from "@/data/siteConfig";
import { HexagonWatermark } from "@/components/ui/MathGraphics";

export function Mission() {
  return (
    <section className="relative overflow-hidden bg-discovery/5 py-16 sm:py-24">
      {/* Geometric watermark */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.04]">
        <HexagonWatermark className="h-full w-full max-w-2xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          {/* Large quotation marks */}
          <div className="text-6xl text-discovery/20 font-serif leading-none">"</div>
          <h2 className="mt-4 text-2xl font-bold tracking-tight text-primary sm:text-3xl">
            OUR MISSION
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-text-secondary">
            {siteConfig.missionStatement}
          </p>
          <div className="mt-4 text-6xl text-discovery/20 font-serif leading-none rotate-180">"</div>
        </div>
      </div>
    </section>
  );
}