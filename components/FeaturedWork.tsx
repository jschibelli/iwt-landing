"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
}

export default function FeaturedWork() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetch("/featured-work.json")
      .then((res) => res.json())
      .then(setProjects);
  }, []);

  return (
    <section id="work" className="bg-gray-900 py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-10 text-white">Featured Work</h2>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <div key={i} className="relative group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow bg-gray-800">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover object-center"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-teal-500/90 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-center items-center text-center p-6">
                <h3 className="text-2xl font-heading font-bold text-white mb-2">{project.title}</h3>
                <p className="text-white/90 font-body mb-4">{project.description}</p>
                <Link
                  href={project.link}
                  className="px-6 py-2 rounded bg-orange-500 text-white font-semibold hover:bg-teal-700 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                >
                  View Case Study
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 