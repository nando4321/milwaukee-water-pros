import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { CtaPanel } from "@/components/CtaPanel";
import { ButtonLink } from "@/components/Button";
import { ServiceArt, serviceArtKind } from "@/components/ServiceArt";
import { services, servicePath } from "@/lib/services";

export const metadata: Metadata = {
  title: "Complete Water Filtration & Treatment Solutions for Milwaukee Homes",
  description:
    "Whole-home water filtration, reverse osmosis, water softeners, carbon filtration, well water treatment, and city water treatment for Greater Milwaukee.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services • Comprehensive Water Filtration Solutions"
        title="Complete Water Filtration & Treatment Solutions for Milwaukee Homes"
        body="Our services include whole-home water filtration, reverse osmosis drinking water systems, water softeners, carbon filtration, well water treatment, and city water treatment systems — each designed to improve taste, reduce unwanted water concerns, and support cleaner water throughout your home."
      />
      <section className="bg-white">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 py-16 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.slug}
              className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm"
            >
              <Link href={servicePath(service.slug)}>
                <ServiceArt
                  kind={serviceArtKind(service.slug)}
                  label={service.title}
                  className="h-44 w-full"
                />
              </Link>
              <div className="p-6">
                <h2 className="font-heading text-xl font-extrabold text-navy">{service.title}</h2>
                <p className="mt-3 text-sm leading-7 text-muted">{service.short}</p>
                <ButtonLink href={servicePath(service.slug)} variant="ghost" className="mt-4">
                  Explore service
                </ButtonLink>
              </div>
            </article>
          ))}
        </div>
      </section>
      <CtaPanel />
    </>
  );
}
