import { ClientLandingPageContent } from "@/app/utils/interface/index.query";
import { fetchData } from "@/app/utils/service";
import { GET_BANNER } from "@/app/utils/service/index.query";
import Link from "next/link";
import { Content } from "../markup";
import HighlightLastWord from "../highlighter";

// Fetch data (Server Component behavior)

type Props = {
  data: ClientLandingPageContent;
};
const VideoHeroBanner: React.FC<Props> = ({ data }) => {
  return (
    <main className="relative min-h-[85vh] w-full bg-[#121a13] flex items-center overflow-hidden">
      {/* RIGHT SIDE VIDEO */}
      <div className="absolute inset-y-0 right-0 w-full lg:w-[60%] h-full z-0 pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          {...{ fetchPriority: "high" } as any}
          className="w-full h-full object-cover opacity-80 brightness-110"
          src="/law-scale-hero-b.mp4"
          poster="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=2000"
        />

        {/* Gradient Blend */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#121a13] via-[#121a13]/70 to-transparent z-10" />

        {/* Bottom Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#121a13] to-transparent z-10" />
      </div>

      {/* LEFT CONTENT */}
      <div className="container mx-auto px-6 relative z-20">
        <div className="max-w-3xl">
          {/* TAGLINE */}
          <div className="mb-6 border-l-2 border-amber-500 pl-4 -ml-6">
            <span className="block text-gradient-gold font-bold tracking-widest text-xl uppercase">
              तपाईंले भरोसा गर्न सक्ने अनुभवी कानुनी मार्गदर्शन।
            </span>
          </div>

          {/* HEADING */}
          <h2 className="text-white text-5xl md:text-6xl lg:text-7xl font-serif font-medium mb-8 leading-tight animate-elegant-fade-up drop-shadow-lg pl-4 -ml-6">
            <HighlightLastWord text={data.title} />
          </h2>

          {/* CONTENT */}
          {data.content && (
            <div className="animate-fade-in-up delay-100">
              <Content
                html={data.content}
                className="text-gray-300 text-lg md:text-xl mb-10 font-light leading-relaxed max-w-xl border-l-4 border-white/10 pl-4 -ml-6"
              />
            </div>
          )}

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-5 animate-fade-in-up delay-200">
            <Link
              href="https://maps.app.goo.gl/YgReYibWpU7bg1hJ8"
              target="_blank"
            >
              <button className="h-14 bg-primary cursor-pointer text-white px-8 rounded font-bold hover:bg-gradient-gold transition-colors uppercase tracking-wider text-sm">
                View Our Location
              </button>
            </Link>

            <Link href="/contact-us">
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

export default VideoHeroBanner;
