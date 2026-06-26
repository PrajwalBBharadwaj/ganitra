import { siteConfig } from "@/data/siteConfig";

export const metadata = {
  title: "Contact Ganitra",
  description: "Get in touch to request books, ask questions, or learn more about our visual mathematics approach.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="scroll-mt-24 text-4xl font-bold tracking-tight text-primary sm:text-5xl">
          Contact Us
        </h1>
        <p className="mt-4 text-lg text-text-secondary">
          Have a question or want to request a book? We would love to hear from you.
        </p>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        <div className="rounded-xl border border-border bg-surface p-6 shadow-sm">
          <h2 className="text-xl font-bold text-primary">Request a Book</h2>
          <p className="mt-2 text-sm leading-relaxed text-text-secondary">
            Interested in our textbooks? Fill out the form and we will send you more information about availability and pricing.
          </p>
        </div>
        <div className="rounded-xl border border-border bg-surface p-6 shadow-sm">
          <h2 className="text-xl font-bold text-primary">General Inquiries</h2>
          <p className="mt-2 text-sm leading-relaxed text-text-secondary">
            Questions about our approach, partnerships, or anything else? Reach out and we will get back to you.
          </p>
        </div>
      </div>
    </div>
  );
}