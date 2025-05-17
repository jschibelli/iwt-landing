"use client";

import Image from "next/image";
import Link from "next/link";
import { Project } from "@/types/project";
import { motion } from "framer-motion";
import { useState } from "react";
import { Code, Cloud, Sparkles, Briefcase, HeartPulse, BarChart3 } from "lucide-react";

const industryIconMap: Record<string, React.ElementType> = {
  eCommerce: Code,
  Healthcare: HeartPulse,
  Finance: BarChart3,
  Cloud: Cloud,
  AI: Sparkles,
};

interface ProjectCardProps {
  project: Project;
  variant?: "dark" | "light";
}

export default function ProjectCard({ project, variant = "light" }: ProjectCardProps) {
  const Icon = industryIconMap[project.industry] || Briefcase;
  const [imgError, setImgError] = useState(false);
  const isDark = variant === "dark";
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className={
        isDark
          ? "bg-[#101828] rounded-2xl shadow-2xl flex flex-col overflow-hidden group transition-transform hover:-translate-y-1 hover:shadow-3xl duration-200 border border-[#232e47]"
          : "bg-white rounded-lg border border-gray-100 hover:border-teal-200 hover:shadow-lg transition-all duration-300 flex flex-col overflow-hidden group"
      }
    >
      <Link
        href={`/portfolio/${project.slug}`}
        className="block h-full"
      >
        <div className={
          isDark
            ? "relative w-full aspect-[16/9] flex items-center justify-center bg-gray-900"
            : "relative w-full aspect-video overflow-hidden rounded-t-lg flex items-center justify-center bg-gray-900"
        }>
          {project.heroImage && !imgError ? (
            <Image
              src={project.heroImage}
              alt={project.name}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover group-hover:scale-105 transform transition-transform duration-500"
              onError={() => setImgError(true)}
            />
          ) : (
            <span className="flex items-center justify-center w-full h-full">
              <Icon size={64} className="text-teal-400" />
            </span>
          )}
          {project.aiContribution && (
            <span className={
              isDark
                ? "absolute top-4 left-4 bg-indigo-700 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md tracking-wide uppercase"
                : "absolute top-3 right-3 bg-indigo-600 text-white text-xs px-2 py-1 rounded-full"
            }>
              AI-Enhanced
            </span>
          )}
        </div>
        <div className={
          isDark
            ? "flex-1 flex flex-col justify-between p-6"
            : "p-6 flex flex-col justify-between h-40"
        }>
          <div>
            <h3 className={
              isDark
                ? "text-xl font-bold text-white mb-1 leading-tight"
                : "text-lg font-semibold text-gray-900 group-hover:text-teal-600 transition-colors"
            }>
              {project.name}
            </h3>
            <p className={isDark ? "text-sm text-teal-400 mb-2 font-medium" : "mt-1 text-sm text-gray-500"}>
              {project.industry}
            </p>
          </div>
          <div className={isDark ? "mt-4 mb-2" : "mt-4 flex items-center justify-between"}>
            <span className={isDark ? "text-base font-semibold text-teal-300" : "text-sm font-medium text-teal-600"}>
              {project.keyMetric}
            </span>
            {isDark ? (
              <span className="ml-6 text-sm font-semibold text-teal-400 hover:underline transition-colors">
                View case
              </span>
            ) : (
              <span className="text-sm text-teal-500 group-hover:underline">
                View Case Study
              </span>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
} 