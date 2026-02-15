import { Download, MessageSquare } from "lucide-react";
import Link from "next/link";
import React from "react";

const ExpertCTA: React.FC = () => {
  return (
    <>
      <div className="">
        <div className="bg-primary p-6 rounded-2xl shadow-sm border border-gray-100 text-center">
          <div
            className="w-12 h-12 bg-gradient-gold/10 rounded-xl flex items-center justify-center mx-auto mb-4"
            aria-hidden="true"
          >
            <MessageSquare className="text-secondary" size={24} />
          </div>
          <h4 className="text-white font-bold text-sm mb-2">Expert Consult</h4>
          <p className="text-white text-[11px] mb-6">
            Schedule a direct strategy session with Eleanor Vance.
          </p>
          <Link href={"/contact-us"}>
            <button className="w-full cursor-pointer py-3 bg-gradient-gold text-white text-[10px] font-black uppercase tracking-widest rounded-lg hover:bg-white hover:text-primary transition-all">
              Book Now
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

const AttachmentCTA: React.FC = () => {
  return (
    <>
      <section className="my-20 p-10 bg-primary rounded-3xl text-white flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-gold/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
        <div className="relative z-10 text-center md:text-left">
          <h2 className="text-2xl font-serif mb-2">
            Corporate Compliance Checklist
          </h2>
          <p className="text-white text-sm font-light">
            Download our 2024 AI Governance implementation roadmap.
          </p>
        </div>
        <button className="relative z-10 bg-gradient-gold text-white px-8 py-4 rounded-xl font-black text-xs uppercase tracking-widest flex items-center gap-3 hover:bg-white transition-all shadow-xl active:scale-95">
          <Download size={18} aria-hidden="true" /> Download PDF Guide
        </button>
      </section>
    </>
  );
};

export { ExpertCTA, AttachmentCTA };
