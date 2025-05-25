/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'docs',
  basePath: '/kp-personal-website',
  assetPrefix: '/kp-personal-website',
  images: {
    unoptimized: true
  }
};

module.exports = nextConfig;

