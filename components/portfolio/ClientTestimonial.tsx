"use client";

import { Project } from "@/types/project";
import { motion } from "framer-motion";
import Image from "next/image";
import { Quote } from "lucide-react";

interface ClientTestimonialProps {
  project: Project;
}

export default function ClientTestimonial({ project }: ClientTestimonialProps) {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-teal-500 to-teal-600 rounded-3xl p-8 md:p-12 shadow-xl"
        >
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <Image
                src={project.client.logo}
                alt={project.client.name}
                width={64}
                height={64}
                className="rounded-lg bg-white p-2"
              />
              <div>
                <h3 className="text-xl font-heading font-bold text-white">
                  {project.client.name}
                </h3>
                <p className="text-teal-100">Client</p>
              </div>
            </div>

            <div className="relative">
              <Quote className="w-12 h-12 text-teal-300/30 absolute -top-6 -left-2" />
              <blockquote className="text-2xl md:text-3xl font-heading font-bold text-white mb-8 relative z-10">
                {project.testimonial.quote}
              </blockquote>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-teal-400 flex items-center justify-center">
                <span className="text-white font-medium">
                  {project.testimonial.author.charAt(0)}
                </span>
              </div>
              <div>
                <p className="font-medium text-white">
                  {project.testimonial.author}
                </p>
                <p className="text-teal-100">
                  {project.testimonial.position}, {project.testimonial.company}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 