import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${site.name} handles information submitted through milwaukeewaterpros.com.`,
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        title="Privacy Policy"
        body={`This policy explains how ${site.name} handles information collected on ${site.url.replace("https://", "")}. It is written for a marketing site with a demo estimate form.`}
      />
      <article className="mx-auto max-w-3xl px-4 py-16 text-base leading-8 text-muted">
        <p>
          <strong className="text-navy">{site.name}</strong> operates this website from our office at{" "}
          {site.address.full}. We serve Milwaukee County, Waukesha County, and Ozaukee County.
        </p>
        <h2 className="mt-10 font-heading text-2xl font-extrabold text-navy">Information we collect</h2>
        <p className="mt-3">
          If you submit the consultation form, we collect the service you selected, your address,
          name, phone number, and email. We use that information only to review your request and
          follow up about water filtration or treatment for your home.
        </p>
        <h2 className="mt-10 font-heading text-2xl font-extrabold text-navy">What we do not collect</h2>
        <p className="mt-3">
          We do not publish a business phone number or email on this site yet. We do not send SMS
          marketing from a public number, and this demo form does not create an SMS subscription.
          We do not sell personal information.
        </p>
        <h2 className="mt-10 font-heading text-2xl font-extrabold text-navy">Cookies and analytics</h2>
        <p className="mt-3">
          This static marketing site does not require an account. If analytics are added later, this
          page will be updated to describe the tools used and how to opt out where required.
        </p>
        <h2 className="mt-10 font-heading text-2xl font-extrabold text-navy">How long we keep data</h2>
        <p className="mt-3">
          Estimate requests are kept only as long as needed to respond and schedule work, unless a
          longer period is required by law. You may ask us to update or delete a request by writing
          to our office at {site.address.full}.
        </p>
        <h2 className="mt-10 font-heading text-2xl font-extrabold text-navy">Contact</h2>
        <p className="mt-3">
          Privacy questions can be sent with the website form or by mail to {site.address.full}.
          Phone: {site.phoneLabel}.
        </p>
        <p className="mt-8 text-sm">Last updated: September 14, 2026.</p>
      </article>
    </>
  );
}
