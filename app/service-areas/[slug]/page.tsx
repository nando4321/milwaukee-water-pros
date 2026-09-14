import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { CtaPanel } from "@/components/CtaPanel";
import { FaqAccordion } from "@/components/FaqAccordion";
import { EstimateForm } from "@/components/EstimateForm";
import { CheckIcon } from "@/components/Icons";
import { site } from "@/lib/site";
import { services } from "@/lib/services";
import { areas, getArea } from "@/lib/areas";

type Props = PageProps<"/service-areas/[slug]">;

export function generateStaticParams() {
  return areas.map((area) => ({ slug: area.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const area = getArea(slug);
  if (!area) return {};
  return {
    title: area.heroTitle,
    description: area.intro,
    alternates: { canonical: `/service-areas/${area.slug}` },
  };
}

export default async function AreaDetailPage({ params }: Props) {
  const { slug } = await params;
  const area = getArea(slug);
  if (!area) notFound();

  return (
    <>
      <PageHero title={area.heroTitle} body={area.intro} />
      <section className="bg-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="font-heading text-3xl font-extrabold text-navy">
              Service Areas for Water Filtration in {area.name}
            </h2>
            <p className="mt-4 text-base leading-8 text-muted">
              Our services include whole-home water filtration, reverse osmosis drinking water
              systems, water softeners, carbon filtration, well water treatment, and city water
              treatment systems each designed to improve taste, reduce unwanted water concerns, and
              support cleaner water throughout your home.
            </p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {area.cities.map((city) => (
                <li
                  key={city}
                  className="rounded-full bg-ice px-3 py-1.5 text-sm font-semibold text-navy"
                >
                  {city}
                </li>
              ))}
            </ul>
            <ul className="mt-10 space-y-6">
              {area.highlights.map((item) => (
                <li key={item.title} className="flex gap-3">
                  <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-accent" />
                  <div>
                    <h3 className="font-heading text-lg font-extrabold text-navy">{item.title}</h3>
                    <p className="mt-1 text-sm leading-7 text-muted">{item.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-ice p-6">
            <p className="text-center font-heading text-xl font-extrabold text-navy">
              Request A FREE Consultation Today!
            </p>
            <div className="mt-4">
              <EstimateForm id={`${area.slug}-form`} />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-ice">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="font-heading text-3xl font-extrabold text-navy">
            Why Local Water Treatment in {area.name} Matters
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {area.why.map((item) => (
              <article key={item.title} className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="font-heading text-lg font-extrabold text-navy">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="mb-6 font-heading text-2xl font-extrabold text-navy">Solutions we install</h2>
          <ul className="grid gap-3 md:grid-cols-2">
            {services.map((service) => (
              <li key={service.slug} className="rounded-xl border border-slate-200 px-4 py-3 text-sm text-navy">
                {service.title}
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="bg-ice">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="font-heading text-3xl font-extrabold text-navy">
            Frequently Asked Questions About Water Filtration in {area.name}
          </h2>
          <div className="mt-8">
            <FaqAccordion items={area.faqs} />
          </div>
        </div>
      </section>
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="font-heading text-3xl font-extrabold text-navy">Find Us</h2>
          <p className="mt-4 max-w-3xl text-base leading-8 text-muted">{area.findUs}</p>
          <p className="mt-4 text-sm text-muted">
            Office: {site.address.full} • {site.phoneLabel}
          </p>
        </div>
      </section>
      <CtaPanel />
    </>
  );
}
