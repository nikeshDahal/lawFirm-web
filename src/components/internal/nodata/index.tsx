import { ArrowUpLeft } from "lucide-react";
import Link from "next/link";

const NoData = ({ content = "No data found." }: { content?: string }) => {
  return (
    <div className="text-center flex justify-center items-center flex-col py-5">
      <p className="text-slate-400 text-2xl font-light ">{content}</p>
      <Link href={"/"}>
        <button className="group my-10 cursor-pointer flex items-center gap-3 px-6 py-3 border-2 border-primary rounded-full hover:bg-primary hover:text-white transition-all duration-500 font-black text-xs uppercase tracking-widest text-primary bg-transparent shadow-xl active:scale-95">
          <ArrowUpLeft /> Back to HOME
        </button>
      </Link>
    </div>
  );
};

export default NoData;
