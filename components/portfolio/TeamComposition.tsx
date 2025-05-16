"use client";

import { Project } from "@/types/project";
import { motion } from "framer-motion";
import { User, Cpu } from "lucide-react";

interface TeamCompositionProps {
  project: Project;
}

export default function TeamComposition({ project }: TeamCompositionProps) {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
            Team Composition
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our hybrid human+AI approach combines the best of both worlds
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Human Team */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center">
                <User className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-gray-900">
                Human Team
              </h3>
            </div>
            <div className="space-y-4">
              {project.team.human.map((member) => (
                <div
                  key={member.name}
                  className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg"
                >
                  <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-600 font-medium">
                      {member.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{member.name}</p>
                    <p className="text-sm text-gray-500">{member.role}</p>
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
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center">
                <Cpu className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-gray-900">
                AI Assistants
              </h3>
            </div>
            <div className="space-y-4">
              {project.team.ai.map((member, index) => (
                <div
                  key={index}
                  className="p-4 bg-indigo-50 rounded-lg border border-indigo-100"
                >
                  <p className="font-medium text-indigo-900 mb-1">
                    {member.role}
                  </p>
                  <p className="text-sm text-indigo-700">{member.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-indigo-600/10 rounded-lg">
              <p className="text-sm text-indigo-900">
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