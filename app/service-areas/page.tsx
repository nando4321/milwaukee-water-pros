import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/Button";
import { ContactSection } from "@/components/ContactSection";
import { SectionBadge } from "@/components/SectionBadge";
import { areas, areaPath } from "@/lib/areas";

export const metadata: Metadata = {
  title: "Service Areas for Water Filtration in Greater Milwaukee",
  description:
    "Milwaukee Water Pros serves Milwaukee County, Waukesha County, and Ozaukee County with water filtration, softening, reverse osmosis, and well treatment.",
  alternates: { canonical: "/service-areas" },
};

export default function ServiceAreasPage() {
  return (
    <>
      <section className="bg-ice">
        <div className="mx-auto max-w-6xl px-4 py-16 text-center">
          <SectionBadge>Our Locations • Comprehensive Water Filtration Solutions</SectionBadge>
          <h1 className="mx-auto mt-5 max-w-4xl font-heading text-4xl font-extrabold text-navy sm:text-5xl">
            Service Areas for Water Filtration in Greater Milwaukee
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-muted">
            Our services include whole home water filtration, reverse osmosis drinking water
            systems, water softeners, carbon filtration, well water treatment, and city water
            treatment systems each designed to improve taste, reduce unwanted water concerns, and
            support cleaner water throughout your home.
          </p>
          <div className="mt-12 grid gap-6 text-left md:grid-cols-3">
            {areas.map((area) => (
              <article key={area.slug} className="overflow-hidden rounded-2xl border border-blue/35 bg-white">
                <Link href={areaPath(area.slug)} className="relative block h-52">
                  <Image src={area.image} alt={area.name} fill className="object-cover" sizes="(min-width: 1024px) 30vw, 100vw" />
                </Link>
                <div className="border-t-4 border-navy p-5">
                  <h2 className="font-heading text-2xl font-extrabold text-navy">{area.name}</h2>
                  <p className="mt-2 text-sm leading-7 text-muted">{area.cities.slice(0, 5).join(", ")}</p>
                  <ButtonLink href={areaPath(area.slug)} variant="ghost" className="mt-3">
                    Explore Service Area
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
