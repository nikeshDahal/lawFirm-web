import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  // Use standalone output for production deployments
  // For development, use: npm run dev
  // For production with standalone: npm run build:standalone && node .next/standalone/server.js
  output: process.env.NODE_ENV === "production" ? "standalone" : undefined,
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
