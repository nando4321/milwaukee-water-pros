import Link from "next/link";
import { EstimateForm } from "@/components/EstimateForm";
import { FaqAccordion } from "@/components/FaqAccordion";
import { ButtonLink } from "@/components/Button";
import { CtaPanel } from "@/components/CtaPanel";
import { CheckIcon, DropIcon } from "@/components/Icons";
import { ServiceArt, serviceArtKind } from "@/components/ServiceArt";
import { site } from "@/lib/site";
import { services, servicePath } from "@/lib/services";
import { areas, areaPath } from "@/lib/areas";
import { homeFaqs } from "@/lib/faqs";

const process = [
  {
    title: "Water Quality Review",
    body: "We discuss your home’s water source, concerns, and goals to better understand what type of filtration or treatment solution may be right for you.",
  },
  {
    title: "Clear Recommendations",
    body: "Our team explains your options clearly, answers your questions, and recommends a system based on your water needs, home setup, and budget.",
  },
  {
    title: "Professional Installation",
    body: "Once you choose the right solution, we install your system with care, test performance, and make sure you understand how your new water treatment system works.",
  },
];

const whyUs = [
  {
    title: "Customized Water Treatment Solutions",
    body: "We recommend systems based on your home’s water quality, water source, and specific concerns.",
  },
  {
    title: "Whole-Home Protection",
    body: "Our filtration systems help improve water throughout your entire home, from showers and sinks to appliances and plumbing.",
  },
  {
    title: "Cleaner Drinking Water Options",
    body: "Reverse osmosis systems provide high-quality drinking and cooking water right from your kitchen.",
  },
  {
    title: "Professional Service You Can Trust",
    body: "We focus on clear communication, dependable workmanship, and long-term water quality improvements.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(67,121,170,0.35),transparent_36%),radial-gradient(circle_at_90%_80%,rgba(194,66,13,0.22),transparent_32%)]" />
        <div className="absolute -right-24 top-10 h-72 w-72 rounded-full border border-white/10" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 lg:grid-cols-[1.15fr_0.85fr] lg:py-20">
          <div>
            <h1 className="font-heading text-4xl font-extrabold leading-[1.12] tracking-tight sm:text-5xl lg:text-[3.35rem]">
              #1 Top-Rated Water Filtration &amp; Treatment Experts In Milwaukee
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-white/85 sm:text-lg">
              {site.name} helps homeowners enjoy cleaner, better-tasting water with professional
              whole-home water filtration, reverse osmosis drinking water systems, water softeners,
              carbon filtration, well water treatment, and city water treatment solutions. Serving
              Greater Milwaukee — Milwaukee County, Waukesha County, and Ozaukee County — we provide
              honest recommendations and dependable installation designed around your home’s water
              quality needs.
            </p>
            <div className="mt-6 hidden gap-6 sm:flex">
              <p className="inline-flex items-center gap-2 text-sm font-semibold">
                <CheckIcon className="h-4 w-4 text-accent" />
                Whole-Home Water Filtration
              </p>
              <p className="inline-flex items-center gap-2 text-sm font-semibold">
                <CheckIcon className="h-4 w-4 text-accent" />
                Reverse Osmosis Drinking Water
              </p>
            </div>
          </div>
          <div className="rounded-2xl bg-white p-6 text-navy shadow-2xl sm:p-8">
            <p className="text-center text-lg font-semibold">
              Request A <span className="underline decoration-accent decoration-2">FREE</span>
            </p>
            <p className="mb-5 text-center font-heading text-2xl font-extrabold">Consultation Today!</p>
            <EstimateForm compact />
          </div>
        </div>
      </section>

      <section id="process" className="bg-ice">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 lg:grid-cols-[1fr_0.9fr] lg:py-20">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue">
              From Consultation to Completion in 3 Easy Steps
            </p>
            <h2 className="mt-3 font-heading text-3xl font-extrabold text-navy sm:text-4xl">
              A Simple, No-Pressure Water Treatment Experience
            </h2>
            <p className="mt-4 max-w-xl text-base leading-8 text-muted">
              We make the process easy from start to finish. First, we review your water concerns,
              then recommend the right solution, and finally install your system with care so you
              can enjoy better water with confidence.
            </p>
            <div className="mt-8 space-y-6">
              {process.map((step, index) => (
                <div key={step.title} className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-blue text-blue">
                    <DropIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-accent">
                      Step {index + 1}
                    </p>
                    <h3 className="font-heading text-lg font-extrabold text-navy">{step.title}</h3>
                    <p className="mt-1 text-sm leading-7 text-muted">{step.body}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <ButtonLink href="/contact">Get A Free Consultation</ButtonLink>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <ServiceArt kind="process" label="Technician reviewing a home water treatment setup" className="h-full w-full" />
          </div>
        </div>
      </section>

      <section id="services" className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 lg:py-20">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue">
            Our Services • Comprehensive Water Filtration Solutions
          </p>
          <div className="mt-3 grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <h2 className="font-heading text-3xl font-extrabold text-navy sm:text-4xl">
              Complete Water Filtration &amp; Treatment Solutions for Milwaukee Homes
            </h2>
            <p className="text-base leading-8 text-muted">
              Our services include whole-home water filtration, reverse osmosis drinking water
              systems, water softeners, carbon filtration, well water treatment, and city water
              treatment systems — each designed to improve taste, reduce unwanted water concerns,
              and support cleaner water throughout your home.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.slug}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <Link href={servicePath(service.slug)} className="block">
                  <ServiceArt
                    kind={serviceArtKind(service.slug)}
                    label={service.title}
                    className="h-48 w-full object-cover"
                  />
                </Link>
                <div className="p-6">
                  <h3 className="font-heading text-xl font-extrabold text-navy">{service.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted">{service.short}</p>
                  <ButtonLink
                    href={servicePath(service.slug)}
                    variant="ghost"
                    className="mt-4 px-0"
                  >
                    Explore service
                  </ButtonLink>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="bg-ice">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 lg:grid-cols-2 lg:py-20">
          <div className="overflow-hidden rounded-2xl">
            <ServiceArt kind="city" label="Greater Milwaukee water treatment coverage" className="h-full w-full" />
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue">About Us</p>
            <h2 className="mt-3 font-heading text-3xl font-extrabold text-navy sm:text-4xl">
              Milwaukee’s Trusted Water Filtration Specialists
            </h2>
            <p className="mt-4 text-base leading-8 text-muted">
              {site.name} proudly serves Greater Milwaukee with professional water filtration and
              treatment solutions designed to improve the quality, taste, and performance of your
              home’s water. We help homeowners choose the right system based on their water source,
              concerns, and household needs — whether that means whole-home filtration, reverse
              osmosis drinking water, water softening, carbon filtration, well water treatment, or
              city water treatment.
            </p>
            <ul className="mt-6 space-y-4">
              {whyUs.map((item) => (
                <li key={item.title} className="flex gap-3">
                  <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-accent" />
                  <span>
                    <strong className="font-heading text-navy">{item.title}</strong>
                    <span className="block text-sm leading-7 text-muted">{item.body}</span>
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              {areas.map((area) => (
                <Link
                  key={area.slug}
                  href={areaPath(area.slug)}
                  className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-navy shadow-sm hover:text-accent"
                >
                  {area.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="reviews" className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 lg:py-20">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue">
            What Milwaukee Homeowners Are Saying
          </p>
          <h2 className="mt-3 font-heading text-3xl font-extrabold text-navy sm:text-4xl">
            Reviews coming soon
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-8 text-muted">
            We are collecting customer feedback from Greater Milwaukee homeowners. This section is
            a placeholder — we do not display invented ratings, review counts, or Google scores.
            When published reviews are available, they will appear here.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              "Whole-home filtration",
              "Reverse osmosis",
              "Water softeners",
            ].map((label) => (
              <div
                key={label}
                className="rounded-2xl border border-dashed border-slate-300 bg-ice p-6"
              >
                <p className="text-xs font-bold uppercase tracking-wider text-blue">Placeholder</p>
                <p className="mt-2 font-heading text-lg font-extrabold text-navy">{label}</p>
                <p className="mt-2 text-sm leading-7 text-muted">
                  Customer comments for {label.toLowerCase()} will be shown here after we have
                  real, published reviews. No star ratings are claimed at this time.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="bg-ice">
        <div className="mx-auto max-w-6xl px-4 py-16 lg:py-20">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue">FAQ</p>
          <h2 className="mt-3 max-w-3xl font-heading text-3xl font-extrabold text-navy sm:text-4xl">
            Frequently Asked Questions About Our Water Filtration Services
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-8 text-muted">
            Get quick answers to common questions about whole-home filtration, reverse osmosis
            systems, water softeners, carbon filtration, well water treatment, city water
            treatment, installation, and choosing the best system for your home.
          </p>
          <div className="mt-8">
            <FaqAccordion items={homeFaqs} />
          </div>
        </div>
      </section>

      <section id="contact" className="bg-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 lg:grid-cols-2 lg:py-20">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue">Find Us</p>
            <h2 className="mt-3 font-heading text-3xl font-extrabold text-navy">
              Feel free to reach out anytime. We&apos;re here to help!
            </h2>
            <p className="mt-4 text-base leading-8 text-muted">
              Use the estimate form to request a free consultation. A phone number is coming soon —
              we are not publishing a number or email on this site yet.
            </p>
            <dl className="mt-8 space-y-4 text-sm">
              <div>
                <dt className="font-heading font-bold text-navy">Phone</dt>
                <dd className="text-muted">{site.phoneLabel}</dd>
              </div>
              <div>
                <dt className="font-heading font-bold text-navy">Address</dt>
                <dd className="text-muted">
                  {site.address.full}
                  <br />
                  {site.officeNote}
                </dd>
              </div>
              <div>
                <dt className="font-heading font-bold text-navy">Service areas</dt>
                <dd className="text-muted">{site.counties.join(" • ")}</dd>
              </div>
            </dl>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-ice p-6 sm:p-8">
            <p className="text-center text-lg font-semibold text-navy">
              Request A <span className="underline decoration-accent">FREE</span>
            </p>
            <p className="mb-5 text-center font-heading text-2xl font-extrabold text-navy">
              Consultation Today!
            </p>
            <EstimateForm id="home-contact-form" />
          </div>
        </div>
      </section>

      <CtaPanel />
    </>
  );
}
