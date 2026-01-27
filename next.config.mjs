/** @type {import('next').NextConfig} */
const webpack = require("webpack");

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        port: '',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'media.licdn.com',
        port: '',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'www.turing.ac.uk',
        port: '',
        pathname: '**',
      },
    ],
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Provide crypto polyfill for browser
      config.resolve.fallback = {
        crypto: require.resolve("crypto-browserify"),
      };
      config.plugins.push(
        new webpack.ProvidePlugin({
          Buffer: ["buffer", "Buffer"],
        })
      );
    }
    return config;
  },
  // output: "standalone",
};

module.exports = nextConfig;
