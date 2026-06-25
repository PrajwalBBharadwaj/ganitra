import Link from "next/link";

interface SimpleCTAProps {
  title: string;
  description?: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export function SimpleCTA({
  title,
  description,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}: SimpleCTAProps) {
  return (
    <section className="relative overflow-hidden bg-primary py-16 sm:py-24">
      {/* Subtle geometric pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="h-full w-full" style={{
          backgroundImage: "radial-gradient(circle at 2px 2px, #06B6D4 1px, transparent 0)",
          backgroundSize: "32px 32px"
        }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          {title}
        </h2>
        {description && (
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/75">
            {description}
          </p>
        )}
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href={primaryHref}
            className="inline-flex items-center justify-center rounded-lg bg-discovery px-6 py-3 text-sm font-semibold text-primary-dark shadow-sm transition-all hover:bg-discovery/90 hover:scale-[1.02]"
          >
            {primaryLabel}
          </Link>
          {secondaryLabel && secondaryHref && (
            <Link
              href={secondaryHref}
              className="inline-flex items-center justify-center rounded-lg border border-white/25 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-white/10 hover:scale-[1.02]"
            >
              {secondaryLabel}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}