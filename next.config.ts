import { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable app directory (no need for experimental flag in stable Next.js 13+)
  pageExtensions: ["tsx", "ts", "jsx", "js"],

  async redirects() {
    return [
      {
        source: "/",
        destination: "/login", // Redirect to login if not authenticated
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
