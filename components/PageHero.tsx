export function PageHero({
  eyebrow,
  title,
  body,
}: {
  eyebrow?: string;
  title: string;
  body: string;
}) {
  return (
    <section className="relative overflow-hidden bg-navy text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(67,121,170,0.45),transparent_42%)]" />
      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:py-20">
        {eyebrow ? (
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-white/70">{eyebrow}</p>
        ) : null}
        <h1 className="mt-3 max-w-4xl font-heading text-3xl font-extrabold leading-tight sm:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-3xl text-base leading-8 text-white/85 sm:text-lg">{body}</p>
      </div>
    </section>
  );
}
