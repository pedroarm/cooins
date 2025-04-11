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

  i18n: {
    locales: ['en-US', 'pt-BR'],
    defaultLocale: 'en'
  },

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
