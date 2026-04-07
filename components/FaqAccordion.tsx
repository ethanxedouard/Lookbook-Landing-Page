"use client";

import { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <div className="space-y-3">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={i}
            className={`border rounded-2xl overflow-hidden transition-all duration-200 ${
              isOpen
                ? "border-accent/30 shadow-sm shadow-accent/10"
                : "border-sand/50"
            }`}
          >
            <button
              onClick={() => toggle(i)}
              className={`w-full flex items-center justify-between gap-4 px-6 py-5 text-left transition-colors duration-200 ${
                isOpen ? "bg-cream" : "bg-warm-white hover:bg-cream/60"
              }`}
            >
              <span className="text-sm font-medium text-ink font-dm">
                {item.question}
              </span>
              <span
                className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-sm transition-all duration-300 ${
                  isOpen
                    ? "bg-accent text-cream rotate-45"
                    : "bg-accent-light text-accent"
                }`}
              >
                +
              </span>
            </button>

            {/* Animated answer */}
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                isOpen ? "max-h-64" : "max-h-0"
              }`}
            >
              <p className="px-6 pb-5 pt-1 text-sm text-stone leading-relaxed font-light font-dm">
                {item.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
