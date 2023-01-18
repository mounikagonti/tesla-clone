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
      "cdn.shopify.com",
      "localhost",
      "www.tesla.com",
      "e4z2u3d5.rocketcdn.me",
      "www.designboom.com",
      "static.vecteezy.com",
      "cdn.freebiesupply.com",
    ],
  },
};

module.exports = nextConfig;
