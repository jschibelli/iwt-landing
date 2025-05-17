"use client";
import { useState } from "react";
import Link from "next/link";
import { Mail, Linkedin, Github, Facebook } from "lucide-react";

export function Footer() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubscribe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Honeypot field
    const honeypot = document.getElementById("honeypot") as HTMLInputElement;
    if (honeypot && honeypot.value) return;
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setMessage("Thank you for subscribing!");
      } else {
        setMessage("Subscription failed. Please try again.");
      }
    } catch (error) {
      setMessage("An error occurred. Please try again.");
    }
  };

  return (
    <footer className="w-full py-8 bg-gray-900 text-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* Column 1 */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <img src="/intraweb-logo-white.png" alt="IntraWeb Technologies Logo" className="mb-2 w-32 h-auto" />
            <p className="text-sm">Innovate. Build. Empower.</p>
            <p className="text-xs">We are committed to delivering innovative solutions that empower businesses worldwide.</p>
          </div>
          {/* Column 2 */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <nav className="flex flex-col space-y-1">
              <Link href="/services" className="hover:text-orange-500">Services</Link>
              <Link href="/work" className="hover:text-orange-500">Work</Link>
              <Link href="/process" className="hover:text-orange-500">Process</Link>
              <Link href="/about" className="hover:text-orange-500">About</Link>
              <Link href="/team" className="hover:text-orange-500">Team</Link>
              <Link href="/careers" className="hover:text-orange-500">Careers</Link>
            </nav>
          </div>
          {/* Column 3 */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Contact</h3>
            <p className="text-sm">Email: <a href="mailto:info@intrawebtech.com" className="hover:text-orange-500">info@intrawebtech.com</a></p>
            <p className="text-sm">Phone: (555) 123-4567</p>
            <p className="text-sm">Location: Towaco, NJ • Serving clients worldwide</p>
          </div>
          {/* Column 4 */}
          <div className="w-full md:w-1/4">
            <h3 className="text-lg font-semibold mb-2">Stay Connected</h3>
            <form onSubmit={handleSubscribe} className="flex flex-col space-y-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="p-2 rounded bg-gray-800 text-white"
                required
              />
              <input type="text" id="honeypot" className="hidden" />
              <button type="submit" className="p-2 bg-orange-500 text-white rounded hover:bg-orange-600">Subscribe</button>
              <div aria-live="polite" className="text-sm text-orange-500">{message}</div>
            </form>
            <div className="flex space-x-4 mt-4">
              <a href="https://linkedin.com" aria-label="LinkedIn" className="hover:text-orange-500"><Linkedin /></a>
              <a href="https://facebook.com" aria-label="Facebook" className="hover:text-orange-500"><Facebook /></a>
              <a href="https://github.com" aria-label="GitHub" className="hover:text-orange-500"><Github /></a>
              <a href="https://threads.net" aria-label="Threads" className="hover:text-orange-500"><Mail /></a>
            </div>
          </div>
        </div>
        <div className="text-xs text-center mt-8">&copy; {new Date().getFullYear()} IntraWeb Technologies | <Link href="/privacy-policy" className="hover:text-orange-500">Privacy Policy</Link> | <Link href="/terms-of-service" className="hover:text-orange-500">Terms of Service</Link></div>
      </div>
    </footer>
  );
} 