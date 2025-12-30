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

// Mock data for the testimonials

export default function TestimonialSection() {
  const plugin = React.useRef(
    Autoplay({
      delay: 3000, // 3s
      stopOnInteraction: false,
      stopOnMouseEnter: true, // optional
    })
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

  return (
    <section className="max-w-7xl mx-auto py-24 px-6">
      <div className="">
        <MainHeading
          title="Trusted by Industry Leaders"
          description="What our client says"
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
              {testimonials.map((item, index) => (
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
                                i < item.stars
                                  ? "fill-yellow-400 text-yellow-400"
                                  : "text-muted"
                              }`}
                            />
                          ))}
                        </div>

                        {/* Testimonial Text */}
                        <blockquote className="text-center">
                          <p className="text-xl md:text-2xl font-medium leading-relaxed text-foreground italic">
                            `{item.content}`
                          </p>
                        </blockquote>

                        {/* Author Info */}
                        <div className="mt-8 flex flex-col items-center">
                          <div className="h-14 w-14 rounded-full border-2 border-primary/20 overflow-hidden mb-3">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="h-full w-full object-cover"
                            />
                          </div>
                          <cite className="not-italic font-bold text-lg">
                            {item.name}
                          </cite>
                          <span className="text-sm text-muted-foreground">
                            {item.role} @ {item.company}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
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
