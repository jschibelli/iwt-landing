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
    <section className="py-10 md:py-16 bg-gradient-to-br from-[#13293d] to-[#0a2236]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Blurred accent behind card */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-teal-500 opacity-20 rounded-full blur-3xl z-0" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative z-10 bg-[#13293d] border border-teal-700/40 rounded-3xl p-8 md:p-12 shadow-xl mx-auto max-w-4xl"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-14 h-14 rounded-full bg-[#0a2236] flex items-center justify-center overflow-hidden">
              <Image
                src={project.client.logo}
                alt={project.client.name}
                width={40}
                height={40}
                className="object-contain"
              />
            </div>
            <div>
              <h3 className="text-xl font-heading font-bold text-white">
                {project.client.name}
              </h3>
              <p className="text-teal-300">Client</p>
            </div>
          </div>

          <div className="relative">
            <Quote className="w-20 h-20 text-teal-700/10 absolute -top-8 -left-8" />
            <blockquote className="text-2xl md:text-3xl font-heading font-bold text-white mb-8 relative z-10">
              {project.testimonial.quote}
            </blockquote>
          </div>

          <div className="flex items-center gap-4 mt-6">
            <div className="w-12 h-12 rounded-full bg-teal-500 flex items-center justify-center">
              <span className="text-white font-medium">
                {project.testimonial.author.charAt(0)}
              </span>
            </div>
            <div>
              <p className="font-medium text-white">
                {project.testimonial.author}
              </p>
              <p className="text-teal-300">
                {project.testimonial.position}, {project.testimonial.company}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 