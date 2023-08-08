/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    domains: ["cdn.shopify.com"],
  },
  experimental: {
    typedRoutes: true,
  },
};

module.exports = nextConfig;
