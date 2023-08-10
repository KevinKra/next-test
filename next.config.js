/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    domains: ["cdn.shopify.com"],
  },
  experimental: {
    typedRoutes: true,
  },
  webpack(config) {
    config.plugins.push(
      require("unplugin-icons/webpack")({
        compiler: "jsx",
        jsx: "react",
      }),
    );

    return config;
  },
};

module.exports = nextConfig;
