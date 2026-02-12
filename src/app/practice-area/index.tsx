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
        isPreview ? "py-15" : "py-3",
        isPreview && "bg-slate-100",
      ])}
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
            {/* <div className={cn([isPreview && "text-left"])}> */}
            <MainHeading
              title={practiceData.metaData.title || "Pratice Area"}
              description={
                practiceData.metaData.subTitle ||
                "Commitment, Integrity & Success"
              }
              customClass={!isPreview ? "mb-18 text-left" : ""}
            />
          </div>
          {/* </div> */}
          {isPreview && (
            <div className="flex justify-center md:justify-end mt-6 md:mt-0 mb-6 md:mb-10">
              <Link href={"/practice-area"}>
                <button className="group cursor-pointer flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 border-2 border-primary rounded-full hover:bg-primary hover:text-white transition-all duration-500 font-black text-[10px] sm:text-xs uppercase tracking-widest text-primary bg-transparent shadow-xl active:scale-95">
                  <>
                    <Lightbulb size={16} /> View All Practice Area{" "}
                    {practiceData.data.length > 3 && (
                      <span className="ml-1 bg-[#c5a059] text-white px-2 py-0.5 rounded-full text-[8px] sm:text-[10px]">
                        +{practiceData.data.length - 3}
                      </span>
                    )}
                  </>
                </button>
              </Link>
            </div>
          )}

          {Array.isArray(practiceData.data) && practiceData.data.length > 0 && (
            <>
              {isPreview ? (
                <div className="">
                  <Carousel
                    opts={{
                      align: "start",
                    }}
                    className=""
                    setApi={setApi}
                  >
                    <CarouselContent>
                      {practiceData.data.map((item, i: number) => (
                        <CarouselItem
                          key={i}
                          className="md:basis-1/2 lg:basis-1/3 py-2"
                        >
                          <OverviewCard
                            key={i}
                            {...item}
                            link={`/practice-area/${item.slug}`}
                          />
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="md:flex hidden" />
                    <CarouselNext className="md:flex hidden" />
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
                </div>
              ) : (
                <div className="grid md:grid-cols-3 gap-12 text-left">
                  {practiceData.data?.map((item, i: number) => (
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
      </div>
    </section>
  );
};

export default PraticeAreaOverview;
