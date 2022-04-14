/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["upload.wikimedia.org", "a0.muscache.com"],
  },
};

module.exports = nextConfig;
