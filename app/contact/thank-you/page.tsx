import type { Metadata } from "next";
import { ButtonLink } from "@/components/Button";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Thank you",
  description: "Your Milwaukee Water Pros estimate request has been received.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/contact/thank-you" },
};

export default function ThankYouPage() {
  return (
    <section className="bg-ice">
      <div className="mx-auto max-w-3xl px-4 py-24 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue">Estimate request</p>
        <h1 className="mt-3 font-heading text-4xl font-extrabold text-navy">Thank you</h1>
        <p className="mt-5 text-base leading-8 text-muted">
          Your consultation request was received. This is a demo thank-you page — in production, the
          team at {site.name} would follow up using the contact details you provided. Phone service
          is still coming soon.
        </p>
        <p className="mt-4 text-sm text-muted">Office: {site.address.full}</p>
        <div className="mt-8 flex justify-center gap-3">
          <ButtonLink href="/">Back to home</ButtonLink>
          <ButtonLink href="/services" variant="navy">
            Browse services
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
