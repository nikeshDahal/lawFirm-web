"use client";
import { MainHeading } from "@/components/internal/texture";
import { PUBLICATIONS } from "@/constant/publication";
import { cn } from "@/lib/utils";
import { ArrowRight, Calendar, ExternalLink, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Publications = () => {
  const pathname = usePathname();
  const isPreview = !["/publications"].includes(pathname);
  return (
    <>
      {/* Publications Section */}
      <section id="publications" className="py-24 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div
            className={cn([
              isPreview &&
                "flex flex-col  md:flex-row md:items-end md:justify-between mb-16 gap-6",
            ])}
          >
            <div className={cn([isPreview && "text-left"])}>
              <MainHeading
                title="Insights & News"
                description="Latest Publications"
                customClass={!isPreview ? "mb-12" : ""}
              />
            </div>
            {isPreview && (
              <Link href={"/publications"}>
                <button className="text-[#1a1c1e] cursor-pointer font-bold text-sm uppercase tracking-widest flex items-center gap-2 group border-b-2 border-secondary pb-1 hover:text-secondary transition-colors">
                  View All Journals{" "}
                  <ExternalLink
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </button>
              </Link>
            )}
          </div>

          <div className="">
            <Carousel
              opts={{
                align: "start",
              }}
              className=""
            >
              <CarouselContent>
                {PUBLICATIONS.map((pub, idx) => (
                  <CarouselItem
                    key={idx}
                    className="md:basis-1/2 lg:basis-1/3 py-2"
                  >
                    <div
                      key={idx}
                      className=" group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xs transition-all duration-500 border border-gray-100 flex flex-col h-full"
                    >
                      <div className="relative h-64 overflow-hidden">
                        <img
                          src={pub.image}
                          alt={pub.title}
                          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="bg-primary text-white text-[10px] font-black uppercase tracking-[0.2em] px-4 py-2 rounded-full backdrop-blur-md bg-opacity-80  max-w-55 truncate line-clamp-1">
                            {pub.category}
                          </span>
                        </div>
                      </div>

                      <div className="p-8 flex flex-col grow">
                        <div className="flex items-center gap-6 text-[11px] text-gray-400 uppercase tracking-widest mb-4">
                          <span className="flex items-center gap-1.5">
                            <Calendar size={14} className="text-secondary" />{" "}
                            {pub.date}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <User size={14} className="text-secondary" />{" "}
                            {pub.author}
                          </span>
                        </div>

                        <h4 className="text-xl font-serif text-[#1a1c1e] mb-4 group-hover:text-secondary transition-colors duration-300 leading-snug line-clamp-2">
                          {pub.title}
                        </h4>

                        <p className="text-gray-500 text-sm font-light leading-relaxed mb-8 grow line-clamp-3">
                          {pub.excerpt}
                        </p>

                        <div className="pt-6 border-t border-gray-50">
                          <Link href={`/publications/${pub.id}`}>
                            <button className="flex cursor-pointer items-center gap-2 text-[#1a1c1e] text-xs font-black uppercase tracking-[0.2em] group/btn">
                              Read Whitepaper{" "}
                              <ArrowRight
                                size={14}
                                className="text-secondary group-hover/btn:translate-x-1 transition-transform"
                              />
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </section>
    </>
  );
};

export default Publications;
