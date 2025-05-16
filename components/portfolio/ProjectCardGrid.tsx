"use client";

import { Project } from "@/types/project";
import ProjectCard from "./ProjectCard";

interface ProjectCardGridProps {
  projects: Project[];
}

export default function ProjectCardGrid({ projects }: ProjectCardGridProps) {
  return (
    <div className="grid gap-8 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
} 