"use client";
import { MainHeading } from "@/components/internal/texture";
import { TEAM_MEMBERS } from "@/constant/team";
import { cn } from "@/lib/utils";
import { Linkedin, Mail, Twitter, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { ClientTeamsResponse } from "../utils/interface/index.query";

type Props = {
  teamData: ClientTeamsResponse;
};
const Teams: React.FC<Props> = ({ teamData }) => {
  const pathname = usePathname();
  const isPreview = !["/teams"].includes(pathname);
  const [showAllTeam, setShowAllTeam] = useState<boolean>(false);

  return (
    <>
      {/* Team Section */}
      <section
        className={cn([
          isPreview ? "py-12" : "py-3",
          !["/teams"].includes(pathname) && "bg-slate-100",
        ])}
      >
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div
            className={cn([
              isPreview &&
                "flex flex-col  md:flex-row md:items-end md:justify-between mb-12 gap-6",
            ])}
          >
            {/* <div className={cn([isPreview && "text-left"])}> */}
            <MainHeading
              title="Our Leadership"
              description="Expert Legal Minds"
              customClass={!isPreview ? "mb-12 text-left" : ""}
            />
            {/* </div> */}
          </div>
          {/* {isPreview && (
            <div className="flex justify-center md:justify-end mt-6 md:mt-0 mb-6 md:mb-10">
              <Link href={"/teams"}>
                <button
                  onClick={() => setShowAllTeam(!showAllTeam)}
                  className="group cursor-pointer flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 border-2 border-primary rounded-full hover:bg-primary hover:text-white transition-all duration-500 font-black text-[10px] sm:text-xs uppercase tracking-widest text-primary bg-transparent shadow-xl active:scale-95"
                >
                  <>
                    <Users size={16} /> View All Teams{" "}
                    {teamData.data.length > 4 && (
                      <span className="ml-1 bg-[#c5a059] text-white px-2 py-0.5 rounded-full text-[8px] sm:text-[10px]">
                        +{teamData.data.length - 4}
                      </span>
                    )}
                  </>
                </button>
              </Link>
            </div>
          )} */}
          {/* Desktop Button (Only md and up) */}
          {isPreview && (
            <div className="hidden md:flex justify-end -mt-17 mb-12">
              <Link href={"/teams"}>
                <button
                  onClick={() => setShowAllTeam(!showAllTeam)}
                  className="group flex items-center gap-2 px-8 py-4 border-2 border-primary rounded-full hover:bg-primary hover:text-white transition-all duration-300 font-black text-xs uppercase tracking-widest text-primary bg-transparent shadow-xl active:scale-95"
                >
                  <Users size={16} /> View All Teams{" "}
                </button>
              </Link>
            </div>
          )}

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {(isPreview ? teamData.data.slice(0, 4) : teamData.data).map(
              (member, idx) => (
                <div key={idx} className="group">
                  <div className="relative overflow-hidden aspect-3/4 rounded-xl mb-6 shadow-md border border-gray-100 bg-white">
                    <Image
                      height={100}
                      width={100}
                      src={
                        (member.profileImage as string).startsWith("http")
                          ? (member.profileImage as string)
                          : "/user.jpg"
                      }
                      alt={member.name}
                      onError={(e) => {
                        e.currentTarget.src = "/user.jpg"; // your default image
                      }}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-primary/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6 text-left">
                      <div className="flex gap-4 mb-2">
                        <a
                          href={`${member?.socialLinks?.linkedIn}` || "#"}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Linkedin
                            size={18}
                            className="text-[#c5a059] cursor-pointer hover:text-white transition-colors"
                          />
                        </a>
                        <a
                          href={`${member?.socialLinks?.twitter}` || "#"}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Twitter
                            size={18}
                            className="text-[#c5a059] cursor-pointer hover:text-white transition-colors"
                          />
                        </a>
                        <a
                          href={`mailto:${member?.socialLinks?.email}` || "#"}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Mail
                            size={18}
                            className="text-[#c5a059] cursor-pointer hover:text-white transition-colors"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                  <h4 className="text-xl font-serif text-primary mb-1 group-hover:text-[#c5a059] transition-colors">
                    {member.name}
                  </h4>
                  <p className="text-[#c5a059] text-xs font-bold uppercase tracking-widest mb-2">
                    {member.designation}
                  </p>
                  <p className="text-gray-500 text-sm italic">
                    {member.practiceArea}
                  </p>
                </div>
              ),
            )}
          </div>
          {/* Mobile Button (Only below md, at bottom) */}
          {isPreview && (
            <div className="flex md:hidden justify-center mt-6">
              <Link href="/teams">
                <button
                  onClick={() => setShowAllTeam(!showAllTeam)}
                  className="group flex items-center gap-2 px-4 py-2 border border-primary rounded-full hover:bg-primary hover:text-white transition-all duration-300 font-semibold text-[11px] uppercase tracking-wide text-primary bg-transparent shadow-md active:scale-95"
                >
                  <Users size={14} />
                  View All Teams
                </button>
              </Link>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Teams;
