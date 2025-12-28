"use client";

import OverviewCard from "@/components/internal/card";
import { MainHeading } from "@/components/internal/texture";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { firmOverview } from "@/constant/home";
import { cn } from "@/lib/utils";
import { Lightbulb } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const PraticeAreaOverview: React.FC = () => {
  const pathname = usePathname();
  const isPreview = !["/practice-area"].includes(pathname);
  return (
    <section
      className={cn([`py-20`, isPreview ? "bg-slate-100" : ""])}
      id="firm-overview"
    >
      <div className="">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div
            className={cn([
              isPreview &&
                "flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6",
            ])}
          >
            <div className={cn([isPreview && "text-left"])}>
              <MainHeading
                title="Firm Overview"
                description="Commitment, Integrity & Success"
                customClass={!isPreview ? "mb-12" : ""}
              />
            </div>
            {isPreview && (
              <Link href={"/practice-area"}>
                <button className="group cursor-pointer flex items-center gap-3 px-8 py-4 border-2 border-primary rounded-full hover:bg-primary hover:text-white transition-all duration-500 font-black text-xs uppercase tracking-widest text-primary bg-transparent shadow-xl active:scale-95">
                  <>
                    <Lightbulb size={16} /> View All Pratice Area{" "}
                    <span className="ml-1 bg-[#c5a059] text-white px-2 py-0.5 rounded-full text-[10px]">
                      +{firmOverview.length - 4}
                    </span>
                  </>
                </button>
              </Link>
            )}
          </div>

          {isPreview ? (
            <div className="">
              <Carousel
                opts={{
                  align: "start",
                }}
                className=""
              >
                <CarouselContent>
                  {firmOverview.map((item, i: number) => (
                    <CarouselItem
                      key={i}
                      className="md:basis-1/2 lg:basis-1/3 py-2"
                    >
                      <OverviewCard
                        key={i}
                        {...item}
                        link={`/practice-area/${item.id}`}
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          ) : (
            <div className="grid md:grid-cols-3 gap-12 text-left">
              {firmOverview.map((item, i: number) => (
                <OverviewCard
                  key={i}
                  {...item}
                  link={`/practice-area/${item.id}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PraticeAreaOverview;
