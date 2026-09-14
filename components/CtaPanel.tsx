import { ButtonLink } from "@/components/Button";

export function CtaPanel({
  title = "Request a free consultation",
  body = "Tell us about your water concerns. We will review your home, recommend the right solution, and schedule a professional installation — with no pressure.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="bg-navy">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-4 py-12 sm:flex-row sm:items-center">
        <div>
          <h2 className="font-heading text-2xl font-extrabold text-white sm:text-3xl">{title}</h2>
          <p className="mt-2 max-w-2xl text-sm leading-7 text-white/80">{body}</p>
        </div>
        <ButtonLink href="/contact" className="shrink-0">
          Get A Free Consultation
        </ButtonLink>
      </div>
    </section>
  );
}
