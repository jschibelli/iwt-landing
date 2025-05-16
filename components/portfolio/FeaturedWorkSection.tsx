"use client";

import { Project } from "@/types/project";
import ProjectCard from "./ProjectCard";
import Link from "next/link";
import Image from "next/image";

interface FeaturedWorkSectionProps {
  projects: Project[];
}

export default function FeaturedWorkSection({ projects }: FeaturedWorkSectionProps) {
  return (
    <section className="relative py-24 md:py-32 bg-[#0a2236] overflow-hidden">
      {/* Pentagon pattern background, same as team page */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none" style={{ backgroundImage: 'url(/pentagon-pattern.svg)', backgroundRepeat: 'repeat', backgroundSize: '80px 80px', opacity: 0.18 }} />
      <div className="relative z-10 max-w-6xl mx-auto px-4 flex flex-col items-center">
        <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-white text-center mb-6 tracking-tight drop-shadow-lg">
          Featured Work
        </h2>
        <p className="text-lg md:text-xl text-blue-100 text-center max-w-2xl mb-14 font-body">
          Explore our portfolio of successful projects, showcasing our expertise in building innovative solutions with a hybrid <span className="text-teal-400 font-semibold">human + AI</span> approach.
        </p>
        <div className="w-full grid gap-8 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mb-16">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden group transition-transform hover:-translate-y-1 hover:shadow-3xl duration-200">
              {/* Project image */}
              <div className="relative w-full aspect-[16/9] bg-gray-100">
                <Image
                  src={project.heroImage || "/images/projects/placeholder.jpg"}
                  alt={project.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={false}
                />
                {project.aiContribution && (
                  <span className="absolute top-4 right-4 bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md tracking-wide uppercase">
                    AI-ENHANCED
                  </span>
                )}
              </div>
              {/* Card content */}
              <div className="flex-1 flex flex-col justify-between p-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1 leading-tight">
                    {project.name}
                  </h3>
                  <p className="text-sm text-gray-500 mb-2">{project.industry}</p>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-base font-semibold text-teal-600">
                    {project.keyMetric}
                  </span>
                  <Link
                    href={`/portfolio/${project.slug}`}
                    className="text-sm font-semibold text-teal-500 hover:underline transition-colors"
                  >
                    View Case
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Link
          href="/portfolio"
          className="inline-flex items-center justify-center px-10 py-4 rounded-full bg-teal-500 text-white text-lg font-bold shadow-lg hover:bg-teal-600 transition-colors focus:outline-none focus:ring-4 focus:ring-teal-300"
        >
          View All Projects
        </Link>
      </div>
    </section>
  );
} 