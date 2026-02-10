import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "toplegaladvisers-storage-2026.s3.us-west-2.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "mycomms-stage-public-bucket.s3.ap-southeast-2.amazonaws.com",
      },
    ],
  },
};

export default nextConfig;
