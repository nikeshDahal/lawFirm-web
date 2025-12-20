"use client";
import { ArrowLeft, Bookmark, Printer, Share2 } from "lucide-react";
import React from "react";

const PublicationAction = () => {
  const addBookmark = () => {
    const url = window.location.href;
    const title = document.title;

    if ((window as any).sidebar?.addPanel) {
      // Firefox <=22
      (window as any).sidebar.addPanel(title, url, "");
    } else if ((window as any).external?.AddFavorite) {
      // Internet Explorer
      (window as any).external.AddFavorite(url, title);
    } else {
      alert("Press Ctrl + D (Cmd + D on Mac) to bookmark this page.");
    }
  };
  return (
    <>
      <div className="sticky top-32 flex flex-col items-center gap-6">
        <div className="flex flex-col gap-3">
          <button
            className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center text-gray-400 hover:text-[#c5a059] hover:bg-[#c5a059]/5 transition-all group"
            aria-label="Share this article"
          >
            <Share2
              size={20}
              className="group-hover:scale-110 transition-transform"
            />
          </button>
          <button
            onClick={addBookmark}
            className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center text-gray-400 hover:text-[#c5a059] hover:bg-[#c5a059]/5 transition-all group"
            aria-label="Bookmark this article"
          >
            <Bookmark
              size={20}
              className="group-hover:scale-110 transition-transform"
            />
          </button>
          <button
            onClick={() => window.print()}
            className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center text-gray-400 hover:text-[#c5a059] hover:bg-[#c5a059]/5 transition-all group"
            aria-label="Print article"
          >
            <Printer
              size={20}
              className="group-hover:scale-110 transition-transform"
            />
          </button>
        </div>
        <div className="w-px h-12 bg-gray-100 my-2"></div>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex flex-col  cursor-pointer items-center text-gray-300 hover:text-[#c5a059] transition-colors"
          aria-label="Scroll back to top "
        >
          <span className="text-[10px] font-black uppercase tracking-tighter mb-1">
            Top
          </span>
          <ArrowLeft size={16} className="rotate-90" />
        </button>
      </div>
    </>
  );
};

export default PublicationAction;
