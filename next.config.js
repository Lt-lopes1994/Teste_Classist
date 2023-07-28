/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'cdn.imagin.studio'],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}

module.exports = nextConfig
