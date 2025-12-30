"use client";
import { MainHeading } from "@/components/internal/texture";
import { TEAM_MEMBERS } from "@/constant/team";
import { cn } from "@/lib/utils";
import { Linkedin, Mail, Twitter, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Teams = ({ isPreview = false }) => {
  const [showAllTeam, setShowAllTeam] = useState<boolean>(false);
  const pathname = usePathname();
  return (
    <>
      {/* Team Section */}
      <section
        className={cn([
          "py-24 ",
          ["/teams"].includes(pathname) ? "" : "bg-slate-100",
        ])}
      >
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div
            className={cn([
              isPreview &&
                "flex flex-col  md:flex-row md:items-end md:justify-between mb-16 gap-6",
            ])}
          >
            <div className={cn([isPreview && "text-left"])}>
              <MainHeading
                title="Our Leadership"
                description="Expert Legal Minds"
                customClass={!isPreview ? "mb-12" : ""}
              />
            </div>

            {isPreview && (
              <Link href={"/teams"}>
                <button
                  onClick={() => setShowAllTeam(!showAllTeam)}
                  className="group cursor-pointer flex items-center gap-3 px-8 py-4 border-2 border-primary rounded-full hover:bg-primary hover:text-white transition-all duration-500 font-black text-xs uppercase tracking-widest text-primary bg-transparent shadow-xl active:scale-95"
                >
                  <>
                    <Users size={16} /> View All Attorneys{" "}
                    <span className="ml-1 bg-[#c5a059] text-white px-2 py-0.5 rounded-full text-[10px]">
                      +{TEAM_MEMBERS.length - 4}
                    </span>
                  </>
                </button>
              </Link>
            )}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {(isPreview ? TEAM_MEMBERS.slice(0, 4) : TEAM_MEMBERS).map(
              (member, idx) => (
                <div key={idx} className="group">
                  <div className="relative overflow-hidden aspect-3/4 rounded-xl mb-6 shadow-md border border-gray-100 bg-white">
                    <Image
                      height={100}
                      width={100}
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-primary/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6 text-left">
                      <div className="flex gap-4 mb-2">
                        <Linkedin
                          size={18}
                          className="text-[#c5a059] cursor-pointer hover:text-white transition-colors"
                        />
                        <Twitter
                          size={18}
                          className="text-[#c5a059] cursor-pointer hover:text-white transition-colors"
                        />
                        <Mail
                          size={18}
                          className="text-[#c5a059] cursor-pointer hover:text-white transition-colors"
                        />
                      </div>
                    </div>
                  </div>
                  <h4 className="text-xl font-serif text-primary mb-1 group-hover:text-[#c5a059] transition-colors">
                    {member.name}
                  </h4>
                  <p className="text-[#c5a059] text-xs font-bold uppercase tracking-widest mb-2">
                    {member.role}
                  </p>
                  <p className="text-gray-500 text-sm italic">
                    {member.specialty}
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Teams;
