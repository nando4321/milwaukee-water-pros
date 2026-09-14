import Image from "next/image";
import Link from "next/link";
import { EstimateForm } from "@/components/EstimateForm";
import { FaqAccordion } from "@/components/FaqAccordion";
import { ButtonLink } from "@/components/Button";
import { ContactSection } from "@/components/ContactSection";
import { SectionBadge } from "@/components/SectionBadge";
import { CheckIcon, ClipboardIcon, DropIcon, WrenchIcon } from "@/components/Icons";
import { site } from "@/lib/site";
import { services, servicePath } from "@/lib/services";
import { homeFaqs } from "@/lib/faqs";

const process = [
  {
    title: "Water Quality Review",
    body: "We discuss your home’s water source, concerns, and goals to better understand what type of filtration or treatment solution may be right for you.",
    icon: DropIcon,
  },
  {
    title: "Clear Recommendations",
    body: "Our team explains your options clearly, answers your questions, and recommends a system based on your water needs, home setup, and budget.",
    icon: ClipboardIcon,
  },
  {
    title: "Professional Installation",
    body: "Once you choose the right solution, we install your system with care, test performance, and make sure you understand how your new water treatment system works.",
    icon: WrenchIcon,
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
      <section className="relative overflow-hidden text-white">
        <Image
          src="/images/hero-water.jpg"
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-navy/75" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 lg:grid-cols-[1.15fr_0.85fr] lg:py-16">
          <div>
            <h1 className="font-heading text-4xl font-extrabold leading-[1.12] tracking-tight sm:text-5xl lg:text-[3.4rem]">
              #1 Top-Rated Water Filtration &amp; Treatment Experts In Milwaukee
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-white/90 sm:text-[17px]">
              {site.name} helps homeowners enjoy cleaner, better-tasting water with professional
              whole home water filtration, reverse osmosis drinking water systems, water softeners,
              carbon filtration, well water treatment, and city water treatment solutions. Serving
              Greater Milwaukee, we provide honest recommendations and dependable installation
              designed around your home’s water quality needs.
            </p>
            <div className="mt-8 hidden flex-wrap gap-3 sm:flex">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/50 px-4 py-2 text-sm font-semibold">
                <CheckIcon className="h-3.5 w-3.5 text-accent" />
                Whole-Home Water Filtration
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/50 px-4 py-2 text-sm font-semibold">
                <CheckIcon className="h-3.5 w-3.5 text-accent" />
                Reverse Osmosis Drinking Water
              </span>
            </div>
          </div>
          <div className="rounded-2xl bg-navy p-6 shadow-2xl ring-1 ring-white/10 sm:p-8">
            <EstimateForm variant="hero" />
          </div>
        </div>
      </section>

      <section id="process" className="bg-navy text-white">
        <div className="mx-auto max-w-6xl px-4 py-16 lg:py-20">
          <h2 className="text-center font-heading text-3xl font-extrabold sm:text-5xl">
            A Simple, No-Pressure Water Treatment Experience
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-center text-base leading-8 text-white/80">
            We make the process easy from start to finish. First, we review your water concerns,
            then recommend the right solution, and finally install your system with care so you can
            enjoy better water with confidence.
          </p>
          <div className="mt-12 grid items-stretch gap-8 lg:grid-cols-2">
            <div className="space-y-4">
              {process.map((step) => {
                const Icon = step.icon;
                return (
                  <div key={step.title} className="flex gap-4 rounded-2xl border border-white/25 p-5">
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-2 border-white/40">
                      <Icon className="h-7 w-7" />
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-extrabold">{step.title}</h3>
                      <p className="mt-1 text-sm leading-7 text-white/75">{step.body}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="relative min-h-80 overflow-hidden rounded-2xl border border-white/20">
              <Image
                src="/images/kitchen-tap.jpg"
                alt="Pouring a glass of treated drinking water"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 45vw, 100vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="bg-ice">
        <div className="mx-auto max-w-6xl px-4 py-16 text-center lg:py-20">
          <SectionBadge>Our Services • Comprehensive Water Filtration Solutions</SectionBadge>
          <h2 className="mx-auto mt-5 max-w-4xl font-heading text-3xl font-extrabold text-navy sm:text-5xl">
            Complete Water Filtration &amp; Treatment Solutions for Milwaukee Homes
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-muted">
            Our services include whole home water filtration, reverse osmosis drinking water
            systems, water softeners, carbon filtration, well water treatment, and city water
            treatment systems each designed to improve taste, reduce unwanted water concerns, and
            support cleaner water throughout your home.
          </p>
          <div className="mt-12 grid gap-6 text-left md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.slug}
                className="overflow-hidden rounded-2xl border border-blue/35 bg-white shadow-sm"
              >
                <Link href={servicePath(service.slug)} className="relative block h-52">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 30vw, 100vw"
                    loading="eager"
                  />
                </Link>
                <div className="border-t-4 border-navy p-5">
                  <h3 className="font-heading text-xl font-extrabold text-navy">{service.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-muted">{service.short}</p>
                  <ButtonLink href={servicePath(service.slug)} variant="ghost" className="mt-3 px-0">
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

      <section id="about" className="bg-navy text-white">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 lg:grid-cols-2 lg:py-20">
          <div>
            <SectionBadge onDark>About Milwaukee Water Pros • Your Trusted Water Filtration Partner</SectionBadge>
            <h2 className="mt-5 font-heading text-3xl font-extrabold sm:text-5xl">
              Milwaukee’s Trusted Water Filtration Specialists
            </h2>
            <p className="mt-5 text-base leading-8 text-white/85">
              {site.name} proudly serves{" "}
              <span className="font-extrabold text-accent">Greater Milwaukee</span> with professional
              water filtration and treatment solutions designed to improve the quality, taste, and
              performance of your home’s water. We help homeowners choose the right system based on
              their water source, concerns, and household needs, whether that means whole home
              filtration, reverse osmosis drinking water, water softening, carbon filtration, well
              water treatment, or city water treatment. Our goal is to provide honest guidance,
              quality installation, and dependable solutions that help your family enjoy cleaner
              water every day.
            </p>
            <ul className="mt-6 space-y-3">
              {whyUs.map((item) => (
                <li key={item.title} className="flex gap-3">
                  <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-accent" />
                  <span className="text-sm leading-7">
                    <strong>{item.title}</strong> – {item.body}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative min-h-96 overflow-hidden rounded-2xl border border-accent/50">
            <Image
              src="/images/equipment-whole-home.jpg"
              alt="Whole-home water treatment tank"
              fill
              className="object-cover object-center"
              sizes="(min-width: 1024px) 45vw, 100vw"
            />
          </div>
        </div>
      </section>

      <section id="reviews" className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 text-center lg:py-20">
          <h2 className="font-heading text-3xl font-extrabold text-navy sm:text-5xl">
            What Milwaukee Homeowners Are Saying
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-muted">
            Homeowners choose {site.name} for honest recommendations, professional service, and
            noticeable improvements in their water quality. Customer reviews will appear here once
            they are published — we do not display invented ratings or Google scores.
          </p>
          <div className="mt-10 grid items-center gap-6 text-left md:grid-cols-[0.7fr_1fr_1fr]">
            <div className="rounded-2xl border border-dashed border-blue/40 bg-ice p-8 text-center">
              <p className="font-heading text-2xl font-extrabold uppercase tracking-wide text-navy">
                Reviews
              </p>
              <p className="mt-2 text-lg font-bold text-navy">Coming soon</p>
              <p className="mt-3 text-sm text-muted">
                No star ratings or review counts are claimed at this time.
              </p>
            </div>
            {["Whole-home filtration", "Reverse osmosis"].map((label) => (
              <div key={label} className="rounded-2xl bg-slate-100 p-6">
                <p className="text-xs font-bold uppercase tracking-wider text-blue">Placeholder</p>
                <p className="mt-2 font-heading text-lg font-extrabold text-navy">{label}</p>
                <p className="mt-2 text-sm leading-7 text-muted">
                  Published customer comments for {label.toLowerCase()} will be shown here. This
                  card is a labeled placeholder, not a real review.
                </p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <ButtonLink href="/contact">Get A Free Consultation</ButtonLink>
          </div>
        </div>
      </section>

      <section id="faq" className="bg-ice">
        <div className="mx-auto max-w-6xl px-4 py-16 text-center lg:py-20">
          <SectionBadge>Frequently Asked • Answers To Your Questions</SectionBadge>
          <h2 className="mx-auto mt-5 max-w-4xl font-heading text-3xl font-extrabold text-navy sm:text-5xl">
            Frequently Asked Questions About Our Water Filtration Services
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-muted">
            Get quick answers to common questions about whole home filtration, reverse osmosis
            systems, water softeners, carbon filtration, well water treatment, city water
            treatment, installation, and choosing the best system for your home.
          </p>
          <div className="mt-10 text-left">
            <FaqAccordion items={homeFaqs} />
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
