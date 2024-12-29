import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["img.youtube.com"],
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": process.cwd(),
    };
    return config;
  },
};

export default nextConfig;
