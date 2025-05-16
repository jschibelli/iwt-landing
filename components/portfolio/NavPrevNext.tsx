"use client";

import { Project } from "@/types/project";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface NavPrevNextProps {
  project: Project;
}

export default function NavPrevNext({ project }: NavPrevNextProps) {
  return (
    <section className="py-8 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link
            href={`/portfolio/${project.navigation.previousSlug}`}
            className="group flex items-center gap-2 text-gray-600 hover:text-teal-600 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
            <span>Previous Project</span>
          </Link>

          <Link
            href="/portfolio"
            className="text-gray-600 hover:text-teal-600 transition-colors"
          >
            All Projects
          </Link>

          <Link
            href={`/portfolio/${project.navigation.nextSlug}`}
            className="group flex items-center gap-2 text-gray-600 hover:text-teal-600 transition-colors"
          >
            <span>Next Project</span>
            <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
} 