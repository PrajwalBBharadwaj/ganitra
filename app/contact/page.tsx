import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Book Requests and School Inquiries",
  description:
    "Contact Ganitra for book requests, school partnerships, teacher inquiries, or general questions.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
        Contact
      </h1>
      <p className="mt-4 text-lg text-primary/70">
        Get in touch with us.
      </p>
    </div>
  );
}