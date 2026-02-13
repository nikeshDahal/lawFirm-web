"use client";

import OverviewCard from "@/components/internal/card";
import { MainHeading } from "@/components/internal/texture";
import {
  Carousel,
  CarouselApi,
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
import { ClientPracticeAreasResponse } from "../utils/interface/index.query";

type Props = {
  practiceData: ClientPracticeAreasResponse;
};
const PraticeAreaOverview: React.FC<Props> = ({ practiceData }) => {
  const pathname = usePathname();
  const isPreview = !["/practice-area"].includes(pathname);

  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section
      className={cn([
        isPreview ? "py-12" : "py-3",
        isPreview && "bg-slate-100",
      ])}
      id="firm-overview"
    >
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading + Desktop Button */}
        <div
          className={cn([
            isPreview &&
              "flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-6",
          ])}
        >
          <MainHeading
            title={practiceData.metaData.title || "Practice Area"}
            description={
              practiceData.metaData.subTitle ||
              "Commitment, Integrity & Success"
            }
            customClass={!isPreview ? "mb-12 text-left" : ""}
          />
        </div>
        {/* Desktop Button (Only md and up) */}
        {isPreview && (
          <div className="hidden md:flex justify-end -mt-17 mb-12">
            <Link href="/practice-area">
              <button className="group flex items-center gap-2 px-8 py-4 border-2 border-primary rounded-full hover:bg-primary hover:text-white transition-all duration-300 font-black text-xs uppercase tracking-widest text-primary bg-transparent shadow-xl active:scale-95">
                <Lightbulb size={16} />
                View All Practice Areas
              </button>
            </Link>
          </div>
        )}

        {/* Cards / Carousel */}
        {Array.isArray(practiceData.data) && practiceData.data.length > 0 && (
          <>
            {isPreview ? (
              <div>
                <Carousel opts={{ align: "start" }} setApi={setApi}>
                  <CarouselContent>
                    {practiceData.data.map((item, i: number) => (
                      <CarouselItem
                        key={i}
                        className="md:basis-1/2 lg:basis-1/3 py-2"
                      >
                        <OverviewCard
                          {...item}
                          link={`/practice-area/${item.slug}`}
                        />
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="hidden md:flex" />
                  <CarouselNext className="hidden md:flex" />
                </Carousel>

                {/* Dots Indicator */}
                {practiceData.data.length > 3 && (
                  <div className="flex justify-center gap-2 py-4">
                    {Array.from({ length: count }).map((_, i) => (
                      <button
                        key={i}
                        className={`h-2 w-2 rounded-full cursor-pointer transition-all ${
                          i === current
                            ? "bg-primary w-4"
                            : "bg-muted-foreground/30"
                        }`}
                        onClick={() => api?.scrollTo(i)}
                        aria-label={`Go to slide ${i + 1}`}
                      />
                    ))}
                  </div>
                )}

                {/* Mobile Button (Only below md, at bottom) */}
                <div className="flex md:hidden justify-center mt-6">
                  <Link href="/practice-area">
                    <button className="group flex items-center gap-2 px-4 py-2 border border-primary rounded-full hover:bg-primary hover:text-white transition-all duration-300 font-semibold text-[11px] uppercase tracking-wide text-primary bg-transparent shadow-md active:scale-95">
                      <Lightbulb size={14} />
                      View All Practice Areas
                    </button>
                  </Link>
                </div>
              </div>
            ) : (
              <div className="grid md:grid-cols-3 gap-12 text-left mb-12">
                {practiceData.data.map((item, i: number) => (
                  <OverviewCard
                    key={i}
                    {...item}
                    link={`/practice-area/${item.slug}`}
                  />
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default PraticeAreaOverview;
