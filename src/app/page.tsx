import React from "react";
import AwardsOverview from "@/components/internal/awards";
import HeroBanner from "@/components/internal/hero";
import About from "./about-us/page";
import PraticeAreaOverview from "./practice-area/page";
import Publications from "./publications/page";
import FAQOverview from "./(legal)/faq/page";
import TestimonialSection from "@/components/internal/testimonial";
import TeamPage from "./teams/page";
import ContactPage from "./contact-us/page";
import VideoHeroBanner from "@/components/internal/hero/videoIndex";
import HeroPage from "@/components/internal/hero/page";

const Page: React.FC = () => {
  return (
    <div>
      {/* <HeroBanner /> */}
      <HeroPage />
      <AwardsOverview />
      <About />

      {/* <section className="pt-12"> */}
      <PraticeAreaOverview />
      <Publications />
      <TeamPage />
      {/* <ClientOverview /> */}
      <TestimonialSection />
      <ContactPage />
      <FAQOverview />
      {/* </section> */}
    </div>
  );
};

export default Page;
