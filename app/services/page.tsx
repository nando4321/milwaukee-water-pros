import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/Button";
import { ContactSection } from "@/components/ContactSection";
import { SectionBadge } from "@/components/SectionBadge";
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
      <section className="bg-ice">
        <div className="mx-auto max-w-6xl px-4 py-16 text-center">
          <SectionBadge>Our Services • Comprehensive Water Filtration Solutions</SectionBadge>
          <h1 className="mx-auto mt-5 max-w-4xl font-heading text-4xl font-extrabold text-navy sm:text-5xl">
            Complete Water Filtration &amp; Treatment Solutions for Milwaukee Homes
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-muted">
            Our services include whole home water filtration, reverse osmosis drinking water
            systems, water softeners, carbon filtration, well water treatment, and city water
            treatment systems each designed to improve taste, reduce unwanted water concerns, and
            support cleaner water throughout your home.
          </p>
          <div className="mt-12 grid gap-6 text-left md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article key={service.slug} className="overflow-hidden rounded-2xl border border-blue/35 bg-white">
                <Link href={servicePath(service.slug)} className="relative block h-52">
                  <Image src={service.image} alt={service.title} fill className="object-cover" sizes="(min-width: 1024px) 30vw, 100vw" />
                </Link>
                <div className="border-t-4 border-navy p-5">
                  <h2 className="font-heading text-xl font-extrabold text-navy">{service.title}</h2>
                  <p className="mt-2 text-sm leading-7 text-muted">{service.short}</p>
                  <ButtonLink href={servicePath(service.slug)} variant="ghost" className="mt-3">
                    Explore service
                  </ButtonLink>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-12">
            <ButtonLink href="/contact">Get A Free Consultation</ButtonLink>
          </div>
        </div>
      </section>
      <ContactSection />
    </>
  );
}
