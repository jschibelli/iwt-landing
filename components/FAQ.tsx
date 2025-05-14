"use client";
import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ() {
  const [faqs, setFaqs] = useState<FAQItem[]>([]);
  const [open, setOpen] = useState<number | null>(null);

  useEffect(() => {
    fetch("/faq.json")
      .then((res) => res.json())
      .then(setFaqs);
  }, []);

  return (
    <section id="faq" className="bg-gray-900 py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-10 text-white">Frequently Asked Questions</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-gray-800 rounded-lg shadow p-6 border border-gray-700">
              <button
                className="flex items-center justify-between w-full text-left text-lg font-semibold text-teal-400 focus:outline-none"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
                aria-controls={`faq-answer-${i}`}
              >
                {faq.question}
                <ChevronDown className={`ml-2 transition-transform ${open === i ? 'rotate-180' : ''}`} />
              </button>
              <div
                id={`faq-answer-${i}`}
                className={`overflow-hidden transition-all duration-300 ${open === i ? 'max-h-40 mt-4' : 'max-h-0'}`}
                aria-hidden={open !== i}
              >
                <p className="text-gray-300 font-body">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <a
            href="#contact"
            className="px-8 py-3 rounded bg-orange-500 text-white font-semibold text-lg hover:bg-teal-500 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
          >
            Still have questions? Contact us
          </a>
        </div>
      </div>
    </section>
  );
} 