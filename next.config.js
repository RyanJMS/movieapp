/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {},
  images: {
    domains: ["image.tmdb.org"],
  },
};

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANAYLYZE === "true",
});

module.exports = withBundleAnalyzer({});

module.exports = nextConfig;
