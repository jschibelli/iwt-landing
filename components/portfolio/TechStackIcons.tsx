"use client";

import { Project } from "@/types/project";
import { motion } from "framer-motion";
import Image from "next/image";

interface TechStackIconsProps {
  project: Project;
}

export default function TechStackIcons({ project }: TechStackIconsProps) {
  if (!project.techStack || project.techStack.length === 0) return null;

  // Group technologies by category
  const techByCategory = project.techStack.reduce((acc, tech) => {
    if (!acc[tech.category]) {
      acc[tech.category] = [];
    }
    acc[tech.category].push(tech);
    return acc;
  }, {} as Record<string, typeof project.techStack>);

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            Technology Stack
          </h2>
          {project.techStackSummary ? (
            <p className="text-lg text-teal-100 max-w-2xl mx-auto">{project.techStackSummary}</p>
          ) : (
            <p className="text-lg text-teal-100 max-w-2xl mx-auto">
              The tools and technologies that power this solution
            </p>
          )}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(techByCategory).map(([category, techs], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="bg-gray-900 rounded-2xl p-6 shadow-lg"
            >
              <h3 className="text-lg font-heading font-bold text-white mb-4">
                {category}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {techs.map((tech) => (
                  <div
                    key={tech.name}
                    className="flex flex-col items-center text-center"
                  >
                    <div className="w-12 h-12 mb-2 relative bg-gray-800 rounded-full flex items-center justify-center">
                      <Image
                        src={`/images/tech/${tech.icon}.svg`}
                        alt={tech.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <span className="text-sm text-teal-200">{tech.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 