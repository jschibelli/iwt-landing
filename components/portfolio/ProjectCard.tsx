"use client";

import Image from "next/image";
import Link from "next/link";
import { Project } from "@/types/project";
import { motion } from "framer-motion";
import { useState } from "react";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [imgSrc, setImgSrc] = useState(project.heroImage || "/images/projects/placeholder.jpg");
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <Link
        href={`/portfolio/${project.slug}`}
        className="group block bg-white rounded-lg border border-gray-100
                  hover:border-teal-200 hover:shadow-lg transition-all duration-300"
      >
        <div className="relative w-full aspect-video overflow-hidden rounded-t-lg">
          <Image
            src={imgSrc}
            alt={project.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transform transition-transform duration-500"
            onError={() => setImgSrc("/images/projects/placeholder.jpg")}
          />
          {project.aiContribution && (
            <span className="absolute top-3 right-3 bg-indigo-600 text-white text-xs px-2 py-1 rounded-full">
              AI-Enhanced
            </span>
          )}
        </div>
        <div className="p-6 flex flex-col justify-between h-40">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 group-hover:text-teal-600 transition-colors">
              {project.name}
            </h3>
            <p className="mt-1 text-sm text-gray-500">{project.industry}</p>
          </div>
          <div className="mt-4 flex items-center justify-between">
            <span className="text-sm font-medium text-teal-600">
              {project.keyMetric}
            </span>
            <span className="text-sm text-teal-500 group-hover:underline">
              View Case Study
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
} 