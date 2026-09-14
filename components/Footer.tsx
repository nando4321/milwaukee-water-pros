import Link from "next/link";
import { Logo } from "@/components/Logo";
import { site } from "@/lib/site";
import { services, servicePath } from "@/lib/services";
import { areas, areaPath } from "@/lib/areas";

const mapsSrc = `https://maps.google.com/maps?q=${encodeURIComponent(site.address.full)}&z=12&output=embed`;

export function Footer() {
  return (
    <footer className="bg-ice text-navy">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-4">
        <div>
          <Logo size={110} />
        </div>
        <div>
          <h2 className="font-heading text-lg font-extrabold text-accent">Quick Links</h2>
          <ul className="mt-4 space-y-2 text-sm font-semibold">
            <li><Link href="/services" className="hover:text-accent">Services</Link></li>
            <li><Link href="/service-areas" className="hover:text-accent">Service Areas</Link></li>
            <li><Link href="/about" className="hover:text-accent">About Us</Link></li>
            <li><Link href="/#process" className="hover:text-accent">How It Works</Link></li>
            <li><Link href="/#reviews" className="hover:text-accent">Reviews</Link></li>
            <li><Link href="/privacy" className="hover:text-accent">Privacy</Link></li>
          </ul>
        </div>
        <div>
          <h2 className="font-heading text-lg font-extrabold text-accent">Services</h2>
          <ul className="mt-4 space-y-2 text-sm font-semibold">
            {services.map((service) => (
              <li key={service.slug}>
                <Link href={servicePath(service.slug)} className="hover:text-accent">
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-heading text-lg font-extrabold text-accent">Service Areas</h2>
          <ul className="mt-4 space-y-2 text-sm font-semibold">
            {areas.map((area) => (
              <li key={area.slug}>
                <Link href={areaPath(area.slug)} className="hover:text-accent">
                  {area.navTitle}
                </Link>
              </li>
            ))}
          </ul>
          <div className="relative mt-5 overflow-hidden rounded-xl border border-blue/30">
            <a
              href={`https://maps.google.com/?q=${encodeURIComponent(site.address.full)}`}
              target="_blank"
              rel="noreferrer"
              className="absolute left-2 top-2 z-10 inline-flex items-center gap-1 rounded-md bg-white px-2 py-1 text-xs font-semibold text-navy shadow"
            >
              Open in Maps
              <span aria-hidden="true">↗</span>
            </a>
            <iframe
              title={`${site.name} office map`}
              src={mapsSrc}
              className="h-40 w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
      <div className="bg-navy py-4 text-center text-xs text-white/80">
        © {new Date().getFullYear()} {site.name} All Rights Reserved
      </div>
    </footer>
  );
}
