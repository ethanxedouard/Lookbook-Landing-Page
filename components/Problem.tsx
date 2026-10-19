import FadeInSection from "./FadeInSection";

const pains = [
  {
    title: "Out of sight",
    body: "Pieces buried in drawers and piles get forgotten.",
  },
  {
    title: "Out of ideas",
    body: "Getting dressed becomes a daily decision without a system.",
  },
  {
    title: "Out of pocket",
    body: "Money goes toward new clothes while great pieces sit unworn.",
  },
];

export default function Problem() {
  return (
    <section
      id="problem"
      className="px-6 sm:px-10 lg:px-16 py-20 sm:py-28 max-w-7xl mx-auto"
    >
      <FadeInSection>
        <div className="flex items-center gap-3 mb-3">
          <span className="w-6 h-px bg-accent" />
          <span className="text-xs tracking-[0.12em] uppercase text-accent font-medium font-dm">
            The Problem
          </span>
        </div>
        <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl text-ink mb-10 max-w-2xl">
          Most of your closet never gets worn.
        </h2>
      </FadeInSection>

      <div className="grid lg:grid-cols-5 gap-6">
        <FadeInSection className="lg:col-span-2">
          <div className="h-full bg-cream border border-sand/50 rounded-3xl p-8 sm:p-10 flex flex-col justify-center">
            <p className="font-playfair text-7xl sm:text-8xl text-ink leading-none">
              82%
            </p>
            <p className="mt-4 text-lg text-ink leading-snug">
              of clothing in American closets goes unworn for an entire year.
            </p>
            <p className="mt-4 text-xs text-stone">
              Source: Movinga survey of 18,000 households in 20 countries
              (2018), via FashionUnited.
            </p>
          </div>
        </FadeInSection>

        <div className="lg:col-span-3 grid sm:grid-cols-3 lg:grid-cols-1 gap-4">
          {pains.map((p, i) => (
            <FadeInSection key={p.title} delay={0.1 + i * 0.08}>
              <div className="h-full bg-warm-white border border-sand/50 rounded-2xl px-6 py-5">
                <h3 className="text-ink font-medium mb-1">{p.title}</h3>
                <p className="text-stone text-sm leading-relaxed">{p.body}</p>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}
