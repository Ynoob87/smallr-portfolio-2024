/** @type {import('next').NextConfig} */
const nextConfig = {
  // 只保留必要的配置
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96],
  },
  compress: true,
  swcMinify: true,
  productionBrowserSourceMaps: false,
};

module.exports = nextConfig;
