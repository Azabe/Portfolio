/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Next.js 15 optimizations
  experimental: {
    optimizePackageImports: ['react-icons', 'framer-motion'],
  },
}

module.exports = nextConfig

