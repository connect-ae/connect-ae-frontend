import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["i.pravatar.cc", "connect-ae.net"],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
