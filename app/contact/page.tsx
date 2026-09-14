import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { EstimateForm } from "@/components/EstimateForm";
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
      <PageHero
        title="Request a free consultation"
        body="Tell us about your home and water concerns. This is a demo estimate form — submitting it shows a thank-you page. Phone service is coming soon, and we are not publishing an email address yet."
      />
      <section className="bg-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="font-heading text-2xl font-extrabold text-navy">How to reach us</h2>
            <dl className="mt-6 space-y-5 text-sm">
              <div>
                <dt className="font-heading font-bold text-navy">Phone</dt>
                <dd className="mt-1 text-muted">{site.phoneLabel}</dd>
              </div>
              <div>
                <dt className="font-heading font-bold text-navy">Email</dt>
                <dd className="mt-1 text-muted">Coming soon — please use the form.</dd>
              </div>
              <div>
                <dt className="font-heading font-bold text-navy">Office</dt>
                <dd className="mt-1 text-muted">
                  {site.address.full}
                  <br />
                  {site.officeNote}
                </dd>
              </div>
              <div>
                <dt className="font-heading font-bold text-navy">Service areas</dt>
                <dd className="mt-1 text-muted">{site.counties.join(", ")}</dd>
              </div>
            </dl>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-ice p-6 sm:p-8">
            {missing ? (
              <p className="mb-4 rounded-md bg-white px-3 py-2 text-sm text-accent" role="status">
                Please complete every field so we can review your estimate request.
              </p>
            ) : null}
            <p className="text-center text-lg font-semibold text-navy">
              Request A <span className="underline decoration-accent">FREE</span>
            </p>
            <p className="mb-5 text-center font-heading text-2xl font-extrabold text-navy">
              Consultation Today!
            </p>
            <EstimateForm id="contact-page-form" />
          </div>
        </div>
      </section>
    </>
  );
}
