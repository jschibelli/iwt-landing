"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

interface AboutContent {
  heading: string;
  tagline: string;
  description: string;
  bullets: string[];
  ctas: { label: string; href: string }[];
}

export default function About() {
  const [content, setContent] = useState<AboutContent | null>(null);

  useEffect(() => {
    fetch("/about.json")
      .then((res) => res.json())
      .then(setContent);
  }, []);

  if (!content) return null;

  return (
    <section id="about" className="relative bg-[#0a2236] py-16 md:py-24 overflow-hidden" style={{ backgroundImage: 'url(/hexagon-pattern.svg)', backgroundRepeat: 'repeat', backgroundSize: 'auto' }}>
      {/* Top inside shadow */}
      <div className="absolute top-0 left-0 w-full h-10 md:h-16 pointer-events-none select-none" style={{boxShadow: 'inset 0 16px 32px -8px #0008'}} />
      {/* Bottom inside shadow */}
      <div className="absolute bottom-0 left-0 w-full h-10 md:h-16 pointer-events-none select-none" style={{boxShadow: 'inset 0 -16px 32px -8px #0008'}} />
      {/* SVG Wave Top */}
      <div className="absolute top-0 left-0 w-full -z-10" aria-hidden="true">
        <svg viewBox="0 0 1440 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-32 md:h-40">
          <defs>
            <linearGradient id="aboutWave" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#2dd4bf" />
              <stop offset="100%" stopColor="#2563eb" />
            </linearGradient>
          </defs>
          <path fill="url(#aboutWave)" d="M0,80 C360,200 1080,0 1440,120 L1440,0 L0,0 Z" />
        </svg>
      </div>
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-2">{content.heading}</h2>
        <p className="text-lg text-teal-400 font-semibold mb-4">{content.tagline}</p>
        <p className="text-gray-300 font-body mb-8">{content.description}</p>
        <ul className="text-left max-w-xl mx-auto mb-8 space-y-2">
          {content.bullets.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-gray-200">
              <span className="mt-1 w-2 h-2 rounded-full bg-teal-400 inline-block" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {content.ctas.map((cta, i) => (
            <Link
              key={i}
              href={cta.href}
              className={`px-8 py-3 rounded font-semibold text-lg transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 ${i === 0 ? 'bg-orange-500 text-white hover:bg-teal-500' : 'border-2 border-teal-400 text-teal-400 hover:bg-teal-500 hover:text-white'}`}
            >
              {cta.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
} 