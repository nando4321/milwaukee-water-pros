import type { ReactNode } from "react";
import { submitEstimate } from "@/app/actions";
import { serviceOptions } from "@/lib/site";
import { ArrowIcon } from "@/components/Icons";

type EstimateFormProps = {
  id?: string;
  variant?: "hero" | "contact" | "simple";
};

const field =
  "w-full rounded-full border border-blue/35 bg-white px-4 py-3 text-sm text-navy outline-none placeholder:text-slate-400 focus:border-blue";

export function EstimateForm({ id = "estimate-form", variant = "simple" }: EstimateFormProps) {
  const isHero = variant === "hero";
  const isContact = variant === "contact";

  return (
    <form id={id} action={submitEstimate} className={isContact ? "space-y-4" : "space-y-3"}>
      {isHero ? (
        <>
          <p className="text-center text-lg font-semibold text-white">
            Request A <span className="underline decoration-white decoration-2">FREE</span>
          </p>
          <p className="mb-1 text-center font-heading text-2xl font-extrabold text-white">
            Consultation Today!
          </p>
        </>
      ) : null}

      {isContact ? (
        <div className="grid gap-4 sm:grid-cols-2">
          <Labeled id={`${id}-name`} label="Name *">
            <input id={`${id}-name`} name="name" required autoComplete="name" placeholder="Name" className={field} />
          </Labeled>
          <Labeled id={`${id}-address`} label="Enter Full Address *">
            <input
              id={`${id}-address`}
              name="address"
              required
              autoComplete="street-address"
              placeholder="Enter Full Address"
              className={field}
            />
          </Labeled>
          <Labeled id={`${id}-email`} label="Email *">
            <input id={`${id}-email`} name="email" type="email" required autoComplete="email" placeholder="Email" className={field} />
          </Labeled>
          <Labeled id={`${id}-phone`} label="Phone *">
            <input id={`${id}-phone`} name="phone" type="tel" required autoComplete="tel" placeholder="Phone" className={field} />
          </Labeled>
        </div>
      ) : (
        <>
          <HiddenLabel htmlFor={`${id}-service`}>Choose service</HiddenLabel>
          <select id={`${id}-service`} name="service" required defaultValue="" className={field}>
            <option value="" disabled>
              - Choose Service -
            </option>
            {serviceOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <HiddenLabel htmlFor={`${id}-address`}>Address</HiddenLabel>
          <input id={`${id}-address`} name="address" required autoComplete="street-address" placeholder="Enter Full Address*" className={field} />
          <HiddenLabel htmlFor={`${id}-name`}>Name</HiddenLabel>
          <input id={`${id}-name`} name="name" required autoComplete="name" placeholder="Name" className={field} />
          <HiddenLabel htmlFor={`${id}-phone`}>Phone</HiddenLabel>
          <input id={`${id}-phone`} name="phone" type="tel" required autoComplete="tel" placeholder="Phone" className={field} />
          <HiddenLabel htmlFor={`${id}-email`}>Email</HiddenLabel>
          <input id={`${id}-email`} name="email" type="email" required autoComplete="email" placeholder="Email" className={field} />
        </>
      )}

      {isContact ? (
        <>
          <Labeled id={`${id}-service`} label="Choose Service *">
            <select id={`${id}-service`} name="service" required defaultValue="" className={field}>
              <option value="" disabled>
                - Choose Service -
              </option>
              {serviceOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </Labeled>
          <Labeled id={`${id}-message`} label="Message">
            <textarea
              id={`${id}-message`}
              name="message"
              rows={5}
              placeholder="Message"
              className="w-full rounded-2xl border border-blue/35 bg-white px-4 py-3 text-sm text-navy outline-none placeholder:text-slate-400 focus:border-blue"
            />
          </Labeled>
        </>
      ) : null}

      <div className="hidden" aria-hidden="true">
        <label htmlFor={`${id}-company`}>Company</label>
        <input id={`${id}-company`} name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className={isContact ? "flex justify-end" : ""}>
        <button
          type="submit"
          className={`inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-bold text-white transition hover:bg-accent-dark ${isContact ? "" : "w-full"}`}
        >
          {isContact ? "Submit" : "Get A Free Consultation"}
          <ArrowIcon className="h-3.5 w-3.5" />
        </button>
      </div>

      {isHero ? (
        <p className="text-center text-[11px] leading-5 text-white/70">
          By pressing &apos;Get A Free Consultation&apos; you are agreeing to our{" "}
          <a href="/privacy" className="underline">
            privacy policy
          </a>
          . Phone service is coming soon — we do not text from a public number yet.
        </p>
      ) : (
        <p className={`text-[11px] leading-5 ${isContact ? "text-muted" : "text-center text-muted"}`}>
          By submitting you agree to our{" "}
          <a href="/privacy" className="underline">
            privacy policy
          </a>
          . This is a demo estimate request.
        </p>
      )}
    </form>
  );
}

function HiddenLabel({ htmlFor, children }: { htmlFor: string; children: string }) {
  return (
    <label className="sr-only" htmlFor={htmlFor}>
      {children}
    </label>
  );
}

function Labeled({
  id,
  label,
  children,
}: {
  id: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-semibold text-navy">
        {label}
      </label>
      {children}
    </div>
  );
}
