import { siteConfig } from "@/data/siteConfig";
import { BlueprintCircle } from "@/components/ui/MathGraphics";

export const metadata = {
  title: "Contact Ganitra",
  description: "Get in touch to request books, ask questions, or learn more about our visual mathematics approach.",
};

export default function ContactPage() {
  return (
    <div className="relative overflow-hidden bg-surface py-16 sm:py-20">
      {/* Mathematical background graphic */}
      <div className="absolute -right-20 top-20 hidden h-[400px] w-auto opacity-[0.08] lg:block">
        <BlueprintCircle className="h-full w-auto" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="scroll-mt-24 text-4xl font-bold tracking-tight text-primary sm:text-5xl">
            Contact Us
          </h1>
          <p className="mt-4 text-lg text-text-secondary">
            Have a question or want to request a book? We would love to hear from you.
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
                  <rect x="8" y="12" width="32" height="24" rx="2" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.6" />
                  <path d="M8 12l16 12 16-12" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.4" />
                </svg>
              </div>
              <h2 className="mt-4 text-xl font-bold text-primary">Request a Book</h2>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                Interested in our textbooks? Fill out the form and we will send you more information about availability and pricing.
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
                  <circle cx="24" cy="24" r="16" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.6" />
                  <path d="M24 16v8l5 5" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.4" strokeLinecap="round" />
                </svg>
              </div>
              <h2 className="mt-4 text-xl font-bold text-primary">General Inquiries</h2>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                Questions about our approach, partnerships, or anything else? Reach out and we will get back to you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
