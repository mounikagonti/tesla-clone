/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "d2dzik4ii1e1u6.cloudfront.net",
      "www.freepnglogos.com",
      "chargingshop.eu",
      "digitalassets-shop.tesla.com",
      "tesla-cdn.thron.com",
      "teslatap.com",
      "encrypted-tbn0.gstatic.com",
    ],
  },
};

module.exports = nextConfig;
