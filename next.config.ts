import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export', // Forces Next.js to generate static files
  images: {
    unoptimized: true, // Static export doesn't support the default Next.js Image Optimization API
  },
};

export default nextConfig;
