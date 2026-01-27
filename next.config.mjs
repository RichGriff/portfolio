/** @type {import('next').NextConfig} */
import { ProvidePlugin } from "webpack";

const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com', port: '', pathname: '**' },
      { protocol: 'https', hostname: 'raw.githubusercontent.com', port: '', pathname: '**' },
      { protocol: 'https', hostname: 'media.licdn.com', port: '', pathname: '**' },
      { protocol: 'https', hostname: 'www.turing.ac.uk', port: '', pathname: '**' },
    ],
  },
  webpack: (config, { isServer }) => {
    // Only apply crypto polyfill when running in Coolify (client-side)
    if (!isServer && process.env.COOLIFY === "true") {
      config.resolve.fallback = {
        crypto: require.resolve("crypto-browserify"),
      };
      config.plugins.push(
        new ProvidePlugin({
          Buffer: ["buffer", "Buffer"],
        })
      );
    }
    return config;
  },
  // output: "standalone",
};

export default nextConfig;
