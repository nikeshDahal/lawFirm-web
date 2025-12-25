import { AWARDS } from "@/constant/award";
import { IconName } from "@/interface";
import React from "react";
import * as LucideIcons from "lucide-react";

const AwardsOverview: React.FC = () => {
  return (
    <>
      {/* Awards Section */}
      <section className="py-16 bg-primary">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="lg:w-1/3 text-center lg:text-left">
              <h3 className="text-white text-3xl font-serif mb-4">
                Recognized <span className="text-secondary">Excellence</span>
              </h3>
              <p className="text-white text-sm font-light leading-relaxed">
                Our commitment to superior legal counsel has earned us
                nationwide recognition from the industry`s most prestigious
                organizations.
              </p>
            </div>
            <div className="lg:w-2/3 grid grid-cols-2 md:grid-cols-4 gap-8">
              {AWARDS.map((award, index) => {
                const Icon = LucideIcons[
                  award.icon as IconName
                ] as LucideIcons.LucideIcon;
                return (
                  <div
                    key={index}
                    className="flex flex-col items-center text-center group cursor-default"
                  >
                    <div className="mb-4 transform transition-transform group-hover:scale-110 duration-300">
                      {<Icon className="text-secondary" size={32} />}
                    </div>
                    <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-1">
                      {award.title}
                    </h4>
                    <p className="text-secondary text-[10px] uppercase tracking-tighter mb-2">
                      {award.issuer}
                    </p>
                    <p className="text-white text-[10px] leading-tight opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {award.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AwardsOverview;
