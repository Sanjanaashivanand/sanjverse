import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['drive.google.com'],  // Allow images from Google Drive
  },
};

export default nextConfig;
