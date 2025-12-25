import { cn } from "@/lib/utils";
import { Facebook, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import React from "react";

type Props = { iconSize?: number; size?: "sm" | "lg" };

const SocialHandler: React.FC<Props> = ({ iconSize = 18, size = "lg" }) => {
  return (
    <>
      {[Facebook, Twitter, Linkedin].map((Icon, idx) => (
        <Link
          key={idx}
          href="#"
          className={cn([
            size == "lg" ? "w-10 h-10" : "w-5 h-5",
            " rounded border border-white/10 flex items-center justify-center hover:bg-secondary hover:text-[#1a1c1e] hover:border-secondary transition-all duration-300",
          ])}
        >
          <Icon size={iconSize} />
        </Link>
      ))}
    </>
  );
};

export default SocialHandler;
