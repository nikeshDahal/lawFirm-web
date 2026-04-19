"use client";

import Image from "next/image";
import { useState } from "react";

interface ProfileImageProps {
  src: string;
  alt?: string;
  fallback?: string;
}

export default function ProfileImage({
  src,
  alt = "Team member profile image",
  fallback = "/user.jpg",
}: ProfileImageProps) {
  const [imageSrc, setImageSrc] = useState(src);

  return (
    <Image
      src={imageSrc}
      alt={alt || "Team member profile image"}
      fill
      className="object-cover group-hover:scale-105 transition-transform duration-500"
      priority
      onError={() => {
        setImageSrc(fallback);
      }}
    />
  );
}
