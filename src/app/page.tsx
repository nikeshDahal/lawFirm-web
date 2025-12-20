import OverviewCard from "@/components/internal/card";
import HeroBanner from "@/components/internal/hero";
import { MainHeading } from "@/components/internal/texture";
import { firmOverview } from "@/constant/home";
import ContactUs from "./contact-us/page";
import Teams from "./teams/page";
import { AWARDS } from "@/constant/award";
import AwardsOverview from "@/components/internal/awards";
import About from "./about-us/page";
import Publications from "./publications/page";
const page = () => {
  return (
    <div>
      <HeroBanner />
      <AwardsOverview />
      <About />

      <section className="py-24 bg-white" id="firm-overview">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <MainHeading
            title="Firm Overview"
            description="Commitment, Integrity & Success"
            customClass="mb-12"
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
        <ContactUs />
      </section>
    </div>
  );
};

export default page;
