"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, Variants, Easing } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const easeOut: Easing = "easeOut";

const fadeUp: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeOut } },
  exit: { opacity: 0, y: -16, transition: { duration: 0.3, ease: easeOut } },
};

// ---------- data ----------

type Option = {
  t: string;
  score?: number;
  pct?: number;
  mid?: number;
  cat?: string | null;
  tip?: string;
  cta?: string;
};

type Question = {
  q: string;
  hint?: string;
  key: string;
  scored?: boolean;
  options: Option[];
};

const QUESTIONS: Question[] = [
  {
    q: "Approximately how many pieces of clothing do you own?",
    hint: "Don't count underwear or socks.",
    key: "closetSize",
    options: [
      { t: "Less than 50", mid: 35 },
      { t: "50–100", mid: 75 },
      { t: "100–200", mid: 150 },
      { t: "200+", mid: 250 },
    ],
  },
  {
    q: "What percentage of your closet do you actually wear?",
    key: "wornPct",
    scored: true,
    options: [
      { t: "Almost everything (80–100%)", score: 3, pct: 90 },
      { t: "Most of it (60–80%)", score: 2, pct: 70 },
      { t: "About half (40–60%)", score: 1, pct: 50 },
      { t: "Less than 40%", score: 0, pct: 30 },
    ],
  },
  {
    q: "How often do you buy clothes?",
    key: "buyFreq",
    scored: true,
    options: [
      { t: "Every week", score: 0 },
      { t: "Every month", score: 1 },
      { t: "Every few months", score: 2 },
      { t: "Only when I need something", score: 3 },
    ],
  },
  {
    q: 'How often do you say, "I have nothing to wear"?',
    key: "nothingToWear",
    scored: true,
    options: [
      { t: "Almost every day", score: 0 },
      { t: "A few times a week", score: 1 },
      { t: "Occasionally", score: 2 },
      { t: "Rarely", score: 3 },
    ],
  },
  {
    q: "Which category is your closet missing the most?",
    key: "missingCategory",
    options: [
      { t: "Everyday basics", cat: "everyday basics" },
      { t: "Dressy/Formal pieces", cat: "dressy and formal pieces" },
      { t: "Outerwear", cat: "outerwear" },
      { t: "Shoes", cat: "shoes" },
      { t: "Accessories", cat: "accessories" },
      { t: "Nothing—I have everything I need", cat: null },
    ],
  },
  {
    q: "How organized is your closet?",
    key: "organization",
    scored: true,
    options: [
      { t: "Everything has a place", score: 3 },
      { t: "Mostly organized", score: 2 },
      { t: "A little messy", score: 1 },
      { t: "Total chaos", score: 0 },
    ],
  },
  {
    q: "When getting dressed, what's your biggest problem?",
    key: "biggestProblem",
    options: [
      {
        t: "I can't find anything.",
        tip: "Digitizing your closet makes every item searchable — no more digging through drawers.",
      },
      {
        t: "Nothing matches.",
        tip: "See every piece side by side and build outfits that actually work together.",
      },
      {
        t: "I keep wearing the same outfits.",
        tip: "Rediscover pieces you forgot you owned and mix them into new looks.",
      },
      {
        t: "I keep buying duplicates.",
        tip: "A full inventory means you'll know what you already own before you buy again.",
      },
      {
        t: "I don't know what I own.",
        tip: "Start with a full digital inventory — the first step to actually using your closet.",
      },
    ],
  },
  {
    q: "If you could improve one thing about your wardrobe, what would it be?",
    key: "goal",
    options: [
      { t: "Wear more of what I already own", cta: "make the most of your closet" },
      { t: "Buy smarter", cta: "build a smarter closet" },
      { t: "Build more outfits", cta: "build more outfits from your closet" },
      { t: "Stay organized", cta: "get your closet organized" },
      { t: "Discover my style", cta: "discover your closet's style" },
    ],
  },
];

type Tier = { min: number; name: string; ring: string; chip: string; desc: string };

const TIERS: Tier[] = [
  {
    min: 85,
    name: "Closet Champion",
    ring: "text-emerald-500",
    chip: "bg-emerald-500",
    desc: "Your wardrobe is well-balanced and organized. The Lookbook can help you maximize outfit combinations and keep everything cataloged.",
  },
  {
    min: 65,
    name: "Closet Collector",
    ring: "text-amber-500",
    chip: "bg-amber-500",
    desc: "You own plenty of clothes, but you're not wearing everything. Let's uncover forgotten pieces and create new outfits.",
  },
  {
    min: 40,
    name: "Style Explorer",
    ring: "text-orange-500",
    chip: "bg-orange-500",
    desc: "Your closet has potential but needs direction. We'll help identify wardrobe gaps and recommend versatile essentials.",
  },
  {
    min: 0,
    name: "Closet Reset",
    ring: "text-rose-500",
    chip: "bg-rose-500",
    desc: "You're either missing key basics or struggling with organization. Start fresh by building a wardrobe you'll actually wear.",
  },
];

type Answers = Record<string, Option>;

function computeResult(answers: Answers) {
  const scoredKeys = QUESTIONS.filter((q) => q.scored).map((q) => q.key);
  const raw = scoredKeys.reduce((sum, k) => sum + (answers[k]?.score ?? 0), 0);
  const score = Math.round((raw / (scoredKeys.length * 3)) * 100);
  const tier = TIERS.find((t) => score >= t.min)!;

  const wornPct = answers.wornPct?.pct ?? 0;
  const closetMid = answers.closetSize?.mid ?? 0;
  const unworn = Math.round(closetMid * (1 - wornPct / 100));
  const unwornLow = Math.max(1, Math.round((unworn * 0.8) / 5) * 5);
  const unwornHigh = Math.round((unworn * 1.2) / 5) * 5;

  const cat = answers.missingCategory?.cat ?? null;
  const catLine = cat
    ? `You're likely missing versatile ${cat}.`
    : `Your core wardrobe categories are already covered.`;

  const tip = answers.biggestProblem?.tip ?? "";
  const goalCta = answers.goal?.cta ?? "get your closet organized";

  return { score, tier, wornPct, unwornLow, unwornHigh, catLine, tip, goalCta };
}

// ---------- score ring ----------

function ScoreRing({ score, ringClass }: { score: number; ringClass: string }) {
  const size = 176;
  const stroke = 10;
  const r = (size - stroke) / 2;
  const circumference = 2 * Math.PI * r;
  const [dash, setDash] = useState(circumference);

  useEffect(() => {
    const target = circumference - (score / 100) * circumference;
    const raf = requestAnimationFrame(() => setDash(target));
    return () => cancelAnimationFrame(raf);
  }, [score, circumference]);

  return (
    <div className="relative w-44 h-44 mx-auto mb-2">
      <svg width={size} height={size} className="-rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          strokeWidth={stroke}
          className="text-ink/[0.06]"
          stroke="currentColor"
          fill="none"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          strokeWidth={stroke}
          strokeLinecap="round"
          className={ringClass}
          stroke="currentColor"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={dash}
          style={{ transition: "stroke-dashoffset 1.1s cubic-bezier(.16,1,.3,1)" }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="font-playfair text-5xl text-ink leading-none">{score}</span>
        <span className="text-xs text-stone tracking-wide mt-1">/ 100</span>
      </div>
    </div>
  );
}

// ---------- component ----------

const APP_STORE_URL =
  "https://apps.apple.com/us/app/lookbook-virtual-closet/id6760507376";

export default function QuizPage() {
  // step 0 = intro, 1..8 = question N, 9 = result
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [pendingIdx, setPendingIdx] = useState<number | null>(null);

  const totalQuestions = QUESTIONS.length;

  function handleSelect(qIndex: number, opt: Option, optIdx: number) {
    if (pendingIdx !== null) return;
    setPendingIdx(optIdx);
    const key = QUESTIONS[qIndex].key;
    setAnswers((prev) => ({ ...prev, [key]: opt }));
    setTimeout(() => {
      setPendingIdx(null);
      setStep(qIndex + 2 <= totalQuestions ? qIndex + 2 : totalQuestions + 1);
    }, 320);
  }

  function goBack(qIndex: number) {
    setStep(qIndex);
  }

  function restart() {
    setAnswers({});
    setStep(0);
  }

  const result = step === totalQuestions + 1 ? computeResult(answers) : null;
  const progressPct = step >= 1 && step <= totalQuestions ? (step / totalQuestions) * 100 : 0;

  return (
    <section className="min-h-screen bg-gradient-to-br from-warm-white via-cream to-blush/60 px-4 sm:px-6 py-14 sm:py-16 relative overflow-hidden">
      <div
        className="absolute -top-24 -right-24 w-[520px] h-[520px] pointer-events-none opacity-70"
        style={{
          background:
            "radial-gradient(circle, rgba(155,142,196,0.18) 0%, transparent 65%)",
        }}
      />
      <div
        className="absolute -bottom-32 -left-24 w-[420px] h-[420px] pointer-events-none opacity-60"
        style={{
          background:
            "radial-gradient(circle, rgba(155,142,196,0.12) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-xl mx-auto relative z-10">
        <Link href="/" className="flex items-center justify-center gap-2 mb-8">
          <span className="text-[11px] font-medium tracking-[0.2em] uppercase text-stone">
            The Lookbook
          </span>
        </Link>

        {/* glass card */}
        <div className="bg-white/60 backdrop-blur-md border border-white/60 rounded-[32px] shadow-xl shadow-ink/[0.06] px-6 py-9 sm:px-10 sm:py-11">
          {/* progress bar */}
          {step >= 1 && step <= totalQuestions && (
            <div className="mb-9">
              <div className="flex items-center justify-between mb-2.5">
                <span className="text-[11px] font-medium tracking-[0.15em] uppercase text-stone">
                  Question {step} of {totalQuestions}
                </span>
                <span className="text-[11px] font-medium text-accent">
                  {Math.round(progressPct)}%
                </span>
              </div>
              <div className="h-1.5 w-full bg-ink/[0.07] rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-accent rounded-full"
                  initial={false}
                  animate={{ width: `${progressPct}%` }}
                  transition={{ duration: 0.5, ease: easeOut }}
                />
              </div>
            </div>
          )}

          <AnimatePresence mode="wait">
            {/* INTRO */}
            {step === 0 && (
              <motion.div key="intro" variants={fadeUp} initial="initial" animate="animate" exit="exit">
                <div className="flex justify-center mb-7">
                  <span className="inline-flex items-center gap-2 bg-accent-light text-accent text-xs font-medium tracking-widest uppercase px-4 py-1.5 rounded-full border border-accent/20">
                    ✦ Style. Simplified.
                  </span>
                </div>
                <h1 className="font-playfair text-4xl sm:text-5xl leading-[1.1] text-ink mb-5 text-center">
                  What's your closet score?
                </h1>
                <p className="text-base sm:text-lg text-stone leading-relaxed max-w-md mx-auto mb-9 font-light text-center">
                  Answer eight quick questions about what you own and how you
                  wear it. We'll score your closet out of 100 and show you
                  exactly where to focus.
                </p>
                <div className="flex justify-center gap-8 mb-10">
                  {[
                    ["8", "questions"],
                    ["60", "seconds"],
                    ["1", "score"],
                  ].map(([n, l]) => (
                    <div key={l} className="text-center">
                      <p className="font-playfair text-2xl text-ink leading-none mb-1">{n}</p>
                      <p className="text-xs text-stone">{l}</p>
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => setStep(1)}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-black text-white text-sm font-medium rounded-full border-2 border-ink shadow-lg shadow-ink/10 hover:bg-charcoal hover:border-charcoal transition-all duration-200 hover:-translate-y-0.5"
                >
                  Start the quiz →
                </button>
              </motion.div>
            )}

            {/* QUESTIONS */}
            {step >= 1 &&
              step <= totalQuestions &&
              (() => {
                const qIndex = step - 1;
                const question = QUESTIONS[qIndex];
                return (
                  <motion.div key={`q-${qIndex}`} variants={fadeUp} initial="initial" animate="animate" exit="exit">
                    <h2 className="font-playfair text-2xl sm:text-[28px] leading-tight text-ink text-center mb-2">
                      {question.q}
                    </h2>
                    {question.hint && (
                      <p className="text-sm text-stone text-center mb-7">{question.hint}</p>
                    )}
                    <div className={`flex flex-col gap-2.5 ${question.hint ? "" : "mt-7"}`}>
                      {question.options.map((opt, j) => {
                        const selected = pendingIdx === j;
                        return (
                          <button
                            key={opt.t}
                            onClick={() => handleSelect(qIndex, opt, j)}
                            disabled={pendingIdx !== null}
                            className={`flex items-center gap-3.5 text-left px-5 py-4 rounded-2xl transition-all duration-150 active:scale-[0.99] ${
                              selected
                                ? "bg-ink border-2 border-ink"
                                : "bg-white/80 border border-accent/15 hover:border-accent/50 hover:bg-white hover:-translate-y-0.5"
                            }`}
                          >
                            <span
                              className={`flex items-center justify-center w-7 h-7 rounded-full text-xs font-medium shrink-0 transition-colors duration-150 ${
                                selected ? "bg-white text-ink" : "bg-accent-light text-accent"
                              }`}
                            >
                              {selected ? (
                                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                  <path d="M20 6 9 17l-5-5" />
                                </svg>
                              ) : (
                                String.fromCharCode(97 + j)
                              )}
                            </span>
                            <span className={`text-[15px] transition-colors duration-150 ${selected ? "text-white" : "text-ink"}`}>
                              {opt.t}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                    {qIndex > 0 && (
                      <button
                        onClick={() => goBack(qIndex)}
                        className="block mx-auto mt-7 text-sm text-stone hover:text-ink underline underline-offset-4"
                      >
                        ← Back
                      </button>
                    )}
                  </motion.div>
                );
              })()}

            {/* RESULT */}
            {step === totalQuestions + 1 && result && (
              <motion.div key="result" variants={fadeUp} initial="initial" animate="animate" exit="exit">
                <div className="flex justify-center mb-6">
                  <span className="inline-flex items-center gap-2 bg-accent-light text-accent text-xs font-medium tracking-widest uppercase px-4 py-1.5 rounded-full border border-accent/20">
                    ✦ Your closet score
                  </span>
                </div>

                <ScoreRing score={result.score} ringClass={result.tier.ring} />

                <div className="flex items-center justify-center gap-2 mt-3 mb-7">
                  <span className={`w-2 h-2 rounded-full ${result.tier.chip}`} />
                  <p className="font-playfair text-2xl text-ink">{result.tier.name}</p>
                </div>

                <p className="text-[15px] text-stone text-center leading-relaxed max-w-sm mx-auto mb-8">
                  {result.tier.desc}
                </p>

                <div className="bg-white/80 border border-accent/15 rounded-2xl px-6 py-6 mb-6">
                  <p className="text-[11px] font-medium tracking-[0.15em] uppercase text-stone mb-5">
                    Your personalized insights
                  </p>
                  <ul className="space-y-4">
                    {[
                      <>
                        You wear only <b className="text-ink font-semibold">{result.wornPct}%</b> of your wardrobe.
                      </>,
                      <>
                        You likely own{" "}
                        <b className="text-ink font-semibold">
                          {result.unwornLow}–{result.unwornHigh} unworn items
                        </b>
                        .
                      </>,
                      <>{result.catLine}</>,
                      <>
                        Organizing your closet could save you hundreds by
                        preventing duplicate purchases.
                      </>,
                      <>Create your digital closet to see exactly what you own.</>,
                    ].map((line, i) => (
                      <li key={i} className="flex items-start gap-3.5">
                        <span className="flex items-center justify-center w-5 h-5 rounded-full bg-accent-light text-accent text-[10px] font-semibold shrink-0 mt-0.5">
                          {i + 1}
                        </span>
                        <span className="text-sm text-stone leading-relaxed">{line}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-2xl bg-accent-light/60 border border-accent/15 px-5 py-4 mb-7">
                  <p className="text-sm text-ink/80 text-center leading-relaxed italic">
                    "{result.tip}"
                  </p>
                </div>

                <motion.div
                  className="relative mb-3"
                  initial={{ opacity: 0, y: 12, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.5, ease: easeOut, delay: 0.15 }}
                >
                  <div className="absolute inset-0 bg-accent/30 blur-2xl rounded-full scale-110 pointer-events-none" />
                  <a
                    href={APP_STORE_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="group relative w-full flex items-center justify-center gap-3 px-8 py-5 bg-black text-white rounded-full border-2 border-ink shadow-2xl shadow-ink/25 hover:shadow-2xl hover:shadow-accent/30 hover:-translate-y-1 hover:bg-charcoal hover:border-charcoal transition-all duration-300"
                  >
                    <Image
                      src="/apple-logo.svg"
                      alt=""
                      width={40}
                      height={40}
                      className="shrink-0 invert"
                    />
                    <span className="flex flex-col items-start leading-tight">
                      <span className="text-[11px] font-medium text-white/60 tracking-wide">
                        Get the app
                      </span>
                      <span className="text-[15px] font-semibold">
                        Download Lookbook to {result.goalCta}
                      </span>
                    </span>
                    <svg
                      className="w-4 h-4 ml-1 shrink-0 group-hover:translate-x-1 transition-transform duration-300"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14" />
                      <path d="M13 6l6 6-6 6" />
                    </svg>
                  </a>
                </motion.div>
                <button
                  onClick={restart}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 text-sm text-stone hover:text-ink transition-colors duration-200"
                >
                  Retake the quiz
                </button>

                <p className="text-xs text-stone text-center leading-relaxed mt-6">
                  Join thousands using Lookbook to organize their closet and
                  plan outfits in seconds.{" "}
                  <Link href="/#features" className="text-accent font-medium">
                    See what's inside →
                  </Link>
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}