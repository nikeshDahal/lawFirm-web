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
        <ContactPage />
        <FAQOverview />
      </section>
    </div>
  );
};

export default Page;
