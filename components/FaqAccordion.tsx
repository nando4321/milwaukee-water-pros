"use client";

import { useState } from "react";

type Faq = { q: string; a: string };

export function FaqAccordion({ items }: { items: readonly Faq[] | Faq[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="mx-auto max-w-4xl space-y-3">
      {items.map((item, index) => {
        const isOpen = open === index;
        return (
          <div key={item.q} className="overflow-hidden rounded-xl">
            <button
              type="button"
              className={`flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-heading text-base font-bold ${
                isOpen ? "bg-accent text-white" : "bg-navy text-white"
              }`}
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : index)}
            >
              {item.q}
              <span className="text-xl leading-none">{isOpen ? "−" : "+"}</span>
            </button>
            {isOpen ? (
              <p className="bg-ice px-5 py-4 text-sm leading-7 text-muted">{item.a}</p>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
