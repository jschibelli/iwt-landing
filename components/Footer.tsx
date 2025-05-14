"use client";
import Link from "next/link";
import { Mail, Twitter, Linkedin, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6">
      {/* Blurred Circles Background */}
      <div className="relative max-w-5xl mx-auto px-4 mb-10">
        <div className="absolute inset-0 pointer-events-none select-none -z-10">
          <div className="absolute -top-10 -left-10 w-48 h-48 bg-teal-500 opacity-60 rounded-full blur-2xl border-2 border-teal-700" />
          <div className="absolute -bottom-10 -right-10 w-56 h-56 bg-orange-500 opacity-60 rounded-full blur-2xl border-2 border-orange-700" />
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 rounded-lg p-8 shadow-3xl border-2 border-teal-500 relative z-10 transition-transform duration-300 hover:scale-105 hover:-translate-y-2">
          <div className="mb-4 md:mb-0">
            <h3 className="text-2xl font-heading font-bold text-white mb-2">Ready to start your project?</h3>
            <p className="text-gray-300">Let's build something amazing together.</p>
          </div>
          <Link
            href="#contact"
            className="px-8 py-3 rounded bg-orange-500 text-white font-semibold text-lg hover:bg-teal-500 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
          >
            Contact Us
          </Link>
        </div>
      </div>
      {/* Footer Main */}
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 border-b border-gray-700 pb-8">
        {/* Column 1: Logo & Social */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-block w-8 h-8 rounded-full bg-teal-500 flex items-center justify-center font-bold text-gray-900">IW</span>
            <span className="font-heading font-bold text-white text-lg">IntraWeb</span>
          </div>
          <div className="flex gap-3">
            <a href="#" aria-label="Twitter" className="hover:text-teal-400"><Twitter size={20} /></a>
            <a href="#" aria-label="LinkedIn" className="hover:text-teal-400"><Linkedin size={20} /></a>
            <a href="#" aria-label="GitHub" className="hover:text-teal-400"><Github size={20} /></a>
          </div>
        </div>
        {/* Column 2: Links */}
        <div>
          <h4 className="font-semibold text-white mb-2">Company</h4>
          <ul className="space-y-1">
            <li><Link href="#about" className="hover:text-teal-400">About</Link></li>
            <li><Link href="#services" className="hover:text-teal-400">Services</Link></li>
            <li><Link href="#work" className="hover:text-teal-400">Work</Link></li>
            <li><Link href="#process" className="hover:text-teal-400">Process</Link></li>
          </ul>
        </div>
        {/* Column 3: Resources */}
        <div>
          <h4 className="font-semibold text-white mb-2">Resources</h4>
          <ul className="space-y-1">
            <li><Link href="#tech-stack" className="hover:text-teal-400">Tech Stack</Link></li>
            <li><Link href="#testimonials" className="hover:text-teal-400">Testimonials</Link></li>
            <li><Link href="#faq" className="hover:text-teal-400">FAQ</Link></li>
          </ul>
        </div>
        {/* Column 4: Newsletter */}
        <div>
          <h4 className="font-semibold text-white mb-2">Newsletter</h4>
          <form className="flex flex-col gap-2">
            <label htmlFor="newsletter" className="sr-only">Email address</label>
            <div className="flex">
              <input
                id="newsletter"
                type="email"
                placeholder="Your email"
                className="w-full px-3 py-2 rounded-l bg-gray-700 text-white placeholder-gray-400 focus:outline-none"
              />
              <button type="submit" className="px-4 py-2 rounded-r bg-orange-500 text-white font-semibold hover:bg-teal-500 transition-colors">
                <Mail size={18} />
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* Legal */}
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center mt-6 text-sm text-gray-500">
        <div>&copy; {new Date().getFullYear()} IntraWeb Technologies. All rights reserved.</div>
        <div className="flex gap-4 mt-2 md:mt-0">
          <a href="#" className="hover:text-teal-400">Privacy Policy</a>
          <a href="#" className="hover:text-teal-400">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
} 