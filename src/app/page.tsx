import AwardsOverview from "@/components/internal/awards";
import OverviewCard from "@/components/internal/card";
import ClientOverview from "@/components/internal/client";
import HeroBanner from "@/components/internal/hero";
import { MainHeading } from "@/components/internal/texture";
import { firmOverview } from "@/constant/home";
import About from "./about-us/page";
import ContactUs from "./contact-us/page";
import Publications from "./publications/page";
import Teams from "./teams/page";
const page = () => {
  return (
    <div>
      <HeroBanner />
      <AwardsOverview />
      <About />

      <section className="pt-24 bg-white" id="firm-overview">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <MainHeading
            title="Firm Overview"
            description="Commitment, Integrity & Success"
            customClass="mb-12 text-left"
          />
          <div className="grid md:grid-cols-3 gap-12 text-left">
            {firmOverview.map((item, i: number) => (
              <OverviewCard
                key={i}
                {...item}
                link={`/practice-area/${item.id}`}
              />
            ))}
          </div>
        </div>
        <Publications />
        <Teams isPreview />
        <ClientOverview />
        <ContactUs />
      </section>
    </div>
  );
};

export default page;
