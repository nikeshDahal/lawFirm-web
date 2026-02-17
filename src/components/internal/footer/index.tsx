"use client";
import { NAV_ITEMS } from "@/constant/menu";
import { ArrowRight, Scale } from "lucide-react";
import Link from "next/link";
import React from "react";
import {
  ClientContactUsResponse,
  ClientPracticeAreasResponse,
} from "@/app/utils/interface/index.query";
import SocialHandler from "../socialhandler";
import GradientIcon from "@/components/ui/gradientIcon";

type Props = {
  contactData: ClientContactUsResponse;
  pubData: ClientPracticeAreasResponse;
};
const Footer: React.FC<Props> = ({ contactData, pubData }) => {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1: Brand & Bio */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <img
                src="/logo-only.png"
                alt="Top Legal Advisers Logo"
                className="w-16 h- object-contain"
              />
              <h2 className="text-xl font-serif font-bold tracking-tight text-white leading-none">
                Top <span className="text-gradient-gold">Legal</span> Advisers.
              </h2>
            </div>
            <p className="text-sm leading-relaxed text-white">
              Providing sophisticated legal solutions with a commitment to
              integrity and excellence for over two decades. Your trusted
              partner in navigating complex legal landscapes.
            </p>
            <div className="flex gap-4">
              <SocialHandler data={contactData.socialMedia} />
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-6">
            <h4 className="text-gradient-gold font-serif font-bold text-lg mb-6 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-8 after:h-0.5 after:bg-gradient-gold">
              Quick Links
            </h4>
            <ul className="space-y-4 text-sm list-none">
              {NAV_ITEMS.map((item, idx) => (
                <li key={idx}>
                  <Link
                    href={item.link}
                    className="flex items-center gap-2 gradient-hover-gold transition-colors group"
                  >
                    <GradientIcon
                      icon={ArrowRight}
                      size={16}
                      strokeWidth={2}
                      className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
                    />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Practice Areas */}
          <div className="space-y-6">
            <h4 className="text-gradient-gold font-serif font-bold text-lg mb-6 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-8 after:h-0.5 after:bg-gradient-gold">
              Expertise
            </h4>
            <ul className="space-y-4 text-sm list-none">
              {pubData &&
                pubData.data.map((item, idx) => (
                  <li key={idx}>
                    <Link
                      href={`/practice-area/${item.slug}`}
                      className="flex items-center gap-2 gradient-hover-gold transition-colors group"
                    >
                      <GradientIcon
                        icon={ArrowRight}
                        size={16}
                        strokeWidth={2}
                        className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
                      />
                      {item.title}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>

          {/* Column 4: Walk In */}
          <div className="space-y-6">
            <h4 className="text-gradient-gold font-serif font-bold text-lg mb-6 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-8 after:h-0.5 after:bg-gradient-gold">
              Walk In
            </h4>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d683.9782623527177!2d85.32859008535301!3d27.696889989880596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19fb4d5bbb4d%3A0x41e633f97dbc5148!2sTop%20Legal%20Advisers!5e1!3m2!1sen!2snp!4v1770908819499!5m2!1sen!2snp"
              width="100%"
              height="200"
              className="rounded-md border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 border-t-1 border-gold flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-light tracking-wide uppercase">
          <p>
            © {new Date().getFullYear()} Top Legal Advisers. All Rights
            Reserved.
          </p>
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
