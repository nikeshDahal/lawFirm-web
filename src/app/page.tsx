import OverviewCard from "@/components/internal/card";
import HeroBanner from "@/components/internal/hero";
import { MainHeading } from "@/components/internal/texture";
import { firmOverview } from "@/constant/home";
const page = () => {
  return (
    <div>
      <HeroBanner />
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <MainHeading
            title="Firm Overview"
            description="Commitment, Integrity & Success"
          />
          <div className="grid md:grid-cols-3 gap-12 text-left">
            {firmOverview.map((item, i: number) => (
              <OverviewCard key={i} {...item} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
