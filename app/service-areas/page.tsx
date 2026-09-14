import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { CtaPanel } from "@/components/CtaPanel";
import { ButtonLink } from "@/components/Button";
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
      <PageHero
        eyebrow="Our Locations • Comprehensive Water Filtration Solutions"
        title="Service Areas for Water Filtration in Greater Milwaukee"
        body="Our services include whole-home water filtration, reverse osmosis drinking water systems, water softeners, carbon filtration, well water treatment, and city water treatment systems — each designed to improve taste, reduce unwanted water concerns, and support cleaner water throughout your home."
      />
      <section className="bg-white">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 py-16 md:grid-cols-3">
          {areas.map((area) => (
            <article key={area.slug} className="rounded-2xl border border-slate-200 p-6 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-wider text-blue">Wisconsin</p>
              <h2 className="mt-2 font-heading text-2xl font-extrabold text-navy">{area.name}</h2>
              <p className="mt-3 text-sm leading-7 text-muted">{area.intro}</p>
              <p className="mt-4 text-sm font-semibold text-navy">
                {area.cities.slice(0, 6).join(", ")}
                {area.cities.length > 6 ? ", and more" : ""}
              </p>
              <ButtonLink href={areaPath(area.slug)} variant="ghost" className="mt-4">
                Explore {area.name}
              </ButtonLink>
            </article>
          ))}
        </div>
      </section>
      <section className="bg-ice">
        <div className="mx-auto max-w-6xl px-4 py-12 text-sm text-muted">
          Looking for a specific city? Start with{" "}
          {areas.map((area, index) => (
            <span key={area.slug}>
              <Link href={areaPath(area.slug)} className="font-semibold text-navy hover:text-accent">
                {area.name}
              </Link>
              {index < areas.length - 1 ? ", " : "."}
            </span>
          ))}
        </div>
      </section>
      <CtaPanel />
    </>
  );
}
