import { ReactNode } from "react";

interface PolicySectionProps {
  id: string;
  icon: string;
  title: string;
  children: ReactNode;
}

export function PolicySection({ id, icon, title, children }: PolicySectionProps) {
  return (
    <section
      id={id}
      className="mb-10 pb-10 border-b border-sand/40 last:border-b-0 last:mb-0 last:pb-0"
    >
      <span className="text-2xl mb-3 block">{icon}</span>
      <h2 className="font-playfair text-2xl text-ink mb-4">{title}</h2>
      <div className="space-y-4">{children}</div>
    </section>
  );
}

export function PolicyPara({ children }: { children: ReactNode }) {
  return (
    <p className="text-sm text-stone leading-relaxed font-light font-dm">
      {children}
    </p>
  );
}

export function PolicySubhead({ children }: { children: ReactNode }) {
  return (
    <h3 className="text-base font-medium text-charcoal mt-5 mb-2 font-dm">
      {children}
    </h3>
  );
}

export function PolicyList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2 mt-1">
      {items.map((item, i) => (
        <li
          key={i}
          className="flex gap-3 text-sm text-stone leading-relaxed font-light font-dm"
        >
          <span className="text-accent text-xs mt-1 flex-shrink-0">→</span>
          <span dangerouslySetInnerHTML={{ __html: item }} />
        </li>
      ))}
    </ul>
  );
}

export function HighlightBox({
  children,
  variant = "neutral",
}: {
  children: ReactNode;
  variant?: "neutral" | "warning";
}) {
  return (
    <div
      className={`rounded-xl px-5 py-4 border text-sm text-charcoal leading-relaxed font-light font-dm mt-3 ${
        variant === "warning"
          ? "bg-orange-50 border-orange-200/50"
          : "bg-cream border-sand/50"
      }`}
    >
      {children}
    </div>
  );
}
