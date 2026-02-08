import AwardsOverview from "@/components/internal/awards";
import ClientOverview from "@/components/internal/client";
import HeroBanner from "@/components/internal/hero";
import About from "./about-us/page";
import ContactUs from "./contact-us/page";
import PraticeAreaOverview from "./practice-area/page";
import Publications from "./publications/page";
import React from "react";
import FAQOverview from "./(legal)/faq/page";
import TestimonialSection from "@/components/internal/testimonial";
import TeamPage from "./teams/page";

const Page: React.FC = () => {
  return (
    <div>
      <HeroBanner />
      <AwardsOverview />
      <About />

      <section className="pt-24">
        <PraticeAreaOverview limit={10} />
        <Publications />
        <TeamPage limit={4} />
        {/* <ClientOverview /> */}
        <TestimonialSection />
        <ContactUs />
        <FAQOverview />
      </section>
    </div>
  );
};

export default Page;
