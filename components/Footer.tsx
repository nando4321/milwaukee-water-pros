import Link from "next/link";
import { Logo } from "@/components/Logo";
import { PinIcon } from "@/components/Icons";
import { site } from "@/lib/site";
import { services, servicePath } from "@/lib/services";
import { areas, areaPath } from "@/lib/areas";

export function Footer() {
  return (
    <footer className="border-t border-blue/25 bg-ice text-navy">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-4">
        <div className="md:col-span-1">
          <Logo />
          <p className="mt-4 text-sm leading-6 text-muted">
            Honest recommendations and dependable installation for whole-home filtration,
            reverse osmosis, softeners, carbon systems, well water, and city water treatment.
          </p>
        </div>
        <div>
          <h2 className="font-heading text-sm font-extrabold uppercase tracking-wider text-blue">
            Contact
          </h2>
          <p className="mt-4 inline-flex items-start gap-2 text-sm leading-6">
            <PinIcon className="mt-1 h-4 w-4 shrink-0 text-accent" />
            <span>
              {site.address.line1}
              <br />
              {site.address.city}, {site.address.state} {site.address.zip}
              <br />
              <span className="text-muted">{site.officeNote}</span>
            </span>
          </p>
          <p className="mt-3 text-sm font-semibold">{site.phoneLabel}</p>
          <p className="mt-1 text-sm text-muted">
            Request an estimate with the form on our contact page. We do not list a phone number
            or email yet.
          </p>
        </div>
        <div>
          <h2 className="font-heading text-sm font-extrabold uppercase tracking-wider text-blue">
            Services
          </h2>
          <ul className="mt-4 space-y-2 text-sm">
            {services.map((service) => (
              <li key={service.slug}>
                <Link href={servicePath(service.slug)} className="text-navy hover:text-accent">
                  {service.title.replace(" Services", "").replace(" Systems", "")}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-heading text-sm font-extrabold uppercase tracking-wider text-blue">
            Service Areas
          </h2>
          <ul className="mt-4 space-y-2 text-sm">
            {areas.map((area) => (
              <li key={area.slug}>
                <Link href={areaPath(area.slug)} className="text-navy hover:text-accent">
                  {area.navTitle}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-blue/20">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-3 px-4 py-5 text-xs text-muted sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-navy">
              Privacy Policy
            </Link>
            <Link href="/contact" className="hover:text-navy">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
