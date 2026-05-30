/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  poweredByHeader: false,
  trailingSlash: true,
  images: {
    // GitHub Pages can't run Next's image optimizer.
    unoptimized: true,
    formats: ["image/avif", "image/webp"],
  },
};

module.exports = nextConfig;
