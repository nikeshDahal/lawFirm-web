"use client";
import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Quote, Star } from "lucide-react";
import { testimonials } from "@/constant/testimonail";
import { MainHeading } from "../texture";
import Autoplay from "embla-carousel-autoplay";
import { fetchData } from "@/app/utils/service";
import {
  ClientTestimonial,
  ClientTestimonialsResponse,
} from "@/app/utils/interface/index.query";
import { GET_TESTIMONIAL } from "@/app/utils/service/index.query";
import MarkUpHTML from "../markup";
import Image from "next/image";

// Mock data for the testimonials

export default function TestimonialSection() {
  const [data, setData] = React.useState<ClientTestimonialsResponse | null>();
  const getData = async () => {
    const testimonialData = await fetchData<ClientTestimonialsResponse>({
      query: GET_TESTIMONIAL,
      path: "data.getAllClientTestimonials",
      variables: {
        input: {
          limit: 50,
          order: "desc",
          orderBy: "_id",
          skip: 0,
        },
      },
    });
    setData(() => testimonialData);
  };
  React.useEffect(() => {
    getData();
  }, []);

  const plugin = React.useRef(
    Autoplay({
      delay: 3000, // 3s
      stopOnInteraction: false,
      stopOnMouseEnter: true, // optional
    }),
  );

  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  // Initialize API and listeners
  React.useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  if (Array.isArray(data?.data) && data?.data.length === 0) return;
  return (
    <section className="max-w-7xl mx-auto py-24 px-6">
      <div className="">
        <MainHeading
          title={data?.metaData.title || "Trusted by Industry Leaders"}
          description={data?.metaData.subTitle || "What our client says"}
          customClass="mb-12"
        />

        <div className="relative max-w-4xl mx-auto">
          <Carousel
            setApi={setApi}
            plugins={[plugin.current]}
            className="w-full"
            opts={{
              loop: true,
              align: "center",
            }}
          >
            <CarouselContent>
              {(data?.data as ClientTestimonial[])?.map((item, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <div className="border-none shadow-lg bg-card/50 backdrop-blur-sm">
                      <div className="flex flex-col items-center justify-center p-8 md:p-12">
                        {/* Quote Icon */}
                        <div className="mb-6 rounded-full bg-primary/10 p-3">
                          <Quote className="h-6 w-6 text-primary" />
                        </div>

                        {/* Star Rating */}
                        <div className="flex gap-1 mb-6">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-5 w-5 ${
                                i < item.rating
                                  ? "fill-yellow-400 text-yellow-400"
                                  : "text-muted"
                              }`}
                            />
                          ))}
                        </div>

                        {/* Testimonial Text */}
                        <blockquote className="text-center">
                          <MarkUpHTML
                            content={`${item.message}`}
                            className="text-xl md:text-2xl font-medium leading-relaxed text-foreground italic"
                          />
                          {/* <p className="text-xl md:text-2xl font-medium leading-relaxed text-foreground italic">
                            `{item.message}`
                          </p> */}
                        </blockquote>

                        {/* Author Info */}
                        <div className="mt-8 flex flex-col items-center">
                          <div className="h-14 w-14 rounded-full border-2 border-primary/20 overflow-hidden mb-3">
                            <Image
                              height={50}
                              width={50}
                              src={
                                (item.clientImage as string).startsWith("http")
                                  ? item.clientImage
                                  : "/noimage.png"
                              }
                              alt={item.clientName}
                              className="h-full w-full object-cover"
                              onError={(e) => {
                                e.currentTarget.src = "/noimage.png"; // your default image
                              }}
                            />
                          </div>
                          <cite className="not-italic font-bold text-lg">
                            {item.clientName}
                          </cite>
                          <span className="text-sm text-muted-foreground">
                            {item.clientDesignation} @ {item.clientDesignation}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="md:flex hidden" />
            <CarouselNext className="md:flex hidden" />
          </Carousel>

          {/* Custom Dots / Pill Navigation */}
          <div className="flex justify-center gap-3 mt-10">
            {Array.from({ length: count }).map((_, i) => (
              <button
                key={i}
                onClick={() => api?.scrollTo(i)}
                className={`h-2.5 rounded-full transition-all duration-300 ease-in-out ${
                  current === i
                    ? "w-10 bg-primary shadow-sm shadow-primary/40"
                    : "w-2.5 bg-muted-foreground/20 hover:bg-muted-foreground/40"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
