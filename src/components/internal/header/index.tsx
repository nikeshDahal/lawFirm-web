"use client";
import {
  ClientContactUsResponse,
  ClientPracticeArea,
  ClientPracticeAreasResponse,
} from "@/app/utils/interface/index.query";
import { NAV_ITEMS } from "@/constant/menu";
import { cn } from "@/lib/utils";
import { ChevronDown, Mail, MapPin, Phone, Scale } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import CustomBreadcrumb from "../breadcrumb";
import SocialHandler from "../socialhandler";

type Props = {
  contactData: ClientContactUsResponse;
  pubData: ClientPracticeAreasResponse;
};
const Header: React.FC<Props> = ({ contactData, pubData }) => {
  const pathname = usePathname();
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

  const isActive = (link: string) => {
    if (link === "/") return pathname === "/";
    return pathname.startsWith(link);
  };

  const isParentActive = (item: {
    link: string;
    submenu: [{ link: string }];
  }) => {
    if (isActive(item.link)) return true;

    if (item.submenu) {
      return item.submenu.some((sub: { link: string }) =>
        pathname.startsWith(sub.link),
      );
    }

    return false;
  };

  return (
    <>
      <div className="bg-gray-50 sticky top-0 z-99">
        {/* Top Bar - Hidden on mobile */}
        <div className="hidden lg:block bg-primary text-white py-2 border-b border-white/10">
          <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-sm font-light">
            <div className="flex items-center space-x-6">
              <a href={`tel:+${contactData?.contactInfo.primaryPhone}`}>
                <span className="flex items-center gap-2  font-light">
                  <Phone size={14} className="text-secondary" />{" "}
                  {contactData?.contactInfo.primaryPhone}
                </span>
              </a>
              <a href={`mailto:${contactData?.contactInfo.primaryEmail}`}>
                <span className="flex items-center gap-2  font-light">
                  <Mail size={14} className="text-secondary" />{" "}
                  {contactData?.contactInfo.primaryEmail}
                </span>
              </a>
            </div>
            <div className="flex items-center gap-2  font-light">
              <MapPin size={14} className="text-secondary" />{" "}
              {contactData?.location.address}, {contactData?.location.country}{" "}
              &nbsp;
              <SocialHandler
                data={contactData?.socialMedia as any}
                iconSize={14}
                size="sm"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Main Header */}
      <header
        className={` w-full bg-white  sticky top-0 z-99 transition-all duration-300 ${
          scrolled ? "shadow-lg py-3" : "py-5"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href={"/"}>
            <div className="flex items-center gap-2 group cursor-pointer">
              <div className="bg-primary p-2 rounded transform transition-transform group-hover:rotate-12">
                <Scale size={28} className="text-secondary" />
              </div>
              <div>
                <h1 className="text-xl font-serif font-bold tracking-tight text-[#1a1c1e] leading-none">
                  Top <span className="text-secondary">Legal </span> Advisers
                </h1>
                <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500 mt-1">
                  Attorneys At Law
                </p>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center space-x-8 list-none">
            {NAV_ITEMS.map((item, idx) => (
              <li key={idx} className="relative group">
                <Link
                  href={item.link}
                  className={cn([
                    "flex items-center gap-1 text-[#1a1c1e] font-medium hover:text-secondary transition-colors py-2",
                    //@ts-expect-error
                    isParentActive(item)
                      ? "active text-secondary border-b-2 border-secondary"
                      : "",
                  ])}
                >
                  {item.name}
                  {item.submenu && (
                    <ChevronDown
                      size={14}
                      className="group-hover:rotate-180 transition-transform duration-300"
                    />
                  )}
                </Link>

                {/* Submenu */}
                {item.submenu && (
                  <div className="absolute top-full left-0 w-56 bg-white shadow-xl rounded-b-lg border-t-2 border-secondary opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                    <div className="py-2">
                      {(item.link === "/practice-area" &&
                      Array.isArray(pubData?.data) &&
                      pubData?.data.length > 0
                        ? (pubData?.data as ClientPracticeArea[])
                        : []
                      )?.map((sub, sIdx) => (
                        <Link
                          key={sIdx}
                          href={`/practice-area/${sub.slug}`}
                          className={cn(
                            "block px-6 py-3 text-sm transition-colors",
                            pathname.startsWith(sub.slug)
                              ? "bg-gray-50 text-secondary font-medium"
                              : "text-gray-700 hover:bg-gray-50 hover:text-secondary",
                          )}
                        >
                          {sub.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>

          {/* Call to Action */}
          <div className="hidden lg:block">
            <Link href={"/contact-us"}>
              <button className="group cursor-pointer flex items-center gap-3 px-6 py-3 border-2 border-primary rounded-full hover:bg-primary hover:text-white transition-all duration-500 font-black text-xs uppercase tracking-widest text-primary bg-transparent shadow-xl active:scale-95">
                Free Consultation
              </button>
            </Link>
          </div>

          {/* Mobile Menu Toggle (Animated Hamburger) */}
          <button
            className="lg:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-1.5 z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span
              className={`w-6 h-0.5 bg-primary rounded transition-all duration-300 ${
                isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-primary rounded transition-all duration-300 ${
                isMobileMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-primary rounded transition-all duration-300 ${
                isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </button>
        </nav>

        {/* Mobile Navigation Drawer */}
        {/* Mobile Navigation Drawer */}
        <div
          className={`fixed inset-0 bg-white z-40 transition-transform duration-500 ease-in-out lg:hidden ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full pt-24 px-8 pb-10 overflow-y-auto">
            {/* Nav Items */}
            <ul className="space-y-4 list-none p-0 m-0">
              {NAV_ITEMS.map((item, idx: number) => (
                <li
                  key={idx}
                  className="border-b border-gray-100 last:border-0"
                >
                  <div
                    className="flex items-center justify-between py-4 cursor-pointer"
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
                        {(item.link === "/practice-area" &&
                        Array.isArray(pubData?.data) &&
                        pubData?.data.length > 0
                          ? (pubData?.data as ClientPracticeArea[])
                          : []
                        )?.map((sub, sIdx) => (
                          <Link
                            key={sIdx}
                            href={`/practice-area/${sub.slug}`}
                            className="block text-gray-600 hover:text-secondary"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {sub.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </li>
              ))}
            </ul>

            {/* Bottom Section */}
            <div className="mt-auto space-y-6">
              <button className="w-full bg-primary text-white py-4 rounded font-bold text-lg">
                Free Consultation
              </button>
              <div className="flex flex-col items-center gap-3 text-gray-500 text-sm italic">
                <a
                  href={`tel:${contactData?.contactInfo.primaryPhone}`}
                  className="hover:underline"
                >
                  <span className="flex items-center gap-2">
                    <Phone size={16} />
                    {contactData?.contactInfo.primaryPhone}
                  </span>
                </a>

                <a
                  href={`mailto:${contactData?.contactInfo.primaryEmail}`}
                  className="hover:underline"
                >
                  <span className="flex items-center gap-2">
                    <Mail size={16} />
                    {contactData?.contactInfo.primaryEmail}
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
      {!["/"].includes(pathname) && <CustomBreadcrumb />}
    </>
  );
};
export default Header;
