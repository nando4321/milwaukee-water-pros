"use client";

import { useState } from "react";

type Faq = { q: string; a: string };

export function FaqAccordion({ items }: { items: readonly Faq[] | Faq[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-slate-200 overflow-hidden rounded-xl border border-slate-200 bg-white">
      {items.map((item, index) => {
        const isOpen = open === index;
        return (
          <div key={item.q}>
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-heading text-base font-bold text-navy"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : index)}
            >
              {item.q}
              <span className="text-accent">{isOpen ? "−" : "+"}</span>
            </button>
            {isOpen ? (
              <p className="px-5 pb-5 text-sm leading-7 text-muted">{item.a}</p>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
