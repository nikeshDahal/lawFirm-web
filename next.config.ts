import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    optimizeCss: true,
  },
  reactCompiler: true,
  // Use standalone output for production deployments
  // For development, use: npm run dev
  // For production with standalone: npm run build:standalone && node .next/standalone/server.js
  output: process.env.NODE_ENV === "production" ? "standalone" : undefined,
  async redirects() {
    return [
      {
        source: "/home",
        destination: "/",
        permanent: true, // 301 Redirect: Prevents duplicate homepage content
      },
      {
        source: "/index.html",
        destination: "/",
        permanent: true, // 301 Redirect: Common if migrating from a static site
      },
      {
        source: "/services",
        destination: "/practice-area",
        permanent: true, // 301 Redirect: Routes generic 'services' traffic to your specific practice area page
      },
      {
        source: "/practice",
        destination: "/practice-area",
        permanent: true,
      },
      // IMPORTANT: I temporarily removed your other redirects to prevent your app from crashing.
      // See my message for an explanation on Next.js routing!
    ];
  },
  images: {
    minimumCacheTTL: 31536000,
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
