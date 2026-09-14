import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { ContactSection } from "@/components/ContactSection";
import { FaqAccordion } from "@/components/FaqAccordion";
import { EstimateForm } from "@/components/EstimateForm";
import { CheckIcon } from "@/components/Icons";
import { site } from "@/lib/site";
import { getService, services } from "@/lib/services";

type Props = PageProps<"/services/[slug]">;

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: service.heroTitle,
    description: service.intro,
    alternates: { canonical: `/services/${service.slug}` },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  return (
    <>
      <PageHero title={service.heroTitle} body={service.intro} />
      <section className="bg-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="font-heading text-3xl font-extrabold text-navy">{service.benefitsTitle}</h2>
            <ul className="mt-8 space-y-6">
              {service.benefits.map((item) => (
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
              <EstimateForm id={`${service.slug}-form`} />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-ice">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="font-heading text-3xl font-extrabold text-navy">{service.whyTitle}</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {service.why.map((item) => (
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
          <h2 className="font-heading text-3xl font-extrabold text-navy">
            Frequently Asked Questions About {service.title} in Greater Milwaukee
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-8 text-muted">
            Review common questions about {service.title.toLowerCase()}, property-specific concerns,
            and what homeowners in Milwaukee, Waukesha, and Ozaukee counties can expect.
          </p>
          <div className="mt-8">
            <FaqAccordion items={service.faqs} />
          </div>
        </div>
      </section>
      <section className="bg-ice">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="font-heading text-3xl font-extrabold text-navy">Find Us</h2>
          <p className="mt-4 max-w-3xl text-base leading-8 text-muted">{service.findUs}</p>
          <p className="mt-4 text-sm text-muted">{site.address.full} • {site.phoneLabel}</p>
        </div>
      </section>
      <ContactSection />
    </>
  );
}
