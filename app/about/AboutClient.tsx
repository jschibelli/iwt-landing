"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function AboutClient() {
  return (
    <main className="bg-[#0a2236] min-h-screen text-white">
      {/* Hero Section */}
      <section className="py-20 relative bg-[#0a2236] overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none select-none" style={{ backgroundImage: 'url(/pentagon-pattern.svg)', backgroundRepeat: 'repeat', backgroundSize: '80px 80px', opacity: 0.18 }} />
        <div className="container max-w-7xl mx-auto px-4 relative z-10">
          <motion.h1 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-5xl md:text-6xl font-bold mb-4 text-teal-400">About IntraWeb Technologies</motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="text-xl md:text-2xl max-w-3xl text-teal-100">
            We build high-performance web solutions that blend innovative design with rock-solid technology—delivering digital experiences that drive real business impact.
          </motion.p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-[#13293d]">
        <div className="container max-w-7xl mx-auto px-4">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-3xl md:text-4xl font-bold mb-6 text-white">Our Mission</motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="text-lg md:text-xl max-w-3xl text-teal-100">
            To empower startups and enterprises with high-performance web solutions that blend innovative design and rock-solid technology, so every digital experience we build drives real business impact.
          </motion.p>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 bg-[#0a2236]">
        <div className="container max-w-7xl mx-auto px-4">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-3xl md:text-4xl font-bold mb-6 text-white">Our Vision</motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="text-lg md:text-xl max-w-3xl text-teal-100">
            To lead the future of web collaboration by harnessing AI-driven workflows and real-time interfaces, making seamless, intelligent digital experiences the new standard for every organization.
          </motion.p>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-[#13293d]">
        <div className="container max-w-7xl mx-auto px-4">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-3xl md:text-4xl font-bold mb-10 text-white">Our Values</motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Value Card: Innovation */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="bg-[#1a2e3b] p-6 rounded-lg shadow-sm border border-teal-900">
              <h3 className="text-xl font-bold mb-3 text-teal-400">Innovation</h3>
              <p>We relentlessly explore new ideas and technologies to deliver smarter, faster solutions.</p>
            </motion.div>
            {/* Value Card: Craftsmanship */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.05 }} className="bg-[#1a2e3b] p-6 rounded-lg shadow-sm border border-teal-900">
              <h3 className="text-xl font-bold mb-3 text-teal-400">Craftsmanship</h3>
              <p>We sweat the details—from code architecture to pixel-perfect design—because excellence lives in the smallest decisions.</p>
            </motion.div>
            {/* Value Card: Collaboration */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="bg-[#1a2e3b] p-6 rounded-lg shadow-sm border border-teal-900">
              <h3 className="text-xl font-bold mb-3 text-teal-400">Collaboration</h3>
              <p>We believe that human insight and AI potential together create the strongest outcomes.</p>
            </motion.div>
            {/* Value Card: Integrity */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.15 }} className="bg-[#1a2e3b] p-6 rounded-lg shadow-sm border border-teal-900">
              <h3 className="text-xl font-bold mb-3 text-teal-400">Integrity</h3>
              <p>We build trust through transparency, respect deadlines, and honor our commitments.</p>
            </motion.div>
            {/* Value Card: Customer Success */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }} className="bg-[#1a2e3b] p-6 rounded-lg shadow-sm border border-teal-900">
              <h3 className="text-xl font-bold mb-3 text-teal-400">Customer Success</h3>
              <p>We measure our success by yours—your goals become our north star from day one.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-[#0a2236]">
        <div className="container max-w-7xl mx-auto px-4">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-3xl md:text-4xl font-bold mb-10 text-white">Our Story</motion.h2>
          {/* Timeline */}
          <div className="space-y-12 max-w-4xl mx-auto">
            {/* 2020 */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="flex flex-col md:flex-row">
              <div className="md:w-1/4">
                <h3 className="text-2xl font-bold text-teal-400 mb-2 md:mb-0">2020</h3>
              </div>
              <div className="md:w-3/4">
                <p className="text-lg text-teal-100">IntraWeb Technologies was founded with a simple mission: bring enterprise-grade web experiences within reach of startups and established organizations alike.</p>
              </div>
            </motion.div>
            {/* 2022 */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.05 }} className="flex flex-col md:flex-row">
              <div className="md:w-1/4">
                <h3 className="text-2xl font-bold text-teal-400 mb-2 md:mb-0">2022</h3>
              </div>
              <div className="md:w-3/4">
                <p className="text-lg text-teal-100">As AI capabilities began to accelerate and market demands shifted toward more intelligent workflows, we hit pause to rethink our approach—seeking a way to fuse human expertise with emerging AI potential.</p>
              </div>
            </motion.div>
            {/* 2024 */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="flex flex-col md:flex-row">
              <div className="md:w-1/4">
                <h3 className="text-2xl font-bold text-teal-400 mb-2 md:mb-0">2024</h3>
              </div>
              <div className="md:w-3/4">
                <p className="text-lg text-teal-100">We relaunched with a renewed focus on AI-powered collaboration, assembling a hybrid team of expert designers, engineers, and proprietary AI agents to innovate faster and smarter.</p>
              </div>
            </motion.div>
            {/* April 2025 */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.15 }} className="flex flex-col md:flex-row">
              <div className="md:w-1/4">
                <h3 className="text-2xl font-bold text-teal-400 mb-2 md:mb-0">April 2025</h3>
              </div>
              <div className="md:w-3/4">
                <p className="text-lg text-teal-100">We're preparing to open SynaplyAI's beta—leveraging 50+ projects delivered, a 96% client retention rate, and a 4.9/5 average satisfaction score.</p>
              </div>
            </motion.div>
          </div>
          {/* Metrics */}
          <div className="mt-16 bg-[#1a2e3b] p-8 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-6 text-center text-white">Our approach has delivered results that speak for themselves:</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <p className="text-4xl font-bold text-teal-400 mb-2">50+</p>
                <p className="text-lg text-teal-100">Projects Delivered</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-teal-400 mb-2">96%</p>
                <p className="text-lg text-teal-100">Client Retention</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-teal-400 mb-2">4.9/5</p>
                <p className="text-lg text-teal-100">Average Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team & Hybrid Model Section */}
      <section className="py-16 bg-[#13293d]">
        <div className="container max-w-7xl mx-auto px-4">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-3xl md:text-4xl font-bold mb-4 text-white">Team & Hybrid Model</motion.h2>
          <motion.h3 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.05 }} className="text-2xl font-semibold mb-8 text-teal-400">Meet Our Team</motion.h3>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="text-lg max-w-4xl mb-10 text-teal-100">
            We combine world-class human talent with intelligent AI collaborators to deliver outcomes neither could achieve alone.
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
            {/* Human Experts */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="bg-[#1a2e3b] p-8 rounded-lg shadow-sm border border-teal-900">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-teal-900 rounded-full flex items-center justify-center">
                  <span className="text-teal-400 text-2xl">👤</span>
                </div>
              </div>
              <h4 className="text-xl font-bold text-center mb-4 text-white">Human Experts</h4>
              <p className="text-center text-teal-100">
                Our designers, developers, and strategists bring deep industry knowledge, creative problem-solving, and personal accountability.
              </p>
            </motion.div>
            {/* AI Agents */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.05 }} className="bg-[#1a2e3b] p-8 rounded-lg shadow-sm border border-teal-900">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-teal-900 rounded-full flex items-center justify-center">
                  <span className="text-teal-400 text-2xl">🤖</span>
                </div>
              </div>
              <h4 className="text-xl font-bold text-center mb-4 text-white">AI Agents</h4>
              <p className="text-center text-teal-100">
                Specialized AI collaborators accelerate ideation, generate production-ready code snippets, analyze performance, and surface design refinements in real time.
              </p>
            </motion.div>
            {/* Seamless Collaboration */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="bg-[#1a2e3b] p-8 rounded-lg shadow-sm border border-teal-900">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-teal-900 rounded-full flex items-center justify-center">
                  <span className="text-teal-400 text-2xl">🔄</span>
                </div>
              </div>
              <h4 className="text-xl font-bold text-center mb-4 text-white">Seamless Collaboration</h4>
              <p className="text-center text-teal-100">
                By pairing each human role with an AI counterpart—from front-end development to quality assurance—we accelerate delivery cycles, elevate craftsmanship, and ensure 24/7 responsiveness.
              </p>
            </motion.div>
          </div>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }} className="text-lg max-w-4xl mx-auto text-center text-teal-100">
            Together, our hybrid model transforms every project into a dynamic partnership, so you get not just a website, but a continuously evolving digital experience.
          </motion.p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#0a2236]">
        <div className="container max-w-7xl mx-auto px-4 text-center max-w-2xl">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-3xl md:text-4xl font-bold mb-4 text-white">Ready to Amplify Your Digital Presence?</motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="text-lg mb-8 text-teal-100">
            Experience the power of our human + AI team—where creativity meets efficiency to deliver exceptional results, on time and on budget.
          </motion.p>
          <Link 
            href="/contact" 
            className="inline-block bg-teal-500 hover:bg-orange-500 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 text-center focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
          >
            Schedule Your Strategy Session
          </Link>
        </div>
      </section>
    </main>
  );
} 