"use client";
import { MainHeading } from "@/components/internal/texture";
import { PUBLICATIONS } from "@/constant/publication";
import { cn } from "@/lib/utils";
import { ArrowRight, Calendar, FileText, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import React from "react";
const Publications = () => {
  const pathname = usePathname();
  const isPreview = !["/publications"].includes(pathname);

  const plugin = React.useRef(
    Autoplay({
      delay: 3000, // 3s
      stopOnInteraction: false,
      stopOnMouseEnter: true, // optional
    })
  );

  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(PUBLICATIONS.length);

  React.useEffect(() => {
    if (!api) return;

    console.log("enter ok", api);

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <>
      {/* Publications Section */}
      <section id="publications" className="py-24 overflow-hidden">
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
                <button className="group cursor-pointer flex items-center gap-3 px-8 py-4 border-2 border-primary rounded-full hover:bg-primary hover:text-white transition-all duration-500 font-black text-xs uppercase tracking-widest text-primary bg-transparent shadow-xl active:scale-95">
                  <>
                    <FileText size={16} /> View All Publications{" "}
                    <span className="ml-1 bg-[#c5a059] text-white px-2 py-0.5 rounded-full text-[10px]">
                      +{PUBLICATIONS.length - 4}
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
                plugins={[plugin.current]}
                setApi={setApi}
              >
                <CarouselContent>
                  {PUBLICATIONS.map((pub, idx) => (
                    <CarouselItem
                      key={idx}
                      className="md:basis-1/2 lg:basis-1/3 py-2"
                    >
                      <div
                        key={idx}
                        className=" group bg-primary-foreground/80 hover:bg-primary rounded-3xl overflow-hidden shadow-sm hover:shadow-2xs transition-all duration-500 border border-gray-100 flex flex-col h-full"
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
                            <span className="flex items-center gap-1.5 group-hover:text-white ">
                              <Calendar size={14} className="text-secondary" />{" "}
                              {pub.date}
                            </span>
                            <span className="flex items-center gap-1.5 group-hover:text-white ">
                              <User size={14} className="text-secondary" />{" "}
                              {pub.author}
                            </span>
                          </div>

                          <h4 className="text-xl group-hover:text-white  font-serif text-[#1a1c1e] mb-4 transition-colors duration-300 leading-snug line-clamp-2">
                            {pub.title}
                          </h4>

                          <p className="text-gray-500 group-hover:text-white  text-sm font-light leading-relaxed mb-8 grow line-clamp-3">
                            {pub.excerpt}
                          </p>

                          <div className="pt-6 border-t border-primary group-hover:border-white">
                            <Link href={`/publications/${pub.id}`}>
                              <button className="flex cursor-pointer items-center gap-2 text-[#1a1c1e] group-hover:text-white text-xs font-black uppercase tracking-[0.2em] group/btn">
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
                {/* 👇 Dots */}
              </Carousel>

              {/* Dots Indicator */}
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
            </div>
          ) : (
            <div className="grid md:grid-cols-3 gap-12">
              {PUBLICATIONS.map((pub, idx) => (
                <div key={idx} className="md:basis-1/2 lg:basis-1/3 py-2">
                  <div
                    key={idx}
                    className=" group bg-primary-foreground/80 hover:bg-primary rounded-3xl overflow-hidden shadow-sm hover:shadow-2xs transition-all duration-500 border border-gray-100 flex flex-col h-full"
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
                        <span className="flex items-center gap-1.5 group-hover:text-white ">
                          <Calendar size={14} className="text-secondary" />{" "}
                          {pub.date}
                        </span>
                        <span className="flex items-center gap-1.5 group-hover:text-white ">
                          <User size={14} className="text-secondary" />{" "}
                          {pub.author}
                        </span>
                      </div>

                      <h4 className="text-xl group-hover:text-white  font-serif text-[#1a1c1e] mb-4 transition-colors duration-300 leading-snug line-clamp-2">
                        {pub.title}
                      </h4>

                      <p className="text-gray-500 group-hover:text-white  text-sm font-light leading-relaxed mb-8 grow line-clamp-3">
                        {pub.excerpt}
                      </p>

                      <div className="pt-6 border-t border-primary group-hover:border-white">
                        <Link href={`/publications/${pub.id}`}>
                          <button className="flex cursor-pointer items-center gap-2 text-[#1a1c1e] group-hover:text-white text-xs font-black uppercase tracking-[0.2em] group/btn">
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
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Publications;
