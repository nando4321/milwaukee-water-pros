import { EstimateForm } from "@/components/EstimateForm";
import { PhoneIcon, PinIcon } from "@/components/Icons";
import { site } from "@/lib/site";

export function ContactSection() {
  return (
    <section id="contact" className="bg-navy">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-16 lg:grid-cols-[0.85fr_1.15fr] lg:py-20">
        <div className="rounded-2xl bg-white p-8 text-navy">
          <h2 className="font-heading text-3xl font-extrabold">Get In Touch With Us</h2>
          <p className="mt-4 text-sm leading-7 text-muted">
            Feel free to reach out to us anytime. We&apos;re here to help!
          </p>
          <ul className="mt-8 space-y-5 text-sm">
            <li className="flex items-start gap-3">
              <PhoneIcon className="mt-0.5 h-5 w-5 text-accent" />
              <div>
                <p className="font-bold text-accent">Phone Number</p>
                <p>{site.phoneLabel}</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <PinIcon className="mt-0.5 h-5 w-5 text-accent" />
              <div>
                <p className="font-bold text-accent">Address</p>
                <p>{site.address.full}</p>
                <p className="text-muted">{site.officeNote}</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="rounded-2xl bg-white p-8 text-navy">
          <h2 className="font-heading text-3xl font-extrabold">Send Us a Message</h2>
          <div className="mt-6">
            <EstimateForm id="contact-band-form" variant="contact" />
          </div>
        </div>
      </div>
    </section>
  );
}
