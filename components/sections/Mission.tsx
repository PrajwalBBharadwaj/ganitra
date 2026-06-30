import { siteConfig } from "@/data/siteConfig";
import { BlueprintCircle, BlueprintTriangle } from "@/components/ui/MathGraphics";

export function Mission() {
  return (
    <section className="relative overflow-hidden bg-[#EAF6F8] py-16 sm:py-20">
      {/* Left blueprint graphic — larger, more visible, edge-aligned, higher opacity */}
      <div className="absolute -left-16 top-1/2 hidden -translate-y-1/2 opacity-[0.24] lg:block lg:h-[600px] xl:h-[700px]">
        <BlueprintCircle className="h-full w-auto" />
      </div>

      {/* Right blueprint graphic — larger, more visible, edge-aligned, higher opacity */}
      <div className="absolute -right-16 top-1/2 hidden -translate-y-1/2 opacity-[0.24] lg:block lg:h-[600px] xl:h-[700px]">
        <BlueprintTriangle className="h-full w-auto" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          {/* Decorative quotation marks — larger, 72-80px */}
          <div className="text-[80px] text-discovery/35 font-serif leading-none">"</div>

          <h2 className="mt-4 text-2xl font-bold tracking-tight text-primary sm:text-3xl">
            OUR MISSION
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-text-secondary">
            {siteConfig.missionStatement}
          </p>

          <div className="mt-4 text-[80px] text-discovery/35 font-serif leading-none rotate-180">"</div>
        </div>
      </div>
    </section>
  );
}