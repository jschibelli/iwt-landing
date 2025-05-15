"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "#services" },
  { name: "Work", href: "#work" },
  { name: "Process", href: "#process" },
  { name: "About", href: "#about" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-gray-900 text-white shadow-md">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 text-lg font-heading font-bold">
          <span className="sr-only">IntraWeb Technologies</span>
          {/* Replace with SVG logo if available */}
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="16" cy="16" r="16" fill="#2dd4bf" />
            <text x="16" y="21" textAnchor="middle" fontSize="16" fill="#1e293b" fontFamily="Montserrat, Arial, sans-serif">IW</text>
          </svg>
          IntraWeb
        </Link>
        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8 font-body">
          {navLinks.map((link) => (
            <li key={link.name}>
              {link.name === "Home" ? (
                <a
                  href="/"
                  onClick={e => {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="hover:text-teal-400 transition-colors cursor-pointer"
                >
                  {link.name}
                </a>
              ) : (
                <Link href={link.href} className="hover:text-teal-400 transition-colors">
                  {link.name}
                </Link>
              )}
            </li>
          ))}
          <li>
            <Link href="/contact" className="ml-4 px-5 py-2 rounded bg-orange-500 text-white font-semibold hover:bg-teal-500 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2">
              Contact Us
            </Link>
          </li>
        </ul>
        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-900 px-4 pb-4">
          <ul className="flex flex-col gap-4 font-body">
            {navLinks.map((link) => (
              <li key={link.name}>
                {link.name === "Home" ? (
                  <a
                    href="/"
                    onClick={e => {
                      e.preventDefault();
                      setMenuOpen(false);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className="block py-2 px-2 rounded hover:bg-teal-500 hover:text-white transition-colors cursor-pointer"
                  >
                    {link.name}
                  </a>
                ) : (
                  <a
                    href={link.href}
                    onClick={e => {
                      e.preventDefault();
                      setMenuOpen(false);
                      const el = document.querySelector(link.href);
                      if (el) {
                        setTimeout(() => {
                          (el as HTMLElement).scrollIntoView({ behavior: "smooth" });
                        }, 100); // wait for menu to close
                      }
                    }}
                    className="block py-2 px-2 rounded hover:bg-teal-500 hover:text-white transition-colors cursor-pointer"
                  >
                    {link.name}
                  </a>
                )}
              </li>
            ))}
            <li>
              <Link
                href="/contact"
                className="block py-2 px-2 rounded bg-orange-500 text-white font-semibold hover:bg-teal-500 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
} 