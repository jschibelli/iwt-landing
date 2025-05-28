"use client";

import { Project } from "@/types/project";
import { motion } from "framer-motion";
import { User, Cpu } from "lucide-react";

interface TeamCompositionProps {
  project: Project;
}

export default function TeamComposition({ project }: TeamCompositionProps) {
  if ((!project.team?.human || project.team.human.length === 0) && (!project.team?.ai || project.team.ai.length === 0)) return null;

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            Team Composition
          </h2>
          {project.teamSummary ? (
            <p className="text-lg text-teal-100 max-w-2xl mx-auto">{project.teamSummary}</p>
          ) : (
            <p className="text-lg text-teal-100 max-w-2xl mx-auto">
              Our hybrid human+AI approach combines the best of both worlds
            </p>
          )}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Human Team */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gray-900 rounded-2xl p-8 shadow-lg"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-teal-900 flex items-center justify-center">
                <User className="w-6 h-6 text-teal-400" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-white">
                Human Team
              </h3>
            </div>
            <div className="space-y-4">
              {project.team.human.map((member) => (
                <div
                  key={member.name}
                  className="flex items-center gap-4 p-4 bg-gray-800 rounded-lg"
                >
                  <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center">
                    <span className="text-teal-200 font-medium">
                      {member.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-medium text-white">{member.name}</p>
                    <p className="text-sm text-teal-400">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* AI Team */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gray-900 rounded-2xl p-8 shadow-lg"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-indigo-900 flex items-center justify-center">
                <Cpu className="w-6 h-6 text-indigo-400" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-white">
                AI Assistants
              </h3>
            </div>
            <div className="space-y-4">
              {project.team.ai.map((member, index) => (
                <div
                  key={index}
                  className="p-4 bg-indigo-950 rounded-lg border border-indigo-900"
                >
                  <p className="font-medium text-indigo-100 mb-1">
                    {member.role}
                  </p>
                  <p className="text-sm text-indigo-400">{member.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-indigo-600/20 rounded-lg">
              <p className="text-sm text-indigo-100">
                <span className="font-medium">AI Contribution:</span>{" "}
                {project.aiContribution.percentage}% of the project
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 