import { CLIENT_LOGOS } from "@/constant/client";
import React from "react";
import { MainHeading } from "../texture";
import Image from "next/image";

const ClientOverview: React.FC = () => {
  return (
    <>
      {/* Clients Section */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-250px * 6)); }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
      <section className="py-16 border-y border-gray-100 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 ">
          <MainHeading
            title="Trusted By"
            description="Distinguished Partnerships"
            customClass="mb-12 text-left"
          />
        </div>

        <div className="relative flex overflow-hidden">
          {/* Loop twice to create seamless effect */}
          <div className="flex animate-scroll py-4">
            {[...CLIENT_LOGOS, ...CLIENT_LOGOS].map((client, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center justify-center w-62.5 shrink-0 hover:opacity-100 transition-all duration-700 group px-12"
              >
                <Image
                  height={200}
                  width={200}
                  src={client.url}
                  alt={client.name}
                  className="h-10 w-auto object-contain mb-4 transform group-hover:scale-110 transition-transform duration-500"
                />
                <span className="text-[10px] uppercase font-black tracking-[0.2em] text-gray-400 group-hover:text-[#1a1c1e] transition-colors duration-300 whitespace-nowrap">
                  {client.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Gradient overlays to fade out edges */}
        <div className="absolute md:h-auto h-65.2 md:top-0 top-full inset-y-0 left-0 w-32 bg-linear-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute md:h-auto h-65.2 md:top-0 top-full inset-y-0 right-0 w-32 bg-linear-to-l from-white to-transparent z-10 pointer-events-none"></div>
      </section>
    </>
  );
};

export default ClientOverview;
