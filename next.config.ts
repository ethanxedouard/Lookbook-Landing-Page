import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/app",
        destination:
          "https://apps.apple.com/us/app/lookbook-virtual-closet/id6760507376",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;