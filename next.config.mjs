/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  experimental: {
    webpackBuildWorker: true,
    parallelServerBuildTraces: true,
    parallelServerCompiles: true,
  },

  async redirects() {
    return [
      {
        source: '/',
        destination: '/convert/usd-to-brl',
        permanent: true, // Redirecionamento 301 para SEO
      },
    ];
  },
}

export default nextConfig
