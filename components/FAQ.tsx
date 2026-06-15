"use client";

import { useState } from "react";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  const faqs = [
    {
      question: "How much does Innovate Web membership cost?",
      answer:
        "Innovate Web community membership is completely free. Members can participate in networking events, workshops and discussions without charges.",
    },
    {
      question: "What kind of events do you organize?",
      answer:
        "We organize networking events, workshops, hackathons, founder talks and startup meetups.",
    },
    {
      question: "How does Innovate Web use my data?",
      answer:
        "Your data is only used for event registrations and community communication.",
    },
    {
      question: "Can students join the community?",
      answer:
        "Yes. Students, developers, founders and tech enthusiasts are welcome.",
    },
    {
      question: "Do you provide networking opportunities?",
      answer:
        "Absolutely. We help members connect with professionals, startups and mentors.",
    },
  ];

  return (
    <section className="relative z-20 py-24 bg-white">
      <div className="relative z-[9999] max-w-5xl mx-auto px-6">

        <h2 className="text-[56px] font-bold text-[#12284d] mb-12">
          FAQs
        </h2>

        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border-b border-slate-300"
          >
            <button
              type="button"
              onClick={() =>
                setOpen(open === index ? null : index)
              }
              className="
                w-full
                flex
                items-center
                justify-between
                py-6
                text-left
                cursor-pointer
              "
            >
              <span className="text-xl text-slate-800">
                {faq.question}
              </span>

              <span className="text-3xl font-light">
                {open === index ? "−" : "+"}
              </span>
            </button>

            <div
              className={`
                overflow-hidden
                transition-all
                duration-300
                ${
                  open === index
                    ? "max-h-[300px] pb-6"
                    : "max-h-0"
                }
              `}
            >
              <p className="text-slate-600 leading-8 pr-10">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}