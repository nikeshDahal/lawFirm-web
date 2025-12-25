"use client";
import { NAV_ITEMS } from "@/constant/menu";
import { ArrowRight, Scale } from "lucide-react";
import Link from "next/link";
import React from "react";
import SocialHandler from "../socialhandler";

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1: Brand & Bio */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="bg-secondary p-2 rounded">
                <Scale size={24} className="text-primary" />
              </div>
              <h2 className="text-xl font-serif font-bold tracking-tight text-white leading-none">
                JUSTICE & <span className="text-secondary">CO.</span>
              </h2>
            </div>
            <p className="text-sm leading-relaxed text-white">
              Providing sophisticated legal solutions with a commitment to
              integrity and excellence for over two decades. Your trusted
              partner in navigating complex legal landscapes.
            </p>
            <div className="flex gap-4">
              <SocialHandler />
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-white font-serif font-bold text-lg mb-6 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-8 after:h-0.5 after:bg-secondary">
              Quick Links
            </h4>
            <ul className="space-y-4 text-sm">
              {NAV_ITEMS.map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.link}
                    className="flex items-center gap-2 hover:text-secondary transition-colors group"
                  >
                    <ArrowRight
                      size={12}
                      className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
                    />
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Practice Areas */}
          <div>
            <h4 className="text-white font-serif font-bold text-lg mb-6 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-8 after:h-0.5 after:bg-secondary">
              Expertise
            </h4>
            <ul className="space-y-4 text-sm">
              {NAV_ITEMS[2].submenu &&
                NAV_ITEMS[2]?.submenu.map((item, idx) => (
                  <li key={idx}>
                    <Link
                      href={item.link}
                      className="flex items-center gap-2 hover:text-secondary transition-colors group"
                    >
                      <ArrowRight
                        size={12}
                        className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
                      />
                      {item.name}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>

          {/* Column 4: Newsletter/Contact */}
          <div className="space-y-6">
            <h4 className="text-white font-serif font-bold text-lg mb-6 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-8 after:h-0.5 after:bg-secondary">
              Legal Insights
            </h4>
            <p className="text-sm text-white">
              Subscribe to our newsletter for the latest legal updates and firm
              news.
            </p>
            <form className="relative" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-sm focus:outline-none focus:border-secondary transition-colors"
              />
              <button className="absolute right-2 top-2 bg-secondary text-[#1a1c1e] p-1.5 rounded hover:bg-white transition-colors">
                <ArrowRight size={16} />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-light tracking-wide uppercase">
          <p>© 2025 Justice & Co. All Rights Reserved.</p>
          <div className="flex gap-8">
            <Link
              href="/privacy-policy"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-and-conditions"
              className="hover:text-white transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="/sitemap.xml"
              target="_blank"
              className="hover:text-white transition-colors"
            >
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
