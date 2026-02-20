"use client";

import { useEffect, useState } from "react";
import {
  Linkedin,
  Link2,
  Facebook,
  MessageCircle,
  Twitter,
  Phone,
} from "lucide-react";

export default function ShareRail() {
  const [url, setUrl] = useState<string | null>(null);
  const [title, setTitle] = useState<string>("");

  useEffect(() => {
    setUrl(window.location.href);
    setTitle(document.title);
  }, []);

  if (!url) return null;

  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);
  const shareText = encodeURIComponent(`${title} ${url}`);

  const copyLink = () => navigator.clipboard.writeText(url);

  return (
    <div className="hidden lg:flex flex-col items-center sticky top-40">
      {/* Label */}
      <span className="text-xs uppercase tracking-wider text-gray-400 mb-3">
        Share
      </span>

      {/* Container */}
      <div className="flex flex-col gap-3 bg-white border border-gray-200 rounded-2xl p-3 shadow-sm">
        {/* Facebook */}
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-lg hover:bg-blue-50 transition"
          title="Share on Facebook"
        >
          <Facebook size={18} className="text-[#1877F2]" />
        </a>

        {/* Twitter */}
        <a
          href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-lg hover:bg-sky-50 transition"
          title="Share on Twitter"
        >
          <Twitter size={18} className="text-[#1DA1F2]" />
        </a>

        {/* LinkedIn */}
        <a
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-lg hover:bg-blue-50 transition"
          title="Share on LinkedIn"
        >
          <Linkedin size={18} className="text-[#0A66C2]" />
        </a>

        {/* WhatsApp */}
        <a
          href={`https://wa.me/?text=${shareText}`}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-lg hover:bg-green-50 transition"
          title="Share on WhatsApp"
        >
          <MessageCircle size={18} className="text-[#25D366]" />
        </a>

        {/* Viber */}
        <a
          href={`viber://forward?text=${shareText}`}
          className="p-2 rounded-lg hover:bg-purple-50 transition"
          title="Share on Viber"
        >
          <Phone size={18} className="text-[#7360F2]" />
        </a>

        {/* Divider */}
        <div className="border-t my-1"></div>

        {/* Copy */}
        <button
          onClick={copyLink}
          className="p-2 rounded-lg hover:bg-gray-100 transition"
          title="Copy link"
        >
          <Link2 size={18} className="text-gray-700" />
        </button>
      </div>
    </div>
  );
}
