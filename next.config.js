/** @type {import('next').NextConfig} */
const nextConfig = {
  // 圖片優化
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96],
  },
  // 啟用壓縮
  compress: true,
  // 生產環境配置
  productionBrowserSourceMaps: false,
};

module.exports = nextConfig;
