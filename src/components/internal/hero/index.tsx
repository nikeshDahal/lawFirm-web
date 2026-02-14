import { ClientLandingPageContent } from "@/app/utils/interface/index.query";
import { fetchData } from "@/app/utils/service";
import { GET_BANNER } from "@/app/utils/service/index.query";
import Link from "next/link";
import { Content } from "../markup";
import HighlightLastWord from "../highlighter";

// Fetch data (Server Component behavior)
const data = await fetchData<ClientLandingPageContent>({
  path: `data.getClientLandingPageContent` as string,
  query: GET_BANNER,
});

const HeroBanner = () => {
  return (
    <main className="relative min-h-[85vh] w-full bg-[#121a13] flex items-center overflow-hidden">
      {/* --- RIGHT SIDE: VIDEO BACKGROUND & BLENDING --- */}
      <div className="absolute inset-y-0 right-0 w-full lg:w-[60%] h-full z-0 pointer-events-none">
        {/* The Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-80 brightness-110"
          src="/law-scale-hero-b.mp4"
          poster="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=2000"
        />

        {/* Blending Gradient: subtle greenish charcoal to transparent */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#121a13] via-[#121a13]/70 to-transparent z-10" />

        {/* Bottom Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#121a13] to-transparent z-10" />
      </div>

      {/* --- LEFT SIDE: CONTENT --- */}
      <div className="container mx-auto px-6 relative z-20">
        <div className="max-w-3xl">
          <div className="inline-block mb-6 px-3 py-1 border-l-2 border-amber-500 pl-3">
            <span className="text-amber-500 font-bold tracking-widest text-xs uppercase">
              Premium Legal Services
            </span>
          </div>

          <h2 className="text-white text-5xl md:text-6xl lg:text-7xl font-serif font-medium mb-8 leading-tight animate-elegant-fade-up drop-shadow-lg">
            <HighlightLastWord text={data.title} />
          </h2>

          {data.content && (
            <div className="animate-fade-in-up delay-100">
              <Content
                html={data.content}
                className="text-gray-300 text-lg md:text-xl mb-10 font-light leading-relaxed max-w-xl border-l-4 border-white/10 pl-6"
              />
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-5 animate-fade-in-up delay-200">
            <Link
              href={"https://maps.app.goo.gl/hTxqrAuioiz7FAvw5"}
              target="_blank"
            >
              <button className="bg-primary hover:bg-secondary text-white min-w-[180px] px-8 py-4 rounded-sm font-semibold transition-all duration-300 uppercase tracking-widest text-xs shadow-lg shadow-amber-900/20">
                View Location
              </button>
            </Link>

            <Link href={"/contact-us"}>
              <button className="group relative px-8 py-4 min-w-[180px] overflow-hidden rounded-sm border border-white/20 bg-white/5 backdrop-blur-sm text-white shadow-lg transition-all duration-300 hover:bg-white/10 hover:border-white/40">
                <span className="relative z-10 font-bold uppercase tracking-widest text-xs group-hover:text-amber-400 transition-colors">
                  Book Consultation
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HeroBanner;
