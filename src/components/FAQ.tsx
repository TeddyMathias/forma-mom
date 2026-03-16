"use client";

import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const faqs = [
  {
    question: "What areas do you serve for in-home training?",
    answer:
      "We currently offer in-home training across Manhattan and Brooklyn. If you're outside these areas, we'd still love to chat — we also offer virtual sessions worldwide.",
  },
  {
    question: "When can I start training during pregnancy?",
    answer:
      "With your doctor's clearance, you can begin at any stage of pregnancy. Many clients start in their first trimester, while others come to us in their second or third. We tailor every program to where you are.",
  },
  {
    question: "How soon after giving birth can I start postpartum training?",
    answer:
      "This varies for every mother. Generally, we recommend waiting 6–8 weeks for vaginal births and 10–12 weeks for cesarean births, with your physician's approval. We begin gently and progress at your body's pace.",
  },
  {
    question: "What equipment do I need at home?",
    answer:
      "Nothing — we bring everything. Your trainer arrives with all necessary equipment for each session. All you need is a small amount of open floor space.",
  },
  {
    question: "How long are the sessions?",
    answer:
      "Sessions are typically 50–60 minutes. We also offer 30-minute express sessions for days when time is tight, especially helpful for new mothers.",
  },
  {
    question: "Do you require a long-term commitment?",
    answer:
      "No contracts or long-term commitments required. We offer flexible packages and a pay-as-you-go option. We believe the results speak for themselves.",
  },
];

function FAQItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`border-t border-border scroll-reveal rv-up rv-d${Math.min(index + 1, 6)}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-6 text-left cursor-pointer bg-transparent border-none"
      >
        <span className="font-serif text-[1.1rem] font-normal text-ink pr-8">
          {question}
        </span>
        <span
          className="text-camel text-[1.4rem] shrink-0 transition-transform duration-300"
          style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
        >
          +
        </span>
      </button>
      <div
        className="overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
        style={{ maxHeight: isOpen ? "200px" : "0px", opacity: isOpen ? 1 : 0 }}
      >
        <p className="text-ink-muted leading-[1.85] text-[14.5px] font-light pb-6 pr-12">
          {answer}
        </p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const ref = useScrollReveal();

  return (
    <section id="faq" className="py-24 lg:py-36 bg-sand" ref={ref}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="font-serif text-[14px] italic text-camel mb-3 scroll-reveal rv-up">
              Common Questions
            </p>
            <h2 className="font-serif text-[clamp(1.7rem,3.5vw,2.6rem)] font-normal leading-[1.22] text-ink mb-6 scroll-reveal rv-up rv-d1">
              Everything you need <em className="italic">to know.</em>
            </h2>
            <p className="text-ink-muted leading-[1.85] text-[15px] max-w-md font-light scroll-reveal rv-up rv-d2">
              Have a question we haven&apos;t answered? We&apos;d love to hear from you — book a consultation and we&apos;ll walk through everything together.
            </p>
          </div>

          <div className="border-b border-border">
            {faqs.map((faq, i) => (
              <FAQItem key={faq.question} question={faq.question} answer={faq.answer} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
