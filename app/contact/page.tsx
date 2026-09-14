import type { Metadata } from "next";
import { ContactSection } from "@/components/ContactSection";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Request a Free Water Treatment Consultation",
  description:
    "Request a free estimate from Milwaukee Water Pros for whole-home filtration, reverse osmosis, softeners, carbon, well, or city water treatment in Greater Milwaukee.",
  alternates: { canonical: "/contact" },
};

export default async function ContactPage({
  searchParams,
}: PageProps<"/contact">) {
  const query = await searchParams;
  const error = Array.isArray(query.error) ? query.error[0] : query.error;
  const missing = error === "missing";

  return (
    <>
      {missing ? (
        <p className="bg-accent px-4 py-3 text-center text-sm text-white" role="status">
          Please complete every required field so we can review your estimate request.
        </p>
      ) : null}
      <section className="bg-ice px-4 py-10 text-center">
        <h1 className="font-heading text-4xl font-extrabold text-navy">Request a free consultation</h1>
        <p className="mx-auto mt-3 max-w-2xl text-muted">
          Tell us about your home and water concerns. Phone service is coming soon, and we are not
          publishing an email address yet. Office: {site.address.full}.
        </p>
      </section>
      <ContactSection />
    </>
  );
}
