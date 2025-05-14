"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Code, Palette, Cloud } from "lucide-react";

const iconMap = {
  Code: Code,
  Palette: Palette,
  Cloud: Cloud,
};

type Service = {
  title: string;
  description: string;
  icon: keyof typeof iconMap;
};

export default function Services() {
  const [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then(setServices);
  }, []);

  return (
    <section id="services" className="bg-gray-900 text-white py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-10">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon];
            return (
              <div
                key={service.title}
                className="flex flex-col items-center text-center p-8 rounded-lg shadow hover:shadow-lg transition-shadow bg-gray-800 border border-gray-700"
              >
                <span className="mb-4 p-4 rounded-full bg-gray-900 text-teal-400">
                  <Icon size={40} />
                </span>
                <h3 className="text-xl font-heading font-semibold mb-2 text-white">{service.title}</h3>
                <p className="text-base font-body text-gray-300 mb-2">{service.description}</p>
              </div>
            );
          })}
        </div>
        <div className="flex justify-center">
          <Link
            href="#services"
            className="px-8 py-3 rounded border-2 border-orange-500 bg-orange-500 text-white font-semibold text-lg hover:bg-teal-500 hover:border-teal-500 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
          >
            Explore Our Services
          </Link>
        </div>
      </div>
    </section>
  );
} 