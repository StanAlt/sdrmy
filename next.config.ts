import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  // Redirect all traffic to the sdrmy directory which contains our updated project
  rewrites: async () => {
    return [
      {
        source: '/:path*',
        destination: '/sdrmy/:path*',
      },
    ];
  },
};

export default nextConfig;
