import { siteConfig } from "@/config/site";

export function Mission() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Our Mission
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-primary/70">
            {siteConfig.missionStatement}
          </p>
        </div>
      </div>
    </section>
  );
}