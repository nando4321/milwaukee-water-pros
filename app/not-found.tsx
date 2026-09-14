import { ButtonLink } from "@/components/Button";

export default function NotFound() {
  return (
    <section className="bg-ice">
      <div className="mx-auto max-w-3xl px-4 py-24 text-center">
        <h1 className="font-heading text-4xl font-extrabold text-navy">Page not found</h1>
        <p className="mt-4 text-muted">
          That page is not on the Milwaukee Water Pros site. Try the homepage or browse services.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <ButtonLink href="/">Home</ButtonLink>
          <ButtonLink href="/contact" variant="navy">
            Contact
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
