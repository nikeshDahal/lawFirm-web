import Link from "next/link";

const HeroBanner = () => {
  return (
    <main className="relative h-[80vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=2000"
          alt="Law office"
          className="w-full h-full object-cover"
          //   onError={(e) => {
          //     e.target.src =
          //       "https://via.placeholder.com/1920x1080?text=Legal+Office";
          //   }}
        />
      </div>
      <div className="relative z-20 text-center px-6">
        <h2 className="text-white text-5xl md:text-7xl font-serif mb-6 leading-tight">
          Defending Your Rights <br /> With{" "}
          <span className="text-secondary">Excellence.</span>
        </h2>
        <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light">
          Premier legal representation in corporate, family, and criminal law
          with over 25 years of proven excellence.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href={"#firm-overview"}>
            <button className="bg-primary cursor-pointer text-white px-8 py-4 rounded font-bold hover:bg-secondary transition-colors uppercase tracking-wider text-sm">
              Our Practice Areas
            </button>
          </Link>
          <Link href={"/teams"}>
            <button className="bg-white/10 cursor-pointer backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded font-bold hover:bg-white/20 transition-colors uppercase tracking-wider text-sm">
              Meet Our Team
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default HeroBanner;
