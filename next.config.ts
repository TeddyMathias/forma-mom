import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        destination: "https://woma.co/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
