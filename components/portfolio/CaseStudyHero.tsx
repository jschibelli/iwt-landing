"use client";

import Image from "next/image";
import { Project } from "@/types/project";
import { motion } from "framer-motion";

interface CaseStudyHeroProps {
  project: Project;
}

export default function CaseStudyHero({ project }: CaseStudyHeroProps) {
  return (
    <section className="relative min-h-[60vh] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={project.heroImage}
          alt={project.name}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <div className="flex items-center gap-4 mb-6">
            <Image
              src={project.client.logo}
              alt={project.client.name}
              width={48}
              height={48}
              className="rounded-lg"
            />
            <span className="text-white/80">{project.client.name}</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">
            {project.name}
          </h1>

          <p className="text-xl text-white/90 mb-8">
            {project.summary}
          </p>

          <div className="flex flex-wrap gap-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-white/10 text-white rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>

          {project.aiContribution && (
            <div className="mt-8 p-4 bg-indigo-600/20 border border-indigo-500/30 rounded-lg">
              <div className="flex items-center gap-2 text-indigo-200 mb-2">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
                <span className="font-medium">AI-Enhanced Project</span>
              </div>
              <p className="text-white/80 text-sm">
                {project.aiContribution.description}
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
} 