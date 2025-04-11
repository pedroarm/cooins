import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/convert/usd-to-brl',
        permanent: true,
      },
    ];
  },
}

export default nextConfig
