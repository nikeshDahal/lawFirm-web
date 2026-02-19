// "use client";

// import { ClientContactUsResponse } from "@/app/utils/interface/index.query";
// import { Phone, MessageCircle } from "lucide-react";

// export default function FloatingContact({
//   contactData,
// }: {
//   contactData?: ClientContactUsResponse;
// }) {
//   const phoneNumber =
//     contactData?.contactInfo?.primaryPhone || "+9779800000000"; // change to your number
//   const whatsappLink = `https://wa.me/${phoneNumber.replace("+", "")}`;

//   return (
//     <div className="fixed right-5 bottom-20 z-50 flex flex-col gap-3">
//       {/* WhatsApp */}
//       <a
//         href={whatsappLink}
//         target="_blank"
//         rel="noopener noreferrer"
//         title="Chat on WhatsApp"
//         className="flex items-center justify-center w-14 h-14 rounded-full bg-green-500 text-white shadow-lg hover:scale-110 transition-transform"
//       >
//         <MessageCircle size={26} />
//       </a>

//       {/* Phone */}
//       <a
//         href={`tel:${phoneNumber}`}
//         title="Call now"
//         className="flex items-center justify-center w-14 h-14 rounded-full bg-blue-500 text-white shadow-lg hover:scale-110 transition-transform"
//       >
//         <Phone size={22} />
//       </a>
//     </div>
//   );
// }

"use client";

import { useEffect, useRef, useState } from "react";
import { Phone, MessageCircle, X, Headset } from "lucide-react";
import { ClientContactUsResponse } from "@/app/utils/interface/index.query";

export default function FloatingContact({
  contactData,
}: {
  contactData?: ClientContactUsResponse;
}) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const phoneNumber =
    contactData?.contactInfo?.primaryPhone || "+9779800000000";

  const whatsappLink = `https://wa.me/${phoneNumber.replace("+", "")}`;

  // Close on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed right-4 md:right-6 bottom-16 md:bottom-20 z-50 flex flex-col items-end"
    >
      {/* MENU */}
      <div
        className={`flex flex-col gap-3 mb-3 transition-all duration-300 ${
          open
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        {/* Glass panel */}
        <div className="flex flex-col gap-3 p-3 rounded-2xl backdrop-blur-xl bg-white/80 border border-gray-200 shadow-2xl">
          {/* WhatsApp */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-4 py-3 rounded-xl bg-green-500 text-white hover:scale-[1.02] transition-all shadow-md"
          >
            <div className="flex items-center justify-center w-9 h-9 rounded-full bg-white/20">
              <MessageCircle size={18} />
            </div>
            <span className="text-sm font-medium">Chat on WhatsApp</span>
          </a>

          {/* Call */}
          <a
            href={`tel:${phoneNumber}`}
            className="flex items-center gap-3 px-4 py-3 rounded-xl bg-blue-600 text-white hover:scale-[1.02] transition-all shadow-md"
          >
            <div className="flex items-center justify-center w-9 h-9 rounded-full bg-white/20">
              <Phone size={18} />
            </div>
            <span className="text-sm font-medium">Call Now</span>
          </a>
        </div>
      </div>

      {/* TOGGLE BUTTON */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-center w-14 h-14 rounded-full bg-primary shadow-xl hover:scale-105 transition-all text-white"
      >
        {open ? <X size={24} /> : <Headset size={24} />}
      </button>
    </div>
  );
}
