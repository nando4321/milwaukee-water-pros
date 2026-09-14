"use client";

import { useState } from "react";
import Link from "next/link";
import { Logo } from "@/components/Logo";
import { ArrowIcon, PhoneIcon } from "@/components/Icons";
import { site } from "@/lib/site";
import { services, servicePath } from "@/lib/services";
import { areas, areaPath } from "@/lib/areas";

export function Header() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [areasOpen, setAreasOpen] = useState(false);

  function close() {
    setOpen(false);
    setServicesOpen(false);
    setAreasOpen(false);
  }

  return (
    <header className="sticky top-0 z-40">
      <div className="bg-navy text-center text-sm text-white">
        <p className="inline-flex items-center gap-2 px-4 py-2 font-medium">
          <PhoneIcon className="h-3.5 w-3.5" />
          {site.phoneLabel}
        </p>
      </div>
      <div className="border-b border-slate-100 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
          <Logo size={84} />
          <nav className="hidden flex-1 items-center justify-center gap-7 text-[15px] font-semibold text-navy lg:flex" aria-label="Main">
            <Link href="/#process" className="hover:text-accent">
              Process
            </Link>
            <div className="group relative">
              <Link href="/services" className="inline-flex items-center gap-1 hover:text-accent">
                Services
                <span className="text-[10px]">▼</span>
              </Link>
              <div className="invisible absolute left-1/2 top-full z-50 min-w-72 -translate-x-1/2 translate-y-2 rounded-md border border-slate-200 bg-white py-2 opacity-0 shadow-lg transition group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                {services.map((service) => (
                  <Link
                    key={service.slug}
                    href={servicePath(service.slug)}
                    className="block px-4 py-2 text-sm font-medium text-navy hover:bg-ice hover:text-accent"
                  >
                    {service.navTitle}
                  </Link>
                ))}
              </div>
            </div>
            <div className="group relative">
              <Link href="/service-areas" className="inline-flex items-center gap-1 hover:text-accent">
                Service Areas
                <span className="text-[10px]">▼</span>
              </Link>
              <div className="invisible absolute left-1/2 top-full z-50 min-w-56 -translate-x-1/2 translate-y-2 rounded-md border border-slate-200 bg-white py-2 opacity-0 shadow-lg transition group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                {areas.map((area) => (
                  <Link
                    key={area.slug}
                    href={areaPath(area.slug)}
                    className="block px-4 py-2 text-sm font-medium text-navy hover:bg-ice hover:text-accent"
                  >
                    {area.navTitle}
                  </Link>
                ))}
              </div>
            </div>
            <Link href="/about" className="hover:text-accent">
              About Us
            </Link>
            <Link href="/#reviews" className="hover:text-accent">
              Reviews
            </Link>
          </nav>
          <Link
            href="/contact"
            className="hidden items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-bold text-white hover:bg-accent-dark lg:inline-flex"
          >
            Get A Free Consultation
            <ArrowIcon className="h-3.5 w-3.5" />
          </Link>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-slate-200 text-navy lg:hidden"
            aria-expanded={open}
            aria-label="Open menu"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">Menu</span>
            <span className="flex flex-col gap-1.5">
              <span className="block h-0.5 w-5 bg-navy" />
              <span className="block h-0.5 w-5 bg-navy" />
              <span className="block h-0.5 w-5 bg-navy" />
            </span>
          </button>
        </div>
        {open ? (
          <div className="border-t border-slate-200 bg-white px-4 py-4 lg:hidden">
            <nav className="flex flex-col gap-2 font-semibold text-navy" aria-label="Mobile">
              <Link href="/#process" onClick={close} className="py-2">
                Process
              </Link>
              <button type="button" className="flex items-center justify-between py-2 text-left" onClick={() => setServicesOpen((v) => !v)}>
                Services
                <span className="text-xs">{servicesOpen ? "−" : "+"}</span>
              </button>
              {servicesOpen
                ? services.map((service) => (
                    <Link key={service.slug} href={servicePath(service.slug)} onClick={close} className="pl-3 py-1 text-sm font-medium text-muted">
                      {service.navTitle}
                    </Link>
                  ))
                : null}
              <button type="button" className="flex items-center justify-between py-2 text-left" onClick={() => setAreasOpen((v) => !v)}>
                Service Areas
                <span className="text-xs">{areasOpen ? "−" : "+"}</span>
              </button>
              {areasOpen
                ? areas.map((area) => (
                    <Link key={area.slug} href={areaPath(area.slug)} onClick={close} className="pl-3 py-1 text-sm font-medium text-muted">
                      {area.navTitle}
                    </Link>
                  ))
                : null}
              <Link href="/about" onClick={close} className="py-2">
                About Us
              </Link>
              <Link href="/#reviews" onClick={close} className="py-2">
                Reviews
              </Link>
              <Link href="/contact" onClick={close} className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-accent px-4 py-3 text-white">
                Get A Free Consultation
              </Link>
            </nav>
          </div>
        ) : null}
      </div>
    </header>
  );
}
