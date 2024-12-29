/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      // ... 其他域名
      "img.youtube.com", // 添加 YouTube 圖片域名
    ],
  },
  // ... 其他配置
};

module.exports = nextConfig;
