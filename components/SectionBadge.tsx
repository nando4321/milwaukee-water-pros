export function SectionBadge({
  children,
  onDark = false,
}: {
  children: string;
  onDark?: boolean;
}) {
  return (
    <p
      className={`inline-flex rounded-full border px-4 py-1 text-[11px] font-bold uppercase tracking-[0.16em] ${
        onDark
          ? "border-white/40 bg-white text-navy"
          : "border-blue/40 bg-white text-navy"
      }`}
    >
      {children}
    </p>
  );
}
