"use client";
import React, { useState, useEffect } from "react";
import { ChevronDown, Scale, Phone, Mail, MapPin } from "lucide-react";
import { NAV_ITEMS } from "@/constant/menu";

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for sticky header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-gray-50">
      {/* Top Bar - Hidden on mobile */}
      <div className="hidden lg:block bg-[#1a1c1e] text-gray-300 py-2 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-sm font-light">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-2">
              <Phone size={14} className="text-[#c5a059]" /> (555) 123-4567
            </span>
            <span className="flex items-center gap-2">
              <Mail size={14} className="text-[#c5a059]" />{" "}
              contact@justice-firm.com
            </span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={14} className="text-[#c5a059]" /> 123 Legal Plaza, New
            York, NY
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled ? "bg-white shadow-lg py-3" : "bg-white py-5"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="bg-[#1a1c1e] p-2 rounded transform transition-transform group-hover:rotate-12">
              <Scale size={28} className="text-[#c5a059]" />
            </div>
            <div>
              <h1 className="text-xl font-serif font-bold tracking-tight text-[#1a1c1e] leading-none">
                JUSTICE & <span className="text-[#c5a059]">CO.</span>
              </h1>
              <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500 mt-1">
                Attorneys At Law
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center space-x-8">
            {NAV_ITEMS.map((item, idx) => (
              <li key={idx} className="relative group">
                <a
                  href={item.link}
                  className="flex items-center gap-1 text-[#1a1c1e] font-medium hover:text-[#c5a059] transition-colors py-2"
                >
                  {item.name}
                  {item.submenu && (
                    <ChevronDown
                      size={14}
                      className="group-hover:rotate-180 transition-transform duration-300"
                    />
                  )}
                </a>

                {/* Submenu */}
                {item.submenu && (
                  <div className="absolute top-full left-0 w-56 bg-white shadow-xl rounded-b-lg border-t-2 border-[#c5a059] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                    <div className="py-2">
                      {item.submenu.map((sub, sIdx) => (
                        <a
                          key={sIdx}
                          href={sub.link}
                          className="block px-6 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#c5a059] transition-colors"
                        >
                          {sub.name}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>

          {/* Call to Action */}
          <div className="hidden lg:block">
            <button className="bg-[#1a1c1e] text-white px-6 py-2.5 rounded hover:bg-[#c5a059] transition-all duration-300 font-medium text-sm">
              Free Consultation
            </button>
          </div>

          {/* Mobile Menu Toggle (Animated Hamburger) */}
          <button
            className="lg:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-1.5 z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span
              className={`w-6 h-0.5 bg-[#1a1c1e] rounded transition-all duration-300 ${
                isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-[#1a1c1e] rounded transition-all duration-300 ${
                isMobileMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-[#1a1c1e] rounded transition-all duration-300 ${
                isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </button>
        </nav>

        {/* Mobile Navigation Drawer */}
        <div
          className={`fixed inset-0 bg-white z-40 transition-transform duration-500 ease-in-out lg:hidden ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full pt-24 px-8 pb-10 overflow-y-auto">
            <ul className="space-y-4">
              {NAV_ITEMS.map((item, idx: number) => (
                <li
                  key={idx}
                  className="border-b border-gray-100 last:border-0"
                >
                  <div
                    className="flex items-center justify-between py-4"
                    onClick={() =>
                      item.submenu &&
                      setActiveSubmenu(activeSubmenu === idx ? null : idx)
                    }
                  >
                    <a
                      href={item.link}
                      className="text-xl font-medium text-[#1a1c1e]"
                      onClick={(e) => item.submenu && e.preventDefault()}
                    >
                      {item.name}
                    </a>
                    {item.submenu && (
                      <ChevronDown
                        size={20}
                        className={`transition-transform duration-300 ${
                          activeSubmenu === idx ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </div>

                  {/* Mobile Submenu */}
                  {item.submenu && (
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        activeSubmenu === idx
                          ? "max-h-96 opacity-100 mb-4"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="pl-4 space-y-3">
                        {item.submenu.map((sub, sIdx) => (
                          <a
                            key={sIdx}
                            href={sub.link}
                            className="block text-gray-600 hover:text-[#c5a059]"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {sub.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </li>
              ))}
            </ul>

            <div className="mt-auto space-y-6">
              <button className="w-full bg-[#1a1c1e] text-white py-4 rounded font-bold text-lg">
                Free Consultation
              </button>
              <div className="flex flex-col items-center gap-3 text-gray-500 text-sm italic">
                <span className="flex items-center gap-2">
                  <Phone size={16} /> (555) 123-4567
                </span>
                <span className="flex items-center gap-2">
                  <Mail size={16} /> contact@justice-firm.com
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};
export default Header;
