import { submitEstimate } from "@/app/actions";
import { serviceOptions } from "@/lib/site";
import { ArrowIcon } from "@/components/Icons";

type EstimateFormProps = {
  compact?: boolean;
  id?: string;
};

export function EstimateForm({ compact = false, id = "estimate-form" }: EstimateFormProps) {
  return (
    <form
      id={id}
      action={submitEstimate}
      className={compact ? "space-y-3" : "space-y-4"}
    >
      <label className="sr-only" htmlFor={`${id}-service`}>
        Choose service
      </label>
      <select
        id={`${id}-service`}
        name="service"
        required
        defaultValue=""
        className="w-full rounded-md border border-slate-300 bg-white px-3 py-3 text-sm text-navy outline-none focus:border-blue"
      >
        <option value="" disabled>
          - Choose Service -
        </option>
        {serviceOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <label className="sr-only" htmlFor={`${id}-address`}>
        Address
      </label>
      <input
        id={`${id}-address`}
        name="address"
        type="text"
        required
        autoComplete="street-address"
        placeholder="Enter Full Address*"
        className="w-full rounded-md border border-slate-300 px-3 py-3 text-sm text-navy outline-none focus:border-blue"
      />
      <label className="sr-only" htmlFor={`${id}-name`}>
        Name
      </label>
      <input
        id={`${id}-name`}
        name="name"
        type="text"
        required
        autoComplete="name"
        placeholder="Name"
        className="w-full rounded-md border border-slate-300 px-3 py-3 text-sm text-navy outline-none focus:border-blue"
      />
      <label className="sr-only" htmlFor={`${id}-phone`}>
        Phone
      </label>
      <input
        id={`${id}-phone`}
        name="phone"
        type="tel"
        required
        autoComplete="tel"
        placeholder="Phone"
        className="w-full rounded-md border border-slate-300 px-3 py-3 text-sm text-navy outline-none focus:border-blue"
      />
      <label className="sr-only" htmlFor={`${id}-email`}>
        Email
      </label>
      <input
        id={`${id}-email`}
        name="email"
        type="email"
        required
        autoComplete="email"
        placeholder="Email"
        className="w-full rounded-md border border-slate-300 px-3 py-3 text-sm text-navy outline-none focus:border-blue"
      />
      <div className="hidden" aria-hidden="true">
        <label htmlFor={`${id}-company`}>Company</label>
        <input id={`${id}-company`} name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      <button
        type="submit"
        className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-accent px-4 py-3 text-sm font-bold text-white transition hover:bg-accent-dark"
      >
        <ArrowIcon className="h-3.5 w-3.5" />
        Get A Free Consultation
      </button>
      <p className="text-center text-[11px] leading-5 text-muted">
        By pressing &apos;Get A Free Consultation&apos; you are agreeing to our{" "}
        <a href="/privacy" className="underline">
          privacy policy
        </a>
        . This is a demo estimate request. We will follow up using the details you provide.
        Phone service is coming soon — we do not text from a public number yet.
      </p>
    </form>
  );
}
