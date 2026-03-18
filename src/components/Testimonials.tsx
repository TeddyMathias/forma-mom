"use client";

import { useState, useCallback } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const testimonials = [
  {
    quote:
      "I can't say enough good things about training with Lane throughout my pregnancy! From the very beginning, Lane made me feel confident, strong, and supported. She's incredibly knowledgeable about pre- and postnatal fitness and was such a fun, positive presence during every session. She tailored every workout to exactly what I needed that day, whether it was strength training or labor prep. I'm so grateful for her guidance and care during such a special chapter in my life.",
    name: "Brittany S.",
  },
  {
    quote:
      "I started working with Lane when I was about 12 weeks pregnant, and we worked together 1:1 and via group classes about 2x a week up until 39 weeks when I gave birth! Before getting pregnant I never exercised much, but was motivated to stay fit for the baby and to have smoother pregnancy and delivery. I am happy to say Lane helped me accomplish all of those goals — I didn't have much pain towards the latter stages of my pregnancy / was able to remain mobile, and I pushed baby out in under 10 minutes (which I am convinced is in part due to all the prep and work we did together!!). I'd highly recommend!",
    name: "Angela W.",
  },
  {
    quote:
      "Lane has been wonderful to work with for my prenatal and postpartum periods. She was kind, patient, and had a unique ability to match my bandwidth for the day, which resulted in me being able to push past my comfort zone in many ways.",
    name: "Manan T.",
  },
  {
    quote:
      "It was an incredible experience working with Lane, I really give her credit for helping me look and feel my best while pregnant and now postpartum. I worked with Lane 2x a week from the beginning of my second trimester up until the weekend before my delivery and she was so awesome — so supportive and kind, which I needed since I was pretty out of shape when I started!",
    name: "Maggie F.",
  },
  {
    quote:
      "LOVED working with Lane during my pregnancy! I felt that Lane really customized the exercises for what I needed. These classes kept me in shape and feeling strong despite physical limitations due to my pregnancy. I can't wait to return for postpartum training!",
    name: "Julia F.",
  },
  {
    quote:
      "Lane has been wonderful to work with throughout my pregnancy! It's been helpful to have guidance on working out safely while pregnant, it is definitely different esp as you get to be veryyyy pregnant. I look forward to getting my core back in shape with Lane after I have my baby :)",
    name: "G D.",
  },
  {
    quote:
      "Lane was instrumental in my pregnancy journey and recovery! I worked with them 2x / week from the beginning of my 2nd trimester through 8 months pp. I felt so strong through my whole pregnancy thanks to our work together. My recovery work was tailored to my birth and my postpartum experience was so much easier because of her guidance! I can't recommend enough.",
    name: "Alisha W.",
  },
  {
    quote:
      "I'm currently just over 40 weeks pregnant and have been seeing Lane for 1 on 1 sessions since the end of my first trimester. Lane is awesome and so fun to workout with! And even now at the end of my pregnancy journey, I haven't had much uncomfort or pain, which I definitely attribute to a consistent and targeted workout routine with Lane. Would definitely recommend!",
    name: "Maggie P.",
  },
  {
    quote:
      "My weekly sessions with Lane have been so motivating and really changed the game for me. I'm feeling stronger and more confident as I enter this next chapter. I'm currently in my third trimester and I plan to continue postpartum.",
    name: "Ariana J.",
  },
  {
    quote:
      "I've worked with Lane for 4 months. She is supportive, practical, and extremely helpful. Now in week 36 there is nothing I'd rather do than lay in bed all day, but I always feel better (relaxed/ less back pain/ calm) after our weekly sessions.",
    name: "Monica F.",
  },
  {
    quote:
      "I have worked out with Lane throughout my pregnancy and can't say enough how great this experience has been. I feel physically stronger and more importantly positive and in control with the pregnancy ups and downs. My private trainings are always tailored to my body's needs at the moment and I always come out of classes feeling supported and accomplished!",
    name: "Janet Z.",
  },
  {
    quote:
      "I loved working with Lane during my pregnancy. Lane is so smart, kind and connected. She made me feel strong capable and prepared during a truly wild time.",
    name: "Joy J.",
  },
  {
    quote:
      "Lane has been amazing at building a community, prepping me for birth and customizing an experience for me and my body.",
    name: "Samantha H.",
  },
  {
    quote:
      "LOVE LOVE LOVE. For someone that is very active this was the perfect option for me. Lane is so knowledgeable about what your body is going to experience to help you get strong and stay fit. Best money I have spent!",
    name: "Micaela C.",
  },
];

// Group into pages of 3
const pages: (typeof testimonials)[] = [];
for (let i = 0; i < testimonials.length; i += 3) {
  pages.push(testimonials.slice(i, i + 3));
}

export default function Testimonials() {
  const ref = useScrollReveal();
  const [page, setPage] = useState(0);

  const goTo = useCallback((idx: number) => setPage(idx), []);

  const current = pages[page];

  return (
    <section
      id="stories"
      className="py-24 lg:py-36"
      style={{
        background:
          "linear-gradient(135deg, #5C4A38 0%, #5A3A30 50%, #6A2828 100%)",
      }}
      ref={ref}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="mb-16">
          <p className="font-serif text-[14px] italic text-camel mb-3 scroll-reveal rv-up">
            Client Stories
          </p>
          <h2 className="font-serif text-[clamp(1.7rem,3.5vw,2.6rem)] font-normal leading-[1.22] text-cream scroll-reveal rv-up rv-d1">
            Real mothers, <em className="italic">real strength.</em>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 min-h-[280px]">
          {current.map((t, i) => (
            <div
              key={`${page}-${i}`}
              className="flex flex-col animate-[reveal-up_0.5s_ease-out_both]"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <p className="font-serif text-[4rem] leading-none text-camel mb-3">
                &ldquo;
              </p>

              <p className="text-cream/50 leading-[1.85] text-[15px] mb-4 flex-1 font-light">
                {t.quote}
              </p>

              <p className="font-serif text-[15px] text-cream">
                — {t.name}
              </p>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-6 mt-14">
          <button
            onClick={() => setPage((p) => Math.max(0, p - 1))}
            disabled={page === 0}
            aria-label="Previous stories"
            className="w-10 h-10 rounded-full border border-cream/20 flex items-center justify-center transition-all duration-300 hover:border-camel hover:bg-camel/10 disabled:opacity-25 disabled:cursor-not-allowed"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-cream">
              <path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <div className="flex gap-2.5">
            {pages.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Go to page ${i + 1}`}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === page
                    ? "bg-camel scale-125"
                    : "bg-cream/25 hover:bg-cream/40"
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => setPage((p) => Math.min(pages.length - 1, p + 1))}
            disabled={page === pages.length - 1}
            aria-label="Next stories"
            className="w-10 h-10 rounded-full border border-cream/20 flex items-center justify-center transition-all duration-300 hover:border-camel hover:bg-camel/10 disabled:opacity-25 disabled:cursor-not-allowed"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-cream">
              <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
