/** @type {import('next').NextConfig} */
const nextConfig = {
  // This forces the build to pass even if there are ESLint warnings/errors
  eslint: {
    ignoreDuringBuilds: true,
  },
  // This forces the build to pass even if there are TypeScript issues
  typescript: {
    ignoreBuildErrors: true,
  },
}

module.exports = nextConfig
