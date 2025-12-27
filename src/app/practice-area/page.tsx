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
import React from "react";

const PraticeAreaOverview: React.FC = () => {
  return (
    <section className="bg-slate-100 py-20" id="firm-overview">
      <div className="">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <MainHeading
            title="Firm Overview"
            description="Commitment, Integrity & Success"
            customClass="mb-12 text-left"
          />

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

          {/* <div className="grid md:grid-cols-3 gap-12 text-left">
            {firmOverview.map((item, i: number) => (
              <OverviewCard
                key={i}
                {...item}
                link={`/practice-area/${item.id}`}
              />
            ))}
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default PraticeAreaOverview;
