"use client";
import { MainHeading } from "@/components/internal/texture";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { ClientAboutUsPageContent } from "../utils/interface/index.query";
import { cn } from "@/lib/utils";
import { Content } from "@/components/internal/markup";

type Props = {
  aboutData: ClientAboutUsPageContent;
};

const About: React.FC<Props> = ({ aboutData }) => {
  const pathname = usePathname();
  const isPreview = !["/about-us"].includes(pathname);
  return (
    <>
      {/* About Us Section */}

      <section className={`${isPreview ? "py-12" : "py-3 md:py-3"}`}>
        <div className="max-w-7xl mx-auto px-6">
          {/* Main Heading */}
          <MainHeading
            title={aboutData?.title || "About Us"}
            description={
              aboutData?.subTitle || "Meet the best law firm of Nepal"
            }
            customClass="mb-12 md:mb-12"
          />

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Image Section */}
            <div className="relative">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80&w=1200"
                  alt="Our legacy"
                  height={382}
                  width={300}
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Decorative Box */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 md:w-52 md:h-52 lg:w-64 lg:h-64 bg-gray-50 rounded-2xl z-0 hidden xl:block border border-gray-100"></div>

              {/* Experience Badge */}
              {aboutData?.yearsOfExperience && (
                <div className="absolute -top-6 -left-6 bg-secondary text-[#1a1c1e] p-6 md:p-8 rounded-2xl shadow-xl z-20">
                  <p className="text-3xl md:text-4xl font-serif font-bold">
                    {aboutData.yearsOfExperience}
                  </p>
                  <p className="text-[10px] uppercase font-black tracking-widest mt-1">
                    Years of Legacy
                  </p>
                </div>
              )}
            </div>

            {/* Text Section */}
            <div className="flex flex-col gap-6 md:gap-">
              {/* Secondary Heading */}
              <div className="flex flex-col gap-5">
                {aboutData?.metaData?.secondaryTitle && (
                  <p className="text-secondary font-bold uppercase tracking-[0.05em] text-sm md:text-base">
                    {aboutData.metaData.secondaryTitle || "Our Heritage"}
                  </p>
                )}

                {aboutData?.metaData?.secondarySubTitle && (
                  <h3 className="text-2xl md:text-2xl lg:text-2xl font-serif text-[#1a1c1e] leading-tight">
                    {aboutData.metaData.secondarySubTitle || (
                      <>
                        A Legacy of Integrity and{" "}
                        <span className="text-secondary">
                          Unyielding Advocacy.
                        </span>
                      </>
                    )}
                  </h3>
                )}
              </div>

              {/* Description */}
              {aboutData?.metaData?.description && (
                <p
                  className={cn([
                    isPreview && "line-clamp-5",
                    "text-gray-600 leading-relaxed font-light text-base md:text-lg",
                  ])}
                >
                  {aboutData.metaData.description ||
                    `Founded in 1999, Justice & Co. began with a singular vision:
              to provide elite-level legal representation that combines
              large-firm resources with the personal attention of a boutique practice.`}
                </p>
              )}

              {/* Items Grid */}
              {aboutData?.metaData?.items?.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {aboutData.metaData.items.map((item, index: number) => (
                    <div key={index} className="flex flex-col gap-3">
                      <div className="flex items-center gap-2 text-[#1a1c1e] font-bold">
                        <CheckCircle2
                          size={18}
                          className="text-secondary shrink-0"
                        />
                        <span className="text-sm uppercase tracking-wider">
                          {item.title}
                        </span>
                      </div>
                      <p className="text-sm text-gray-500 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {/* CTA Button */}
              {!["/about-us"].includes(pathname) && (
                <div className="mb-5">
                  {" "}
                  {/* Reduce bottom margin */}
                  <Link href="/about-us">
                    <button className="flex items-center gap-2 mt-8 text-[#1a1c1e] font-black text-xs md:text-sm uppercase tracking-[0.2em] group transition-all">
                      Learn More About Our Story
                      <ArrowRight
                        size={16}
                        className="text-secondary group-hover:translate-x-2 transition-transform"
                      />
                    </button>
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Full Content (Only About Page) */}
          {["/about-us"].includes(pathname) && (
            <div className="mt-10 mb-12 md:mt-10 mb-12">
              <Content
                html={aboutData?.content}
                className="text-lg text-gray-600 leading-relaxed font-light space-y-4"
              />
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default About;
