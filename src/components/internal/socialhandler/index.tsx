import { ClientContactUsResponse } from "@/app/utils/interface/index.query";
import { cn } from "@/lib/utils";
import { Facebook, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import React from "react";

type Props = {
  iconSize?: number;
  size?: "sm" | "lg";
  data: ClientContactUsResponse["socialMedia"];
};

const SocialHandler: React.FC<Props> = ({
  iconSize = 18,
  size = "lg",
  data,
}) => {
  const socialItems = [
    {
      key: "facebook",
      icon: Facebook,
      url: data?.facebook,
    },
    {
      key: "twitter",
      icon: Twitter,
      url: data?.twitter,
    },
    {
      key: "linkedIn",
      icon: Linkedin,
      url: data?.linkedIn,
    },
  ];

  return (
    <>
      {socialItems
        .filter((item) => item.url) // only show if url exists
        .map(({ key, icon: Icon, url }) => (
          <Link
            key={key}
            href={url as string}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              size === "lg" ? "w-10 h-10" : "w-5 h-5",
              "rounded border border-white/10 flex items-center justify-center hover:bg-secondary hover:text-[#1a1c1e] hover:border-secondary transition-all duration-300",
            )}
          >
            <Icon size={iconSize} />
          </Link>
        ))}
    </>
  );
};

export default SocialHandler;
