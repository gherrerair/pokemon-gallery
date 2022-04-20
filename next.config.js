/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['bit.ly', 'raw.githubusercontent.com', 'www.pokemon.com']
  }
};

module.exports = nextConfig;
