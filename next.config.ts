import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  experimental: {
    ppr: true,
  },
  pageExtensions: ["tsx", "ts", "jsx", "js"],
  // Prevent API routes from being statically generated
  async headers() {
    return [
      {
        source: "/api/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "no-store, must-revalidate",
          },
        ],
      },
    ]
  },
}

export default nextConfig
