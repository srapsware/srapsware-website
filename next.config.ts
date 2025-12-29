import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['www.srapsware.com'],
    formats: ['image/avif', 'image/webp'],
  },
};

export default nextConfig;
