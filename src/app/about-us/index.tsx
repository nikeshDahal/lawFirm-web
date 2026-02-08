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

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <MainHeading
            title={aboutData?.title || `About us`}
            description={
              aboutData?.subTitle || "Meet the best law firm of Nepal"
            }
            customClass="mb-14 text-left"
          />
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={
                    "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80&w=1200"
                  }
                  alt="Our legacy"
                  height={382}
                  width={300}
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 lg:w-64 lg:h-64 md:w-44  md:h-44 w-34  h-34  bg-gray-50 rounded-2xl z-0 hidden xl:block border border-gray-100"></div>
              {aboutData?.yearsOfExperience && (
                <div className="absolute -top-6 -left-6 bg-secondary text-[#1a1c1e] p-8 rounded-2xl shadow-xl z-20">
                  <p className="text-4xl font-serif font-bold">
                    {aboutData?.yearsOfExperience}
                  </p>
                  <p className="text-[10px] uppercase font-black tracking-widest mt-1">
                    Years of Legacy
                  </p>
                </div>
              )}
            </div>

            <div className="space-y-8">
              <div>
                {aboutData?.metaData.secondaryTitle && (
                  <p className="text-secondary font-bold uppercase tracking-[0.3em] mb-4">
                    {aboutData?.metaData.secondaryTitle || `Our Heritage`}
                  </p>
                )}
                {aboutData?.metaData.secondaryTitle && (
                  <h3 className="text-4xl md:text-5xl font-serif text-[#1a1c1e] leading-tight">
                    {aboutData?.metaData.secondarySubTitle || (
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

              {aboutData.metaData.description && (
                <p
                  className={cn([
                    isPreview && "line-clamp-5",
                    `text-gray-600 leading-relaxed font-light text-lg`,
                  ])}
                >
                  {aboutData.metaData.description ||
                    `Founded in 1999, Justice & Co. began with a singular vision: to
                provide elite-level legal representation that combines
                large-firm resources with the personal attention of a boutique
                practice.`}
                </p>
              )}

              {aboutData.metaData.items.length > 0 && (
                <div className="grid sm:grid-cols-2 gap-8 pt-4">
                  {aboutData.metaData.items?.map((item, index: number) => (
                    <div className="space-y-3" key={index}>
                      <div className="flex items-center gap-2 text-[#1a1c1e] font-bold">
                        <CheckCircle2 size={18} className="text-secondary" />
                        <span className="text-sm uppercase tracking-wider">
                          {item.title}
                        </span>
                      </div>
                      <p className="text-xs text-gray-500 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {!["/about-us"].includes(pathname) && (
                <div className="pt-6">
                  <Link href={"/about-us"}>
                    <button className="flex items-center cursor-pointer gap-2 text-[#1a1c1e] font-black text-xs uppercase tracking-[0.2em] group">
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
          {["/about-us"].includes(pathname) && (
            <div className="mt-10 space-y-3">
              <Content
                html={aboutData.content}
                className="text-[18px] text-gray-600 leading-relaxed font-light text-lg"
              />
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default About;
