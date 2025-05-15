"use client";
import { useEffect, useState } from "react";
import { Code, Palette, Cloud, Sparkles } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const iconMap = {
  Code,
  Palette,
  Cloud,
  Sparkles,
};

type Service = {
  title: string;
  description: string;
  icon: keyof typeof iconMap;
};

export default function ServicesPage() {
  const [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then(setServices);
  }, []);

  return (
    <main className="bg-[#111827] text-white min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-teal-500 via-blue-500 to-indigo-600 text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Our Services</h1>
          <p className="text-lg md:text-2xl text-white/90 mb-6">Explore our full range of digital solutions designed to help your business thrive.</p>
        </div>
      </section>

      {/* Services List */}
      <section className="max-w-5xl mx-auto px-4 py-16 grid gap-16">
        {services.map((service, i) => {
          const Icon = iconMap[service.icon] || Code;
          const isEven = i % 2 === 0;
          return (
            <motion.div
              key={service.title}
              className={`flex flex-col md:flex-row ${isEven ? '' : 'md:flex-row-reverse'} items-center gap-8 md:gap-16 bg-[#181f2a] border border-gray-800 border-t-4 border-teal-500 rounded-xl p-8 shadow-lg`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6, type: 'spring' }}
            >
              <motion.div
                className="flex-shrink-0 flex items-center justify-center w-32 h-32 rounded-full bg-[#111827] border-4 border-teal-500 mb-6 md:mb-0 shadow group-hover:shadow-xl transition-shadow"
                whileHover={{ scale: 1.08, boxShadow: '0 8px 32px 0 rgba(21,184,161,0.18)' }}
              >
                <Icon size={56} className="text-teal-400" />
              </motion.div>
              <div className="flex-1">
                <h2 className="text-2xl md:text-3xl font-heading font-bold mb-2">{service.title}</h2>
                <p className="text-lg text-gray-300 mb-4">{service.description}</p>
                <ul className="mb-0 list-disc list-inside text-teal-300 space-y-1">
                  <li>Feature 1 for {service.title}</li>
                  <li>Feature 2 for {service.title}</li>
                  <li>Feature 3 for {service.title}</li>
                </ul>
              </div>
            </motion.div>
          );
        })}
      </section>

      {/* Related Case Studies Section (placeholder) */}
      <section className="bg-[#181f2a] py-16">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8">Related Case Studies</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Placeholder cards */}
            {[1, 2, 3].map((n) => (
              <div key={n} className="bg-[#232b3a] rounded-xl p-6 shadow border border-gray-800 flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-teal-500 mb-4 flex items-center justify-center text-white font-bold text-2xl">{n}</div>
                <h3 className="text-xl font-heading font-semibold mb-2">Case Study {n}</h3>
                <p className="text-gray-300 mb-4">A brief description of the case study and its impact.</p>
                <Link href="/work" className="text-teal-400 hover:underline">View Case Study</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-gradient-to-br from-teal-500 via-blue-500 to-indigo-600 text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Ready to transform your business?</h2>
          <p className="text-lg mb-6">Contact us today to discuss your project and see how we can help you achieve your goals.</p>
          <Link
            href="/contact"
            className="px-8 py-3 rounded bg-orange-500 text-white font-semibold text-lg hover:bg-teal-500 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </main>
  );
} 