import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { ContactSection } from "@/components/ContactSection";
import { CheckIcon } from "@/components/Icons";
import { site } from "@/lib/site";
import { areas, areaPath } from "@/lib/areas";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "About Milwaukee Water Pros",
  description:
    "Milwaukee Water Pros is a Greater Milwaukee water filtration and treatment company serving Milwaukee, Waukesha, and Ozaukee counties from our Brookfield office.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Water filtration specialists for Greater Milwaukee"
        body={`${site.name} helps homeowners choose and install the right water treatment system based on water source, household needs, and budget. Our office is in Brookfield. Our market is Milwaukee and the surrounding counties — not a single suburb.`}
      />
      <section className="bg-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 lg:grid-cols-2">
          <div>
            <h2 className="font-heading text-3xl font-extrabold text-navy">
              Honest recommendations. Dependable installation.
            </h2>
            <p className="mt-4 text-base leading-8 text-muted">
              We focus on a simple, no-pressure experience: review your water concerns, recommend a
              system that fits, and install it with care. That includes whole-home filtration,
              reverse osmosis drinking water, water softeners, carbon filtration, well water
              treatment, and city water treatment.
            </p>
            <p className="mt-4 text-base leading-8 text-muted">
              You will not find a published phone number or email on this site yet. Phone service
              is coming soon. Until then, request an estimate with the consultation form and we
              will follow up using the details you provide.
            </p>
          </div>
          <div className="rounded-2xl bg-ice p-8">
            <h3 className="font-heading text-xl font-extrabold text-navy">Office</h3>
            <p className="mt-3 text-muted">
              {site.address.full}
              <br />
              {site.officeNote}
            </p>
            <h3 className="mt-8 font-heading text-xl font-extrabold text-navy">Counties we cover</h3>
            <ul className="mt-4 space-y-3">
              {areas.map((area) => (
                <li key={area.slug} className="flex gap-2">
                  <CheckIcon className="mt-1 h-4 w-4 text-accent" />
                  <Link href={areaPath(area.slug)} className="font-semibold text-navy hover:text-accent">
                    {area.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className="bg-ice">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="font-heading text-3xl font-extrabold text-navy">What we install</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {services.map((service) => (
              <div key={service.slug} className="rounded-xl bg-white p-5 shadow-sm">
                <h3 className="font-heading font-extrabold text-navy">{service.title}</h3>
                <p className="mt-2 text-sm leading-7 text-muted">{service.summary}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <ContactSection />
    </>
  );
}
