import { siteConfig } from "@/config/site";

export default function HomePage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
        {siteConfig.tagline}
      </h1>
      <p className="mt-4 text-lg text-primary/70">
        {siteConfig.defaultDescription}
      </p>
    </div>
  );
}