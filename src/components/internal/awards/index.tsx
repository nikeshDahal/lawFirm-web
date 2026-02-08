import { AWARDS } from "@/constant/award";
import { IconName } from "@/interface";
import React from "react";
import * as LucideIcons from "lucide-react";
import { fetchData } from "@/app/utils/service";
import { GET_RECOGNITIONS } from "@/app/utils/service/index.query";
import { ClientRecognitionsPageContent } from "@/app/utils/interface/index.query";
import { Content } from "../markup";
import HighlightLastWord from "../highlighter";
import Image from "next/image";

const data = await fetchData<ClientRecognitionsPageContent>({
  path: `data.getClientRecognitionsPageContent` as string,
  query: GET_RECOGNITIONS,
});

const AwardsOverview: React.FC = () => {
  return (
    <>
      {/* Awards Section */}
      <section className="py-16 bg-primary">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="lg:w-1/3 text-center lg:text-left">
              <h3 className="text-white text-3xl font-serif mb-4">
                <HighlightLastWord text={data?.title} />
              </h3>

              <Content
                html={data.content}
                className="text-white text-sm font-light leading-relaxed"
              />
            </div>
            {Array.isArray(data.recognitions) &&
              data.recognitions.length > 0 && (
                <div className="lg:w-2/3 grid grid-cols-2 md:grid-cols-4 gap-8">
                  {data.recognitions.map((award, index) => {
                    const Icon = LucideIcons[
                      AWARDS[index].icon as IconName
                    ] as LucideIcons.LucideIcon;
                    return (
                      <div
                        key={index}
                        className="flex flex-col items-center text-center group cursor-default"
                      >
                        <div className="mb-4 transform transition-transform group-hover:scale-110 duration-300">
                          {<Icon className="text-secondary" size={32} />}
                          {/* <Image
                            height={40}
                            width={40}
                            className="min-h-[40px] min-w-[40px] object-contain icon-secondary"
                            alt="icon"
                            src={award.icon || "/noimage.png"}
                          /> */}
                        </div>
                        <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-1">
                          {award.title}
                        </h4>
                        <p className="text-secondary text-[10px] uppercase tracking-tighter mb-2">
                          {award.subtitle}
                        </p>
                        <p className="text-white text-[10px] leading-tight opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          {award.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              )}
          </div>
        </div>
      </section>
    </>
  );
};

export default AwardsOverview;
