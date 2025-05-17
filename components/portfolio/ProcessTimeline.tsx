"use client";

import { Project } from "@/types/project";
import { motion } from "framer-motion";

interface ProcessTimelineProps {
  project: Project;
}

export default function ProcessTimeline({ project }: ProcessTimelineProps) {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            Our Process
          </h2>
          <p className="text-lg text-teal-100 max-w-2xl mx-auto">
            A step-by-step journey of how we brought this project to life
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-teal-800" />

          {/* Process steps */}
          <div className="space-y-8">
            {project.processSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} ${index === project.processSteps.length - 1 ? 'mb-0' : ''}`}
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-orange-500 border-4 border-gray-900" />

                {/* Content */}
                <div
                  className={`w-full md:w-1/2 ${
                    index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                  }`}
                >
                  <div className="bg-gray-900 rounded-2xl p-6 shadow-lg">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-teal-900 flex items-center justify-center">
                        <span className="text-teal-400 font-bold">
                          {index + 1}
                        </span>
                      </div>
                      <div>
                        <h3 className="text-xl font-heading font-bold text-white">
                          {step.title}
                        </h3>
                        <p className="text-sm text-teal-200">{step.duration}</p>
                      </div>
                    </div>
                    <p className="text-teal-100">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 