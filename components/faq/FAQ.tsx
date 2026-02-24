"use client"

import { useState } from "react"
import FAQItem from "./FAQItem"

const faqData = [
  {
    question: "Do you accept freelance projects?",
    answer:
      "Yes, I am available for freelance work. Feel free to contact me to discuss your project requirements.",
  },
  {
    question: "What technologies do you specialize in?",
    answer:
      "I specialize in React, Next.js, TypeScript, and Tailwind CSS for building modern web applications.",
  },
  {
    question: "Do you provide mentoring or teaching?",
    answer:
      "Yes, I mentor students in modern web development and help them build real-world projects.",
  },
  {
    question: "How can we work together?",
    answer:
      "You can reach out through the contact form below. I typically respond within 24 hours.",
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="bg-[#0B0B0F] px-4 py-20">
      <div className="mx-auto max-w-md">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white">
            Frequently Asked Questions
          </h2>
          <p className="mt-2 text-sm text-white/60">
            Everything you might want to know
          </p>
        </div>

        {/* List */}
        <div className="mt-12 space-y-4">
          {faqData.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onClick={() => toggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}