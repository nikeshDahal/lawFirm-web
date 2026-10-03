"use client";
import { NAV_ITEMS } from "@/constant/menu";
import { ArrowRight, Scale, Code, Mail, Phone, Linkedin } from "lucide-react";
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
          <div className="flex flex-col items-center md:items-start gap-1 text-center md:text-left">
            <p>
              © {new Date().getFullYear()} Top Legal Advisers. All Rights
              Reserved.
            </p>
            <div className="flex items-center gap-1.5 normal-case relative group">
              <GradientIcon icon={Code} size={14} />
              <div className="flex items-center">
                <span className="mr-1">Developed by</span>
                <div className="relative inline-block cursor-pointer">
                  <a
                    href="mailto:nikeshdahal297@gmail.com"
                    className="hover:text-white transition-colors font-medium capitalize"
                    rel="author"
                    title="Developed by Nikesh Dahal"
                    aria-label="Contact Developer Nikesh Dahal"
                  >
                    Er Nikesh Dahal
                  </a>

                  {/* Hover Card Wrapper */}
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 pb-2 w-44 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 pointer-events-none group-hover:pointer-events-auto">
                    {/* Card Content */}
                    <div className="bg-white text-gray-800 rounded-lg shadow-xl overflow-hidden transform group-hover:-translate-y-1 translate-y-2 transition-transform duration-300 border border-gray-100">
                      <div className="bg-primary/5 h-10 w-full relative border-b border-gray-100"></div>
                      <div className="px-3 pb-3 relative flex flex-col items-center">
                        <div className="w-10 h-10 bg-white rounded-full p-0.5 -mt-5 shadow-sm mb-1.5 flex items-center justify-center border border-gray-100 overflow-hidden">
                          <img src="/user.jpg" alt="Nikesh Dahal" className="w-full h-full rounded-full object-cover" />
                        </div>
                        <h4 className="font-bold text-xs text-primary capitalize">Er. Nikesh Dahal</h4>
                        <p className="text-[9px] text-gray-500 mb-2 text-center font-normal">Software Engineer</p>

                        <div className="flex flex-col gap-0.5 w-full font-normal">
                          <a href="mailto:nikeshdahal297@gmail.com" className="flex items-center gap-2 text-[10px] text-gray-600 hover:text-white hover:bg-primary transition-colors p-1 rounded-md">
                            <Mail size={12} className="text-gold flex-shrink-0" />
                            <span className="truncate">Email Me</span>
                          </a>
                          <a href="tel:9814037042" className="flex items-center gap-2 text-[10px] text-gray-600 hover:text-white hover:bg-primary transition-colors p-1 rounded-md">
                            <Phone size={12} className="text-gold flex-shrink-0" />
                            <span>Contact Me</span>
                          </a>
                          <a href="https://www.linkedin.com/in/nikesh-dahal-47b425178/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[10px] text-gray-600 hover:text-white hover:bg-primary transition-colors p-1 rounded-md">
                            <Linkedin size={12} className="text-gold flex-shrink-0" />
                            <span>LinkedIn</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
